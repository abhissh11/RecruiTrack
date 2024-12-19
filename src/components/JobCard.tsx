"use client";

import { useState } from "react";
import ApplicationForm from "./ApplicationForm";
import { Cross, CrossIcon, X } from "lucide-react";

interface JobCardProps {
  companyLogo: string;
  jobRole: string;
  companyName: string;
  location: string;
  jobType: "Internship" | "Contract" | "Full-Time";
}

export default function JobCard({
  companyLogo,
  jobRole,
  companyName,
  location,
  jobType,
}: JobCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Job Card */}
      <div
        className="flex items-center justify-between w-full md:w-[60%] rounded-lg bg-zinc-950 border border-zinc-900 p-4 shadow-xl 
        hover:shadow-2xl hover:-translate-y-1 cursor-pointer transition-all duration-300"
      >
        {/* Left Section: Company Logo */}
        <div className="flex-shrink-0">
          <img
            src={companyLogo}
            alt={`${companyName} Logo`}
            className="h-16 w-16 rounded-lg object-cover"
          />
        </div>

        {/* Middle Section: Job Role, Company Name, Location */}
        <div className="flex flex-col flex-1 px-4">
          <h2 className="text-lg font-semibold text-slate-300">{jobRole}</h2>
          <p className="text-sm font-semibold font-serif text-gray-600">
            {companyName}
          </p>
          <p className="text-sm text-gray-600">{location}</p>
        </div>

        {/* Right Section: Job Type and Apply Button */}
        <div className="flex flex-col items-center gap-2">
          <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-blue-600">
            {jobType}
          </span>
          <button
            onClick={openModal}
            className="rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Apply
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeModal} // Close modal on background click
        >
          {/* Modal Content */}
          <div
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside modal
            className="relative w-full max-w-2xl rounded-lg bg-zinc-950 p-6 shadow-lg border border-slate-800"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-slate-300 bg-blue-600 rounded hover:bg-blue-700 focus:outline-none"
            >
              <X size={32} />
            </button>

            {/* Form Component */}
            <h3 className="text-2xl text-gray-300 mb-4">Apply for {jobRole}</h3>
            <ApplicationForm />
          </div>
        </div>
      )}
    </>
  );
}
