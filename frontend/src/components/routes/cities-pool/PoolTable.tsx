import React from "react";
import Table from "../../ui/table/Table";
import { ICity } from "../../../interfaces";
import { CiEdit } from "react-icons/ci";
import Tooltip from "../../ui/tooltip/Tooltip";
import { FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";

interface Props {
	data: ICity[];
	setModal: (value: React.SetStateAction<boolean>) => void;
	setEditedCity: (value: React.SetStateAction<ICity | null>) => void;
}

const tableHeaders = ["Город", "Время создания", "Редактировать"];

const PoolTable: React.FC<Props> = ({ data, setModal, setEditedCity }) => {
	const { id } = useParams();

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
			{data.map((city: ICity) => (
				<tr key={city._id} className="bg-white border-b hover:bg-gray-50">
					<td className="px-6 py-4 text-center">{city.cityName}</td>
					<td className="px-6 py-4 text-center">{city.wasBuild}</td>
					<td className="px-6 py-4 text-center">
						<div className="flex items-center justify-center cursor-pointer hover:opacity-50 transition">
							<CiEdit
								size={20}
								onClick={() => {
									setEditedCity(city);
									setModal(true);
								}}
							/>
						</div>
					</td>
				</tr>
			))}
		</>
	);

	return (
		<>
			<div className="md:relative">
				{!id && (
					<div className="flex items-center justify-center mb-5 text-slate-500 cursor-pointer hover:opacity-50 transition md:z-50 md:absolute md:right-2 md:top-1 ">
						<Tooltip content="Добавить город">
							<FaPlusCircle size={40} onClick={() => setModal(true)} />
						</Tooltip>
					</div>
				)}
			</div>
			{!data.length ? (
				<div className="flex items-center justify-center">
					<h2 className="mr-2 text-xl text-slate-500">
						Создайте первый город нажав на
					</h2>
					<FaPlusCircle size={20} className="text-slate-500" />
				</div>
			) : (
				<Table tHead={tHead} tBody={tBody} />
			)}
		</>
	);
};

export default PoolTable;
