import { Collection, Db, MongoClient } from "mongodb";
import * as restify from "restify";
import { DataProcess } from "./../data/DataProcess";
import { IApiController } from "./IApiController";

export class HealthCheckApiController implements IApiController {
  public register(server: restify.Server): void {

    server.get("/", async (req, res, next) => {
      // TEST DB
      const data = new DataProcess("db_feed");
      await data.connect();
      if (data.database !== undefined) {
        const collection: Collection = await data.database.collection("timeline");
        await collection.insert({
          Message: "generator-node-api-docker-1st-class-experience is a 1st class awesome experience with typescript, node, docker and vscode!",
        });
        const result: any[] = await collection.find({}).toArray();

        res.send([
          { name: "api", status: "ok" },
          { name: "mongodb", status: result.length > 0 ? "ok" : "no-data" },
        ]);
      }
      next();
    });

  }
}
