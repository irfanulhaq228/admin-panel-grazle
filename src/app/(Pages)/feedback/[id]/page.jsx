"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useDispatch } from "react-redux";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { updatePageLoader, updatePageNavigation } from "@/features/features";

import img from "@/assets/customer.png";
import { axiosPrivate } from "@/axios";

const FeedbackById = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [feedback, setFeedback] = useState({});
  useEffect(() => {
    dispatch(updatePageLoader(false))
    dispatch(updatePageNavigation("feedback"));
    fn_getFeedback();
  }, [dispatch]);
  const fn_getFeedback = async () => {
    const { data } = await axiosPrivate.get(`/admin/feedbacks/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    setFeedback(data?.feedback);
  };
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex-1 flex">
        <Sidebar />
        <div className="flex-1 mt-[30px] px-[22px]">
          <div className="bg-white rounded-[8px] shadow-sm p-[10px] sm:p-[25px]">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <Image
                alt=""
                src={img}
                className="h-[50px] w-[50px] rounded-full bg-[#E0D5C9]"
              />
              <p className="text-[14px]">{feedback?.name}</p>
              <p className="text-[11px] text-[var(--text-color-body)] mt-[-9px] sm:mt-0 sm:ms-10">
                {new Date(feedback?.created_at).toDateString()}
              </p>
            </div>
            <p className="font-[500] my-5 text-center sm:text-start">
              {feedback?.subject}
            </p>
            <p className="text-[14px] text-[var(--text-color-body)] text-center sm:text-start">
              {feedback?.message}
            </p>
            {/* <div className="mt-5">
              <p className="text-[#777777] mb-2">Reply</p>
              <textarea
                className="w-[100%] h-[120px] border border-gray-200 rounded-[8px] p-[10px] text-[15px] focus:outline-none focus:border-gray-400"
                placeholder="Write Here"
              />
            </div>
            <button className="h-[50px] px-[20px] sm:w-[220px] rounded-[8px] font-[500] bg-[#FE4242] mt-5 text-white border border-[#FE4242] hover:bg-transparent hover:text-[#FE4242]">
              Submit
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackById;
