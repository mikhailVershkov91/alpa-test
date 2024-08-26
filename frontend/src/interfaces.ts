export interface ICity {
	_id: string;
	cityName: string;
	wasBuild: string;
	listName: string;
	code: string;
	created: Date;
}

export interface IList {
	_id: string;
	listName: string;
	cities: ICity[];
	code: string;
	color: string;
	created: Date;
}
