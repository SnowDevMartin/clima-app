import Clima from './Clima';
import Formulario from './Formulario';

const AppClima = () => {
	return (
		<>
			<main className='dos-columnas'>
				<Formulario />
				<Clima />
			</main>
		</>
	);
};

export default AppClima;
