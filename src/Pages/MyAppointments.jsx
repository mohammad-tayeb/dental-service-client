import { useState, useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { AuthContext } from "../Provider/AuthProvider";
import { DateContext } from "../Provider/DateProvider";
import rs from "../assets/rs.png";
import g6 from "../assets/Group 6.png";
import g7 from "../assets/Group 7.png";
import useAxiosSecure from "../Components/Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const MyAppointments = () => {
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [myAppointment, setMyAppointment] = useState(null);
    const [value, setValue] = useState(new Date());
    const { selectedDate, setSelectedDate } = useContext(DateContext);
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    // ✅ Trigger re-fetching when selectedDate changes
    const { data: appointments = [], refetch } = useQuery({
        queryKey: ["appointments", user?.email, selectedDate],  // Added selectedDate as dependency
        enabled: !!user?.email,
        queryFn: async () => {
            console.log("Fetching appointments for:", user.email, "on", selectedDate);
            const res = await axiosSecure.get(`/myAppointments?email=${user.email}&date=${selectedDate}`);
            return res.data;
        },
    });

    const [guestAppointments, setGuestAppointments] = useState([]);


    useEffect(() => {
        // Load guest appointments from localStorage
        const storedAppointments = JSON.parse(localStorage.getItem("guestAppointments")) || [];

        // ✅ Filter appointments that match the selected date
        const filteredGuestAppointments = storedAppointments.filter(appointment =>
            appointment.selectedDate === value.toDateString()
        );

        setGuestAppointments(filteredGuestAppointments); // Set filtered guest appointments
        setSelectedDate(value.toDateString()); // Update selected date

        // ✅ Ensure myAppointment updates correctly
        if (!user) {
            setMyAppointment(filteredGuestAppointments);
        } else {
            setMyAppointment(appointments);
        }
        setSelectedDate(value.toDateString());

    }, [value, setSelectedDate, user, appointments, guestAppointments])

    return (
        <div>
            {/* page tittle changing using helmet */}
            <Helmet>
                <title>Appointment | Doc House</title>
            </Helmet>
            {/* page tittle changing using helmet */}
            <img className="md:h-[500px] h-[254px]" src={rs} alt="" />
            <img className="absolute top-20 md:right-2/4" src={g6} alt="" />
            <img className="absolute top-20 md:left-2/3 left-40" src={g7} alt="" />

            <div className="md:top-48 top-28 ms-20 absolute">
                <h2 className="text-white">Home/ My Appointments</h2>
                <h2 className="uppercase text-3xl font-bold text-white">My Appointments</h2>
            </div>

            <button onClick={() => document.getElementById("my_modal_1").showModal()} className="btn btn-outline -mb-10 mt-10 ms-5 text-black">
                {value.toDateString()}
            </button>
            {/* table */}
            <div className="flex flex-col items-center mx-4 md:mx-0 w-fit md:w-full">
                <table className="table text-black mt-10 md:mx-20 border-2">
                    <thead>
                        <tr className="bg-gray-100 text-black">
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Time</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    {
                        myAppointment?.length !== 0 ? <tbody>
                            {myAppointment?.map((appointment, idx) => (
                                <tr key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>{appointment.name}</td>
                                    <td>{appointment.email}</td>
                                    <td>{appointment.serviceName}</td>
                                    <td>{appointment.selectedDate}</td>
                                    <td>
                                        <button onClick={() => { setSelectedAppointment(appointment); setIsOpen(true) }} className="btn btn-sm">Pay</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody> : <tbody className="text-center p-10 text-red-600"><tr><td colSpan="6">You Do Not Have Any Appointments On <span className="font-bold">{selectedDate}</span></td></tr></tbody>
                    }
                </table>
            </div>
            {/* table */}
            {/* payment modal */}
            <div className="relative flex justify-center">
                {isOpen && (
                    <div
                        className="fixed inset-0 z-10 overflow-y-auto"
                        aria-labelledby="modal-title"
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                            <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
                                &#8203;
                            </span>

                            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                                <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-black" id="modal-title">
                                    Hello {user.displayName}
                                </h3>
                                <p className="mt-2 text-sm text-gray-500 dark:text-black">
                                    Make payment for your {selectedAppointment.serviceName} appointment At: <span className="text-red-500 font-bold">{selectedAppointment.selectedDate}</span>
                                </p>

                                <form className="mt-4">
                                    <label htmlFor="emails-list" className="text-sm text-gray-700 dark:text-black">
                                        Card Number
                                    </label>
                                    <input
                                        type="number"
                                        required
                                        name="email"
                                        className="my-2 block w-full px-4 py-3 text-sm text-gray-900 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-white dark:text-gray-700 dark:focus:border-blue-300"
                                    />
                                    <label htmlFor="emails-list" className="text-sm text-gray-700 dark:text-black">
                                        MM/YY/CVC
                                    </label>
                                    <input
                                        type="number"
                                        required
                                        name="email"
                                        className="mt-2 block w-full px-4 py-3 text-sm text-gray-900 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-white dark:text-gray-700 dark:focus:border-blue-300"
                                    />
                                    <div className="mt-4 md:flex justify-center w-full items-center">
                                        <button
                                            type="button"
                                            onClick={() => setIsOpen(false)}
                                            className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-black dark:border-gray-700 dark:hover:bg-[#07332F] hover:bg-[#0e2d2a] focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40 hover:text-white"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            className="w-full  py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#0b372b] rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-[#0b2523] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                        >
                                            Make Payment
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* payment modal */}

            {/* date dialog button */}
            <dialog id="my_modal_1" className="modal">
                <Calendar className="modal-box" onChange={(date) => { setValue(date); refetch(); }} value={value} />
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            {/* date dialog button*/}

            {/* date dialog */}
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box bg-white">
                    <div className="flex flex-col items-center">
                        <h2 className="text-2xl font-bold mb-4">Select a Date</h2>
                        {/* ✅ When date changes, useEffect triggers re-fetch */}
                        <Calendar onChange={(date) => { setValue(date); refetch(); }} value={value} />
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-circle bg-[#F7A582] hover:bg-[#f2966e] text-white border-0 btn-xs">
                                X
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
            {/* date dialog */}
        </div>
    );
};

export default MyAppointments;
