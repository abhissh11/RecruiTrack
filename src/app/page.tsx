import { LayoutDashboard } from "lucide-react";
import React from "react";
import Link from "next/link";
import BoxReveal from "@/components/ui/box-reveal";
import PulsatingButton from "@/components/ui/pulsating-button";
import { AnimatedListDemo } from "@/components/AnimatedNotify";

export default function page() {
  return (
    //Hero Sec
    <div className="mx-4 md:mx-20 p-2 h-screen">
      <div className=" w-full h-full flex flex-col md:flex-row flex-1 gap-20 md:justify-evenly justify-center items-center">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-1 ">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <h1 className="text-4xl text-slate-200 font-bold font-serif tracking-wide leading-relaxed">
                Welcome to
              </h1>
            </BoxReveal>
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <h1 className="text-4xl lg:text-5xl text-slate-200 font-bold font-serif tracking-wide leading-relaxed">
                Recrui<span className="text-blue-600">Track</span>
              </h1>
            </BoxReveal>
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <p className="text-base font-sm font-sans text-slate-400">
                One Stop Platform for Recruiters and Job Applicants.
              </p>
            </BoxReveal>
          </div>

          <div className="flex gap-10">
            <Link href="/job/openings">
              <PulsatingButton>Apply Now</PulsatingButton>
            </Link>
            <Link href="/track-applications">
              <button
                className="group py-2 px-4 border-2 border-blue-600 rounded-md hover:bg-blue-600
        text-white transition-all duration-75 text-base font-light flex items-center gap-2"
              >
                <span className="text-blue-600 group-hover:text-slate-200">
                  <LayoutDashboard size={20} />
                </span>
                Dashboard
              </button>
            </Link>
          </div>
        </div>
        <div className="">
          <AnimatedListDemo />
        </div>
      </div>
    </div>
  );
}
