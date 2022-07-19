import foto1 from '../assets/images/momentAmor/1001.jpeg';
import foto2 from '../assets/images/momentAmor/1002.jpeg';
import foto3 from '../assets/images/momentAmor/1003.jpeg';
import foto4 from '../assets/images/momentAmor/1004.jpeg';

export const ShowPic = (producto) => {
	const answer =
		producto.pictureUrl === 'foto1'
			? foto1
			: producto.pictureUrl === 'foto2'
			? foto2
			: producto.pictureUrl === 'foto3'
			? foto3
			: producto.pictureUrl === 'foto4'
			? foto4
			: producto.pictureUrl;

	return answer;
};
