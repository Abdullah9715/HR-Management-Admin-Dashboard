import React from "react";
import ApexChart from "../../components/chart/Chart";
import HomeBox from "../../components/homeBox/HomeBox";
import { HOMEICONS } from "../../constants/Images";
import AttendenceTable from "../../components/attendeceTable/AttendenceTable";

export default function Dashboard() {
  return (
    <div>
      <div className="flex flex-wrap gap-y-5 gap-x-8">
        <div className=" sm:w-full lg:w-[48%] md:w-full">
          <HomeBox
            iconSrc={HOMEICONS.EMPLOYEE}
            title={"All Employee"}
            totalCount={"679"}
            updateDate={"Update: July 10, 2023"}
          />
        </div>
        <div className=" sm:w-full lg:w-[48%] md:w-full">
          <HomeBox
            iconSrc={HOMEICONS.PROJECT}
            title={"All Projects"}
            totalCount={"679"}
            updateDate={"Update: July 10, 2023"}
          />
        </div>
        <div className=" sm:w-full lg:w-[48%] md:w-full">
          <HomeBox
            iconSrc={HOMEICONS.ATTENDENCE}
            title={"Attendence"}
            totalCount={"679"}
            updateDate={"Update: July 10, 2023"}
          />
        </div>
        <div className=" sm:w-full lg:w-[48%] md:w-full">
          <HomeBox
            iconSrc={HOMEICONS.APPLICANT}
            title={"All Applications"}
            totalCount={"679"}
            updateDate={"Update: July 10, 2023"}
          />
        </div>
      </div>

      <ApexChart />
      <AttendenceTable />
    </div>
  );
}
