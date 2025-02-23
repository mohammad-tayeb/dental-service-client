import { Link } from 'react-router-dom';
import logoDark from '../assets/logoDark.png'
const Footer = () => {
    return (
        <>
            <footer className="footer bg-[#F3F3F3]  p-10 mt-32 text-black">
                <aside className='space-y-3 flex md:flex-col flex-col md:items-start items-center'>
                    <img className='w-44' src={logoDark} alt="" />
                    <p className='md:w-80 w-full text-center md:text-start'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been since the printer took.
                    </p>
                    <Link className='btn btn-outline hover:bg-[#F7A582] text-[#F7A582]' to="/appointment">Appointment</Link>
                </aside>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Service</a>
                    <a className="link link-hover">Doctors</a>
                    <a className="link link-hover">Departments</a>
                    <a className="link link-hover">Online Payment</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">My Account</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Doc House Services</h6>
                    <a className="link link-hover">Pediatric Clinic</a>
                    <a className="link link-hover">Diagnosis Clinic</a>
                    <a className="link link-hover">Cardiac Clinic</a>
                    <a className="link link-hover">Laboratory Analysis</a>
                    <a className="link link-hover">Gynecological Clinic</a>
                    <a className="link link-hover">Personal Counseling</a>
                    <a className="link link-hover">Dental Clinic</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Working Hours</h6>
                    <a className="link link-hover">Monday - 10 am to 7 pm</a>
                    <a className="link link-hover">Tuesday - 10 am to 7 pm</a>
                    <a className="link link-hover">Wednesday - 10 am to 7 pm</a>
                    <a className="link link-hover">Thursday - 10 am to 7 pm</a>
                    <a className="link link-hover">Friday - 10 am to 7 pm</a>
                    <a className="link link-hover">Saturday - 10 am to 7 pm</a>
                    <a className="link link-hover">Sunday - 10 am to 7 pm</a>
                </nav>

            </footer>
            <hr />
            <footer className="footer footer-center bg-[#F3F3F3] text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by DOC Pharmaceticales Ltd</p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;