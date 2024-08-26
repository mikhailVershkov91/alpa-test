import { useCallback, useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

interface Props {
	open: boolean;
	onClose: () => void;
	title?: string | React.ReactNode;
	children?: React.ReactElement;
	footer?: React.ReactElement;
	largeWindow?: boolean;
	scroll?: boolean;
}

const Modal: React.FC<Props> = ({
	open,
	onClose,
	title,
	children,
	footer,
	largeWindow = false,
	scroll = false,
}) => {
	const [showModal, setShowModal] = useState(open);

	useEffect(() => {
		setShowModal(open);

		if (open) {
			document.body.classList.add("overflow-y-hidden");
		} else {
			document.body.classList.remove("overflow-y-hidden");
		}
	}, [open]);

	const handleClose = useCallback(() => {
		setShowModal(false);
		setTimeout(() => {
			onClose();
		}, 300);
	}, [onClose]);

	if (!open) {
		return null;
	}

	return (
		<div className="justify-center items-center flex overflow-x-hidden  fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
			<div
				className={`relative w-5/6 md:w-4/6 ${
					largeWindow
						? "lg:w-9/12 xl:w-9/12 h-[720px] pt-8"
						: "lg:w-3/6 xl:w-2/5 h-auto"
				} my-6 mx-auto`}
			>
				<div
					className={`translate duration-500 h-full ${
						largeWindow ? "w-full h-full" : ""
					} ${showModal ? "translate-y-0" : "translate-y-full"} ${
						showModal ? "opacity-100" : "opacity-0"
					}`}
				>
					<form
						className={`relative ${largeWindow ? "w-full h-full" : ""}   ${
							scroll ? "overflow-scroll h-fit" : "overflow-hidden"
						} bg-white rounded-lg shadow dark:bg-gray-700`}
					>
						<div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
								{title}
							</h3>
							<button
								onClick={handleClose}
								type="button"
								className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
							>
								<IoCloseOutline size={20} />
							</button>
						</div>
						{children}
						{footer && (
							<div className="flex items-center px-6 py-3 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
								{footer}
							</div>
						)}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Modal;
