import useClima from '../hooks/useClima';
import Spinner from './Spinner';
import { useMemo } from 'react';

const Clima = () => {
	const { clima, cargando, busqueda } = useClima();
	const { ciudad } = busqueda;
	const nombreCiudad = useMemo(() => ciudad, [clima]);

	return (
		<div className='contenedor flex flex-wrap justify-center content-center'>
			<div className=''>
				{cargando ? (
					<Spinner />
				) : (
					<>
						<p className='text-center text-4xl capitalize'>
							{nombreCiudad}
						</p>
						<div className='text-center text-6xl'>
							{clima.temperatura ? (
								`${clima.temperatura} ºC`
							) : (
								<p className='text-4xl'>Esperando consulta</p>
							)}
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Clima;
