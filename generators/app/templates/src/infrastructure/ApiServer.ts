import * as restify from "restify";
import { IApiController } from "./../app/apicontrollers/IApiController";
import { IInitializable } from "./IInitializable";

export class ApiServer implements IInitializable {

	public name: string = "ApiServer";

	public restifyServer: restify.Server;

	constructor(public apiControllers: IApiController[]) { }

	public IInitialize(): Promise<any> {
		this.restifyServer = restify.createServer();
		// this.restifyServer.use(restify.acceptParser(this.restifyServer.acceptable));
		// this.restifyServer.use(restify.authorizationParser());
		// this.restifyServer.use(restify.dateParser());
		// this.restifyServer.use(restify.queryParser());
		// this.restifyServer.use(restify.jsonp());
		// this.restifyServer.use(restify.gzipResponse());
		// this.restifyServer.use(restify.bodyParser());
		// this.restifyServer.use(restify.CORS());
		/*this.restifyServer.use(restify.throttle({
			burst: 1,
			ip: true,
			overrides: {
				"127.0.0.1": {
					burst: 0,
					rate: 0,        // unlimited
				},
			},
			rate: 1,
		}));*/

		this.apiControllers.forEach((apiController) => {
			apiController.register(this.restifyServer);
		});

		console.log("rest server starting...");

		return new Promise((resolve, reject) => {

			this.restifyServer.listen(process.env.api_port, () => {
				console.log("%s is online on %s", this.restifyServer.name, this.restifyServer.url);
				resolve();
			});

		});
	}

}
