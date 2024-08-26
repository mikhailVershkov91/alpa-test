import { Suspense } from "react";
import "./styles/index.css";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./components/App";

export const queryClient = new QueryClient();

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
	<Suspense>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</Suspense>
);