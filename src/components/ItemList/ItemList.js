import Item from '../Item/Item';

const productos = [
	{
		id: '1',
		title: 'flor1',
		description: 'lorem ipsu...',
		stock: 5,
		price: 60000,
		pictureUrl: '',
	},
	{
		id: '2',
		title: 'flor2',
		description: 'lorem ipsu...',
		stock: 8,
		price: 120000,
		pictureUrl: '',
	},
	{
		id: '3',
		title: 'flor3',
		description: 'lorem ipsu...',
		stock: 4,
		price: 70000,
		pictureUrl: '',
	},
	{
		id: '4',
		title: 'flor4',
		description: 'lorem ipsu...',
		stock: 2,
		price: 150000,
		pictureUrl: '',
	},
];

export const getFetch = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(productos);
		}, 2000);
	});
};

export const ItemList = () => {
	return (
		<>
			{productos.map((producto) => (
				<Item producto={producto} />
			))}
		</>
	);
};
