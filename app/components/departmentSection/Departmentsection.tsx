import React from "react";
import DepartmentEmployee from "../departmentEmployee/DepartmentEmployee";

export default function Departmentsection() {
  return (
    <div className=" sm:w-full lg:w-[48%] md:w-full border-[1px] border-secondry px-3 py-2 rounded-lg">
      <div className="flex flex-row  my-3 justify-between">
        <div className="flex flex-col  text-white">
          <h2 className="text-[20px] text-white">Design Departmetn</h2>
          <h5 className="text-[14px] text-balance">members</h5>
        </div>
        <div className=" flex items-center text-center">
          <h2 className="text-primary text-[16px]">View All</h2>
        </div>
      </div>
      <div className="space-y-3">
        <hr className="h-px  border-0 bg-secondry" />
        <DepartmentEmployee />
        <DepartmentEmployee />
        <DepartmentEmployee />
        <DepartmentEmployee />
      </div>
    </div>
  );
}
