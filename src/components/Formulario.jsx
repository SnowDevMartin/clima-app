import useClima from '../hooks/useClima';
import Error from './Error';

const Formulario = () => {
	const {
		busqueda,
		datosBusqueda,
		obtenerLatitudLongitud,
		mensajeError,
		setMensajeError,
	} = useClima();

	const { ciudad } = busqueda;

	const handleSubmit = e => {
		e.preventDefault();
		setMensajeError('');
		if (Object.values(busqueda).includes('')) {
			setMensajeError('Debes introducir una ciudad');
			return;
		}

		obtenerLatitudLongitud(busqueda.ciudad);
	};

	return (
		<div className='contenedor'>
			<form onSubmit={handleSubmit}>
				<div className='campo'>
					<label htmlFor='Ciudad'>Escribe ciudad o país:</label>
					<input
						type='text'
						name='ciudad'
						id='ciudad'
						onChange={datosBusqueda}
						value={ciudad}
					/>
				</div>

				<input type='submit' value='Consultar Clima' />
			</form>
			{mensajeError && <Error />}
		</div>
	);
};

export default Formulario;
