interface DocumentResult<T> {
	_doc: T;
}

export interface ICitySchema extends DocumentResult<ICitySchema> {
	_id: string;
	cityName: string;
	wasBuild: string;
	listName: string;
	code: string;
	created: Date;
}

export interface IListSchema extends DocumentResult<ICitySchema> {
	_id: string;
	listName: string;
	cities: ICitySchema[];
	code: string;
  color: string;
	created: Date;
}
