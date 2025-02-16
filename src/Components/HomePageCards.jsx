import { FaClock, FaLocationArrow, FaPhone } from "react-icons/fa";


const HomePageCards = () => {
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 md:mx-10 mx-2 items-center justify-items-center">
            <div className="flex items-center justify-center bg-[#07332F] text-white w-full md:w-[364px] h-[202px] rounded-md">
                <div><FaClock className="text-4xl ms-10"></FaClock></div>
                <div className="px-10">
                    <h1 className="font-bold text-2xl">Opening Hours</h1>
                    <p>Open 9.00 am to 5.00pm Everyday</p>
                </div>
            </div>
            <div className="flex items-center justify-center bg-[#F7A582] text-white  w-full md:w-[364px] h-[202px] rounded-md">
                <div><FaLocationArrow className="text-4xl ms-10"></FaLocationArrow></div>
                <div className="px-10">
                    <h1 className="font-bold text-2xl">Our Locations</h1>
                    <p>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
                </div>
            </div>
            <div className="flex items-center justify-center bg-[#07332F] text-white  w-full md:w-[364px] h-[202px] rounded-md">
                <div><FaPhone className="text-4xl"></FaPhone></div>
                <div className="px-10">
                    <h1 className="font-bold text-2xl">Contact Us</h1>
                    <p>+88 01750 00 00 00 <br />
                    +88 01750 00 00 00</p>
                </div>
            </div>
        </div>
    );
};

export default HomePageCards;