import doctor from '../assets/doctorLong.png'
import cavity from '../assets/cavity.png'
const OurService = () => {
    return (
        <div className='md:flex justify-center items-center space-y-8 md:space-y-0 my-32 mx-10'>
            {/* image */}
            <div className='md:w-1/2 mt-20 mx-auto'>
                <img src={doctor} alt="" />
            </div>
            {/* our service */}
            <div className='space-y-3 md:w-1/2 text-black text-center md:text-start'>
                <h1 className='text-4xl font-bold'>Our Services</h1>
                <p className='!mt-8'>Experience top-quality dental care with expert precision. Our dedicated team ensures healthy, beautiful smiles with advanced treatments tailored just for you.</p>
                {/* button group */}
                <div className="join">
                    <button className="btn join-item bg-white text-black  border-gray-300 font-bold hover:bg-[#F7A582]">Cavity Protection</button>
                    <button className="btn join-item bg-white text-black border-gray-300 font-bold hover:bg-[#F7A582]">Cosmetic Dentisty</button>
                    <button className="btn join-item bg-white text-black border-gray-300 font-bold hover:bg-[#F7A582]">Oral Surgery</button>
                </div>
                {/* button group */}
                <img className='!my-16' src={cavity} alt="" />
                <h1 className='text-2xl font-bold uppercase'>Electro  Gastrology Therapy</h1>
                <p className='!mt-6'>Experience exceptional dental care where precision meets comfort. Our expert team is dedicated to providing healthy, radiant smiles through advanced treatments and personalized care.</p>
                <p>Providing top-quality dental solutions with precision and care, ensuring healthy, confident smiles through expert treatments and advanced technology.</p>
                <button className='btn btn-outline hover:bg-[#F7A582] text-[#F7A582]'>More Details</button>
            </div>
        </div>
    );
};

export default OurService;