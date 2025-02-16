import { useRef } from "react";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { Bounce, toast, ToastContainer } from "react-toastify";


const ContactUs = () => {
    const formRef = useRef(null);
    const handleContactUs = e => {
        e.preventDefault()
        toast('Message Sent Successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        formRef.current.reset(); // Reset form fields
    }
    return (
        <div className="md:w-full w-[335] md:h-[528px] h-[917] bg-[#07332F] mt-28 mx-auto flex md:flex-row flex-col items-center justify-center md:p-20 p-10">
            <div className="md:w-1/2 text-white space-y-4 text-center md:text-start mb-8 md:mb-0">
                <h1 className="text-3xl font-bold">Contact With Us</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
                <p className="ms-28 md:ms-0 flex items-center"><FaPhone className="me-2"></FaPhone> +88 01750 14 14 14</p>
                <p className="ms-20 md:ms-0 flex items-center"><FaLocationArrow className="me-2"></FaLocationArrow> Dhanmondi, Dhaka, Bangladesh</p>
            </div>
            <div className="md:w-1/2">
                <form className="max-w-lg mx-auto p-4 rounded-lg shadow-md" onSubmit={handleContactUs} ref={formRef} >
                    <div className="flex justify-between">
                        <div className="mb-4 w-full me-2">
                            <input
                                required
                                type="text"
                                placeholder="name"
                                id="name"
                                name="name"
                                className="w-full px-3 py-2 bg-white text-white bg-opacity-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7A582]"
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <input
                                required
                                placeholder="email"
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-3 py-2 bg-white text-white bg-opacity-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7A582]"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="mb-4 w-full me-2">
                            <input
                                required
                                type="number"
                                placeholder="mobile number"
                                id="name"
                                name="name"
                                className="w-full px-3 py-2 bg-white text-white bg-opacity-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7A582]"
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <input
                                required
                                placeholder="doctor name"
                                type="text"
                                id="doctor-name"
                                name="doctor-name"
                                className="w-full px-3 py-2 bg-white text-white bg-opacity-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7A582]"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="mb-4 w-full me-2">
                            <input
                                required
                                placeholder="date"
                                type="date"
                                id="date"
                                name="date"
                                className="w-full px-3 py-2 bg-white text-white bg-opacity-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7A582]"
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <input
                                required
                                placeholder="time"
                                type="time"
                                id="time"
                                name="time"
                                className="w-full px-3 py-2 bg-white text-white bg-opacity-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7A582]"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <textarea
                            required
                            placeholder="message"
                            id="message"
                            name="message"
                            className="w-full px-3 py-2 bg-white text-white bg-opacity-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7A582]"
                            rows="4"
                        ></textarea>
                    </div>
                    <button className='btn btn-outline w-full text-white bg-[#F7A582] border-0 hover:bg-[#ff9e7a]'>Send</button>
                </form>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    );
};

export default ContactUs;