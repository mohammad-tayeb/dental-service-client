import { useState, useEffect, useRef, useContext } from "react";
import logo from '../../src/assets/Service-Icon/Group 2.png'
import { FaHome, FaPlusSquare } from "react-icons/fa";
import { FaDashcube, FaUser, FaUserDoctor } from "react-icons/fa6";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AdminDashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { user } = useContext(AuthContext)

    // Create a reference to the dropdown menu
    const dropdownRef = useRef(null);

    // Close the dropdown when clicking outside
    useEffect(() => {
        window.scrollTo(0, 0);
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false); // Close dropdown if click is outside
            }
        };

        // Attach the event listener to the document
        document.addEventListener("mousedown", handleClickOutside);

        // Clean up the event listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);



    return (
        <div>
            <Helmet>
                <title>Dashboard | Doc House</title>
            </Helmet>
            {/* Navbar */}
            <nav className="fixed top-0 z-50 left-0 w-full bg-white border-b border-gray-200 dark:bg-[#07332f] dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        {/* Sidebar Toggle Button */}
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                            </svg>
                        </button>


                        {/* Logo */}
                        <Link to="/" className="flex ms-2 md:me-24">
                            <img src={logo} className="h-8 me-3" alt="Logo" />
                        </Link>


                        {/* Profile Menu */}
                        <div className="relative">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            >
                                <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                            </button>
                            {/* Profile Menu */}


                            {/* User Dropdown */}
                            {dropdownOpen && (
                                <div
                                    ref={dropdownRef} // Attach the ref here
                                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg dark:bg-gray-700"
                                >
                                    <div className="px-4 py-3">
                                        <p className="text-sm text-gray-900 dark:text-white">{user.displayName}</p>
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">{user.email}</p>
                                    </div>
                                    <ul className="py-1">
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">My Profile</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                            {/* User Dropdown */}


                        </div>
                    </div>
                </div>
            </nav>



            <div className="flex bg-slate-100 min-h-svh">
                {/* Sidebar */}
                <aside className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} bg-white border-r border-gray-200 dark:bg-white sm:translate-x-0 dark:shadow-lg`}>
                    <div className="h-full px-3 pb-4 overflow-y-auto">
                        <ul className="space-y-2 font-medium">
                            <li>
                                <NavLink
                                    to="/adminDashboard/dashboard"
                                    className={({ isActive }) =>
                                        `ps-5 flex items-center p-2 rounded-lg 
                ${isActive ? "bg-gray-200 text-black dark:bg-slate-300" : "text-gray-900 dark:text-black"} 
                hover:bg-gray-100 dark:hover:bg-slate-200`
                                    }
                                >
                                    <FaDashcube />
                                    <span className="ml-3">Dashboard</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/adminDashboard/users"
                                    className={({ isActive }) =>
                                        `ps-5 flex items-center p-2 rounded-lg 
                ${isActive ? "bg-gray-200 text-black dark:bg-slate-300" : "text-gray-900 dark:text-black"} 
                hover:bg-gray-100 dark:hover:bg-slate-200`
                                    }
                                >
                                    <FaUser />
                                    <span className="ml-3">All Users</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/adminDashboard/addDoctor"
                                    className={({ isActive }) =>
                                        `ps-5 flex items-center p-2 rounded-lg 
                ${isActive ? "bg-gray-200 text-black dark:bg-slate-300" : "text-gray-900 dark:text-black"} 
                hover:bg-gray-100 dark:hover:bg-slate-200`
                                    }
                                >
                                    <FaPlusSquare />
                                    <span className="ml-3">Add Doctor</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/adminDashboard/manageDoctors"
                                    className={({ isActive }) =>
                                        `ps-5 flex items-center p-2 rounded-lg 
                ${isActive ? "bg-gray-200 text-black dark:bg-slate-300" : "text-gray-900 dark:text-black"} 
                hover:bg-gray-100 dark:hover:bg-slate-200`
                                    }
                                >
                                    <FaUserDoctor />
                                    <span className="ml-3">Manage Doctors</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `ps-5 flex items-center p-2 rounded-lg 
                ${isActive ? "bg-gray-200 text-black dark:bg-slate-300" : "text-gray-900 dark:text-black"} 
                hover:bg-gray-100 dark:hover:bg-slate-200`
                                    }
                                >
                                    <FaHome />
                                    <span className="ml-3">Home</span>
                                </NavLink>
                            </li>
                        </ul>

                    </div>
                </aside>
                <div className="w-full md:ml-80 md:mr-28 mt-24">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
