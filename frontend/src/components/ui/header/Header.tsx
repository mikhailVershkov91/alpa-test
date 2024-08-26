import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header className="w-full flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50 mb-10">
			<div className="flex flex-wrap items-center justify-between gap-5 w-full">
				<img src="/alpa.png" alt="logo" className="w-10 h-10" />
				<NavLink
					to={"https://github.com/mikhailVershkov91"}
					target="_blank"
					className="flex border-solid border-2 rounded-full text-white cursor-pointer hover:opacity-50 transition md:w-auto"
				>
					<img
						className="w-10 h-10 rounded-full shadow-lg"
						src="/Photo_cv.png"
						alt=""
					/>
				</NavLink>
			</div>
		</header>
	);
};

export default Header;
