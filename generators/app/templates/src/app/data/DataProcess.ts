import { Collection, Db, MongoClient } from "mongodb";

export class DataProcess {

	public database: Db;
	constructor(public databaseName: string) {

	}

	public async connect(): Promise<any> {
		this.database = await MongoClient.connect(process.env.mongodb_app);
		this.database = this.database.db(this.databaseName);
	}

	public close(): Promise<any> {
		return this.database.close();
	}

}
