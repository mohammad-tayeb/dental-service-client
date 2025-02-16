import { useState, useEffect } from "react";
import ContactUs from "../Components/ContactUs";
import ExpertDoctorCard from "../Components/ExpertDoctorCard";
import HomeBanner from "../Components/HomeBanner";
import HomePageCards from "../Components/HomePageCards";
import HomePageHeading from "../Components/HomePageHeading";
import OurService from "../Components/OurService";
import ReviewSection from "../Components/ReviewSection";

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate ReviewSection loading
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Adjust timing if necessary

        return () => clearTimeout(timer); // Cleanup timeout
    }, []);

    return (
        <div>
            <HomeBanner />
            <OurService />
            <HomePageCards />
            <HomePageHeading
                heading={'What Our Patients Say'}
                subHeading={'Excellent service from start to finish! The dentists here really take the time to explain things and make sure you\'re comfortable throughout the procedure.'}
            />
            {loading ?
                <div className="flex justify-center mt-10">
                    <span className="loading loading-spinner loading-lg"></span>
                </div> : <ReviewSection />}
            <HomePageHeading
                heading={'Our Expert Doctors'}
                subHeading={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'}
            />
            <ExpertDoctorCard />
            <ContactUs />
        </div>
    );
};

export default Home;
