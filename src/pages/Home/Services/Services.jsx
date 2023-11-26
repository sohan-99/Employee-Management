import { useEffect, useState } from "react";
import ServiceType from "./ServiceType";


const Services = () => {
    const [pakage, setPakage]= useState([]);
    // console.log(pakage);
    useEffect(() => {
    fetch('/pakage.json')
    .then(res => res.json())
    .then(data => setPakage(data))
    })

    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-600 text-center my-6">We are Provide Services</h2>
            <div className="  grid lg:grid-cols-3 md:grid-cols-2 gap-y-3 lg:ml-4 gap-x-3">
            {
                pakage.map(pakage1=> <ServiceType key={pakage1.id} pakage1={pakage1}></ServiceType>)
            }
            </div>
        </div>
    );
};

export default Services;