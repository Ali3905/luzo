"use client";
import React from "react";
import { ChevronRight, CircleX } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { clearOffer } from "../../../../../../redux/cartSlice";

const ChooseOffers = ({ onApplyOffer }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const appliedOffer = useSelector((state) => state.cart.appliedOffer);

  const handleRemoveOffer = (e) => {
    e.stopPropagation(); // Prevent navigation when clearing the offer
    dispatch(clearOffer());
  };

  const handleChooseOffer = () => {
    if (appliedOffer) {
      // Trigger SuccessfullyApplied bottom sheet
      onApplyOffer(appliedOffer);
    } else {
      // Navigate to the offers page
      router.push("cart/offers");
    }
  };

  return (
    <div
      className="py-2 flex mt-2 m-2 p-2 rounded-xl justify-between bg-white items-center cursor-pointer"
      onClick={handleChooseOffer}
    >
      <div className="text-[14px]">
        {appliedOffer ? (
          <>
            <p className="font-semibold">Offer Applied</p>
            <p className="text-blue-500">{appliedOffer.code}</p>
          </>
        ) : (
          <p className="text-gray-500">Choose Offer</p>
        )}
      </div>
      {appliedOffer ? (
        <CircleX
          onClick={handleRemoveOffer}
          className="cursor-pointer text-red-400 hover:text-red-600"
        />
      ) : (
        <ChevronRight className="text-gray-400" />
      )}
    </div>
  );
};

export default ChooseOffers;
