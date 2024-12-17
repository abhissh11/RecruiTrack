import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="py-4 border-t border-gray-900">
      <p className="text-center text-sm font-thin tracking-normal leading-7 text-slate-100">
        {`© ${new Date().getFullYear()}`}{" "}
        <span>
          {" "}
          <Link href="/">RecruiTrack</Link>
        </span>{" "}
        | All Rights Reserved.
      </p>
    </div>
  );
}
