import Header from "./components/header/Header";
import Logout from "./components/logout";
import Main from "./components/main/main";
import Sidebar from "./components/sidebar/Sidebar";
import DefaultLayout from "./components/defaultLayout/DefaultLayout";
import Dashboard from "./pages/dashboard/page";
export default async function Home() {
  // const user = await getServerSession();
  // console.log("user", user);
  // if (!user) {
  //   redirect("http://localhost:3000/api/auth/signin");
  // }

  return (
    // <DefaultLayout>
    // <Main />
    // </DefaultLayout>
    // <h1 className="text-white">h1</h1>
    <Dashboard />
  );
}
