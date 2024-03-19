"use client";
import Image from "next/image";
import React, { useState } from "react";

import Link from "next/link";
import { SIDEBAR } from "@/app/constants/Images";
import { SIDE_BAR_ICONS } from "@/app/constants/sidebarIcons";
import { usePathname } from "next/navigation";
export default function Sidebar() {
  const router = usePathname();
  const [mode, setMode] = useState("light");

  const handleModeChange = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  return (
    <aside className=" overflow-auto top-0 left-0 mx-3 my-2 fixed flex flex-col justify-between bg-danger  rounded-3xl text-white max-w-72  h-full">
      <div className="mt-5 mx-auto">
        <Image src={SIDEBAR.ICON} height={32} width={88} alt={"ICON"} />
        <div className="mt-10">
          <ul className="space-y-2">
            {SIDE_BAR_ICONS.map((link, i: number) => {
              return (
                <Link href={link.path} key={i} className="">
                  <div
                    className={` ${
                      router === link.path
                        ? "border-l-[3px] border-primary flex flex-row gap-4  hover:bg-primary  hover:rounded hover:bg-opacity-5 my-[6px] active:bg-primary focus:outline-none hover:w-full w-full p-2 text-primary bg-[#E253190D]"
                        : "flex flex-row gap-4 hover:bg-primary p-2 hover:rounded hover:bg-opacity-5 my-[6px]                         active:bg-primary focus:outline-none"
                    }  my-[5px] flex`}
                  >
                    <Image
                      src={link.icon}
                      alt={link.alt}
                      className="my-auto "
                    />
                    <h5>{link.name}</h5>
                  </div>
                </Link>
              );
            })}
            {/* <Link href={"dashboard"}>
              <li
                className="flex flex-row gap-4 hover:bg-primary p-2 hover:rounded hover:border-l-primary hover:border-l-[2px] 
          active:bg-primary focus:outline-none focus:ring focus:ring-primary"
              >
                <Image src={SIDEBAR.DASHBOARD} alt={"dashboard"} />
                <h5>Dashboard</h5>
              </li>
            </Link>

            <Link href={"employees"}>
              <li
                className="flex flex-row gap-4 hover:bg-primary p-2 hover:rounded hover:border-l-primary hover:border-l-[2px] 
          active:bg-primary focus:outline-none focus:ring focus:ring-primary"
              >
                <Image src={SIDEBAR.EMPLOYEE} alt={"Employee"} />
                <h5>All Employees</h5>
              </li>
            </Link>
            <Link href={"departments"}>
              <li
                className="flex flex-row gap-4 hover:bg-primary p-2 hover:rounded hover:border-l-primary hover:border-l-[2px] 
              active:bg-primary focus:outline-none focus:ring focus:ring-primary"
              >
                <Image src={SIDEBAR.DEAPRTMENT} alt={"dashboard"} />
                <h5>All Departments</h5>
              </li>
            </Link>

            <Link href={"attendence"}>
              <li
                className="flex flex-row gap-4 hover:bg-primary p-2 hover:rounded hover:border-l-primary hover:border-l-[2px] 
              active:bg-primary focus:outline-none focus:ring focus:ring-primary"
              >
                <Image src={SIDEBAR.ATTENDENCE} alt={"dashboard"} />
                <h5>Attendence</h5>
              </li>
            </Link>
            <Link href={"payrol"}>
              <li
                className="flex flex-row gap-4 hover:bg-primary p-2 hover:rounded hover:border-l-primary hover:border-l-[2px] 
              active:bg-primary focus:outline-none focus:ring focus:ring-primary"
              >
                <Image src={SIDEBAR.PAYROL} alt={"dashboard"} />
                <h5>Pay Roll</h5>
              </li>
            </Link>
            <Link href={"jobs"}>
              <li
                className="flex flex-row gap-4 hover:bg-primary p-2 hover:rounded hover:border-l-primary hover:border-l-[2px] 
          active:bg-primary focus:outline-none focus:ring focus:ring-primary"
              >
                <Image src={SIDEBAR.JOBS} alt={"dashboard"} />
                <h5>Jobs</h5>
              </li>
            </Link>
            <Link href={"candidate"}>
              <li
                className="flex flex-row gap-4 hover:bg-primary p-2 hover:rounded hover:border-l-primary hover:border-l-[2px] 
          active:bg-primary focus:outline-none focus:ring focus:ring-primary"
              >
                <Image src={SIDEBAR.CANDIATE} alt={"dashboard"} />
                <h5>Candidates</h5>
              </li>
            </Link>
            <Link href={"leaves"}>
              <li
                className="flex flex-row gap-4 hover:bg-primary p-2 hover:rounded hover:border-l-primary hover:border-l-[2px] 
          active:bg-primary focus:outline-none focus:ring focus:ring-primary"
              >
                <Image src={SIDEBAR.LEAVE} alt={"dashboard"} />
                <h5>Leaves</h5>
              </li>
            </Link>
            <Link href={"holiday"}>
              <li
                className="flex flex-row gap-4 hover:bg-primary p-2 hover:rounded hover: -l-primary hover:border-l-[2px] 
              active:bg-primary focus:outline-none focus:ring focus:ring-primary"
              >
                <Image src={SIDEBAR.HOLIDAY} alt={"dashboard"} />
                <h5>Holidays</h5>
              </li>
            </Link>
            <Link href={"setting"}>
              <li
                className="flex flex-row gap-4 hover:bg-primary p-2 hover:rounded hover:border-l-primary hover:border-l-[2px] 
          active:bg-primary focus:outline-none focus:ring focus:ring-primary"
              >
                <Image src={SIDEBAR.SETTING} alt={"dashboard"} />
                <h5>Settings</h5>
              </li>
            </Link> */}
          </ul>
        </div>
      </div>
      <div className="w-[220px] mb-4 px-2 h-[50px] flex flex-row mx-auto">
        <button
          className={` rounded-md flex flex-row justify-center items-center gap-2 w-[110px] h-[50px] ${
            mode === "light" ? "bg-primary" : ""
          }`}
          onClick={handleModeChange}
        >
          <Image src={SIDEBAR.WEAHER} alt={""} width={18} height={18} />
          Light
        </button>
        <button
          className={` justify-center rounded-md items-center flex flex-row gap-2 w-[110px] h-[50px] ${
            mode === "dark" ? "bg-primary" : ""
          }`}
          onClick={handleModeChange}
        >
          <Image src={SIDEBAR.SUN} alt={"sun"} width={18} height={18} />
          Dark
        </button>
      </div>
    </aside>
  );
}
