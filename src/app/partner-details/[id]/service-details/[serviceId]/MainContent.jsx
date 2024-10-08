'use client'
import { Baby, ChevronDown, ChevronUp, Plus, Search } from "lucide-react";
import { useEffect, useState } from "react";
import BottomSheet from "./BottomSheet"
import { useParams } from "next/navigation";
import { serviceData } from "./ServiceData";
import axios from "axios";

const MainContent = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [services, setServices] = useState(serviceData.data.sub_categories)
  const { id, serviceId } = useParams()

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle dropdown
  };

  const fetchServices = async () => {
    try {
      const res = await axios({
        method: "post",
        baseURL: `${process.env.NEXT_PUBLIC_TEST_HOST}/api/v1`,
        url: "/salon/subCategories",
        params: {
          main_category_id: serviceId.split("-")[serviceId.split("-").length - 1],
          salon_id: id.split("-")[id.split("-").length - 1]
        }
      })
      setServices(res.data.data.sub_categories)

    } catch (error) {
      console.log(error);
      alert("Could not fetch services")
    }
  }

  useEffect(() => {
    fetchServices()
  }, [serviceId])
  return (
    <div className="w-3/4">
      {/* <h2 className="text-xl font-bold">{selectedService }</h2>   */}
      {services && (
        <div className="mt-4 bg-white">
          <div className="border mx-2 flex items-center rounded-md p-2">
            <Search size={15} className="mr-2" />
            <input
              type="text"
              placeholder="Search for service..."
              className="focus:outline-none"
            />
          </div>
          <div className="flex mt-1 mx-2 sm:justify-start justify-between gap-2">
            <button className="border rounded-md px-10"> Men</button>
            <button className="border rounded-md px-10"> Women</button>
          </div>

          <div className="">
            {services?.map((service, index) => (
              <div key={index} className=" border-gray-500 border-b-4 border-b-gray-200">
                <div
                  className="flex justify-between items-center p-2 cursor-pointer"
                  onClick={() => toggleDropdown(index)}
                >
                  {service.name}
                  {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                </div>
                {
                  service?.services?.map((ele, i) => {
                    return <div
                      className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}
                      key={i}
                    >
                      <div className="p-2 flex items-center justify-between text-gray-600">
                        <div>
                          {ele.gender === "Women" ? <Baby /> : ele.gender === "Men" ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-person-standing"><circle cx="12" cy="5" r="1" /><path d="m9 20 3-6 3 6" /><path d="m6 8 6 2 6-2" /><path d="M12 10v4" /></svg> : ""}
                          <p className="font-semibold ">{ele.name}</p>
                          <p className="text-[10px]">{ele.one_line_description}</p>
                          <p className="text-[10px]">{ele.display_rate}</p>
                        </div>
                        <button className="text-blue-200 font-semibold border shadow-md rounded-md px-2 flex gap-1" onClick={ele?.customizations?.length > 0 ? handleOpen : ""}>ADD {ele?.customizations?.length > 0 ? <Plus /> : ""} </button>
                        <BottomSheet isOpen={isOpen} onClose={handleClose} service={ele} />
                      </div>

                    </div>
                  })
                }
              </div>
            ))}
          </div>
          {/* <p className="text-gray-700">  
              <strong>Description:</strong> {serviceInfo.description}  
            </p>  
            <p className="text-gray-700">  
              <strong>Price:</strong> {serviceInfo.price}  
            </p>  
            <p className="text-gray-700">  
              <strong>Duration:</strong> {serviceInfo.duration}  
            </p>   */}
        </div>
      )}
    </div>
  );
};

export default MainContent;