import { Collection, Db, MongoClient, Mongos } from "mongodb";

export class DataProcess {

  public database?: Db;

  constructor(public databaseName: string) {

  }

  public async connect(): Promise<any> {
    const connectionString: string = process.env.mongodb_app || "";
    const mongoClient = await MongoClient.connect(connectionString);
    this.database = mongoClient.db(this.databaseName);
  }

}
