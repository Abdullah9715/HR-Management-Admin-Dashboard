import { HOMEICONS } from "@/app/constants/Images";
import Image from "next/image";
import React from "react";

export default function AttendenceTable() {
  return (
    <div className="relative overflow-x-auto border-[1px] rounded-lg mt-4 border-secondry p-2">
      <div className="flex  mx-5 my-5 flex-row justify-between items-center">
        <h1 className="text-white text-[20px] font-semibold">
          {" "}
          Attendence OverView{" "}
        </h1>
        <button className="border-[1px] rounded-lg text-white border-secondry p-2">
          View All
        </button>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase ">
          <tr className="text-[16px] border-b-secondry border-b-[1px] font-light text-balance">
            <th scope="col" className="px-6 py-3">
              Employee Name
            </th>
            <th scope="col" className="px-6 py-3">
              Designation
            </th>
            <th scope="col" className="px-6 py-3">
              Type
            </th>
            <th scope="col" className="px-6 py-3">
              Check In Time
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-white border-b-secondry border-b-[1px] ">
            <td className="py-4 px-6 gap-2 flex flex-row items-center font-light text-[16px] whitespace-nowrap text-white">
              <Image
                src={HOMEICONS.USER}
                alt="profile"
                className="w-[36px] h-[36px] rounded-lg"
              />
              Apple MacBook Pro 17"
            </td>
            <td className="px-6 font-light text-[16px] whitespace-nowrap text-white py-4">
              Silver
            </td>
            <td className="px-6 font-light text-[16px] whitespace-nowrap text-white py-4">
              Laptop
            </td>
            <td className="px-6 font-light text-[16px] whitespace-nowrap text-white py-4">
              $2999
            </td>
            <td className="px-6  mx-auto whitespace-nowrap  py-4">
              <h1 className="bg-lightGreeen font-light  text-[12px] w-[66px] rounded-md p-2 text-green">
                On Time
              </h1>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
