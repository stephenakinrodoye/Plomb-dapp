import React from "react";
import aboutimg from "../component/assets/third-poll.png";

function AboutPlomb() {
  return (
    <div className="flex mx-28 pt-36 gap-20">
      <div className="w-[50%]">
        <img src={aboutimg} alt="" />
      </div>
      <div className="w-[50%]">
        <div>
          <h1 className="text-4xl font-semibold mb-4">About PLOMB</h1>
          <p>
            PLOMB is a decentralized voting platform built on
            <span className="text-[#00ACE3]"> blockchain technology</span>,
            designed to ensure secure, transparent, and fair elections. Our
            mission is to empower individuals by providing a reliable and
            tamper-proof voting system that protects voter identity and upholds
            the integrity of the democratic process.
          </p>
        </div>
        <div>
          <h1 className="mt-12 mb-2 text-3xl font-semibold">Our Vision</h1>
          <p>
            We envision a world where every vote is
            <span className="text-[#00ACE3]"> secure</span>,
            <span className="text-[#00ACE3]"> transparent</span>, and
            <span className="text-[#00ACE3]"> accessible</span> to all, free
            from fraud and manipulation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPlomb;
