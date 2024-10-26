"use client"
import { useState } from 'react';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const BottomSheet2 = ({ isOpen, onClose, service, salon }) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-end bg-black bg-opacity-10">
      <div className="bg-white w-full max-w-lg rounded-t-2xl">
        
        {/* Image container with close button positioned on top-right */}
        <div className="relative w-full ">
          {/* Close button positioned at the top-right */}
          <button 
            onClick={onClose} 
            className="absolute top-2 right-2  text-white text-xl">
            &#10005;
          </button>
          
          {/* Centered image */}
          <div className="flex justify-center items-center w-full">
            <Image src='/banner_down.jpg' width={300} height={300} className='w-full rounded-md' alt="Banner" />
          </div>
        </div>
        
        <div className="p-4">
          <p className='text-[12px] text-center pb-4'>To book your appointment, download the LUZO app</p>
          <Link href={salon?.salon_share_link}>
          <button className="bg-blue-500 popup_btn_gradient text-white w-full py-2 rounded-md font-semibold">
            Download app
          </button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default BottomSheet2;
