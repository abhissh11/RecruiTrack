import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between items-center px-4  md:px-20 py-4 border-b border-gray-900">
      <Link href="/">
        <h1 className="text-2xl font-bold tracking-wide font-sans text-slate-50">
          Recrui<span className="text-blue-600">Track</span>
        </h1>
      </Link>
      <Link href="/track-applications">
        <button className="text-lg font-thin py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
          Track Applications
        </button>
      </Link>
    </div>
  );
}
