'use client'
import { Baby, ChevronDown, ChevronUp, Plus, Search } from "lucide-react";
import { useState } from "react";
import BottomSheet from "./BottomSheet"

const MainContent = ({ selectedService, serviceData }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle dropdown
  };

  // const serviceInfo = serviceData[selectedService] || {};

  // const services = [
  //   {
  //     serviceName:'Nail Application',
  //     name: "Get Polish",
  //     icon: <Baby />,
  //     price: "From 1000 + GST",
  //     buttonText: "ADD"
  //   },
  //   {
  //     serviceName:'Nail Application',
  //     name: "Spa Treatment",
  //     icon: <Baby />,  
  //     price: "From 1500 + GST",
  //     buttonText: "ADD"
  //   },
  //   {
  //     serviceName:'Nail Application',
  //     name: "Haircut",
  //     icon: <Baby />,  // Replace with relevant icons for each service
  //     price: "From 500 + GST",
  //     buttonText: "ADD"
  //   }
  //   // Add more services as needed
  // ];

  return (
    <div className="w-3/4">
      {/* <h2 className="text-xl font-bold">{selectedService }</h2>   */}
      {selectedService && (
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
            {selectedService?.services?.map((service, index) => (
              <div key={index} className=" border-gray-500 border-b-4 border-b-gray-200">
                <div
                  className="flex justify-between items-center p-2 cursor-pointer"
                  onClick={() => toggleDropdown(index)}
                >
                  {service.name}
                  {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}
                >
                  <div className="p-2 flex items-center justify-between text-gray-600">
                    <div>
                      {service.gender === "Women" ? <Baby /> : service.gender === "Men" ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-person-standing"><circle cx="12" cy="5" r="1" /><path d="m9 20 3-6 3 6" /><path d="m6 8 6 2 6-2" /><path d="M12 10v4" /></svg> : ""}
                      <p className="font-semibold ">{service.name}</p>
                      <p className="text-[10px]">{service.one_line_description}</p>
                      <p className="text-[10px]">{service.display_rate}</p>
                    </div>
                    <button className="text-blue-200 font-semibold border shadow-md rounded-md px-2 flex gap-1" onClick={service?.customizations?.length > 0 ?handleOpen: ""}>ADD {service?.customizations?.length > 0 ? <Plus /> : ""} </button>
                    <BottomSheet isOpen={isOpen} onClose={handleClose} service={service} />
                  </div>

                </div>
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