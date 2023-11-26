import { useLoaderData } from "react-router-dom";


const ServiceDetails = () => {
    const service= useLoaderData();
    console.log(service);
    const {img,service_name,service_details,features,Cost,id  } = service;
    return (
        <div className="text-center py-5 font-semibold lg:text-2xl md:text-xl text-lg">
            <h2 className="lg:text-5xl md:text-3xl text-xl font-extrabold text-center my-3">Sercvice details</h2>
            <img className=" mx-auto lg:h-[450px] lg:w-[650px]" src={img} alt={id} />
            <h2 className="text-center py-5 font-semibold lg:text-3xl md:text-2xl text-lg">Service Name : {service_name}</h2>
            <h2>Service Details : {service_details}</h2>
            <h2 className="py-5">Service features : {features}</h2>
            <h2>Service Cost: <a>{Cost}</a></h2>
        </div>
    );
};

export default ServiceDetails;