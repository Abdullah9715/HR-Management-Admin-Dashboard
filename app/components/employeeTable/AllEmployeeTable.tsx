"use client";
import { HOMEICONS, ICON } from "@/app/constants/Images";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PaginationBar from "../paginationBar/PaginationBar";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/storeHook";
import { fetchEmployees } from "@/redux/slices/getEmployee";

export default function AllEmployeeTable() {
  const dispatch = useAppDispatch();
  const employees = useAppSelector((state) => state.employees.employeeData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchEmployees());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="border-[1px] rounded-lg mt-4 border-secondry p-2 w-auto overflow-x-auto ">
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
      <table className="table-fixed w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
          {employees.map((employee, index) => (
            <tr
              key={index}
              className="text-white border-b-secondry border-b-[1px] "
            >
              {/* Render each employee data */}
              <td className="py-4 px-6 gap-2 flex flex-row items-center font-light text-[16px] whitespace-pre-wrap text-white">
                {/* Employee avatar */}
                <img
                  src={employee.imageUrl}
                  alt="profile"
                  className="w-[36px] h-[36px] rounded-lg"
                />
                {employee.userName}
              </td>
              <td className="px-6 font-light text-[16px] whitespace-pre-wrap text-white py-4">
                {employee.employeeID}
              </td>
              <td className="px-6 font-light text-[16px] whitespace-pre-wrap text-white py-4">
                {employee.department}
              </td>
              <td className="px-6 font-light text-[16px] whitespace-pre-wrap text-white py-4">
                {employee.designation}
              </td>
              <td className="px-6 font-light text-[16px] whitespace-pre-wrap text-white py-4">
                {employee.employeeType}
              </td>
              <td className="px-6  mx-auto whitespace-pre-wrap  py-4">
                <h1 className="bg-lightGreeen font-light  text-[12px] w-[66px] rounded-md p-2 text-green">
                  {employee.status}
                </h1>
              </td>
              <td className="px-6 font-light flex flex-row items-center gap-3 text-[16px] whitespace-pre-wrap text-white py-4">
                <Image src={ICON.TRASH} alt="" className="h-[24px] w-[24px]" />
                <Image src={ICON.EDIT} alt="" className="h-[24px] w-[24px]" />
                {/* <Link
                  href={{
                    pathname: "/viewEmployee",
                    query: { user: JSON.stringify(employee) },
                  }}
                > */}
                <Image
                  // onClick={() => router.push("/viewEmployee")}
                  src={ICON.VIEW}
                  alt=""
                  width={24}
                  height={24}
                />
                {/* </Link> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <PaginationBar />
    </div>
  );
}
