import { HOMEICONS, ICON } from "@/app/constants/Images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AllEmployeeTable() {
  return (
    <div className="relative overflow-x-auto border-[1px] rounded-lg mt-4 border-secondry p-2">
      <div className="flex  mx-5 my-5 flex-row justify-between items-center">
        <div className="flex flex-row p-2 gap-4 me-5 h-[50px]  border-[1px] border-secondry rounded-md">
          <Image src={ICON.SEARCH} alt="" />
          <input
            type="text"
            placeholder="search"
            className="p-2 text-white bg-black rounded hover:border-primary active:border-primary focus:border-primary focus:outline-none"
          />
        </div>
        <div className="flex flex-row gap-5">
          <Link href="/addEmployee">
            <button className="border-[1px] flex bg-primary flex-row items-center justify-center gap-3 rounded-lg text-white border-secondry p-2">
              <Image src={ICON.PLUS} alt="filter" />
              Add New Employee
            </button>
          </Link>
          <button className="border-[1px] flex flex-row items-center justify-center gap-3 rounded-lg text-white border-secondry p-2">
            <Image src={ICON.FILTER} alt="filter" />
            Filter
          </button>
        </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase ">
          <tr className="text-[16px] border-b-secondry border-b-[1px] font-light text-balance">
            <th scope="col" className="px-6 py-3">
              Employee Name
            </th>
            <th scope="col" className="px-6 py-3">
              Employee ID
            </th>
            <th scope="col" className="px-6 py-3">
              Department
            </th>
            <th scope="col" className="px-6 py-3">
              Designation
            </th>
            <th scope="col" className="px-6 py-3">
              Type
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              actions
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
            <td className="px-6 font-light flex flex-row items-center gap-3 text-[16px] whitespace-nowrap text-white py-4">
              <Image src={ICON.TRASH} alt="" className="h-[24px] w-[24px]" />
              <Image src={ICON.EDIT} alt="" className="h-[24px] w-[24px]" />
              <Image src={ICON.VIEW} alt="" className="h-[24px] w-[24px]" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
