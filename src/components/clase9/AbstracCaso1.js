import React, { useState } from 'react';

const options = [
	{ value: 1, text: 'Azul' },
	{ value: 2, text: 'Rojo' },
];

const Select = ({ options, onSelect, defaultOption = 1 }) => {
	return (
		<>
			{/* onCnahge dispara la función */}
			<select onChange={(evt) => onSelect(Number(evt.target.value))}>
				{options.map((val) => (
					<option value={val.value}>{val.text}</option>
				))}
			</select>
		</>
	);
};

const AbstracCaso1 = () => {
	const [option, setOption] = useState(1);

	//Función utilizada para cambiar el estado
	const optionSelected = (value) => {
		setOption(value);
	};
	console.log(option);

	return (
		<>
			{option === 1 ? <img /> : <img />}
			<Select
				options={options}
				onSelect={optionSelected}
				defaultOption={option}
			/>
		</>
	);
};

export default AbstracCaso1;
