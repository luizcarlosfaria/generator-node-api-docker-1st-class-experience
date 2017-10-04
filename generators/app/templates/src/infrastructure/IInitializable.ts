
export interface IInitializable {
	name: string;
	Initialize(): Promise<any>;
}
