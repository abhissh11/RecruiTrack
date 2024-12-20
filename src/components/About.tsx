import React from "react";
import HorizontalInfiniteScroll from "./HorizontalInfiniteScroll";
import Features from "./Features";

export default function About() {
  return (
    <div className="min-h-svh">
      <HorizontalInfiniteScroll />
      <Features />
    </div>
  );
}
