import { useEffect, useRef, useState } from 'react';
import RequestBuilder from '../helper/RequestBuilder';
import Player from '../model/Player';
import CloseCodes from '../model/ws/CloseCodes';
import Modules from '../model/ws/Modules';

const TIMEOUT_DEFAULT = 2000;

export default function useWebsocket(url: string, player: Player) {
  const ws = useRef<WebSocket | null>(null);
  const [connected, setConnected] = useState(true);

  useEffect(() => {
    createSocketConnection();

    return () => ws.current?.close();
  });

  function createSocketConnection() {
    ws.current = new WebSocket(url);
    ws.current.onopen = () => {
      setConnected(true);
      joinGame();
    };

    ws.current.onclose = (event: CloseEvent) => {
      if (event.code === CloseCodes.ABNORMAL) {
        setTimeout(() => {
          setConnected(false);
          createSocketConnection();
        }, TIMEOUT_DEFAULT);
      }
    };
  }

  function joinGame() {
    const request = new RequestBuilder()
      .Module(Modules.GameModule)
      .Function(Modules.GameFunctions.Join)
      .Body(player)
      .build();

    ws.current?.send(JSON.stringify(request));
  }

  return connected;
}
