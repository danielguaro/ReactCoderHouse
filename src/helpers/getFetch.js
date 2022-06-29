import foto1 from '../../src/assets/images/momentAmor/1001.jpeg';

const productos = [
	{
		id: '1',
		title: 'flor1',
		description: 'lorem ipsu...',
		stock: 5,
		price: 60000,
		pictureUrl: foto1,
		category: 'ramo',
	},
	{
		id: '2',
		title: 'flor2',
		description: 'lorem ipsu...',
		stock: 8,
		price: 120000,
		pictureUrl: '/public/assets/momentAmor/1002.jpeg',
		category: 'ramo',
	},
	{
		id: '3',
		title: 'flor3',
		description: 'lorem ipsu...',
		stock: 4,
		price: 70000,
		pictureUrl: '',
		category: 'ramillete',
	},
	{
		id: '4',
		title: 'flor4',
		description: 'lorem ipsu...',
		stock: 2,
		price: 150000,
		pictureUrl: '',
		category: 'ramillete',
	},
];

// export const getFetch = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve(productos);
// 		}, 3000);
// 	});
// };

export const getFetch = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (id) {
				resolve(
					productos.find((producto) => {
						return producto.id === id;
					})
				);
			} else {
				resolve(productos);
			}
		}, 2000);
	});
};
