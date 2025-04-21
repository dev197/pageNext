'use client';

import Image from "next/image";
import SwiperComponents from "./components/SwipperSlider";
import { Accordion } from "@/components/ui/accordion";
import { AccordionDemo } from "./components/Accordian";
import { SelectDemo } from "./components/SelectComponent";
import { ScrollAreaDemo } from "./components/ScrollArea";

export default function Home() {
  return (
    <>
      {/* This section of code is for desktop view */}
      <div className="hidden md:flex flex-row items-start justify-center h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
        {/* Left Section */}
        <div className="w-[60%] h-screen flex flex-col items-center justify-center bg-gray-800 text-white sticky top-0">
          <div className="flex flex-col items-center">
            {/* Optional image */}
            {/* 
            <Image
              src="/lamp.jpeg"
              alt="Left Section Image"
              width={300}
              height={400}
              className="rounded-lg shadow-lg"
            /> 
            */}

            <SwiperComponents />
            <div className="flex flex-col items-center mt-4">
              <h1 className="text-3xl font-bold mt-10">Studio Lamp</h1>
              <p>
                <span className="text-lg font-semibold">Price:</span>
                <span className="text-lg font-semibold text-yellow-500"> $49.99</span>
                <span className="text-red-500 text-md font-extralight">(-66%)</span>
              </p>
              <SelectDemo />
            </div>
          </div>
          <button className="w-44 h-12 text-white text-lg font-semibold mt-8 rounded-3xl bg-yellow-500">
            Buy Now
          </button>
          <button className="w-44 h-12 text-white text-lg font-semibold mt-5 rounded-3xl bg-orange-500">
            Add to Wishlist
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full h-full flex flex-col items-center justify-start bg-gray-700 text-white overflow-y-auto">
          <div>
            <p className="w-[90%] p-14 text-2xl font-semibold">
              LumiGlow Touch Lamp – Sleek LED Mood Light with Dimmable Brightness & Color Modes – Tap Control, USB Rechargeable – Perfect for Bedrooms, Desks, and Cozy Corners!
            </p>
            <h1 className="text-red-400 px-14 w-[90%] text-2xl font-bold">Offers %</h1>
          </div>
          <div className="flex flex-row gap-16 w-[90%] items-start">
            <span className="w-40 h-32 border-2 shadow-2xl border-gray-500 rounded-sm flex flex-col items-center justify-center mt-4">
              <p className="text-yellow-200 text-left w-full p-1.5 font-semibold">
                Bank Offers
              </p>
              <p className="text-[14px] p-1.5 font-semibold">
                10% off on HDFC Bank Credit Card
              </p>
            </span>
            <span className="w-40 h-32 border-2 shadow-2xl border-gray-500 rounded-sm flex flex-col items-center justify-center mt-4">
              <p className="text-yellow-200 text-left w-full p-1.5 font-semibold">
                Bank Offers
              </p>
              <p className="text-[14px] p-1.5 font-semibold">
                10% off on HDFC Bank Credit Card
              </p>
            </span>
            <span className="w-40 h-32 border-2 shadow-2xl border-gray-500 rounded-sm flex flex-col items-center justify-center mt-4">
              <p className="text-yellow-200 text-left w-full p-1.5 font-semibold">
                Bank Offers
              </p>
              <p className="text-[14px] p-1.5 font-semibold">
                10% off on HDFC Bank Credit Card
              </p>
            </span>
          </div>
          <div className="flex flex-row mt-10 gap-10 w-[90%] items-start">
            <div className="flex flex-col gap-1 items-center justify-center">
              <Image
                src="/cash-on-delivery.svg"
                alt="Right Section Image"
                width={60}
                height={60}
                className="rounded-full mt-4 bg-white" />
              <h1 className="text-sm font-bold mt-4">Cash on Delivery</h1>
            </div>
            <div className="flex flex-col gap-1 items-center justify-center">
              <Image
                src="/money-refund-dollar.svg"
                alt="Right Section Image"
                width={60}
                height={60}
                className="rounded-full mt-4 p-2 bg-white" />
              <h1 className="text-sm font-bold mt-4">7 Day Refund</h1>
            </div>
            <div className="flex flex-col gap-1 items-center justify-center">
              <Image
                src="/delivery-truck.svg"
                alt="Right Section Image"
                width={60}
                height={60}
                className="rounded-full mt-4 p-2 bg-white" />
              <h1 className="text-sm font-bold mt-4">Free Delivery</h1>
            </div>
            <div className="flex flex-col gap-1 items-center justify-center">
              <Image
                src="/lock.svg"
                alt="Right Section Image"
                width={60}
                height={60}
                className="rounded-full mt-4 p-2 bg-white" />
              <h1 className="text-sm font-bold mt-4">Secure Transaction</h1>
            </div>
            <div className="flex flex-col gap-1 items-center justify-center">
              <Image
                src="/shield.svg"
                alt="Right Section Image"
                width={60}
                height={60}
                className="rounded-full mt-4 p-2 bg-white" />
              <h1 className="text-sm font-bold mt-4">Trusted Seller</h1>
            </div>
          </div>
          <div className="w-[90%] gap-10 flex flex-row mt-10">
            <ScrollAreaDemo />
            <div className="w-48 h-72 border-2 border-gray-500 rounded-sm flex flex-col items-center justify-center">
              <h1 className="text-3xl w-full px-3  text-yellow-500">$49.99</h1>
              <h1 className="text-2xl w-full px-3 text-green-600">
                In Stock
              </h1>
              <div className="flex flex-col gap-1 items-center mt-3 justify-start text-sm">
                <div className="flex w-full flex-row gap-1 mt-1">
                  <span>
                    Ship From
                  </span>
                  <span>
                    Shopify
                  </span>
                </div>
                <div className="flex w-full flex-row gap-2 mt-1">
                  <span>
                    Sold By
                  </span>
                  <span>
                    X4 Cart
                  </span>
                </div>
                <div className="flex w-full flex-row gap-1 mt-1">
                  <span>
                    Payment
                  </span>
                  <span>
                    Secure
                  </span>
                </div>
              </div>
              <button className="w-40 h-10 text-blue-950 mt-6 rounded-3xl bg-white">
                Add to Cart
              </button>
            </div>
            <div className="flex flex-col">
              <h1 className="text-3xl mb-3">
                Trusted Brand
              </h1>
              <div className="flex flex-row gap-2 mt-3 items-center h-5">
                <Image
                  src="/verified_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="Right Section Image"
                  width={20}
                  height={20}
                  className="rounded-lg shadow-lg" />
                <p>77% positive ratings from 10K+ customers</p>
              </div>
              <div className="flex flex-row gap-2 mt-3 items-center h-5">
                <Image
                  src="/verified_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="Right Section Image"
                  width={20}
                  height={20}
                  className="rounded-lg shadow-lg" />
                <p>100K+ recent orders from this brand</p>
              </div>
              <div className="flex flex-row gap-2 mt-3 items-center h-5">
                <Image
                  src="/verified_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="Right Section Image"
                  width={20}
                  height={20}
                  className="rounded-lg shadow-lg" />
                <p>5+ years on Shopify</p>
              </div>
              <div className="flex flex-row gap-2 mt-3 items-center h-5">
                <Image
                  src="/verified_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="Right Section Image"
                  width={20}
                  height={20}
                  className="rounded-lg shadow-lg" />
                <p>4.2 rating by customers</p>
              </div>
            </div>
          </div>
          <div className="w-[90%] mt-10">
            <div className="flex flex-row gap-10 mt-3 items-center">
              <Image
                src="/ChatGPT Image Apr 21, 2025, 12_01_58 AM.png"
                alt="Right Section Image"
                width={150}
                height={250}
                className="rounded-lg shadow-lg" />
              <Image
                src="/images.jpeg"
                alt="Right Section Image"
                width={160}
                height={260}
                className="rounded-lg shadow-lg" />
              <Image
                src="/images (1).jpeg"
                alt="Right Section Image"
                width={150}
                height={250}
                className="rounded-lg shadow-lg" />
              <Image
                src="/ChatGPT Image Apr 21, 2025, 12_01_58 AM.png"
                alt="Right Section Image"
                width={150}
                height={250}
                className="rounded-lg shadow-lg" />
            </div>
          </div>
          <div className="w-[90%] mt-10 mb-52 flex flex-row gap-10">
            <div className="flex w-96 h-full flex-col">
              <h1 className="text-3xl text-green-300 mb-3">
                Customer Reviews
              </h1>
              <div className="flex w-full flex-col gap-2 mt-2 items-center h-5">
                <div className="flex w-full flex-row gap-2 mt-3 items-center h-5">
                  <Image
                    src="/person_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
                    alt="Right Section Image"
                    width={35}
                    height={35}
                    className="rounded-full p-1 shadow-lg border-2 border-white" />
                  <p className="text-xl">
                    Dev Gupta
                  </p>
                </div>
                <p className="w-full">Great Product </p>
                <p className="w-full">Rating Given
                  <span className="text-yellow-300 ml-2">4.5</span>
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-25 items-center h-5">
                <div className="flex w-full flex-row gap-2 mt-3 items-center h-5">
                  <Image
                    src="/person_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
                    alt="Right Section Image"
                    width={35}
                    height={35}
                    className="rounded-full p-1 shadow-lg border-2 border-white" />
                  <p className="text-xl">
                    Muskan Gupta
                  </p>
                </div>
                <p className="w-full">Really useful Product and good to use </p>
                <p className="w-full">Rating Given
                  <span className="text-yellow-300 ml-2">4.5</span>
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-25 items-center h-5">
                <div className="flex w-full flex-row gap-2 mt-3 items-center h-5">
                  <Image
                    src="/person_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
                    alt="Right Section Image"
                    width={35}
                    height={35}
                    className="rounded-full p-1 shadow-lg border-2 border-white" />
                  <p className="text-xl">
                    Anuraj Singh
                  </p>
                </div>
                <p className="w-full">Best lamp for multipurpose use </p>
                <p className="w-full">Rating Given
                  <span className="text-yellow-300 ml-2">4.2</span>
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-25 items-center h-5">
                <div className="flex w-full flex-row gap-2 mt-3 items-center h-5">
                  <Image
                    src="/person_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
                    alt="Right Section Image"
                    width={35}
                    height={35}
                    className="rounded-full p-1 shadow-lg border-2 border-white" />
                  <p className="text-xl text-indigo-50">
                    Aastha Sharma
                  </p>
                </div>
                <p className="w-full">Really love the Product at this price range</p>
                <p className="w-full">Rating Given
                  <span className="text-yellow-300 ml-2">4.8</span>
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mt-4">Frequently Asked Questions</h2>
              <AccordionDemo />
            </div>
          </div>
        </div>
      </div>
      {/* This section of code is for mobile view */}
      <div className="flex md:hidden flex-col items-center justify-center h-fit bg-gray-700 text-white">
        <p className="p-4 text-[14px] font-extralight">
          LumiGlow Touch Lamp – Sleek LED Mood Light with Dimmable Brightness & Color Modes – Tap Control, USB Rechargeable – Perfect for Bedrooms, Desks, and Cozy Corners!
        </p>
        <div className="flex flex-col items-center">
          <SwiperComponents />
          <div className="flex flex-col items-center mt-2">
            <h1 className="text-3xl font-bold mt-2">Studio Lamp</h1>
            <p>
              <span className="text-lg font-semibold">Price:</span>
              <span className="text-lg font-semibold text-yellow-500"> $49.99</span>
              <span className="text-red-500 text-md font-extralight">(-66%)</span>
            </p>
            <SelectDemo />
          </div>
        </div>
        <button className="w-36 h-10 text-white text-lg font-medium mt-5 rounded-3xl bg-yellow-500">
          Buy Now
        </button>
        <button className="w-36 h-10 text-white text-lg font-medium mt-3 rounded-3xl bg-orange-500">
          Add to Wishlist
        </button>
        <h1 className="text-red-400 text-2xl w-full pl-10 font-bold">Offers %</h1>
        <div className="flex flex-row gap-4 items-start">
          <span className="w-32 h-24 border-2 shadow-2xl border-gray-500 rounded-sm flex flex-col items-center justify-center mt-4">
            <p className="text-yellow-200 text-left w-full p-1.5 font-semibold">
              Bank Offers
            </p>
            <p className="text-[14px] p-1.5 font-semibold">
              10% off on HDFC Bank Credit Card
            </p>
          </span>
          <span className="w-32 h-24 border-2 shadow-2xl border-gray-500 rounded-sm flex flex-col items-center justify-center mt-4">
            <p className="text-yellow-200 text-left w-full p-1.5 font-semibold">
              Bank Offers
            </p>
            <p className="text-[14px] p-1.5 font-semibold">
              10% off on HDFC Bank Credit Card
            </p>
          </span>
        </div>
        <div className="flex flex-row mt-5 p-5 gap-2 items-start">
          <div className="flex flex-col gap-1 items-center justify-center">
            <Image
              src="/cash-on-delivery.svg"
              alt="Right Section Image"
              width={40}
              height={40}
              className="rounded-full mt-4 bg-white" />
            <h1 className="text-sm font-bold mt-2">Cash on Delivery</h1>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <Image
              src="/money-refund-dollar.svg"
              alt="Right Section Image"
              width={40}
              height={40}
              className="rounded-full mt-4 p-2 bg-white" />
            <h1 className="text-sm font-bold mt-2">7 Day Refund</h1>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <Image
              src="/lock.svg"
              alt="Right Section Image"
              width={40}
              height={40}
              className="rounded-full mt-4 p-2 bg-white" />
            <h1 className="text-sm font-bold mt-2">Secure Transaction</h1>
          </div>
        </div>
        <div className="flex flex-col py-6 px-4">
          <h1 className="text-xl mb-3">
            Trusted Brand
          </h1>
          <div className="flex flex-row gap-2 mt-3 items-center h-5">
            <Image
              src="/verified_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
              alt="Right Section Image"
              width={20}
              height={20}
              className="rounded-lg shadow-lg" />
            <p>77% positive ratings from 10K+ customers</p>
          </div>
          <div className="flex flex-row gap-2 mt-5 items-center h-5">
            <Image
              src="/verified_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
              alt="Right Section Image"
              width={20}
              height={20}
              className="rounded-lg shadow-lg" />
            <p>100K+ recent orders from this brand</p>
          </div>
          <div className="flex flex-row gap-2 mt-3 items-center h-5">
            <Image
              src="/verified_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
              alt="Right Section Image"
              width={20}
              height={20}
              className="rounded-lg shadow-lg" />
            <p>5+ years on Shopify</p>
          </div>
          <div className="flex flex-row gap-2 mt-3 items-center h-5">
            <Image
              src="/verified_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
              alt="Right Section Image"
              width={20}
              height={20}
              className="rounded-lg shadow-lg" />
            <p>4.2 rating by customers</p>
          </div>
        </div>
        <div className="w-full">
          <div className="p-4">
            <h4 className="mb-4 text-2xl text-red-400 font-medium leading-none">Key Features</h4>
            <p className="letter-spacing-2 text-sm leading-6">
              Adjustable Brightness, Touch Control, Energy Efficient LED, Color Modes, Flexible Neck or Arm
              , Portable and Lightweight
            </p>
          </div>
        </div>
        <div className="flex w-full p-5 h-fit flex-col">
          <h1 className="text-2xl text-green-300">
            Customer Reviews
          </h1>
          <div className="flex w-full flex-col gap-2 mt-2 items-center h-5">
            <div className="flex w-full flex-row gap-2 mt-3 items-center h-5">
              <Image
                src="/person_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
                alt="Right Section Image"
                width={25}
                height={25}
                className="rounded-full p-1 shadow-lg border-2 border-white" />
              <p className="text-xl">
                Dev Gupta
              </p>
            </div>
            <p className="w-full">Great Product </p>
            <p className="w-full">Rating Given
              <span className="text-yellow-300 ml-2">4.5</span>
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-25 items-center h-5">
            <div className="flex w-full flex-row gap-2 mt-3 items-center h-5">
              <Image
                src="/person_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
                alt="Right Section Image"
                width={25}
                height={25}
                className="rounded-full p-1 shadow-lg border-2 border-white" />
              <p className="text-xl">
                Muskan Gupta
              </p>
            </div>
            <p className="w-full">Really useful Product and good to use </p>
            <p className="w-full">Rating Given
              <span className="text-yellow-300 ml-2">4.5</span>
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-25 items-center h-5">
            <div className="flex w-full flex-row gap-2 mt-3 items-center h-5">
              <Image
                src="/person_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
                alt="Right Section Image"
                width={25}
                height={25}
                className="rounded-full p-1 shadow-lg border-2 border-white" />
              <p className="text-xl">
                Anuraj Singh
              </p>
            </div>
            <p className="w-full">Best lamp for multipurpose use </p>
            <p className="w-full">Rating Given
              <span className="text-yellow-300 ml-2">4.2</span>
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-25 items-center h-5">
            <div className="flex w-full flex-row gap-2 mt-3 items-center h-5">
              <Image
                src="/person_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
                alt="Right Section Image"
                width={25}
                height={25}
                className="rounded-full shadow-lg border-2 border-white" />
              <p className="text-xl text-indigo-50">
                Aastha Sharma
              </p>
            </div>
            <p className="w-full">Really love the Product at this price range</p>
            <p className="w-full">Rating Given
              <span className="text-yellow-300 ml-2">4.8</span>
            </p>
          </div>
        </div>

      </div >
    </>
  );
}
