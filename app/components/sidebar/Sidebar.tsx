import Image from "next/image";
import React from "react";
import Icon from "../../assets/icons/Vector.svg";
import dashboard from "../../assets/icons/dashboard.svg";
import employee from "../../assets/icons/users 01.svg";
import department from "../../assets/icons/community.svg";
import attendence from "../../assets/icons/calendar-check.svg";
import payrol from "../../assets/icons/coin-dollar.svg";
import jobs from "../../assets/icons/briefcase 04.svg";
import candiate from "../../assets/icons/users 01.svg";
import leave from "../../assets/icons/notepad.svg";
import holidays from "../../assets/icons/notes 01.svg";
import setting from "../../assets/icons/setting.svg";
import sun from "../../assets/icons/sun.svg";
import weather from "../../assets/icons/weather.svg";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="m-5 p-2 flex-none bg-danger rounded-3xl text-white sm:w-72 w-28 max-h-[984px]">
      <div className="flex justify-between mx-auto flex-col ">
        <div className="mt-9 ms-6">
          <Image src={Icon} height={32} width={88} alt={"ICON"} />
        </div>
        <div className="p-3">
          <ul className="mt-10 space-y-3">
            <li
              className="flex flex-row gap-4 hover:bg-primary p-2 hover:rounded hover:border-l-primary hover:border-l-[2px] hover:bg-opacity-[5%]
          active:bg-primary focus:outline-none focus:ring focus:ring-primary"
            >
              <Link href={"pages/dashboard"}>
                <Image src={dashboard} alt={"dashboard"} />
                <h5>Dashboard</h5>
              </Link>
            </li>
            <li
              className="flex flex-row gap-4 hover:bg-primary p-2 hover:rounded hover:border-l-primary hover:border-l-[2px] hover:bg-opacity-[5%]
          active:bg-primary focus:outline-none focus:ring focus:ring-primary"
            >
              <Image src={employee} alt={"dashboard"} />
              <h5>All Employees</h5>
            </li>
            <li
              className="flex flex-row gap-4 hover:bg-primary p-2 hover:rounded hover:border-l-primary hover:border-l-[2px] hover:bg-opacity-[5%]
          active:bg-primary focus:outline-none focus:ring focus:ring-primary"
            >
              <Image src={department} alt={"dashboard"} />
              <h5>All Departments</h5>
            </li>
            <li
              className="flex flex-row gap-4 hover:bg-primary p-2 hover:rounded hover:border-l-primary hover:border-l-[2px] hover:bg-opacity-[5%]
          active:bg-primary focus:outline-none focus:ring focus:ring-primary"
            >
              <Image src={attendence} alt={"dashboard"} />
              <h5>Attendence</h5>
            </li>
            <li
              className="flex flex-row gap-4 hover:bg-primary p-2 hover:rounded hover:border-l-primary hover:border-l-[2px] hover:bg-opacity-[5%]
          active:bg-primary focus:outline-none focus:ring focus:ring-primary"
            >
              <Image src={payrol} alt={"dashboard"} />
              <h5>Pay Roll</h5>
            </li>
            <li
              className="flex flex-row gap-4 hover:bg-primary p-2 hover:rounded hover:border-l-primary hover:border-l-[2px] hover:bg-opacity-[5%]
          active:bg-primary focus:outline-none focus:ring focus:ring-primary"
            >
              <Image src={jobs} alt={"dashboard"} />
              <h5>Jobs</h5>
            </li>
            <li
              className="flex flex-row gap-4 hover:bg-primary p-2 hover:rounded hover:border-l-primary hover:border-l-[2px] hover:bg-opacity-[5%]
          active:bg-primary focus:outline-none focus:ring focus:ring-primary"
            >
              <Image src={candiate} alt={"dashboard"} />
              <h5>Candidates</h5>
            </li>
            <li
              className="flex flex-row gap-4 hover:bg-primary p-2 hover:rounded hover:border-l-primary hover:border-l-[2px] hover:bg-opacity-[5%]
          active:bg-primary focus:outline-none focus:ring focus:ring-primary"
            >
              <Image src={leave} alt={"dashboard"} />
              <h5>Leaves</h5>
            </li>
            <li
              className="flex flex-row gap-4 hover:bg-primary p-2 hover:rounded hover: -l-primary hover:border-l-[2px] hover:bg-opacity-[5%]
          active:bg-primary focus:outline-none focus:ring focus:ring-primary"
            >
              <Image src={holidays} alt={"dashboard"} />
              <h5>Holidays</h5>
            </li>
            <li
              className="flex flex-row gap-4 hover:bg-primary p-2 hover:rounded hover:border-l-primary hover:border-l-[2px] hover:bg-opacity-[5%]
          active:bg-primary focus:outline-none focus:ring focus:ring-primary"
            >
              <Image src={setting} alt={"dashboard"} />
              <h5>Settings</h5>
            </li>
          </ul>
        </div>
        <div className="w-[220px] h-[50px] mt-52 flex flex-row mx-auto">
          <button className="hover:bg-primary rounded-md flex flex-row justify-center items-center gap-2 w-[110px] h-[50px]">
            <Image src={weather} alt={""} width={18} height={18} />
            Light
          </button>
          <button className="hover:bg-primary justify-center rounded-md items-center flex flex-row gap-2 w-[110px] h-[50px]">
            <Image src={sun} alt={""} width={18} height={18} />
            dark
          </button>
        </div>
      </div>
    </aside>
  );
}
