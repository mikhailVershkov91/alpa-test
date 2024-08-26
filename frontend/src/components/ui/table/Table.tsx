import React from "react";

interface Props {
	tHead: React.ReactElement;
	tBody: React.ReactElement;
}

const Table: React.FC<Props> = ({ tHead, tBody }) => {
	return (
		<div className="w-full h-full rounded-lg overflow-scroll pb-10">
			<table className="relative w-full text-sm text-left rtl:text-right text-gray-500">
				<thead className="z-20 sticky top-0 text-xs text-gray-700 uppercase bg-gray-50">
					{tHead}
				</thead>
				<tbody>{tBody}</tbody>
			</table>
		</div>
	);
};

export default Table;
