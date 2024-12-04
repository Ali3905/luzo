"use client";
import React from 'react';
import Navbar from '../../../../../../components/Navbar';
import Footer from '../../../../../../components/Footer';
import BillDetails from './BillDetails';
import Offers from './Offers';
import ChooseOffers from './ChooseOffer';
import LocationSupport from './LocationSupport';
import BottomSheet from './BottomSheet';
import { Provider } from "react-redux";
import store from "../../../../../../redux/store";

const Page = () => {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <div className='bg-gray-100'>
          <LocationSupport />
          {/* <DateTime/> */}
          <ChooseOffers />
          <BillDetails />
          <Offers />
          <BottomSheet />
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

export default Page;
