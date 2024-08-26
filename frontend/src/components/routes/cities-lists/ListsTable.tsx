import React from "react";
import Table from "../../ui/table/Table";
import { IList } from "../../../interfaces";
import { NavLink } from "react-router-dom";

interface Props {
	data: IList[];
}

const tableHeaders = ["", "Код", "Название списка"];

const ListsTable: React.FC<Props> = ({ data }) => {
	const tHead = (
		<tr>
			{tableHeaders.map((header: string, index: number) => (
				<th className="px-6 py-4 text-center" key={index}>
					{header}
				</th>
			))}
		</tr>
	);

	const tBody = (
		<>
			{data.map((list: IList) => (
				<tr key={list._id} className="bg-white border-b hover:bg-gray-50">
					<td className="px-6 py-4 text-center">
						<NavLink to={`/cities/lists/${list._id}`}>
							<div
								style={{ backgroundColor: list.color }}
								className="w-6 h-6 aspect-square rounded-md shadow-md cursor-pointer"
							></div>
						</NavLink>
					</td>
					<td className="px-6 py-4 text-center">{list.code}</td>
					<td className="px-6 py-4 text-center">{list.listName}</td>
				</tr>
			))}
		</>
	);

	return (
		<>
			{!data.length ? (
				<div className="flex items-center justify-center">
					<h2 className="mr-2 text-xl text-slate-500">
						Еще не создано ни одного списка
					</h2>
				</div>
			) : (
				<Table tHead={tHead} tBody={tBody} />
			)}
		</>
	);
};

export default ListsTable;
