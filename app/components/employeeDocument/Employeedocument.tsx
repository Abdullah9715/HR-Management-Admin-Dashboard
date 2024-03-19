import { ADDEMPLOYEE } from "@/app/constants/Images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Employeedocument() {
  return (
    <div className="flex flex-wrap gap-4 w-full mx-auto">
      <div className="space-y-4 text-white w-[48%]">
        <h1>Upload Appointment Letter</h1>
        <div className="flex flex-col justify-center items-center border-[1px] border-primary border-dotted p-3 space-y-3 rounded-lg">
          <Image src={ADDEMPLOYEE.UPLOAD} alt="upload" width={40} height={40} />
          <h1>
            Drag & Drop or <span className="text-primary">choose file </span>
            to upload
          </h1>
          <h2>Supported formats : Jpeg, pdf</h2>
        </div>
      </div>
      <div className="space-y-4 w-[48%] text-white">
        <h1>Upload Appointment Letter</h1>
        <div className="flex flex-col justify-center items-center border-[1px] border-primary border-dotted p-3 space-y-3 rounded-lg">
          <Image src={ADDEMPLOYEE.UPLOAD} alt="upload" width={40} height={40} />
          <h1>
            Drag & Drop or <span className="text-primary">choose file </span>
            to upload
          </h1>
          <h2>Supported formats : Jpeg, pdf</h2>
        </div>
      </div>
      <div className="space-y-4 w-[48%] text-white">
        <h1>Upload Appointment Letter</h1>
        <div className="flex flex-col justify-center items-center border-[1px] border-primary border-dotted p-3 space-y-3 rounded-lg">
          <Image src={ADDEMPLOYEE.UPLOAD} alt="upload" width={40} height={40} />
          <h1>
            Drag & Drop or <span className="text-primary">choose file </span>
            to upload
          </h1>
          <h2>Supported formats : Jpeg, pdf</h2>
        </div>
      </div>
      <div className="space-y-4 w-[48%] text-white">
        <h1>Upload Appointment Letter</h1>
        <div className="flex flex-col justify-center items-center border-[1px] border-primary border-dotted p-3 space-y-3 rounded-lg">
          <Image src={ADDEMPLOYEE.UPLOAD} alt="upload" width={40} height={40} />
          <h1>
            Drag & Drop or <span className="text-primary">choose file </span>
            to upload
          </h1>
          <h2>Supported formats : Jpeg, pdf</h2>
        </div>
      </div>
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
