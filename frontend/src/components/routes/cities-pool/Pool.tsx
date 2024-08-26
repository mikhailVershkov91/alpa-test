import { useState } from "react";
import { usePoolCities } from "../../../hooks/useCities";
import { ICity } from "../../../interfaces";
import Container from "../../ui/container/Container";
import CreateEditCity from "./CreateEditCity";
import DeleteCityModal from "./DeleteCityModal";
import Preloader from "../../ui/preloader/Preloader";
import PoolTable from "./PoolTable";

const Pool = () => {
	const [modal, setModal] = useState<boolean>(false);
	const [editedCity, setEditedCity] = useState<ICity | null>(null);
	const [confirmationModal, setConfirmationModal] = useState<boolean>(false);

	const { isLoading, data: poolCities, rqPoolKey } = usePoolCities();

	return (
		<>
			<Container>
				{isLoading ? (
					<Preloader />
				) : (
					<PoolTable
						data={poolCities || []}
						setModal={setModal}
						setEditedCity={setEditedCity}
					/>
				)}
			</Container>
			{modal && (
				<CreateEditCity
					city={editedCity}
          setEditedCity={setEditedCity}
					modal={modal}
					setModal={setModal}
					setConfirmationModal={setConfirmationModal}
					rqKey={rqPoolKey}
				/>
			)}
			{confirmationModal && (
				<DeleteCityModal
					modal={confirmationModal}
					setModal={setConfirmationModal}
					setEditModal={setModal}
					editedCity={editedCity!}
					setEditedCity={setEditedCity}
					rqKey={rqPoolKey}
				/>
			)}
		</>
	);
};

export default Pool;
