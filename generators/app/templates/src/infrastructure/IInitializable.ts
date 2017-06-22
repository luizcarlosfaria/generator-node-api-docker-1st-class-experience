
export interface IInitializable {
	name: string;
	IInitialize(): Promise<any>;
}
