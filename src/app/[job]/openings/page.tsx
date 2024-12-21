import ApplicationForm from "@/components/ApplicationForm";
import JobList from "@/components/JobLists";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen pt-14">
      <h1 className="text-3xl text-slate-200 font-bold font-serif tracking-wide leading-relaxed text-center mt-10">
        New Job Openings
      </h1>
      <div className="">
        <JobList />
        <h1 className="text-3xl text-slate-200 font-bold font-serif tracking-wide leading-relaxed text-center mt-20 my-10">
          Submit your Profile for Upcoming New Jobs
        </h1>
        <ApplicationForm />
      </div>
    </div>
  );
}
