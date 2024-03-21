"use client";
import EmployeeSidebarProfile from "@/app/components/employeeSidebarProfile/EmployeeSidebarProfile";
import ViewAttendenceTable from "@/app/components/viewAttendenceTeble/ViewAttendenceTable";
import ViewEmployeeSidebar from "@/app/components/viewEmployeeSidebar/ViewEmployeeSidebar";
import ViewLeaveTable from "@/app/components/viewLeaveTable/ViewLeaveTable";
import ViewProjectTable from "@/app/components/viewProjectTable/ViewProjectTable";
import { ADDEMPLOYEE, HOMEICONS, ICON, SIDEBAR } from "@/app/constants/Images";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import User from "../../assets/icons/Rectangle 3463328.svg";
export default function ViewEmployee() {
  const [selectedTab, setSelectedTab] = useState(0);
  const show = true;
  return (
    <div className="border-[1px]  border-secondry p-5 rounded-lg ">
      <div className="flex flex-row pb-8 border-b-2 border-b-secondry text-white justify-between">
        <div className="flex flex-row">
          <Image
            src={User}
            alt="user"
            width={100}
            height={100}
            className="rounded-lg"
          />
          <div className="space-y-2 text-sm font-light ms-4">
            <h2 className="text-2xl text-white font-semibold">USEr Naeme</h2>
            <h1 className="flex flex-row gap-2.5">
              <Image
                src={ADDEMPLOYEE.BREAFCASE}
                alt="breafcase"
                height={24}
                width={24}
              />
              Department
            </h1>
            <h2 className="flex flex-row  gap-2.5">
              <Image height={24} width={24} src={ICON.GMAIL} alt="breafcase" />
              gamil
            </h2>
          </div>
        </div>
        <div className="mt-auto">
          <Link href="/addEmployee">
            <button className="border-[1px] flex bg-primary flex-row items-center justify-center gap-3 rounded-lg text-white border-secondry p-2">
              <Image src={ICON.EDIT} alt="filter" />
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
      <div className="flex gap-4 flex-row mt-7">
        <ViewEmployeeSidebar selectedTab={setSelectedTab} />
        <div className="w-full">
          {selectedTab === 0 && <EmployeeSidebarProfile />}
          {selectedTab === 1 && <ViewAttendenceTable />}
          {selectedTab === 2 && <ViewProjectTable />}
          {selectedTab === 3 && <ViewLeaveTable />}
        </div>
      </div>
    </div>
  );
}
