import AllEmployeeTable from "@/app/components/employeeTable/AllEmployeeTable";
import React from "react";

import Sidebar from "@/app/components/sidebar/Sidebar";
import Header from "@/app/components/header/Header";
import PaginationBar from "@/app/components/paginationBar/PaginationBar";

export default function Employees() {
  return (
    <>
      <AllEmployeeTable />
    </>
  );
}
