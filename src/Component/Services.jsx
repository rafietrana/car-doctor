import { useEffect, useState } from "react";
import servicesCard from './ServicesCard';
import ServicesCard from "./ServicesCard";
 
 

 

const Services = () => {
    const [servicesData, setServicesData] = useState([]);
    console.log('servicess all data is', servicesData);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServicesData(data))
    })
    return (
        <div className="space-y-6 my-12">
               <div className="flex flex-col space-y-3 my-14 justify-center items-center">
                    <p className="text-red-500">Service</p>
                    <h1 className="font-popin font-bold text-4xl">Our Service Area</h1>
                    <p className="w-6/12 text-center">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
               </div>
               <div className="grid lg:grid-cols-3 gap-3 md:grid-cols-2 grid-cols-1">
                      {
                         servicesData.map(dataServices => <ServicesCard key={dataServices.service_id} dataServices={dataServices}></ServicesCard>)
                      }
               </div>

  
        </div>
    );
};

export default Services;