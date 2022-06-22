// OJO  recordar que la idea es que esto se realice de un componente ancestro (ejemplo, componente App)
// 1. importar el createContext

import { createContext } from 'react';

//2. Implementar mis constantes/funciones globales, FUERA de la función que exporto
//3. crear el contexto, el cual puede estar inicializado por defecto, es solo colocar algo entre los ()
const ConstanteGlobal = createContext([]);

const ejemploApp = () => {
	return (
		<ConstanteGlobal.Provider>
			<div>ejemploApp</div>
		</ConstanteGlobal.Provider>
	);
};

export default ejemploApp;
