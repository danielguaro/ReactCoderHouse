import { useState } from 'react';

const SelectInput = ({ options, onSelect, defaultOption = 1 }) => {
	return options.map((opt) => (
		<>
			<input
				onChange={() => onSelect(opt.value)}
				type="radio"
				name="color"
				checked={defaultOption === opt.value}
				id={opt.value}
			/>
			{/* para mostrar las opciones */}
			<label for={opt.value}> {opt.text}</label>
		</>
	));
};

const options = [
	{ value: 1, text: 'Azul' },
	{ value: 2, text: 'Rojo' },
];

const AbstracCaso2 = () => {
	const [option, setOption] = useState(1);

	//Función utilizada para cambiar el estado
	const optionSelected = (value) => {
		setOption(value);
	};
	console.log(option);
	return (
		<>
			{option === 1 ? <img /> : <img />}
			<SelectInput
				options={options}
				onSelect={optionSelected}
				defaultOption={option}
			/>
		</>
	);
};

export default AbstracCaso2;
