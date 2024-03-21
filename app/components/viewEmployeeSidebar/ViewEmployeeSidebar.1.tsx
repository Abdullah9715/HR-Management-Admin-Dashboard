"use client";
import { ADDEMPLOYEE } from "@/app/constants/Images";
import Image from "next/image";
import React, { useState } from "react";

export default function ViewEmployeeSidebar() {
  const [selectedTab, setSelectedTab] = useState(0);
  const show = true;
  return (
    <div className="flex flex-col  text-white h-[224px]  max-w-[242px] border-[1px] border-secondry rounded-lg ">
      <div
        className={`flex flex-row px-5 py-4 w-full h-[56px] rounded-lg items-center ${
          selectedTab === 0 ? "bg-primary " : "border-transparent"
        } `}
        onClick={() => setSelectedTab(0)}
      >
        {selectedTab === 0 ? (
          <Image src={ADDEMPLOYEE.USERORANGE} alt="user" />
        ) : (
          <Image src={ADDEMPLOYEE.USER} alt="user" />
        )}

        <h1 className="p-3">Profile</h1>
      </div>
      <div
        className={`flex flex-row px-5 py-4 w-full h-[56px] rounded-lg items-center  ${
          selectedTab === 1 ? "bg-primary " : "border-transparent"
        } `}
        onClick={() => setSelectedTab(1)}
      >
        {selectedTab === 1 ? (
          <Image src={ADDEMPLOYEE.BREAFCASEORANGE} alt="user" />
        ) : (
          <Image src={ADDEMPLOYEE.BREAFCASE} alt="user" />
        )}

        <h1 className="p-3">Attendence</h1>
      </div>
      <div
        className={`flex flex-row px-5 py-4 w-full h-[56px] rounded-lg items-center ] ${
          selectedTab === 2 ? "bg-primary" : "border-transparent"
        } `}
        onClick={() => setSelectedTab(2)}
      >
        {selectedTab === 2 ? (
          <Image src={ADDEMPLOYEE.DOCUMENTORANGE} alt="user" />
        ) : (
          <Image src={ADDEMPLOYEE.DOCUMENT} alt="user" />
        )}
        <h1 className="p-3">Projects</h1>
      </div>
      <div
        className={`flex flex-row px-5 py-4 h-[56px] w-full rounded-lg items-center  ${
          selectedTab === 3 ? "bg-primary " : "border-transparent"
        } `}
        onClick={() => setSelectedTab(3)}
      >
        {selectedTab === 3 ? (
          <Image src={ADDEMPLOYEE.LOCKORANGE} alt="user" />
        ) : (
          <Image src={ADDEMPLOYEE.LOCK} alt="user" />
        )}

        <h1 className="p-3">Leave</h1>
      </div>
      {show && selectedTab === 0 ? <EmployeeSidebarProfile /> : ""}
      {show && selectedTab === 1 ? <ViewPersonalInformation /> : ""}
      {/* {show && selectedTab === 2 ? <ViewEmployeeDocument /> : ""} */}
      {/* {show && selectedTab === 3 ? <ViewEmployeeAccess /> : ""} */}
    </div>
  );
}
