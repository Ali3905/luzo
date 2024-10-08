import axios from "axios";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import { serviceData } from "./ServiceData";


const Sidebar = ({ onSelect }) => {
  // const [services, setServices] = useState(serviceData.data.sub_categories)
  const [salonInfoServices, setSalonInfoServices] = useState([])
  const { id } = useParams()
  const router = useRouter()

  const fetchSalonDetails = async () => {
    try {
      const res = await axios({
        method: "post",
        url: `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/v1/salon/${id.split("-")[id.split("-").length - 1]}`,
        params: {
          customerId: 518,
          latitude: "na",
          longitude: "na",
          id: id
        }
      });
      setSalonInfoServices(res.data?.data?.services)
    } catch (error) {
      console.error("Error fetching salon info:", error);

      return (
        <div className='flex justify-center items-center w-full h-screen'>
          {error.response?.status === 404 ? "Salon not found (404)" : "Could not load the salon info"}
        </div>
      )
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

  useEffect(() => {
    fetchSalonDetails()
    // fetchServices()
  }, [])


  return (
    <div className="w-1/4 bg-gray-100 border-r-4 border-r-gray-200">
      {salonInfoServices?.map((service) => (
        <div key={service.name} className="mb-2 flex" onClick={()=>router.push(`/partner-details/${id}/service-details/service-${service.id}`)}>
          <button
            onClick={() => onSelect(service)}
            className="flex text-[12px] text-center flex-col items-center w-full rounded hover:bg-gray-200"
          >
            <Image src={service?.image_url} alt="logo icon" width="50" height="50" className="rounded-full" />

            <div className=" text-[12px] text-center sm:text-[18px]">
              {service.name}
              {/* <span className="sm:text-[18px] text-center">({service.services.length})</span> */}
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;