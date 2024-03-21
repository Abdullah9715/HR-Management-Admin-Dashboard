import React from "react";

import Image from "next/image";
import { ICON } from "@/app/constants/Images";

const PaginationBar = () => {
  return (
    <div className="mt-[14px] flex text-white items center justify-between items-center">
      <div className="flex items-center">
        <div className="me-5">Showing</div>
        <div className=" flex items-center border-[1px] font-light rounded-[10px] border-grayBorder p-3">
          10
          <Image className="ms-4" src={ICON.ARROW} alt="iconArrowDown" />
        </div>
      </div>
      <div className="text-[14px] font-light">
        Showing 1 to 10 out of 60 records
      </div>
      <div className="flex items-center">
        <button>
          <Image
            className="me-[10px] rotate-90"
            src={ICON.ARROW}
            height={24}
            width={24}
            alt="iconArrowLeft"
          />
        </button>
        <div className="flex">
          <button
            className={`px-3 border-[1px] py-[7px] text-customOrange border-customOrange rounded-lg mx-[5px]`}
          >
            1
          </button>
          <button className={`px-3 py-[7px] mx-[5px]`}>2</button>
          <button className={`px-3 py-[7px] mx-[5px]`}>3</button>
          <button className={`px-3 py-[7px] mx-[5px]`}>4</button>
        </div>
        <button>
          <Image
            className="ms-[10px]"
            src={ICON.RIGHTARROW}
            height={24}
            width={24}
            alt="iconArrowRight"
          />
        </button>
      </div>
    </div>
  );
};

export default PaginationBar;
