import React from "react";
import Marquee from "./ui/marquee";
import { Icon } from "@iconify/react";

export default function HorizontalInfiniteScroll() {
  const arr = [
    {
      logo: (
        <Icon
          icon="simple-icons:swiggy"
          className="text-orange-500 w-10 h-10"
        />
      ),
      name: "Swiggy",
    },
    {
      logo: <Icon icon="logos:meta-icon" className="text-pink-700 w-10 h-10" />,
      name: "Meta",
    },
    {
      logo: <Icon icon="logos:netflix-icon" className="text-white w-10 h-10" />,
      name: "Netflix",
    },
    {
      logo: (
        <Icon icon="logos:microsoft-icon" className="text-white w-10 h-10" />
      ),
      name: "Microsoft",
    },
    {
      logo: <Icon icon="logos:google-icon" className="text-white w-10 h-10" />,
      name: "Google",
    },
    {
      logo: <Icon icon="arcticons:zomato" className="text-red-600 w-14 h-14" />,
      name: "Zomato",
    },
  ];
  return (
    <div className="mt-20">
      <Marquee pauseOnHover className="[--duration:10s]">
        {arr.map(({ logo: logo, name }, index) => (
          <div
            key={index}
            className="relative h-full w-fit mx-12 flex items-center justify-center text-2xl
            font-bold text-neutral-500 dark:text-neutral-400"
          >
            <span>{logo}</span>
            <span className="ml-2">{name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
