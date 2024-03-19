import { ADDEMPLOYEE, ICON, SIDEBAR } from "@/app/constants/Images";
import Image from "next/image";
import DatePicker from "react-datepicker";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";

export default function PersonalInformationMain() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="text-white w-[100%] gap-3 flex flex-row  flex-wrap mt-4">
      <div className="w-full">
        <Image
          src={ADDEMPLOYEE.PROFILE}
          alt="profile"
          className="w-[100px] h-[100px]"
        />
      </div>
      <input
        type="text"
        className="w-[49%] border-2  text-white bg-transparent sm:text-sm rounded-lg block  p-2.5  border-secondry focus:outline-none"
        placeholder="Employee ID"
      />
      <input
        type="text"
        className="w-[49%] border-2  text-white bg-transparent sm:text-sm rounded-lg block  p-2.5  border-secondry focus:outline-none"
        placeholder="Employee ID"
      />
      <div className="flex w-[49%] flex-row justify-between border-2  text-white bg-transparent sm:text-sm rounded-lg   p-2.5  border-secondry focus:outline-none ">
        <input
          type="text"
          className=" bg-transparent focus:outline-none"
          placeholder="Employee ID"
        />
        <Image
          src={ICON.RIGHTARROW}
          className="rotate-90"
          alt="sidebar"
          width={20}
          height={20}
        />
      </div>
      <input
        type="text"
        className="w-[49%] border-2  text-white bg-transparent sm:text-sm rounded-lg block  p-2.5  border-secondry focus:outline-none"
        placeholder="Employee ID"
      />
      <div className="flex w-[49%] flex-row justify-between border-2  text-white bg-transparent sm:text-sm rounded-lg  p-2.5  border-secondry focus:outline-none ">
        <DatePicker
          selected={startDate}
          //   dateFormat="Pp"
          onChange={(date) => setStartDate(date)}
          className="bg-transparent focus:outline-none"
        />
        <Image src={SIDEBAR.ATTENDENCE} alt="sidebar" width={20} height={20} />
      </div>
      <div className="flex w-[49%] flex-row justify-between border-2  text-white bg-transparent sm:text-sm rounded-lg   p-2.5  border-secondry focus:outline-none ">
        <input
          type="text"
          className=" bg-transparent focus:outline-none"
          placeholder="Employee ID"
        />
        <Image
          src={ICON.RIGHTARROW}
          className="rotate-90"
          alt="sidebar"
          width={20}
          height={20}
        />
      </div>
      <input
        type="text"
        className="w-[49%] border-2  text-white bg-transparent sm:text-sm rounded-lg block  p-2.5  border-secondry focus:outline-none"
        placeholder="Employee ID"
      />
      <div className="flex w-[49%] flex-row justify-between border-2  text-white bg-transparent sm:text-sm rounded-lg   p-2.5  border-secondry focus:outline-none ">
        <input
          type="text"
          className=" bg-transparent focus:outline-none"
          placeholder="Employee ID"
        />
        <Image
          src={ICON.RIGHTARROW}
          className="rotate-90"
          alt="sidebar"
          width={20}
          height={20}
        />
      </div>

      <div className="flex w-[99%] flex-row justify-between border-2  text-white bg-transparent sm:text-sm rounded-lg   p-2.5  border-secondry focus:outline-none ">
        <input
          type="text"
          className=" bg-transparent w-full focus:outline-none"
          placeholder="Employee ID"
        />
        <Image
          src={ICON.RIGHTARROW}
          className="rotate-90"
          alt="sidebar"
          width={20}
          height={20}
        />
      </div>
      <input
        type="text"
        className="w-[32%] border-2  text-white bg-transparent sm:text-sm rounded-lg block  p-2.5  border-secondry focus:outline-none"
        placeholder="Employee ID"
      />
      <input
        type="text"
        className="w-[32%] border-2  text-white bg-transparent sm:text-sm rounded-lg block  p-2.5  border-secondry focus:outline-none"
        placeholder="Employee ID"
      />
      <input
        type="text"
        className="w-[32%] border-2  text-white bg-transparent sm:text-sm rounded-lg block  p-2.5  border-secondry focus:outline-none"
        placeholder="Employee ID"
      />
      <div className="flex flex-row ms-auto me-3 gap-5">
        <button className="border-[1px] flex flex-row items-center justify-center  rounded-lg text-white border-secondry h-[50px] w-[91px]">
          Cancel
        </button>
        <Link href="/addEmployee">
          <button className="border-[1px] flex bg-primary flex-row items-center justify-center  rounded-lg text-white border-secondry h-[50px] w-[91px] ">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}
