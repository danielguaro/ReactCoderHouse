import foto1 from '../../src/assets/images/momentAmor/1001.jpeg';
import foto2 from '../../src/assets/images/momentAmor/1002.jpeg';
import foto3 from '../../src/assets/images/momentAmor/1003.jpeg';
import foto4 from '../../src/assets/images/momentAmor/1004.jpeg';

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
		pictureUrl: foto2,
		category: 'ramo',
	},
	{
		id: '3',
		title: 'flor3',
		description: 'lorem ipsu...',
		stock: 4,
		price: 70000,
		pictureUrl: foto3,
		category: 'ramillete',
	},
	{
		id: '4',
		title: 'flor4',
		description: 'lorem ipsu...',
		stock: 2,
		price: 150000,
		pictureUrl: foto4,
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
