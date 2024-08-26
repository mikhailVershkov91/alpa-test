import React, { useState } from "react";
import { queryClient } from "../../../main";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import GreenBtn from "../../ui/buttons/GreenBtn";
import RedBtn from "../../ui/buttons/RedBtn";
import Modal from "../../ui/modal/Modal";
import Input from "../../ui/input/Input";
import { ICity } from "../../../interfaces";
import { createCity, editCity } from "../../../actions/cities";

interface Props {
	city: ICity | null;
	setEditedCity: (value: React.SetStateAction<ICity | null>) => void;
	modal: boolean;
	setModal: (value: React.SetStateAction<boolean>) => void;
	setConfirmationModal: (value: React.SetStateAction<boolean>) => void;
  rqKey: string;
}

const CreateEditCity: React.FC<Props> = ({
	city,
	setEditedCity,
	modal,
	setModal,
	setConfirmationModal,
  rqKey
}) => {
	const [formData, setFormData] = useState({
		cityName: city?.cityName,
		wasBuild: city?.wasBuild,
		listName: city?.listName,
		code: city?.code,
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const actionCountryConfig = {
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [rqKey],
			});
			toast.success(`Город успешно ${city ? "изменён" : "создан"}!`);
		},
		onError: (error: Error) => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			toast.error(error.response.data.message);
		},
	};

	const createMutation = useMutation({
		mutationFn: createCity,
		onSuccess: actionCountryConfig.onSuccess,
		onError: actionCountryConfig.onError,
	});

	const editMutation = useMutation({
		mutationFn: editCity,
		onSuccess: actionCountryConfig.onSuccess,
		onError: actionCountryConfig.onError,
	});

	const onSubmitHandler = async (e: React.MouseEvent) => {
		e.preventDefault();

		if (city) {
			await editMutation.mutateAsync({
				...city,
				...formData,
			} as ICity);
		} else {
			await createMutation.mutateAsync(formData as ICity);
		}

		setModal(false);
	};

	const footer = (
		<>
			{!city ? (
				<div className="flex w-full justify-center">
					<GreenBtn label="Создать" onClick={onSubmitHandler} />
				</div>
			) : (
				<div className="flex w-full justify-between">
					<RedBtn
						label="Удалить"
						onClick={(e: React.MouseEvent) => {
							e.preventDefault();

							setConfirmationModal(true);
						}}
					/>
					<GreenBtn label="Сохранить" onClick={onSubmitHandler} />
				</div>
			)}
		</>
	);

	return (
		<Modal
			onClose={() => {
				setEditedCity(null);
				setModal(false);
			}}
			open={modal}
			title={city ? "Редактировать город" : "Создать город"}
			footer={footer}
		>
			<div className="p-3 space-y-3 sm:p-6 sm:space-y-6">
				<div className="grid grid-cols-6 gap-6">
					<div className="col-span-6">
						<Input
							label="Название города"
							name="cityName"
							value={formData.cityName!}
							onChange={handleChange}
							placeholder=""
							required
						/>
					</div>
					<div className="col-span-6">
						<Input
							label="Дата строительства"
							name="wasBuild"
							value={formData.wasBuild!}
							onChange={handleChange}
							placeholder=""
							required
						/>
					</div>
					<div className="col-span-6">
						<Input
							label="Название списка"
							name="listName"
							value={formData.listName!}
							onChange={handleChange}
							placeholder=""
							required
						/>
					</div>
					<div className="col-span-6">
						<Input
							label="Код списка"
							name="code"
							value={formData.code!}
							onChange={handleChange}
							placeholder=""
							required
						/>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default CreateEditCity;
