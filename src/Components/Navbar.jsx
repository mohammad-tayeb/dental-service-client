import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/Group 2.png';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className="navbar fixed top-0 left-0 w-full bg-opacity-40 max-w-screen-xl text-white p-3 z-50 h-20 flex items-center justify-between">
            <div className="navbar-start">
                <div className="dropdown -mt-5">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) =>
                                    isActive ? "font-bold text-white bg-[#F7A582]" : "text-white"
                                }
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/about'
                                className={({ isActive }) =>
                                    isActive ? "font-bold text-white bg-[#F7A582]" : "text-white"
                                }
                            >
                                ABOUT
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/appointment'
                                className={({ isActive }) =>
                                    isActive ? "font-bold text-white bg-[#F7A582]" : "text-white"
                                }
                            >
                                APPOINTMENT
                            </NavLink>
                        </li>
                        <li>
                            {
                                user ? <NavLink
                                    onClick={logOut}
                                    className={({ isActive }) =>
                                        isActive ? "text-white bg-none" : "text-white"
                                    }
                                >
                                    LOG OUT
                                </NavLink> :
                                    <NavLink
                                        to='/login'
                                        className={({ isActive }) =>
                                            isActive ? "font-bold text-white bg-[#F7A582]" : "text-white"
                                        }
                                    >
                                        LOGIN
                                    </NavLink>
                            }
                        </li>
                    </ul>
                </div>
                <Link to='/' className='h-16 w-40 ms-4'>
                    <img src={logo} alt="" />
                </Link>
            </div>

            {/* Desktop Navbar */}
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 -mt-5 me-4">
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                isActive ? "font-bold text-white bg-[#F7A582]" : "text-white"
                            }
                        >
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/about'
                            className={({ isActive }) =>
                                isActive ? "font-bold text-white bg-[#F7A582]" : "text-white"
                            }
                        >
                            ABOUT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/appointment'
                            className={({ isActive }) =>
                                isActive ? "font-bold text-white bg-[#F7A582]" : "text-white"
                            }
                        >
                            APPOINTMENT
                        </NavLink>
                    </li>
                    <li>
                        {
                            user ? <NavLink
                                onClick={logOut}
                                className={({ isActive }) =>
                                    isActive ? "text-white bg-none" : "text-white"
                                }
                            >
                                LOG OUT
                            </NavLink> :
                                <NavLink
                                    to='/login'
                                    className={({ isActive }) =>
                                        isActive ? "font-bold text-white bg-[#F7A582]" : "text-white"
                                    }
                                >
                                    LOGIN
                                </NavLink>
                        }
                    </li>
                    <li>
                        {
                            user && <p className='text-xs text-[#F7A582]'>{user.email}</p>
                        }
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
