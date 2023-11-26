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
            <div className="  grid lg:grid-cols-2 md:grid-cols-2 gap-y-3 lg:ml-4 gap-x-3">
            {
                pakage.map(pakage1=> <ServiceType key={pakage1.id} pakage1={pakage1}></ServiceType>)
            }
            </div>
            {/* <div className="flex justify-center">
                <Link to='/cghvjbknlm'>
                    <img src="https://i.ibb.co/rZcBypV/400648865-1686218775236269-8777385948662429942-n.jpg" alt="" />
                </Link>
                <Link to='/nlm'>
                    <img src="https://i.ibb.co/4T9p37Z/400739759-1043810796933309-5527730604920491703-n.jpg" alt="" />
                </Link>
                <Link to='/m'>
                    <img src="https://i.ibb.co/qs6wgnX/400012034-274362428481021-2051172732499477513-n.jpg" alt="" />
                </Link>
            </div> */}
        </div>
    );
};

export default Services;