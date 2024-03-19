import Link from "next/link";
import React from "react";

export default function EmployeeAccess() {
  return (
    <div className="text-white w-[100%] gap-3 flex flex-row  flex-wrap mt-4">
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
      <div className="flex flex-row ms-auto me-3 gap-5">
        <button className="border-[1px] flex flex-row items-center justify-center  rounded-lg text-white border-secondry h-[50px] w-[91px]">
          Cancel
        </button>
        <Link href="/addEmployee">
          <button className="border-[1px] flex bg-primary flex-row items-center justify-center  rounded-lg text-white border-secondry h-[50px] w-[91px] ">
            ADD
          </button>
        </Link>
      </div>
    </div>
  );
}
