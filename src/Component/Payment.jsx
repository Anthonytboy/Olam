import React from 'react';
import Image from '../assets/Image.png';
import Image2 from '../assets/Image2.gif'

const Payment = () => {
  return (
    <>
      <div className="shadow-md shadow-gray-500 rounded-xl p-4 ">
        <h1 className="text-xl pb-10 font-bold text-center ">
          ACCOUNT DETAILS FOR PAYMENT BELOW!{' '}
        </h1>
        <img
          src={Image}
          alt=""
          className="object-center mx-auto w-40 animate-bounce"
        />
      </div>

      <div className="text-center shadow-md shadow-gray-500 rounded-xl p-4 bg-lime-900 text-white ">
        <h1 className="text-xl pb-10 font-bold">
          {' '}
          BELOW IS THE AUTHORIZED PAYMENT DETAILS FROM OLAM NIGERIA SALES
          DEPARTMENT
        </h1>
        <h2 className="text-lg pb-4 font-semibold">
          MAKE PAYMENT FOR YOUR PERMIT REGISTRATION TO THE AUTHORIZED PAYMENT
          DETAILS PROVIDED BELOW
        </h2>

        <div className="text-lg pb-2 font-semibold text-center space-y-5 py-5 my-10 shadow-lg shadow-gray-800 rounded-lg">
          <h1 className="text-3xl font-bold py-4 text-black">
            Company's Account Details For Bookings and Registration
          </h1>
          <p className="text-lg pb-2 font-semibold">
            Account Name:{' '}
            <span className="font-bold uppercase">
              {' '}
              OLAM FARMS INTEGRATED SERVICES
            </span>
          </p>
          <p className="text-lg pb-2 font-semibold">
            Account Number:{' '}
            <span className="font-bold uppercase">5014253477</span>
          </p>
          <p className="text-lg pb-2 font-semibold">
            Bank Name:{' '}
            <span className="font-bold uppercase">SAFE HEAVEN BANK</span>
          </p>
        </div>

        <div className="text-lg pb-2 font-semibold text-center space-y-5 mx-auto shadow-lg shadow-gray-800 rounded-lg py-5 my-10">
          <h1 className="text-3xl font-bold py-4 text-black">
            Olams Signatory Account Details For Bookings
          </h1>
          <p>
            Bank Name:{' '}
            <span className="font-bold uppercase "> First Bank </span>
          </p>
          <p>
            Account Number:{' '}
            <span className="font-bold uppercase "> 3221097378</span>
          </p>
          <p>
            Account Name:{' '}
            <span className="font-bold uppercase "> Nwoga Oliver</span>
          </p>
        </div>

        <p className="text-lg pb-2 font-semibold">
          Once payment is made, kindly fill in the forms correctly with the
          required information and also upload the vital files where necessary
          before submission. Our team will surely reach out to you for
          confirmation and approval of your proposal within 24 hours so as to
          proceed with the next line of action.
        </p>
      </div>

      <div className="shadow-md shadow-gray-500 rounded-xl p-4 text-center mt-4 ">
        <h1 className="text-xl pb-10 font-medium">VERIFIED COMPANY </h1>
        <img
          src={Image2}
          alt=""
          className="object-center mx-auto w-40 animate-bounce"
        />
      </div>
    </>
  );
};

export default Payment;
