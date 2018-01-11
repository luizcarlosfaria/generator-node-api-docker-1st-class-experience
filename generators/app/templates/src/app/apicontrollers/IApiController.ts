import * as restify from "restify";

export interface IApiController {
  register(server: restify.Server): void;
}
