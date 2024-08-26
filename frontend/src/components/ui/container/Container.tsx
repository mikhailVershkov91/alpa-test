import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";

interface Props {
	children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
	return (
		<div className="w-full h-full flex flex-col items-center">
			<Header />
			<div className="flex flex-col md:flex-row w-full h-lvh pb-10 overflow-hidden">
				<Sidebar />
				<div className="hidden md:inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-300"></div>
				<div className="w-full relative md:w-4/5 px-10 overflow-scroll">
					{children}
				</div>
			</div>
		</div>
	);
};

export default Container;
