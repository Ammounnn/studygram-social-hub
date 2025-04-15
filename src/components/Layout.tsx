
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950">
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="flex gap-6 pt-14">
          <main className="flex-1 py-6">{children}</main>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
