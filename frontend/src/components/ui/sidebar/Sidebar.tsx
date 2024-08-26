import React, { useCallback } from "react";
import Image from "../image-component/Image";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { IconType } from "react-icons";
import { BsList, BsListCheck } from "react-icons/bs";

interface IBtnItem {
	name: string;
	link: string;
	icon: IconType;
}

const Sidebar = () => {
	const { pathname } = useLocation();

	const bgBtnItem = useCallback(
		(item: IBtnItem) => {
			if (pathname === item.link) {
				return "bg-gray-400";
			} else if (pathname === "/" && item.name === "Пул городов") {
				return "bg-gray-400";
			} else if (
				pathname.includes("/cities/lists/") &&
				item.name === "Списки городов"
			) {
				return "bg-gray-400";
			} else {
				return "hover:bg-gray-300";
			}
		},
		[pathname]
	);

	return (
		<div className="w-full h-36 md:w-1/5 md:h-full flex flex-col items-center justify-start">
			{btnItems.map((item, index) => (
				<NavLink
					to={item.link}
					key={index}
					className={`w-56 group flex items-center text-sm gap-3.5 font-medium p-2 rounded-md mb-5 border border-slate-300 transition delay-100 ${bgBtnItem(
						item
					)}`}
				>
					<div>
						{typeof item.icon === "string" ? (
							<Image src={item.icon} alt="" />
						) : (
							<>{React.createElement(item?.icon, { size: "20" })}</>
						)}
					</div>
					<h2>{item.name}</h2>
				</NavLink>
			))}
		</div>
	);
};

const btnItems = [
	{ name: "Пул городов", link: "/cities/pool", icon: BsList },
	{ name: "Списки городов", link: "/cities/lists", icon: BsListCheck },
] as IBtnItem[];

export default Sidebar;
