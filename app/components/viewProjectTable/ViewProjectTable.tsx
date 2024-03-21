import React from "react";

export default function ViewProjectTable() {
  return (
    <table className="text-sm w-full  text-left   text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-white uppercase ">
        <tr className="text-[16px] border-b-secondry border-b-[1px] font-light text-balance">
          <th scope="col" className="px-5 py-3">
            Sr No.
          </th>
          <th scope="col" className="px-5 py-3">
            Project Name
          </th>
          <th scope="col" className="px-5 py-3">
            Start Date
          </th>
          <th scope="col" className="px-5 py-3">
            Finish Date
          </th>

          <th scope="col" className="px-5 py-3">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-white border-b-secondry border-b-[1px] ">
          <td className="py-4 px-5 gap-2 font-light text-[16px] whitespace-nowrap text-white">
            1
          </td>
          <td className="px-5 font-light text-[16px] whitespace-nowrap text-white py-4">
            Lorem ipsum dolor loar
          </td>
          <td className="px-5 font-light text-[16px] whitespace-nowrap text-white py-4">
            Silver
          </td>
          <td className="px-5 font-light text-[16px] whitespace-nowrap text-white py-4">
            Laptop
          </td>

          <td className="px-5  mx-auto whitespace-nowrap  py-4">
            <h1 className="bg-lightGreeen font-light  text-[12px] w-[66px] rounded-md p-2 text-green">
              On Time
            </h1>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
