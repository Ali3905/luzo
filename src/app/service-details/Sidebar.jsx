import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { serviceData } from "./ServiceData";

const Sidebar = ({ onSelect }) => {
  // const [services, setServices] = useState(serviceData.data.sub_categories)
  const [services, setServices] = useState(serviceData.data.sub_categories)

  const fetchServices = async() => {
    try {
      const res = await axios({
        method: "post",
        baseURL: `${process.env.NEXT_PUBLIC_TEST_HOST}/api/v1`,
        url: "/salon/subCategories",
        params: {
          main_category_id: 11,
          salon_id: 811
        }
      })
      setServices(res.data.data.sub_categories)
      console.log(res.data);
      
    } catch (error) {
      console.log(error);
      alert("Could not fetch services")
    }
  }
  // const services = [
  //   { name: 'Hair Colour', count: 6 },
  //   { name: 'Nail Bar', count: 2 },
  //   { name: 'Face', count: 3 },
  //   { name: 'Treatments', count: 2 },
  //   { name: 'Balayage', count: 2 },
  //   { name: 'Ombre', count: 2 },
  //   { name: 'Massage & Spa', count: 2 },
  //   { name: 'Manicure & Pedicure', count: 2 },
  //   { name: 'Waxing, Bleaching & Threading', count: 2 },
  // ];

  useEffect(()=>{
    fetchServices()
  }, [])


  return (
    <div className="w-1/4 bg-gray-100 border-r-4 border-r-gray-200">
      {services?.map((service) => (
        <div key={service.name} className="mb-2 flex">
          <button
            onClick={() => onSelect(service)}
            className="flex text-[12px] text-center flex-col items-center w-full rounded hover:bg-gray-200"
          >
            <Image src="/img/icon.webp" alt="logo icon" width="50" height="50" className="rounded-full" />

            <div className=" text-[12px] text-center sm:text-[18px]">{service.name} <span className="sm:text-[18px] text-center">({service.services.length})</span>  </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;