const Input = () => {
	const inputHandle = (event) => {
		event.preventDefault(); // sirve para evitar que se ejecute la función por defecto, en este caso, cancela el evento, evitando que pueda ver en el input el contenido de lo que ingreso
		event.stopPropagation(); // Sirve para evitar que los ancestros de un evento se vean afectados por la implementación de un evento aqui
		console.log(event.key); // registra cada una de las letras tipeadas
		// console.log(event.nativeEvent); // Me devuelve un objeto, por cada letra que ingreso, con todos los eventos correspondientes
	};

	return (
		<>
			<div>
				<input
					// onKeyDown={inputHandle}
					onClick={inputHandle}
					type="text"
					name="nombre"
				/>
			</div>
		</>
	);
};

export default Input;
