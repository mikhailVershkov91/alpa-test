import { GiSandsOfTime } from "react-icons/gi";

const Preloader = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="bg-slate-500 text-white rounded-full flex justify-center items-center animation-pulse">
				<GiSandsOfTime size={80} />
			</div>
		</div>
	);
};

export default Preloader;
