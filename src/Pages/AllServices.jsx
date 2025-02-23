import rs from '../assets/rs.png'
import g6 from '../assets/Group 6.png'
import g7 from '../assets/Group 7.png'
import s2 from '../assets/Service-Icon/2.jpg'
import { Helmet } from 'react-helmet-async';
const AllServices = () => {
    return (
        <div>
            <Helmet>
                <title>All Services | Doc House</title>
            </Helmet>
            <img className='md:h-[500px] h-[254px]' src={rs} alt="" />
            <img className='absolute top-20 md:right-2/4' src={g6} alt="" />
            {/* <img className='absolute bottom-1 left-40' src={g6} alt="" /> */}
            <img className='absolute top-20 md:left-2/3 left-40' src={g7} alt="" />
            <div className='md:top-48 top-28 ms-20 absolute'>
                <h2 className=' text-white'>Home/ Services</h2>
                <h2 className='uppercase text-3xl font-bold text-white'>All Services</h2>
            </div>
            <div className="mt-20 flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
                <div className="relative lg:w-1/2">
                    <img
                        src={s2}
                        alt="Dental Clinic"
                        className="object-cover w-full lg:absolute h-80 lg:h-full"
                    />

                </div>
                <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Expert Care
                        </p>
                    </div>
                    <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                        Comprehensive Dental Services
                    </h5>
                    <p className="mb-5 text-gray-800">
                        <span className="font-bold">Your smile is our priority</span>. Our clinic offers a wide range of services, including preventive care, restorative treatments, and cosmetic procedures. Whether you need a routine check-up or advanced treatments, our experienced team ensures you receive the best care.
                    </p>
                </div>
            </div>

            {/* Second Section */}
            <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row-reverse sm:mx-auto mt-16">
                <div className="relative lg:w-1/2">
                    <img
                        src={s2}
                        alt="Dental Technology"
                        className="object-cover w-full lg:absolute h-80 lg:h-full"
                    />
                    <svg
                        className="absolute top-0 right-0 hidden h-fit text-white lg:inline-block"
                        viewBox="18 0 20 104"
                        fill="currentColor"
                    >
                        <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                    </svg>
                </div>
                <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Advanced Technology
                        </p>
                    </div>
                    <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                        Cutting-Edge Technology
                    </h5>
                    <p className="mb-5 text-gray-800">
                        We use the latest dental technology to ensure accurate diagnoses and effective treatments. Our digital X-rays, 3D imaging, and laser dentistry techniques help deliver better results with less discomfort and faster recovery times.
                    </p>
                </div>
            </div>

            {/* Third Section */}
            <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto mt-16">
                <div className="relative lg:w-1/2">
                    <img
                        src={s2}
                        alt="Affordable Care"
                        className="object-cover w-full lg:absolute h-80 lg:h-full"
                    />

                </div>
                <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Affordable Care
                        </p>
                    </div>
                    <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                        Accessible & Affordable Dental Care
                    </h5>
                    <p className="mb-5 text-gray-800">
                        We understand that quality dental care should be accessible to everyone. That’s why we offer affordable pricing and flexible payment options, so you can receive the dental treatments you need without breaking the bank.
                    </p>
                </div>
            </div>

            {/* Fourth Section */}
            <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row-reverse sm:mx-auto mt-16">
                <div className="relative lg:w-1/2">
                    <img
                        src={s2}
                        alt="Cosmetic Dentistry"
                        className="object-cover w-full lg:absolute h-80 lg:h-full"
                    />

                </div>
                <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Cosmetic Dentistry
                        </p>
                    </div>
                    <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                        Enhance Your Smile
                    </h5>
                    <p className="mb-5 text-gray-800">
                        Our cosmetic dentistry services can help you achieve the smile youve always dreamed of. From teeth whitening to veneers and smile makeovers, we use advanced techniques and materials to give you a beautiful, confident smile.
                    </p>
                </div>
            </div>

            {/* Fifth Section */}
            <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto mt-16">
                <div className="relative lg:w-1/2">
                    <img
                        src={s2}
                        alt="Pediatric Care"
                        className="object-cover w-full lg:absolute h-80 lg:h-full"
                    />

                </div>
                <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Pediatric Care
                        </p>
                    </div>
                    <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                        Gentle Care for Children
                    </h5>
                    <p className="mb-5 text-gray-800">
                        Our pediatric dental services focus on making your childs experience positive and stress-free. From early check-ups to preventive care, our friendly team ensures your little one’s dental health is in good hands.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AllServices;