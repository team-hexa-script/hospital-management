import React from "react";
export const metadata = {
  title: "dashboard | Hotel Management",
  description: "Generated by create next app",
};

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div>sidebar</div>
      {children}
    </div>
  );
};

export default DashboardLayout;
