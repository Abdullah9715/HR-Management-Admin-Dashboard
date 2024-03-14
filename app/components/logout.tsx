"use client";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

import React from "react";
const handleLogout = () => {
  signOut();
  return redirect("/auth/login");
};
export default function Logout() {
  return (
    <button className="text-white m-5 p-2" onClick={handleLogout}>
      logout
    </button>
  );
}
