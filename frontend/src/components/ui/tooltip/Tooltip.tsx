import React from "react";

interface Props {
	children: React.ReactNode;
	content: string;
}

const Tooltip: React.FC<Props> = ({ children, content }) => {
	return (
		<div className="z-50 group relative flex max-w-max flex-col items-center justify-center">
			{children}
			<div
				className={`absolute left-1/2 top-10 ml-auto mr-auto min-w-max -translate-x-1/2 scale-0 transform rounded-lg px-3 py-2 text-xs font-medium transition-all duration-500 group-hover:scale-100 opacity-50
					`}
			>
				<div className="flex max-w-xs flex-col items-center shadow-lg">
					<div className="clip-bottom h-2 w-4 bg-gray-800"></div>
					<div className="rounded bg-gray-800 p-2 text-center text-xs text-white">
						{content}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tooltip;
