import { Link } from 'react-router-dom';
import error from '../assets/Frame.png'

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-5xl font-bold text-black'>Sorry!</h1>
            <p className='text-black mt-3 font-semibold'>Page Not Found</p>
            <img className='w-1/4' src={error} alt="" />
            <Link to="/" className='mt-2 btn border-0 w-80 bg-[#f4976f] hover:bg-[#F7A582] text-white'>Go Back</Link>            
        </div>
    );
};

export default ErrorPage;