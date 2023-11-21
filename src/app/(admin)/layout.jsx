import React from "react";
import "../globals.css";

export const metadata = {
  title: 'Admin Page',
  description: 'Generated by create next app',
}

const AdminLayout = ({ children }) => {
  return (
    <>
      <html lang="es">
        <body>
          <h1 className="text-center ">Admin Layout Root</h1>
          {children}
        </body>
      </html>
    </>
  );
};

export default AdminLayout;