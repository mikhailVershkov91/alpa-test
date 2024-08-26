import React from "react";

interface Props {
	label: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const WhiteBtn: React.FC<Props> = ({ label, onClick }) => {
	return (
		<button
			onClick={onClick}
			className="text-grey bg-slate-100 hover:bg-slate-200 focus:ring-1 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
		>
			{label}
		</button>
	);
};

export default WhiteBtn;
