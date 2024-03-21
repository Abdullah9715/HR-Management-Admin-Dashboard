"use client";
import { Lexend } from "next/font/google";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import { usePathname } from "next/navigation";
const inter = Lexend({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  let headerProps: { mainTitle: string; greeting: string } = {
    mainTitle: "",
    greeting: "",
  };

  const pathname = usePathname();

  switch (pathname) {
    case "/":
      headerProps = { mainTitle: "HELLO Lucifer", greeting: "Good morning" };
      break;
    case "/dashboard":
      headerProps = { mainTitle: "HELLO Lucifer", greeting: "Good morning" };
      break;
    case "/employees":
      headerProps = {
        mainTitle: "ALl Employees",
        greeting: "All Employee information",
      };
      break;
    case "/addEmployee":
      headerProps = {
        mainTitle: "Add Employee",
        greeting: "All Employee > Add New Employee",
      };
      break;
    case "/viewEmployee":
      headerProps = {
        mainTitle: "USer NAme",
        greeting: "All Employee > User NAme",
      };
      break;
    case "/departments":
      headerProps = {
        mainTitle: "All Departments",
        greeting: "All Departments Information",
      };
      break;
    case "/viewDepartment":
      headerProps = {
        mainTitle: "Design Department",
        greeting: "All Departments > Design Department",
      };
      break;
    case "/attendence":
      headerProps = {
        mainTitle: "Attendence",
        greeting: "All Employee Attendence",
      };
      break;
    case "/setting":
      headerProps = {
        mainTitle: "Settings",
        greeting: "All system Settings",
      };
      break;
    case "/notification":
      headerProps = {
        mainTitle: "Notifications",
        greeting: "All Notification",
      };
      break;
    default:
      headerProps = { mainTitle: "Home", greeting: "Hello" };
      break;
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-black">
          <div className="text-white w-64 flex-shrink-0">
            <Sidebar />
          </div>
          <div className="flex flex-col flex-1">
            <header className="text-white px-4 py-2 flex justify-between items-center">
              <Header {...headerProps} />
            </header>
            <main className="p-4 flex-1 overflow-y-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
