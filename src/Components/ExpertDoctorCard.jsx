import { FaCalendar, FaDollarSign, FaLocationArrow, FaStar } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAxiosPublic from './Hooks/useAxiosPublic';
const ExpertDoctorCard = () => {
    const [doctors, setDoctors] = useState([])
    const axiosPublic = useAxiosPublic()

        useEffect(() => {
            axiosPublic.get('/doctors')
                .then(res => {
                    const threeDoctors = res.data.slice(0, 3);
                    setDoctors(threeDoctors);
                    console.log(threeDoctors);
                })
                .catch(error => {
                    console.log("Error fetching doctors:", error);
                });
        }, [axiosPublic]);
        // useEffect(() => {
        //     fetch('http://localhost:5000/doctors')
        //         .then(res => res.json())
        //         .then(data => {
        //             const threeDoctors = data.slice(0,3)
        //             setDoctors(threeDoctors)
        //             console.log(threeDoctors)
        //         })
        // }, [])
        return (
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mx-10 mt-10">
                {
                    doctors.map(doctor => <div key={doctor._id} className="card w-96 shadow-xl">
                        <figure>
                            <img
                                src={doctor.img}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body text-black">
                            <h2 className="card-title font-bold">{doctor.name}</h2>
                            <p className='text-gray-600'>{doctor.specialty}</p>
                            <p className='flex text-orange-400'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></p>
                            <div className='flex items-center mt-3'><FaLocationArrow></FaLocationArrow> <p className='text-sm ms-2'>{doctor.location}</p></div>
                            <div className='flex items-center'><FaCalendar></FaCalendar> <p className='text-sm ms-2'>{doctor.availability}</p></div>
                            <div className='flex items-center'><FaDollarSign></FaDollarSign> <p className='text-sm ms-2'>{doctor.fee}</p></div>
                            <div className="card-actions justify-start">
                                <Link to={`/doctorInfo/${doctor._id}`} className='btn btn-outline w-full hover:bg-[#F7A582] text-[#F7A582]'>View Profile</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        );
    };

    export default ExpertDoctorCard;