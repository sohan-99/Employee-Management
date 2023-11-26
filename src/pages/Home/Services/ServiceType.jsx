/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const ServiceType = ({ pakage1 }) => {
    // console.log(pakage1);
    const { img, service_name, id } = pakage1 || {};
    return (
        <Link to={service_name}>
            <div className='lg:my-6 lg:mx-2 my-5 mx-2'>
                <img className='lg:w-full md:w-[350px] w-[300px] lg:h-[450px] md:h-[230px] rounded-3xl' src={img} alt={id} />
            </div>
        </Link>
    );

};

export default ServiceType;