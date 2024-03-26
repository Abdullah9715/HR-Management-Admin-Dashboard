// import { iconArrowDown, profilePhoto } from "@/constants/Images";
import { HOMEICONS, ICON } from "@/app/constants/Images";
import Image from "next/image";
import { useState } from "react";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center justify-between   w-[184px]  focus:outline-none "
        onClick={toggleDropdown}
      >
        <div className="flex">
          <Image src={HOMEICONS.USER} alt="Profile pic" />
          <div className="flex flex-col items-start ms-[5px]">
            <div className="text-[16px] font-semibold ">Lucifer</div>
            <div className="text-[12px] text-[#A2A1A8] ">Hr Manager</div>
          </div>
        </div>
        <Image
          src={ICON.ARROW}
          className={`${
            isOpen ? "rotate-180" : "rotate-0"
          } ease-in-out duration-500 `}
          alt="Arrow Down"
        />
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-[184px] border-grayBorder border-[1px] bg-customDark rounded shadow-lg">
          <ul>
            <li className="px-4 py-2 hover:bg-primary">About</li>
            <li className="px-4 py-2 hover:bg-primary">Profile Info</li>
            <li className="px-4 py-3 hover:bg-primary ">Sign out</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
