import React from "react";

interface Props {
	label: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const RedBtn: React.FC<Props> = ({ label, onClick }) => {
	return (
		<button
			onClick={onClick}
			className="min-w-28 text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
		>
			{label}
		</button>
	);
};

export default RedBtn;
