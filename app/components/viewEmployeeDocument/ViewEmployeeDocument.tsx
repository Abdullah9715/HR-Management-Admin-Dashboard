import { ADDEMPLOYEE, ICON } from "@/app/constants/Images";
import Image from "next/image";
import React from "react";

export default function ViewEmployeeDocument() {
  return (
    <div className="text-white w-[100%] gap-3 flex flex-row  flex-wrap mt-4">
      <div className="w-[49%] border-b-[1px] border-b-secondry flex justify-between items-center flex-row  text-white bg-transparent space-y-2  p-2.5  border-secondry ">
        <h1 className="text-base">Appointment Letter.pdf</h1>
        <div className="flex flex-row gap-2">
          <Image src={ICON.VIEW} alt="view" />
          <Image src={ICON.DOWNLOAD} alt="download" />
        </div>
      </div>
      <div className="w-[49%] border-b-[1px] border-b-secondry flex justify-between items-center flex-row  text-white bg-transparent space-y-2  p-2.5  border-secondry ">
        <h1 className="text-base">Salary Slip_June.pdf</h1>
        <div className="flex flex-row gap-2">
          <Image src={ICON.VIEW} alt="view" />
          <Image src={ICON.DOWNLOAD} alt="download" />
        </div>
      </div>
      <div className="w-[49%] border-b-[1px] border-b-secondry flex justify-between items-center flex-row  text-white bg-transparent space-y-2  p-2.5  border-secondry ">
        <h1 className="text-base">Salary Slip_May.pdf</h1>
        <div className="flex flex-row gap-2">
          <Image src={ICON.VIEW} alt="view" />
          <Image src={ICON.DOWNLOAD} alt="download" />
        </div>
      </div>
      <div className="w-[49%] border-b-[1px] border-b-secondry flex justify-between items-center flex-row  text-white bg-transparent space-y-2  p-2.5  border-secondry ">
        <h1 className="text-base">Salary Slip_April.pdf</h1>
        <div className="flex flex-row gap-2">
          <Image src={ICON.VIEW} alt="view" />
          <Image src={ICON.DOWNLOAD} alt="download" />
        </div>
      </div>
      <div className="w-[49%] border-b-[1px] border-b-secondry flex justify-between items-center flex-row  text-white bg-transparent space-y-2  p-2.5  border-secondry ">
        <h1 className="text-base">Reliving Letter.pdf</h1>
        <div className="flex flex-row gap-2">
          <Image src={ICON.VIEW} alt="view" />
          <Image src={ICON.DOWNLOAD} alt="download" />
        </div>
      </div>
      <div className="w-[49%] border-b-[1px] border-b-secondry flex justify-between items-center flex-row  text-white bg-transparent space-y-2  p-2.5  border-secondry ">
        <h1 className="text-base">Experience Letter.pdf</h1>
        <div className="flex flex-row gap-2">
          <Image src={ICON.VIEW} alt="view" />
          <Image src={ICON.DOWNLOAD} alt="download" />
        </div>
      </div>
    </div>
  );
}
