import Image from "next/image";
import React from "react";
import search from "../../assets/icons/Union.svg";
import notification from "../../assets/icons/Notification.svg";
import arrow from "../../assets/icons/direction-down.svg";

export default function Header() {
  return (
    <div className="h-20 sticky mt-5 ms-5 p-2 text-white flex w-auto justify-between">
      <div>
        <h1>Lucifer</h1>
        <p>Good morning</p>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-row p-2 gap-4 me-5  border-[1px] border-secondry rounded">
          <Image src={search} alt="" />
          <input
            type="text"
            placeholder="search"
            className="p-2  bg-black rounded hover:border-primary active:border-primary focus:border-primary focus:outline-none"
          />
        </div>
        <Image src={notification} alt="notification" className="me-5" />
        <div className="flex flex-row border-[1px] me-3 gap-2 border-secondry rounded p-2">
          <Image src={notification} alt="notificatio" />
          <div>
            <h1>Lucifer</h1>
            <p>Good morning</p>
          </div>
          <Image src={arrow} alt="notification" />
        </div>
      </div>
    </div>
  );
}
