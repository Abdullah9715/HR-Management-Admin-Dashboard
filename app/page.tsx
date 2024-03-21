"use client";
import { UploadButton } from "@/utils/uploadthing";
import Dashboard from "./(pages)/dashboard/page";
import Header from "./components/header/Header";
import Logout from "./components/logout";
import Sidebar from "./components/sidebar/Sidebar";

export default function Home() {
  // const user = await getServerSession();
  // console.log("user", user);
  // if (!user) {
  //   redirect("http://localhost:3000/api/auth/signin");
  // }

  return (
    <>
      <div className="flex h-screen bg-black">
        <div className=" text-white w-64 flex-shrink-0">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-1">
          <header className="text-white px-4 py-2 flex justify-between items-center">
            <Header mainTitle={"Lucifer "} greeting={"Goodmornig"} />
          </header>
          <main className="p-4 flex-1 overflow-y-auto">
            <Logout />

            <Dashboard />
          </main>
        </div>
      </div>
    </>
  );
}
