
// import Banner from "../Banner/Banner";
import InternShip from "../InternShip/InternShip";
import Mission from "../Mission/Mission";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";



const Home = () => {
    return (
        <div>
            {/* <Banner></Banner> */}
            <Services></Services>
            <Testimonials></Testimonials>
            <Mission></Mission>
            <InternShip></InternShip>
        </div>
    );
};

export default Home;