"use client";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "react-circular-progressbar/dist/styles.css";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { updatePageLoader, updatePageNavigation } from "@/features/features";

import { axiosPrivate } from "@/axios";

import Section1 from "./Section1";
import Section3 from "./Section3";
import axios from "axios";
import Loading from "@/components/loading";

const Dashboard = () => {
  const [allProducts, setAllProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updatePageLoader(false));
    dispatch(updatePageNavigation("dashboard"));
  }, [dispatch]);
  useEffect(() => {
    const getAllProducts = async () => {
      const { data } = await axiosPrivate.get(`/admin/products`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if (data === undefined) return;
      !allProducts.length && setAllProducts(data?.products);
    };
    getAllProducts();
  }, []);
  return (
    <>
      <Loading />
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex-1 flex">
          <Sidebar />
          <div className="flex-1 mt-[30px] p-[10px] sm:px-[25px]">
            <Section1 />
            <Section3 allProducts={allProducts} />
            {/* all data in notepad */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
