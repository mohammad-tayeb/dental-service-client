import { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
// for popup form
import 'reactjs-popup/dist/index.css';
import useAxiosPublic from "./Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { DateContext } from "../Provider/DateProvider";


const Slot = () => {
    const { user } = useContext(AuthContext)
    const { selectedDate } = useContext(DateContext);
    const slot = useLoaderData()
    const category = useParams()
    const [selectedService, setSelectedService] = useState(null);
    const axiosPublic = useAxiosPublic()

    const handleFormSubmission = (service) => {
        setSelectedService(service); // Set clicked service details
        document.getElementById('my_modal_1').showModal(); // Open modal

    };

    const handleAppointmentSubmission = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const serviceName = selectedService.name
        const serviceSchedle = selectedService.schedule
        const userInfo = { name, email, serviceName, serviceSchedle, selectedDate}
        console.log(userInfo)
        axiosPublic.post('/appointments', userInfo)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    document.getElementById('my_modal_1').close(); // Close the modal
                    Swal.fire({
                        title: "Appointment Scheduled!",
                        icon: "success",
                        draggable: true
                    });
                    form.reset();
                }
                else {
                    document.getElementById('my_modal_1').close(); // Close the modal
                    Swal.fire({
                        icon: "warning",
                        text: `${res.data.message}`,
                    });
                }
            })
    }
    return (
        <div className="mt-20 text-center">
            <h2 className='text-4xl font-bold text-black text-center'>Available slots for Teeth {category.category}.</h2>
            {slot ? <div className="grid md:grid-cols-3 grid-cols-2 md:gap-10 gap-5 md:mx-0 mx-5 mt-10">
                {
                    slot.services.map((service, idx) =>
                        <div key={idx} to={`/appointment/TeethOrthodontics`} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                            <div className='flex flex-col text-black justify-center items-center p-2'>
                                {/* <img src={ic1} className="w-16 h-16 me-3" /> */}
                                <p className="mt-2 font-bold text-gray-700 text-1xl">{service.name}</p>
                                <p>{service.schedule}</p>
                                <button onClick={() => handleFormSubmission(service)} className="btn text-white mt-2 hover:bg-[#F7A582] border-0 hover:text-white bg-[#f2966e]">Book Appointment</button>
                            </div>
                        </div>
                    )}
            </div> : 'No Slot Available!'}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-white">
                    {selectedService && (
                        <form onSubmit={handleAppointmentSubmission} className="space-y-3 py-5 flex flex-col items-center justify-center">
                            <input type="text" className="input input-bordered w-full bg-gray-100 max-w-xs text-black" readOnly value={selectedService.name} />

                            <input type="text" className="input input-bordered w-full bg-gray-100 max-w-xs text-black" readOnly value={selectedService.schedule} />

                            <input type="text" name="name" required className="input input-bordered w-full bg-gray-100 max-w-xs text-black" placeholder="Name" />

                            <input type="email" required name="email" className="input input-bordered w-full bg-gray-100 max-w-xs text-black" value={user?.email} placeholder="Email" />

                            <button className="btn block w-80 bg-[#F7A582] hover:bg-[#f2966e] text-white border-0">Submit</button>
                        </form>
                    )}
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-circle bg-[#F7A582] hover:bg-[#f2966e] text-white border-0 btn-xs">X</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>

    );
};

export default Slot;