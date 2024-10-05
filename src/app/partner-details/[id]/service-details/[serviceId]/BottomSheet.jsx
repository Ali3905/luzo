"use client"
import { useState } from 'react';

const BottomSheet = ({ isOpen, onClose, service }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-end bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-lg rounded-t-2xl p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">{service.name}</h2>
          <button onClick={onClose} className="text-gray-500">
            &#10005;
          </button>
        </div>
        {/* <p className="text-gray-500 mb-2">Basic</p> */}
        <div className="mb-4">
          <h3 className="font-semibold">{service.customizations?.[0]?.name}</h3>
          <p className="text-sm text-gray-500 mb-2">{service.customizations?.[0]?.instruction}</p>
          {
            service.customizations?.[0]?.options?.map((ele, i) => {
              return <div className="flex items-center justify-between border rounded-md px-2 py-2 mb-2" key={i}>
                <span>{ele.name}</span>
                <span>From ₹ {ele.rate}</span>
                <input type="radio" name="product" className="form-radio" />
              </div>
            })
          }
          {/* <div className="flex items-center justify-between border rounded-md px-2 py-2">
            <span>Without Ammonia</span>
            <span>From ₹ 1,500</span>
            <input type="radio" name="product" className="form-radio" />
          </div> */}
        </div>
        <button className="bg-blue-500 text-white w-full py-2 rounded-md font-semibold">
          Add Service
        </button>
      </div>
    </div>
  );
};

export default BottomSheet;
