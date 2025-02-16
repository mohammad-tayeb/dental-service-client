

const HomePageHeading = ({ heading, subHeading }) => {
    return (
        <div className="text-center md:px-36 mx-5 mt-28 text-black">
            <h1 className="text-4xl font-bold">{heading}</h1>
            <p className=" mt-5">{subHeading}</p>
        </div>
    );
};

export default HomePageHeading;