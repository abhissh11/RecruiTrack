import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between items-center mx-4  md:mx-16 p-4 border-b border-gray-900">
      <Link href="/">
        <h1 className="text-lg font-normal font-sans text-slate-50">
          RecruiTrack
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
