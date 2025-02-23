import useAxiosSecure from "../Components/Hooks/useAxiosSecure";
import { FaUserGroup } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Users = () => {
    const axiosSecure = useAxiosSecure()

    //load data using tanstack query
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })
    //tanstack query
    console.log(users)

    const handleMakeAdmin = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Admin Assigned!",
                    text: "",
                    icon: "success"
                });
                axiosSecure.patch(`/users/admin/${_id}`)
                    .then(res => {
                        console.log(res.data)
                        refetch()
                    })
            }
        });
    }


    const handleDeleteUser = (_id) => {
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
                axiosSecure.delete(`/users/${_id}`)
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
                <title>Users | Doc House</title>
            </Helmet>
            <h2>Users :{users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table text-black mt-5">
                    {/* head */}
                    <thead className="bg-slate-200 text-black">
                        <tr>
                            <th>index</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) =>
                                <tr key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    {
                                        user.role != 'admin' ? <td><button onClick={() => { handleMakeAdmin(user._id) }}><FaUserGroup className="text-green-500 hover:text-green-700"></FaUserGroup></button></td> : <td>Is Admin</td>
                                    }
                                    <td><button onClick={() => { handleDeleteUser(user._id) }}><FaTrash className="text-red-500 hover:text-red-700"></FaTrash></button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;