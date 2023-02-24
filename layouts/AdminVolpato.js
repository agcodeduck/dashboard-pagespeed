import React from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbarVolpato.js";
import Sidebar from "components/Sidebar/SidebarVolpato.js";
import HeaderStats from "components/Headers/HeaderStatsVolpato.js";
import FooterAdmin from "components/Footers/FooterAdminVolpato.js";

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
