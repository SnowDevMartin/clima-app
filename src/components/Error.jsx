import useClima from '../hooks/useClima';

const Error = () => {
	const { mensajeError } = useClima();

	return (
		<div className='border text-center border-red-400 bg-red100 py-3 text-red-700 mt-4'>
			<p>{mensajeError}</p>
		</div>
	);
};

export default Error;
