import Departmentsection from "@/app/components/departmentSection/Departmentsection";
import { ICON } from "@/app/constants/Images";
import Image from "next/image";
import React from "react";

export default function allDepartments() {
  return (
    <div className="text-white border-[1px] border-secondry p-5">
      <div className="flex flex-row p-2 max-w-[330px] gap-4 me-5 h-[50px]  border-[1px] border-secondry rounded-md">
        <Image src={ICON.SEARCH} alt="" />
        <input
          type="text"
          placeholder="search"
          className="p-2 text-white bg-black rounded hover:border-primary active:border-primary focus:border-primary focus:outline-none"
        />
      </div>
      <div className="flex mt-2 flex-wrap gap-y-5 gap-x-8">
        <Departmentsection />
        <Departmentsection />
        <Departmentsection />
        <Departmentsection />
      </div>
    </div>
  );
}
