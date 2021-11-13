import Request from '../model/ws/Request';
import {v4} from 'uuid';

export default class RequestBuilder {
  private Request: Request;

  constructor() {
    this.Request = this.createBlankRequest(v4());
  }

  public Function(name: string) {
    this.Request.RequestHeader.Identifier.Function = name;
    return this;
  }

  public Module(name: string) {
    this.Request.RequestHeader.Identifier.Module = name;
    return this;
  }

  public Body(body: any) {
    this.Request.Body = body;
    return this;
  }

  public build(): Request {
    return this.Request;
  }

  private createBlankRequest(uuid: string): Request {
    return {
      Body: {},
      RequestHeader: {
        Identifier: {
          Function: '',
          Module: '',
        },
        MessageNumber: uuid,
      },
    };
  }
}
