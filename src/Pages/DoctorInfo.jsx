import { useParams } from 'react-router-dom';
import rs from '../assets/rs.png'
import g6 from '../assets/Group 6.png'
import g7 from '../assets/Group 7.png'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa6';

// for tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Helmet } from 'react-helmet-async';

const DoctorInfo = () => {
    const { id } = useParams();
    const [doctor, setDoctor] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch(`http://localhost:5000/doctors/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setDoctor(data)
            })
    }, [id])
    return (
        <div className="">
            <Helmet>
                <title>Doctor Info | Doc House</title>
            </Helmet>
            <img className='md:h-[500px] h-[254px]' src={rs} alt="" />
            <img className='absolute top-20 md:right-2/4' src={g6} alt="" />
            {/* <img className='absolute bottom-1 left-40' src={g6} alt="" /> */}
            <img className='absolute top-20 md:left-2/3 left-40' src={g7} alt="" />
            <div className='md:top-48 top-28 ms-20 absolute'>
                <h2 className=' text-white'>Home/ Doctor Profile</h2>
                <h2 className='uppercase text-3xl font-bold text-white'>doctor profile</h2>
            </div>
            {/* doctor profile */}
            <div className="md:border md:border-blue-500 rounded-lg p-6 flex md:flex-row flex-col items-center gap-6 shadow-md bg-white max-w-6xl mx-auto mt-20">
                {/* Profile Image */}
                <img className="md:w-80 w-full bg-gray-200 rounded-lg" src={doctor.img} alt="" />

                {/* Doctor Info */}
                <div className="flex flex-col md:items-start items-center">
                    <h2 className="text-xl font-bold text-black">{doctor.name}</h2>
                    <p className="text-gray-600">{doctor.specialty}</p>
                    <p className="text-gray-600">{doctor.fee}</p>

                    {/* Star Rating */}
                    <div className="flex items-center my-2">
                        <div className="flex text-orange-400">
                            <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar>
                        </div>
                        <span className="text-gray-500 ml-2">({doctor.totalRating})</span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center text-gray-600 text-sm">
                        <FaMapMarkerAlt className="text-gray-400" />
                        <span className="ml-2">{doctor.location}</span>
                        <a href='https://www.google.com/maps' className="text-red-500 ml-2">- Get Directions</a>
                    </div>
                </div>
            </div>


            <Tabs className="md:mx-20 mt-10 text-black">
                <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Loactions</Tab>
                    <Tab>Reviews</Tab>
                    <Tab>Visiting Hours</Tab>
                </TabList>

                <TabPanel>
                    <div className="max-full mx-auto p-6 bg-white shadow-lg rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">About Me</h2>
                        <p className="text-gray-600 mb-6">
                            {doctor.aboutMe}
                        </p>

                        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Education</h3>
                                <ul className="list-disc pl-5 text-gray-700">
                                    {
                                        doctor?.education?.map((education, idx) => <li key={idx}>{education}</li>)
                                    }
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-2">Awards</h3>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li><strong>Humanitarian Award</strong> (July 2019)</li>
                                    <li><strong>Certificate for International Volunteer Service</strong> (March 2011)</li>
                                    <li><strong>The Dental Professional of The Year Award</strong> (May 2008)</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold mt-6 mb-2">Work & Experience</h3>
                        <ul className="list-disc pl-5 text-gray-700">
                            {
                                doctor?.workExperience?.map((workExperience, idx) => <li key={idx}>{workExperience}</li>)
                            }
                        </ul>

                        <h3 className="text-xl font-semibold mt-6 mb-2">Services</h3>
                        <ul className="list-disc pl-5 text-gray-700">
                            {
                                doctor?.services?.map((services, idx) => <li key={idx}>{services}</li>)
                            }
                        </ul>

                        <h3 className="text-xl font-semibold mt-6 mb-2">Specializations</h3>
                        <ul className="list-disc pl-5 text-gray-700">
                            {
                                doctor?.specializations?.map((specializations, idx) => <li key={idx}>{specializations}</li>)
                            }
                        </ul>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <h2 className="text-lg font-bold text-gray-700 mb-4">OUR LOCATIONS</h2>

                        <div className="mb-4 p-4 border rounded-lg bg-white shadow-sm">
                            <h3 className="text-md font-semibold text-gray-800">Downtown Branch</h3>
                            <p className="text-gray-600">123 Main Street, City Center</p>
                            <p className="text-gray-600 font-medium">Hours: 10 am to 7 pm</p>
                            <a href="https://maps.google.com" target="_blank" className="text-blue-600 underline mt-1 inline-block">
                                View on Map
                            </a>
                        </div>

                        <div className="mb-4 p-4 border rounded-lg bg-white shadow-sm">
                            <h3 className="text-md font-semibold text-gray-800">Uptown Branch</h3>
                            <p className="text-gray-600">456 Elm Street, Uptown</p>
                            <p className="text-gray-600 font-medium">Hours: 9 am to 6 pm</p>
                            <a href="https://maps.google.com" target="_blank" className="text-blue-600 underline mt-1 inline-block">
                                View on Map
                            </a>
                        </div>

                        <div className="mb-4 p-4 border rounded-lg bg-white shadow-sm">
                            <h3 className="text-md font-semibold text-gray-800">Westside Branch</h3>
                            <p className="text-gray-600">789 Oak Avenue, Westside</p>
                            <p className="text-gray-600 font-medium">Hours: 11 am to 8 pm</p>
                            <a href="https://maps.google.com" target="_blank" className="text-blue-600 underline mt-1 inline-block">
                                View on Map
                            </a>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md w-full">
                        <h2 className="text-lg font-bold text-gray-700 mb-4">Patient Reviews</h2>

                        <div className="space-y-4 grid grid-cols-3 gap-10">
                            <div className="p-4 border rounded-lg bg-white shadow-sm">
                                <p className="text-gray-800">Great service and friendly staff!</p>
                                <span className="text-sm text-gray-500">- John D.</span>
                            </div>

                            <div className="p-4 border rounded-lg bg-white shadow-sm">
                                <p className="text-gray-800">Loved the atmosphere. Will come again!</p>
                                <span className="text-sm text-gray-500">- Sarah L.</span>
                            </div>

                            <div className="p-4 border rounded-lg bg-white shadow-sm">
                                <p className="text-gray-800">Affordable prices and top-notch quality.</p>
                                <span className="text-sm text-gray-500">- Mike T.</span>
                            </div>

                            <div className="p-4 border rounded-lg bg-white shadow-sm">
                                <p className="text-gray-800">Super quick service. Highly recommend!</p>
                                <span className="text-sm text-gray-500">- Emma R.</span>
                            </div>

                            <div className="p-4 border rounded-lg bg-white shadow-sm">
                                <p className="text-gray-800">Staff was very helpful and professional.</p>
                                <span className="text-sm text-gray-500">- Alex H.</span>
                            </div>

                            <div className="p-4 border rounded-lg bg-white shadow-sm">
                                <p className="text-gray-800">Best experience I’ve had in a long time!</p>
                                <span className="text-sm text-gray-500">- Olivia M.</span>
                            </div>

                            <div className="p-4 border rounded-lg bg-white shadow-sm">
                                <p className="text-gray-800">Good value for money. Would visit again!</p>
                                <span className="text-sm text-gray-500">- Daniel P.</span>
                            </div>

                            <div className="p-4 border rounded-lg bg-white shadow-sm">
                                <p className="text-gray-800">Nice and clean place. Five stars!</p>
                                <span className="text-sm text-gray-500">- Sophia K.</span>
                            </div>

                            <div className="p-4 border rounded-lg bg-white shadow-sm">
                                <p className="text-gray-800">Fast service and very polite staff!</p>
                                <span className="text-sm text-gray-500">- Liam J.</span>
                            </div>

                            <div className="p-4 border rounded-lg bg-white shadow-sm">
                                <p className="text-gray-800">Absolutely loved it. Highly recommended!</p>
                                <span className="text-sm text-gray-500">- Chloe B.</span>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md w-full">
                        <h2 className="text-lg font-bold text-gray-700 mb-3">WORKING HOURS</h2>
                        <ul className="text-gray-600 space-y-1">

                            <li>Monday - 10 am to 7 pm</li>
                            <li>Tuesday - 10 am to 7 pm</li>
                            <li>Wednesday - 10 am to 7 pm</li>
                            <li>Thursday - 10 am to 7 pm</li>
                            <li>Friday - 10 am to 7 pm</li>
                            <li>Saturday - 10 am to 7 pm</li>
                            <li>Sunday - 10 am to 7 pm</li>
                        </ul>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default DoctorInfo;