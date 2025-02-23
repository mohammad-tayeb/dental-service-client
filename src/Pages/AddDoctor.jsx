import Swal from "sweetalert2";
import useAxiosSecure from "../Components/Hooks/useAxiosSecure";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const AddDoctor = () => {
    const axiosSecure = useAxiosSecure();
    const handleAddDoctor = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const speciality = form.speciality.value
        const imageURL = form.imageURL.value
        const doctorInfo = { name, email, speciality, imageURL }
        console.log(doctorInfo)
        axiosSecure.post('/localDoctors', doctorInfo)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    form.reset();
                    Swal.fire({
                        title: "Doctor Added",
                        text: "You Can Find The Added Doctor Info In Manage Doctors",
                        icon: "success"
                    });
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])
    return (
        <div className=" md:mx-0 mx-10 md:mb-0 mb-10">
            <Helmet>
                <title>Add Doctor | Doc House</title>
            </Helmet>
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
                <h2 className="text-2xl text-center text-[#F7A582] font-bold mb-5">Add Doctor</h2>
                <form onSubmit={handleAddDoctor}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-black dark:text-black" htmlFor="username">Name</label>
                            <input name="name" required id="username" type="text" className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark: dark:text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-black dark:text-black" htmlFor="emailAddress">Email</label>
                            <input name="email" required id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark: dark:text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-black dark:text-black" htmlFor="password">
                                Specialty</label>
                            <input required name="speciality" id="password" type="text" className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark: dark:text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-black dark:text-black" htmlFor="passwordConfirmation">Image URL</label>
                            <input name="imageURL" required id="passwordConfirmation" type="text" className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark: dark:text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#f2966e] rounded-md hover:bg-[#F7A582] focus:outline-none focus:bg-gray-600">Add Doctor</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddDoctor;