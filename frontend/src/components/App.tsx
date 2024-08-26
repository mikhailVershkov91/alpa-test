import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToastMessage from "./ui/toast/ToastMessage";
import Pool from "./routes/cities-pool/Pool";
import CitiesLists from "./routes/cities-lists/CitiesLists";
import CitiesList from "./routes/cities-lists/cities-list/CitiesList";

function App() {
	return (
		<main className="w-full h-lvh overflow-hidden flex items-center justify-between">
			<BrowserRouter>
				<Routes>
					<Route path="/*" element={<Pool />} />
					<Route path="/cities/pool" element={<Pool />} />
					<Route path="/cities/lists" element={<CitiesLists />} />
					<Route path="/cities/lists/:id" element={<CitiesList />} />
				</Routes>
				<ToastMessage />
			</BrowserRouter>
		</main>
	);
}

export default App;
