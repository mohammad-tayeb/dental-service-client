import rs from '../assets/rs.png'
import g6 from '../assets/Group 6.png'
import g7 from '../assets/Group 7.png'
import chair from '../assets/chair 1.png'

// for claender
import { useContext, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// service icon
import ic1 from '../assets/Service-Icon/Group 34994.png'
import ic2 from '../assets/Service-Icon/Group 34995.png'
import ic3 from '../assets/Service-Icon/Group 34996.png'
import ic4 from '../assets/Service-Icon/Group 34997.png'
import ic5 from '../assets/Service-Icon/Group 34998.png'
import ic6 from '../assets/Service-Icon/Group 34999.png'
import { Link, Outlet } from 'react-router-dom';
import { DateContext } from '../Provider/DateProvider';

const Appointment = () => {
    // for calender
    const [value, setValue] = useState(new Date());
    const { selectedDate, setSelectedDate } = useContext(DateContext);
    setSelectedDate(value.toDateString())
    console.log(selectedDate)
    const [activeLink, setActiveLink] = useState(null);

    const handleClick = (link) => {
        setActiveLink(link);
    };
    return (
        <div>
            <img className='md:h-[500px] h-[254px]' src={rs} alt="" />
            <img className='absolute top-20 md:right-2/4' src={g6} alt="" />
            {/* <img className='absolute bottom-1 left-40' src={g6} alt="" /> */}
            <img className='absolute top-20 md:left-2/3 left-40' src={g7} alt="" />
            <div className='md:top-48 top-28 ms-20 absolute'>
                <h2 className=' text-white'>Home/ Appointment</h2>
                <h2 className='uppercase text-3xl font-bold text-white'>Appointment</h2>
            </div>

            <div className='flex md:flex-row flex-col items-center justify-center space-x-10 mt-20 md:mx-0 mx-5'>
                {/* calender */}
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold mb-4">Select a Date</h2>
                    <Calendar minDate={new Date()} onChange={setValue} value={value} />
                    <p className="mt-4">Selected Date: {value.toDateString()}</p>
                </div>
                {/* chair image */}
                <img src={chair} alt="" className='mt-10 md:mt-0 w-5/6 md:w-2/5' />
            </div>

            <div className='flex flex-col items-center justify-center mt-20'>
                <h2>Avialable Services On {value.toDateString()}</h2>
                <h2 className='text-4xl font-bold text-black'>Select Services</h2>
                {/* services */}
                <div className="flex flex-col items-center justify-center mt-10">
                    <div className="grid md:grid-cols-3 grid-cols-2 md:gap-10 gap-5 mx-5 md:mx-0">
                        <div className="p-4">
                            <Link
                                to="/appointment/TeethOrthodontics"
                                onClick={() => handleClick("TeethOrthodontics")}
                                className={`flex flex-col items-center p-4 rounded-lg shadow-md transition-all ${activeLink === "TeethOrthodontics" ? "bg-[#F7A582] text-white" : "bg-white text-gray-700"
                                    }`}
                            >
                                <div className="flex justify-center items-center p-2">
                                    <img src={ic1} className="w-16 h-16 me-3" />
                                    <p className="mt-2 font-bold text-1xl">Teeth Orthodontics</p>
                                </div>
                            </Link>
                        </div>

                        <div className="p-4">
                            <Link
                                onClick={() => handleClick("OralSurgery")}
                                to={`/appointment/OralSurgery`} className={`flex flex-col items-center p-4 rounded-lg shadow-md transition-all ${activeLink === "OralSurgery" ? "bg-[#F7A582] text-white" : "bg-white text-gray-700"
                                    }`}>
                                <img src={ic6} alt="Oral Surgery" className="w-16 h-12 me-3" />
                                <p className="mt-2 font-bold text-1xl">Oral Surgery</p>
                            </Link>
                        </div>

                        <div className="p-4">
                            <Link
                                onClick={() => handleClick("PediatricDental")}
                                to={`/appointment/PediatricDental`} className={`flex flex-col items-center p-4 rounded-lg shadow-md transition-all ${activeLink === "PediatricDental" ? "bg-[#F7A582] text-white" : "bg-white text-gray-700"
                                    }`}>
                                <img src={ic5} alt="Pediatric Dental" className="w-16 h-12 me-3" />
                                <p className="mt-2 font-bold text-1xl">Pediatric Dental</p>
                            </Link>
                        </div>

                        <div className="p-4">
                            <Link
                                onClick={() => handleClick("CavityProtection")}
                                to={`/appointment/CavityProtection`} className={`flex flex-col items-center p-4 rounded-lg shadow-md transition-all ${activeLink === "CavityProtection" ? "bg-[#F7A582] text-white" : "bg-white text-gray-700"
                                    }`}>
                                <img src={ic4} className="w-16 h-12 me-3" />
                                <p className="mt-2 font-bold text-1xl">Cavity Protection</p>
                            </Link>
                        </div>

                        <div className="p-4">
                            <Link
                                onClick={() => handleClick("TeethCleaning")}
                                to={`/appointment/TeethCleaning`} className={`flex flex-col items-center p-4 rounded-lg shadow-md transition-all ${activeLink === "TeethCleaning" ? "bg-[#F7A582] text-white" : "bg-white text-gray-700"
                                    }`}>
                                <img src={ic3} alt="Teeth Cleaning" className="w-16 h-12 me-3" />
                                <p className="mt-2 font-bold text-1xl">Teeth Cleaning</p>
                            </Link>
                        </div>

                        <div className="p-4">
                            <Link
                                onClick={() => handleClick("CosmeticDentistry")}
                                to={`/appointment/CosmeticDentistry`} className={`flex flex-col items-center p-4 rounded-lg shadow-md transition-all ${activeLink === "CosmeticDentistry" ? "bg-[#F7A582] text-white" : "bg-white text-gray-700"
                                    }`}>
                                <img src={ic2} className="w-16 h-12 me-3" />
                                <p className="mt-2 font-bold text-1xl">Cosmetic Dentistry</p>
                            </Link>
                        </div>
                    </div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Appointment;