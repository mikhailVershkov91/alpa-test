import React from "react";

interface Props {
	value: number | string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	name?: string;
	label?: string;
	labelColor?: string;
	placeholder?: string;
	type?: string;
	required?: boolean;
	maxLength?: number;
	minLength?: number;
	max?: number;
	min?: number;
	disabled?: boolean;
}

const Input: React.FC<Props> = ({
	value,
	onChange,
	name,
	label,
	labelColor,
	placeholder = "",
	type = "text",
	required = false,
	maxLength,
	minLength,
	max,
	min,
	disabled = false,
}) => {
	return (
		<>
			{label && (
				<label
					className={`block mb-2 text-sm font-medium ${
						labelColor ? labelColor : "text-gray-900"
					}`}
				>
					{label}:
				</label>
			)}
			<input
				onChange={onChange}
				type={type}
				name={name}
				value={value}
				className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
				placeholder={placeholder}
				required={required}
				maxLength={maxLength}
				minLength={minLength}
				max={max}
				min={min}
				disabled={disabled}
			/>
		</>
	);
};

export default Input;
