import rs from '../assets/rs.png'
import g6 from '../assets/Group 6.png'
import g7 from '../assets/Group 7.png'
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])

    const cards = [
        {
            "image": "https://i.ibb.co.com/0yJk0Hn2/download.jpg",
            "title": "Our Mission",
            "description": "At Doc House, we are dedicated to providing top-quality dental care in a comfortable and friendly environment. Our goal is to make every patient feel at ease and provide them with the best possible treatment options."
        },
        {
            "image": "https://i.ibb.co.com/KcGn0xDc/generous-dental-benefits-for-all-genesis-members.jpg",
            "title": "Our Team",
            "description": "Our team consists of highly trained and experienced dental professionals who are committed to delivering exceptional care. Each member is passionate about helping you achieve a healthy, beautiful smile."
        },
        {
            "image": "https://i.ibb.co.com/j9TF26br/istockphoto-1485043284-612x612.jpg",
            "title": "State-of-the-Art Facilities",
            "description": "We use the latest dental technology and equipment to ensure our patients receive the most advanced treatments. Our modern clinic is designed with your comfort and well-being in mind."
        },
        {
            "image": "https://i.ibb.co.com/pvXfLwQr/photo-1609840114035-3c981b782dfe.jpg",
            "title": "Patient Care",
            "description": "At Doc House, patient care is our priority. From the moment you walk in, you’ll be treated with kindness and respect. We work with you to develop personalized care plans for your dental health."
        },
        {
            "image": "https://i.ibb.co.com/v66PfsN8/images.jpg",
            "title": "Our Values",
            "description": "We believe in integrity, trust, and transparency. Our clinic upholds the highest ethical standards and works to build long-lasting relationships with every patient we serve."
        },
        {
            "image": "https://i.ibb.co.com/sGNNVtk/pexels-olly-3779705.jpg",
            "title": "Why Choose Us",
            "description": "With years of experience and a focus on patient comfort, [Clinic Name] is the ideal choice for all your dental care needs. We offer a wide range of treatments, from routine cleanings to advanced procedures."
        }
    ]

    return (
        <div>
            <Helmet>
                <title>About | Doc House</title>
            </Helmet>
            <img className='md:h-[500px] h-[254px]' src={rs} alt="" />
            <img className='absolute top-20 md:right-2/4' src={g6} alt="" />
            {/* <img className='absolute bottom-1 left-40' src={g6} alt="" /> */}
            <img className='absolute top-20 md:left-2/3 left-40' src={g7} alt="" />
            <div className='md:top-48 top-28 ms-20 absolute'>
                <h2 className=' text-white'>Home/ About</h2>
                <h2 className='uppercase text-3xl font-bold text-white'>About Us</h2>
            </div>
            <section className="bg-white dark:bg-white">
                <div className="container px-6 py-10 mx-auto">
                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                        {
                            cards.map((item, index) => (
                                <div
                                    key={index}
                                    className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                >
                                    <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                        <h2 className="mt-4 text-xl font-semibold text-white capitalize">{item.title}</h2>
                                        <p className="mt-2 text-sm tracking-wider text-white uppercase">{item.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;