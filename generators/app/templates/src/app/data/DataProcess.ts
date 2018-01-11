import { Collection, Db, MongoClient } from "mongodb";

export class DataProcess {

  public database: Db;
  constructor(public databaseName: string) {

  }

  public async connect(): Promise<any> {
    const connectionString: string = process.env.mongodb_app || "";
    this.database = await MongoClient.connect(connectionString);
    this.database = this.database.db(this.databaseName);
  }

}
