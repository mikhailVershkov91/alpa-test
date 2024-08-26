import React, { useCallback } from "react";
import Modal from "../../ui/modal/Modal";
import WhiteBtn from "../../ui/buttons/WhiteBtn";
import RedBtn from "../../ui/buttons/RedBtn";
import { ICity } from "../../../interfaces";
import { queryClient } from "../../../main";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { deleteCity } from "../../../actions/cities";

interface Props {
	modal: boolean;
	setModal: (value: React.SetStateAction<boolean>) => void;
	setEditModal: (value: React.SetStateAction<boolean>) => void;
	editedCity: ICity;
	setEditedCity: (value: React.SetStateAction<ICity | null>) => void;
	rqKey: string;
}

const DeleteCityModal: React.FC<Props> = ({
	modal,
	setModal,
	setEditModal,
	editedCity,
	setEditedCity,
	rqKey,
}) => {
	const deleteCityConfig = {
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [rqKey],
			});
			toast.success("Успешно удалено!");
		},
		onError: () => {
			toast.error("Упс, что-то пошло не так!");
		},
	};

	const deleteMutation = useMutation({
		mutationFn: deleteCity,
		onSuccess: deleteCityConfig.onSuccess,
		onError: deleteCityConfig.onError,
	});

	const onDeleteHandler = useCallback(
		async (e: React.MouseEvent) => {
			e.preventDefault();

			await deleteMutation.mutateAsync(editedCity._id);

			setEditedCity(null);
			setModal(false);
			setEditModal(false);
		},
		[setModal, setEditModal, editedCity, deleteMutation, setEditedCity]
	);

	const deleteFooter = (
		<div className="flex w-full justify-between">
			<RedBtn label="Удалить" onClick={onDeleteHandler} />
			<WhiteBtn
				label="Отмена"
				onClick={() => {
					setModal(false);
				}}
			/>
		</div>
	);

	return (
		<Modal
			onClose={() => setModal(false)}
			open={modal}
			title={`Удаление ${editedCity.cityName}`}
			footer={deleteFooter}
		>
			<div className="flex flex-col items-center justify-center p-6 space-y-6">
				<div className="text-base font-medium text-slate-500">
					Вы уверены, что хотите удалить {editedCity.cityName}?
				</div>
			</div>
		</Modal>
	);
};

export default DeleteCityModal;
