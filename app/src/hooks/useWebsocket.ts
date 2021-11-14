import {useEffect, useRef} from 'react';
import RequestBuilder from '../helper/RequestBuilder';
import Player from '../model/Player';
import CloseCodes from '../model/ws/CloseCodes';
import Modules from '../model/ws/Modules';

export default function useWebsocket(url: string, player: Player) {
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    ws.current = new WebSocket(url);
    ws.current.onopen = () => {
      joinGame();
    };

    ws.current.onclose = (event: WebSocketCloseEvent) => {
      if (event.code === CloseCodes.ABNORMAL) {
        setTimeout(() => {

        });
      }
    };

    return () => ws.current?.close();
  });

  function joinGame() {
    const request = new RequestBuilder()
      .Module(Modules.GameModule)
      .Function(Modules.GameFunctions.Join)
      .Body(player)
      .build();

    ws.current?.send(JSON.stringify(request));
  }
}
