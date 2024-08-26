import React from "react";

interface Props {
	label: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	minWidth?: string;
}

const GreenBtn: React.FC<Props> = ({ label, onClick, minWidth }) => {
	return (
		<button
			onClick={onClick}
			className={`${
				minWidth ? minWidth : ""
			} text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`}
		>
			{label}
		</button>
	);
};

export default GreenBtn;
