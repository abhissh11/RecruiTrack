import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div
      className="bg-black opacity-95 fixed w-full z-40 top-0   flex justify-between items-center px-4 
     md:px-20 py-4 border-b-2 border-gray-900"
    >
      <Link href="/">
        <h1 className="text-2xl font-bold tracking-wide font-sans text-slate-50">
          Recrui<span className="text-blue-600">Track</span>
        </h1>
      </Link>
      <Link href="/track-applications">
        <button className="text-sm font-thin py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
          Track Applications
        </button>
      </Link>
    </div>
  );
}
