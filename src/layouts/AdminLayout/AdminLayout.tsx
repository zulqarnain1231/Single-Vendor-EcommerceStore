import React from "react";
import AdminLeftNavigation from "../Navigation/AdminLeftNavigation";

interface Props {
  children: React.ReactNode;
}
const AdminLayout: React.FC<Props> = ({ children }) => {
  return (
    <div
      className={`w-full h-full md:h-screen md:grid md:grid-cols-[220px,calc(100%-220px)] flex flex-col gap-6 md:gap-0
  `}
    >
      <AdminLeftNavigation />
      <main className="w-full h-[calc(100vh-80px)] md:h-screen overflow-auto p-4 bg-white-main">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
