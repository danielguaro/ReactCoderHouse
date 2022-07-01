// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBgssydCs7FDIv8DWHnmAtbxmEoaiV3Gro',
	authDomain: 'cursoreactcoderh.firebaseapp.com',
	projectId: 'cursoreactcoderh',
	storageBucket: 'cursoreactcoderh.appspot.com',
	messagingSenderId: '361184691626',
	appId: '1:361184691626:web:cd22d30da63ceba720d7d3',
};

// Initialize Firebase, creando la conexión con las API_Key
const app = initializeApp(firebaseConfig);

//Cosas creadas, No traidas
export const getFirestoreApp = () => {
	return app;
};
