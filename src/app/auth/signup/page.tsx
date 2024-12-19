import AdminSignup from "@/components/SignupComponent";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen mt-14 px-6 md:px-20">
      <h1 className="text-center text-2xl font-bold font-sans ">
        Admin Sign Up
      </h1>
      <div className="">
        <AdminSignup />
      </div>
    </div>
  );
}
