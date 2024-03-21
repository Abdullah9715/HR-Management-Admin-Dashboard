import React from "react";

export default function ViewEmployeeAccess() {
  return (
    <div className="text-white w-[100%] gap-3 flex flex-row  flex-wrap mt-4">
      <div className="w-[49%] border-b-[1px] border-b-secondry flex flex-col  text-white bg-transparent space-y-2  p-2.5  border-secondry ">
        <h5 className="text-lightWhite text-sm">Email Address</h5>
        <h1 className="text-base">Output</h1>
      </div>
      <div className="w-[49%] border-b-[1px] border-b-secondry flex flex-col  text-white bg-transparent space-y-2  p-2.5  border-secondry ">
        <h5 className="text-lightWhite text-sm">Stock ID</h5>
        <h1 className="text-base">Output</h1>
      </div>
      <div className="w-[49%] border-b-[1px] border-b-secondry flex flex-col  text-white bg-transparent space-y-2  p-2.5  border-secondry ">
        <h5 className="text-lightWhite text-sm">Skype ID</h5>
        <h1 className="text-base">Output</h1>
      </div>
      <div className="w-[49%] border-b-[1px] border-b-secondry flex flex-col  text-white bg-transparent space-y-2  p-2.5  border-secondry ">
        <h5 className="text-lightWhite text-sm">GItHub ID</h5>
        <h1 className="text-base">Output</h1>
      </div>
    </div>
  );
}
