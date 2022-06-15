import { useEffect, useState } from 'react';

const ConsumoApi = () => {
	const [pokemons, setPokemons] = useState([]);

	const pokeApi = async () => {
		try {
			const resp = await fetch(
				'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20'
			);
			const data = await resp.json();
			// console.log(data.results);
			setPokemons(data.results);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		// fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20')
		// 	.then((res) => res.json())
		// 	.then((data) => console.log(data.results[5]));
		pokeApi();
	}, []);

	console.log(pokemons);
	let count = 0;
	return (
		<>
			<div>hola {pokemons.name}</div>
			<div>
				{pokemons.map((poke) => (
					<div key={poke.name}>
						<h2>{poke.name}</h2>
						<img src={poke.url} />
					</div>
				))}
			</div>
		</>
	);
};

export default ConsumoApi;
