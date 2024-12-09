"use client";

import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { applyOffer } from "../../../../../../../redux/cartSlice";
import Confetti from "react-confetti";

const OfferCard = ({ offer }) => {
  const divRef = useRef(null);
  const [divHeight, setDivHeight] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isOfferApplied, setIsOfferApplied] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();
  const { serviceId, id } = useParams();

  useEffect(() => {
    if (divRef.current) {
      setDivHeight(divRef.current.offsetHeight);
    }

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleApplyOffer = () => {
    dispatch(applyOffer(offer));
    setIsOfferApplied(true);

    // Redirect to cart page with a query parameter to indicate the offer was applied
    setTimeout(() => {
      router.push(
        `/partner-details/${id}/service-details/${serviceId}/cart?offerApplied=true`
      );
    }, 2000); // Wait briefly to display confetti before redirecting
  };

  return (
    <div className="border p-2 m-2 rounded-r-xl ml-[50px] relative" ref={divRef}>
      {/* Show Confetti when offer is applied */}
      {isOfferApplied && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={300}
          recycle={false}
          gravity={0.2}
        />
      )}
      <p
        className={`-rotate-90 absolute font-bold text-white bg-blue-300 w-full text-center py-2`}
        style={{
          top: `${divHeight / 2.65}px`,
          left: `-${divHeight / 1.6}px`,
          width: `${divHeight}px`,
        }}
      >
        {offer.code}
      </p>
      <div className="flex justify-between">
        <div>
          <h1 className="font-semibold">{offer.title}</h1>
        </div>
        <div
          className="font-bold cursor-pointer text-blue-400"
          onClick={handleApplyOffer}
        >
          APPLY
        </div>
      </div>
      <p className="text-[12px]">
        {offer.luzo_offers_validities.length === 7
          ? "Valid on all days"
          : "Valid on " +
            offer.luzo_offers_validities.map(
              (ele, i) =>
                " " +
                (i === offer.luzo_offers_validities.length - 1 ? "and " : "") +
                ele.working_day
            )}
      </p>
      <p className="text-[14px]">{offer.description}</p>
      <p className="border-b border-blue-400 text-blue-400 text-[12px] font-semibold max-w-[12%] flex-1 items-start text-left">
        T&C +
      </p>
    </div>
  );
};

export default OfferCard;
