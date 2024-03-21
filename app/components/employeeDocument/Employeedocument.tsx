import { ADDEMPLOYEE } from "@/app/constants/Images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Dropzone from "../dropzone/Dropzone";

export default function Employeedocument() {
  return (
    <div className="flex flex-wrap pt-[30px] gap-4 w-full mx-auto">
      <Dropzone content="Upload Appointment Letter" />
      <Dropzone content="Upload Salary Slips" />
      <Dropzone content="Upload Reliving Letter" />
      <Dropzone content="Upload Experience Letter" />
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
