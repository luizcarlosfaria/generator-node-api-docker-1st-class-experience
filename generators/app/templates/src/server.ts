import { HealthCheckApiController } from "./app/apicontrollers/HealthCheckApiController";
import { ApiServer } from "./infrastructure/ApiServer";
import { IInitializable } from "./infrastructure/IInitializable";

const servers: IInitializable[] = new Array<IInitializable>();
servers.push(new ApiServer([
	new HealthCheckApiController(),
]));

const initAll = async (server: IInitializable) => {
	console.log("%s Inicializando...", server.name);
	await server.IInitialize();
	console.log("%s inicializado!", server.name);
};

servers.forEach(initAll);
