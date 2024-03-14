import Header from "../header/Header";
import Logout from "../logout";
import Sidebar from "../sidebar/Sidebar";

export default async function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const user = await getServerSession();
  // console.log("user", user);
  // if (!user) {
  //   redirect("http://localhost:3000/api/auth/signin");
  // }

  return (
    <>
      <div className="flex xl:w-full lg:w-full md:w-full xl:h-[1024px] h-screen bg-black">
        <Sidebar />
        <div className="xl:w-[1040] lg:w-full w-full">
          <Header />
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>

          {/* <Logout /> */}
        </div>
      </div>
    </>
  );
}
