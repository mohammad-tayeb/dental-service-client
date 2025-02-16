import banner from '../assets/Rectangle 1.png'
import doctorBanner from '../assets/Group 34991.png'
import tablet1 from '..//assets/Group 7.png'
import tablet2 from '..//assets/Group 6.png'
const HomeBanner = () => {
    return (
        <div>
            <div>
                <img className='md:h-[600px] h-[700px] w-full' src={banner} alt="" />
            </div>
            <div className='flex md:flex-row flex-col justify-center items-center absolute md:top-10 top-24 mx-10 mt-10 md:mt-0'>
                <div className='flex flex-col justify-center md:text-start text-center md:items-start items-center space-y-3 md:w-1/2 text-white'>
                    <h1 className='md:text-5xl text-2xl font-bold'>Your Best Medical Help Center</h1>
                    <p>Expert dental care with precision, ensuring healthy smiles using advanced treatments and trusted techniques.</p>
                    <button className='btn btn-ghost bg-[#F7A582] text-white'>All Services</button>
                </div>
                <div className='md:mt-0 mt-10 md:w-1/2'>
                    <img src={doctorBanner} alt="" />
                </div>
                <img className='absolute top-4 md:left-36 left-2' src={tablet1} alt="" />
                <img className='absolute top-96' src={tablet2} alt="" />
            </div>
        </div>
    );
};

export default HomeBanner;