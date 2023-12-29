import '../styles/Spinner.css';
const Spinner = () => {
	return (
		<div className='flex justify-center items-center mt-10 font-bold text-4xl'>
			<div className='sk-chase'>
				<div className='sk-chase-dot'></div>
				<div className='sk-chase-dot'></div>
				<div className='sk-chase-dot'></div>
				<div className='sk-chase-dot'></div>
				<div className='sk-chase-dot'></div>
				<div className='sk-chase-dot'></div>
			</div>
		</div>
	);
};

export default Spinner;
