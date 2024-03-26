import { ADDEMPLOYEE } from "@/app/constants/Images";
import Image from "next/image";
import { useEffect, useState } from "react";
import ViewPersonalInformationMian from "../viewPersonalInformation/ViewPersonalInformationMian";
import ViewPersonalInformation from "../viewEmployeeSidebar/ViewPersonalInformation";
import ViewEmployeeDocument from "../viewEmployeeDocument/ViewEmployeeDocument";
import ViewEmployeeAccess from "../viewEmployeeAccess/ViewEmployeeAccess";
import { useDispatch, useSelector } from "react-redux";
import {
  fatchEmployees,
  selectAllemployess,
  selectIsLoading,
} from "@/redux/slices/getEmployee";
import { Action } from "@reduxjs/toolkit";
import axios from "axios";
export default function EmployeeSidebarProfile() {
  const [selectedTab, setSelectedTab] = useState(0);
  const show = true;

  return (
    <>
      <div className="flex flex-row gap-4 text-white  max-w-full">
        <div
          className={`flex flex-row py-3 gap-2 items-center border-solid border-b-[4px] ${
            selectedTab === 0
              ? "border-primary text-primary"
              : "border-transparent"
          } max-w-fit`}
          onClick={() => setSelectedTab(0)}
        >
          {selectedTab === 0 ? (
            <Image src={ADDEMPLOYEE.USERORANGE} alt="user" />
          ) : (
            <Image src={ADDEMPLOYEE.USER} alt="user" />
          )}

          <h1>Personal Information</h1>
        </div>
        <div
          className={`flex flex-row py-3 gap-2 items-center border-solid border-b-[4px] ${
            selectedTab === 1
              ? "border-primary text-primary"
              : "border-transparent"
          } max-w-fit`}
          onClick={() => setSelectedTab(1)}
        >
          {selectedTab === 1 ? (
            <Image src={ADDEMPLOYEE.BREAFCASEORANGE} alt="user" />
          ) : (
            <Image src={ADDEMPLOYEE.BREAFCASE} alt="user" />
          )}

          <h1>Personal Information</h1>
        </div>
        <div
          className={`flex flex-row py-3 gap-2 items-center border-solid border-b-[4px] ${
            selectedTab === 2
              ? "border-primary text-primary"
              : "border-transparent"
          } max-w-fit`}
          onClick={() => setSelectedTab(2)}
        >
          {selectedTab === 2 ? (
            <Image src={ADDEMPLOYEE.DOCUMENTORANGE} alt="user" />
          ) : (
            <Image src={ADDEMPLOYEE.DOCUMENT} alt="user" />
          )}
          <h1>Documents</h1>
        </div>
        <div
          className={`flex flex-row py-3 gap-2 items-center border-solid border-b-[4px] ${
            selectedTab === 3
              ? "border-primary text-primary"
              : "border-transparent"
          } max-w-fit`}
          onClick={() => setSelectedTab(3)}
        >
          {selectedTab === 3 ? (
            <Image src={ADDEMPLOYEE.LOCKORANGE} alt="user" />
          ) : (
            <Image src={ADDEMPLOYEE.LOCK} alt="user" />
          )}

          <h1>Account Access</h1>
        </div>
      </div>
      <hr className="h-px  border-0 bg-secondry" />

      {show && selectedTab === 0 ? <ViewPersonalInformationMian /> : ""}
      {show && selectedTab === 1 ? <ViewPersonalInformation /> : ""}
      {show && selectedTab === 2 ? <ViewEmployeeDocument /> : ""}
      {show && selectedTab === 3 ? <ViewEmployeeAccess /> : ""}
    </>
  );
}
