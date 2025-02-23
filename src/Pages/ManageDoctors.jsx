import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Components/Hooks/useAxiosSecure";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ManageDoctors = () => {
    const axiosSecure = useAxiosSecure()

    //load data using tanstack query
    const { data: localDoctors = [], refetch } = useQuery({
        queryKey: ['localDoctors'],
        queryFn: async () => {
            const res = await axiosSecure.get('/localDoctors')
            return res.data;
        }
    })
    //tanstack query
    console.log(localDoctors)

    const handleDeletedoctor = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/localDoctors/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch()
                    })
                    .catch(error => {
                        console.log(error)
                    })
                // delete user
            }
        });

    }
    return (
        <div className="">
            <Helmet>
                <title>Manage Doctors | Doc House</title>
            </Helmet>
            <h2>Doctors :{localDoctors.length}</h2>
            <div className="overflow-x-auto">
                <table className="table text-black mt-5">
                    {/* head */}
                    <thead className="bg-slate-200 text-black">
                        <tr>
                            <th>index</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Speciality</th>
                            <th>Delete Dcotor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            localDoctors.map((doctor, idx) =>
                                <tr key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>Dr. {doctor.name}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.speciality}</td>
                                    <td><button onClick={() => { handleDeletedoctor(doctor._id) }}><FaTrash className="text-red-500 hover:text-red-700"></FaTrash></button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;