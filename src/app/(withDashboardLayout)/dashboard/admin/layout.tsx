import type { Metadata } from "next";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "@/app/(commonLayout)/components/shared/Navbar";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Generated by create next app",
};

export default async function userDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div>
      {/* Navbar */}
      <div className="fixed w-full z-50">
        <Navbar></Navbar>
      </div>

      {/* Main layout with sidebar and content */}
      <div className="relative min-h-screen md:flex pt-16">
        {" "}
        {/* Add padding for the fixed navbar */}
        <Sidebar />
        <main className="flex-1">
          <div className="p-5">{children}</div>
        </main>
      </div>
    </div>
  );
}
