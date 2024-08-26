import { useParams } from "react-router";
import { useCitiesList } from "../../../../hooks/useCities";
import Container from "../../../ui/container/Container";
import Preloader from "../../../ui/preloader/Preloader";
import { NavLink } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";
import { useState } from "react";
import { ICity } from "../../../../interfaces";
import CreateEditCity from "../../cities-pool/CreateEditCity";
import DeleteCityModal from "../../cities-pool/DeleteCityModal";
import PoolTable from "../../cities-pool/PoolTable";

const CitiesList = () => {
	const { id } = useParams();

	const [modal, setModal] = useState<boolean>(false);
	const [editedCity, setEditedCity] = useState<ICity | null>(null);
	const [confirmationModal, setConfirmationModal] = useState<boolean>(false);

	const {
		isLoading,
		data: citiesList,
		rqListKey,
	} = useCitiesList(id as string);

	return (
		<>
			<Container>
				{isLoading ? (
					<Preloader />
				) : (
					<>
						<NavLink
							to={"/cities/lists"}
							className="flex items-center justify-start mb-2 cursor-pointer hover:opacity-50 transition"
						>
							<div className="flex text-slate-500">
								<IoArrowBackCircle size={30} />
							</div>
							<div className="ml-3 font-semibold text-slate-500">
								Назад к спискам
							</div>
						</NavLink>
						<PoolTable
							data={citiesList?.cities || []}
							setModal={setModal}
							setEditedCity={setEditedCity}
						/>
					</>
				)}
			</Container>
			{modal && (
				<CreateEditCity
					city={editedCity}
					setEditedCity={setEditedCity}
					modal={modal}
					setModal={setModal}
					setConfirmationModal={setConfirmationModal}
					rqKey={rqListKey}
				/>
			)}
			{confirmationModal && (
				<DeleteCityModal
					modal={confirmationModal}
					setModal={setConfirmationModal}
					setEditModal={setModal}
					editedCity={editedCity!}
					setEditedCity={setEditedCity}
					rqKey={rqListKey}
				/>
			)}
		</>
	);
};

export default CitiesList;
