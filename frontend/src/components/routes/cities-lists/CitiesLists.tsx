import { useCitiesLists } from "../../../hooks/useCities";
import Container from "../../ui/container/Container";
import Preloader from "../../ui/preloader/Preloader";
import ListTable from "./ListsTable";

const CitiesLists = () => {
	const { isLoading, data: citiesLists } = useCitiesLists();

	return (
		<Container>
			{isLoading ? <Preloader /> : <ListTable data={citiesLists} />}
		</Container>
	);
};

export default CitiesLists;
