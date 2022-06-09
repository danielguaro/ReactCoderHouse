const productos = [
	{ id: '1', name: 'flor1', description: 'lorem ipsu...', stock: 5 },
	{ id: '2', name: 'flor2', description: 'lorem ipsu...', stock: 8 },
	{ id: '3', name: 'flor3', description: 'lorem ipsu...', stock: 4 },
	{ id: '4', name: 'flor4', description: 'lorem ipsu...', stock: 2 },
];

export const getFetch = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(productos);
		}, 3000);
	});
};
