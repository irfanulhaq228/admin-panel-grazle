"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Loading from "@/components/loading";
import SearchOnTop from "@/components/SearchOnTop";
import { updatePageLoader, updatePageNavigation } from "@/features/features";

import img from "@/assets/profile.jpeg";
import productOne from "@/assets/dashboard-product-1.png";

import { CiLocationOff } from "react-icons/ci";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";

const SellerDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updatePageLoader(false));
    dispatch(updatePageNavigation("sellers"));
  }, [dispatch]);

  return (
    <>
      <Loading />
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex-1 flex">
          <Sidebar />
          <div className="flex-1 mt-[30px] px-[10px] sm:px-[25px]">
            <SearchOnTop />
            <div className="my-[20px] p-[30px] bg-white rounded-[8px] shadow-sm overflow-x-auto w-[94vw] md:w-[67vw] lg:w-[75vw] xl:w-auto">
              <div className="border border-gray-200 rounded-[8px] px-[5px] sm:px-[20px] py-[25px] flex flex-col lg:flex-row lg:justify-between gap-5 w-full">
                <div>
                  <p className="text-[18px] sm:text-[20px] font-[500]">
                    Seller Overview
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-4 mt-5">
                    <Image
                      alt=""
                      src={img}
                      className="w-[70px] h-[70px] rounded-full col-span-2 md:col-span-1"
                    />
                    <div className="text-[var(--text-color-body)]">
                      <p className="text-[15px] text-center sm:text-start min-w-[max-content]">
                        Patrick Thomas
                      </p>
                      <p className="text-[15px] text-center sm:text-start">
                        ID: 12345
                      </p>
                    </div>
                    <p className="absolute right-10 sm:right-auto sm:relative h-[30px] min-w-[70px] rounded-[5px] bg-[var(--bg-color-delivered)] text-[14px] text-[var(--text-color-delivered)] font-[500] flex items-center justify-center">
                      Active
                    </p>
                  </div>
                </div>
                <div className="border border-gray-100 hidden lg:block"></div>
                <div>
                  <p className="text-[18px] sm:text-[20px] font-[500]">
                    Contact Information
                  </p>
                  <p className="text-[var(--text-color-body)] flex items-center gap-3 mt-7 text-[14px] sm:text-[16px]">
                    <AiOutlineMail className="h-[20px] w-[20px]" />
                    john@techstore.com
                  </p>
                  <p className="text-[var(--text-color-body)] flex items-center gap-3 mt-2 text-[14px] sm:text-[16px]">
                    <FiPhone className="h-[20px] w-[20px]" />
                    (123) 456-7890
                  </p>
                  <p className="text-[var(--text-color-body)] flex items-center gap-3 mt-2 text-[14px] sm:text-[16px]">
                    <SlLocationPin className="h-[20px] w-[20px]" />
                    123 Tech Street, India
                  </p>
                </div>
                <div className="border border-gray-100 hidden lg:block"></div>
                <div>
                  <p className="text-[18px] sm:text-[20px] font-[500]">
                    Business Information
                  </p>
                  <p className="text-[var(--text-color-body)] flex items-center gap-3 mt-7 text-[14px] sm:text-[16px]">
                    <CiLocationOff className="h-[20px] w-[20px]" />
                    123 Main Street New York, NY 10001
                  </p>
                  <p className="text-[var(--text-color-body)] flex items-center gap-3 mt-2 text-[14px] sm:text-[16px]">
                    <HiOutlineBuildingStorefront className="h-[20px] w-[20px]" />
                    Business Type: Individual
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-[23px] font-[600]">Product Listings</p>
                <div className="flex flex-col gap-4 mt-5">
                  <div className="flex gap-5">
                    <Image
                      alt=""
                      src={productOne}
                      className="w-[67px] h-[67px]"
                    />
                    <div className="flex-1 flex justify-between items-center">
                      <div className="flex flex-col gap-1.5">
                        <p className="font-[500] leading-[24px]">
                          Lorem ipsum dolor sit amet
                        </p>
                        <p className="text-[14px] text-[var(--text-color-body)]">
                          12,429 Sales
                        </p>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <p className="text-[12px] text-[var(--text-color-body-plus)] flex items-center gap-1">
                          <GoDotFill />
                          Available
                        </p>
                        <p className="text-[var(--text-color-body)] text-[11px] ps-[15px]">
                          135 Stocks
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <Image
                      alt=""
                      src={productOne}
                      className="w-[67px] h-[67px]"
                    />
                    <div className="flex-1 flex justify-between items-center">
                      <div className="flex flex-col gap-1.5">
                        <p className="font-[500] leading-[24px]">
                          Lorem ipsum dolor sit amet
                        </p>
                        <p className="text-[14px] text-[var(--text-color-body)]">
                          12,429 Sales
                        </p>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <p className="text-[12px] text-[var(--text-color-body-plus)] flex items-center gap-1">
                          <GoDotFill />
                          Available
                        </p>
                        <p className="text-[var(--text-color-body)] text-[11px] ps-[15px]">
                          135 Stocks
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <Image
                      alt=""
                      src={productOne}
                      className="w-[67px] h-[67px]"
                    />
                    <div className="flex-1 flex justify-between items-center">
                      <div className="flex flex-col gap-1.5">
                        <p className="font-[500] leading-[24px]">
                          Lorem ipsum dolor sit amet
                        </p>
                        <p className="text-[14px] text-[var(--text-color-body)]">
                          12,429 Sales
                        </p>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <p className="text-[12px] text-[var(--text-color-body-plus)] flex items-center gap-1">
                          <GoDotFill />
                          Available
                        </p>
                        <p className="text-[var(--text-color-body)] text-[11px] ps-[15px]">
                          135 Stocks
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerDetails;
