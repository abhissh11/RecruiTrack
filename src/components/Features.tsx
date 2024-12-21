import { BinaryIcon, FileStack, Hourglass, TrainTrack, X } from "lucide-react";
import React from "react";

export default function Features() {
  const features = [
    {
      icon: <FileStack size={32} />,
      title: "CV Shortlisting",
      description:
        "Effortlessly manage and filter resumes using advanced AI tools, ensuring only the most relevant applications are shortlisted for review.",
    },
    {
      icon: <Hourglass size={32} />,
      title: "Saves Time",
      description:
        "Automate repetitive tasks like sorting and organizing CVs, allowing recruiters to focus on high-value decision-making and reducing overall hiring time.",
    },
    {
      icon: <TrainTrack size={32} />,
      title: "Track Applications",
      description:
        "Monitor the progress of applications at every stage, from submission to final selection, with a seamless and intuitive tracking system.",
    },
    {
      icon: <BinaryIcon size={32} />,
      title: "Update in Dashboard",
      description:
        "Keep your data up-to-date with a centralized dashboard for real-time edits, status updates, and collaboration among hiring team members.",
    },
  ];

  return (
    <div className="py-20 px-4">
      <div className="px-4 mb-20 mt-10 flex justify-center items-center flex-col gap-4">
        <h1 className="text-center text-slate-100 text-3xl font-bold">
          Features that Empower Your Recruitment Process
        </h1>
        <p className="text-center text-slate-600 text-base font-semibold">
          Streamline Hiring with Intelligent Features Designed for Efficiency
          and Precision
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-10 items-center">
        {features.map((feat, index) => (
          <div
            key={index}
            className="group border border-slate-800 p-6 w-72 min-h-80 rounded-xl overflow-hidden hover:bg-zinc-900"
          >
            <h1 className="text-slate-100 m-1 p-3 w-fit  bg-zinc-900 rounded group-hover:bg-zinc-800">
              {feat.icon}
            </h1>
            <div className="flex flex-col gap-4 mt-10 justify-center items-center">
              <h1 className="text-xl font-semibold text-slate-200 text-center">
                {feat.title}
              </h1>
              <p className="text-slate-400 font-normal text-base">
                {feat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
