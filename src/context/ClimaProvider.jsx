import { useState, createContext, useEffect } from 'react';
//import axios from 'axios';

const ClimaContext = createContext();

const ClimaProvider = ({ children }) => {
	const [busqueda, setBusqueda] = useState({
		ciudad: '',
	});
	const [latLong, setLatLong] = useState({
		latitud: '',
		longitud: '',
	});
	const [clima, setClima] = useState({
		temperatura: '',
	});
	const [mensajeError, setMensajeError] = useState('');
	const [cargando, setCargando] = useState(false);

	const datosBusqueda = e => {
		setBusqueda({
			...busqueda,
			[e.target.name]: e.target.value,
		});
	};

	useEffect(() => {
		if (Object.values(latLong).includes('')) return;
		consultarClima(latLong);
	}, [latLong]);

	const obtenerLatitudLongitud = async ciudad => {
		const apiKey = import.meta.env.VITE_API_KEY_GEO;
		setCargando(true);
		try {
			const response = await fetch(
				`https://api.api-ninjas.com/v1/geocoding?city=${ciudad}`,
				{
					headers: {
						'X-Api-Key': apiKey,
					},
				}
			);
			const data = await response.json();

			setLatLong({
				latitud: data[0].latitude,
				longitud: data[0].longitude,
			});
		} catch (error) {
			setMensajeError('No se encontró la ciudad');
			setClima({
				temperatura: '',
			});
			setCargando(false);
			setBusqueda({
				ciudad: '',
			});
		}
	};

	const consultarClima = city => {
		const { latitud, longitud } = city;
		const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&current=temperature_2m&forecast_days=1`;
		fetch(url)
			.then(respuesta => respuesta.json())
			.then(datos => {
				setClima({
					temperatura: datos.current.temperature_2m,
				});
				setCargando(false);
			})
			.catch(error => {
				setMensajeError('No se encontró la ciudad');
				setClima({
					temperatura: '',
				});
				setCargando(false);
				setBusqueda({
					ciudad: '',
				});
			});
	};

	return (
		<ClimaContext.Provider
			value={{
				busqueda,
				datosBusqueda,
				consultarClima,
				obtenerLatitudLongitud,
				latLong,
				clima,
				mensajeError,
				setMensajeError,
				cargando,
			}}
		>
			{children}
		</ClimaContext.Provider>
	);
};

export { ClimaProvider, ClimaContext };
