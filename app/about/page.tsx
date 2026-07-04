"use client";
import React, { useEffect, useRef, useState } from "react";

import Link from "next/link";

// --- ANIMATION HELPERS ---

// 1. Fade-In on Scroll Wrapper
const FadeIn = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(domRef.current!);
        }
      },
      { threshold: 0.1 },
    );
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// 2. Animated Number Counter
const AnimatedCounter = ({
  end,
  suffix = "",
}: {
  end: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const domRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 },
    );
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <span ref={domRef}>
      {count}
      {suffix}
    </span>
  );
};

const timeline = [
  {
    year: "2016",
    title: "Company Established & Mobilized",
  },
  {
    year: "2017-18",
    title: "Expanded Industrial Service Portfolio",
  },
  {
    year: "2018-19",
    title: "Secured Refinery & Industrial Contracts",
  },
  {
    year: "2019-20",
    title: "Strengthened Workforce & Safety",
  },
  {
    year: "2020-21",
    title: "Successfully Executed Critical Industrial Shutdown Projects",
  },
  {
    year: "2021-22",
    title: "Expanded Presence Across Multiple Industrial Sectors",
  },
  {
    year: "2022-23",
    title: "Enhanced Execution Capacity with Large-Scale Site Operations",
  },
  {
    year: "2023-24",
    title: "Built Long-Term Partnerships with Leading Industry Clients",
  },
  {
    year: "2024-25",
    title: "Crossed 30+ Major Projects Delivered",
  },
  {
    year: "2025-26",
    title: "Continuing Large-Scale Industrial Projects Across India",
  },
  {
    year: "Today",
    title: "43+ Projects • 8+ Ongoing Sites",
  },
];

// --- MAIN PAGE COMPONENT ---

export default function AboutPage() {
  return (
    <main className="bg-[#F8F9FB] text-[#1A1A1A] font-sans overflow-hidden">
      {/* SECTION 1 — HERO BANNER */}
      <section className="relative h-screen min-h-[600px] flex flex-col items-center justify-center">
        {/* Background Image & Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/about_us_page.png')" }}
        ></div>
        <div className="absolute inset-0 z-10 bg-jmde-blue/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-jmde-blue/90 via-jmde-blue/60 to-transparent"></div>

        {/* Main Content */}
        <div className="relative z-20 text-center max-w-[1400px] mx-auto px-6 ">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-md">
              Not Just a Workforce — Your <br className="hidden md:block" />
              Trusted Team
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-medium drop-shadow-md">
              From civil and mechanical works to coating, insulation, and
              scaffolding, we deliver reliable solutions that keep industrial
              projects moving forward.
            </p>
          </FadeIn>
        </div>

        {/* Breadcrumb */}
        <div className="absolute bottom-12 left-0 w-full z-20 px-6">
          <FadeIn delay={200}>
            <div className="max-w-[1400px] mx-auto flex justify-center md:justify-center">
              <div className="text-white/80 text-sm md:text-md font-semibold tracking-wide flex items-center gap-3 drop-shadow-lg">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span className="text-white font-light">/</span>
                <span className="text-white font-bold">About Us</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2 — COMPANY INTRODUCTION */}
      <section className="py-[120px] group max-w-5xl mx-auto px-6">
        <FadeIn delay={200}>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 group-hover:w-32 transition-all duration-700 ease-out h-1.5 bg-gradient-to-r from-jmde-orange to-[#ff8c5a] rounded-full mb-6 mx-auto lg:mx-0"></div>

            <h2 className="text-3xl md:text-5xl font-black text-[#123D82] mb-4 leading-tight">
              M/S Jai Mata Di Enterprises
            </h2>
            <span className="text-gray-500 font-bold  tracking-widest text-lg mb-8 block">
              Who We Are
            </span>
            <div className="space-y-6 text-[#1A1A1A]/80 text-lg md:text-xl leading-relaxed">
              <p>
                M/S Jai Mata Di Enterprises (JMDE) is a trusted industrial
                services company established in 2016, providing specialized
                solutions for industrial, commercial, and infrastructure
                projects across multiple sectors.
              </p>
              <p>
                Our expertise includes Civil Works, Mechanical Works, Shot Grit
                Blasting, Industrial Painting, Wrapping & Coating, Insulation
                Works, Logo Writing, and Scaffolding Services. We support
                clients with reliable execution and skilled workforce solutions.
              </p>
              <p>
                With a commitment to quality, safety, and timely project
                delivery, JMDE has successfully completed projects for leading
                industrial organizations while maintaining long-term client
                relationships built on trust and performance.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* SECTION 3 — COMPANY JOURNEY (PREMIUM BLUEPRINT THEME) */}
      <section className="relative py-[120px] bg-gradient-to-b from-[#08183A] via-[#123D82] to-[#08183A] text-white overflow-hidden border-y border-[#08183A]">
        {/* Subtle Engineering Blueprint Grid Background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6">
          {/* Section Header */}
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-24 flex flex-col items-center group">
              <div className="w-16 group-hover:w-32 transition-all duration-700 ease-out h-1.5 bg-gradient-to-r from-[#F36B21] to-[#ff8c5a] rounded-full mb-6 mx-auto"></div>

              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
                Our Journey
              </h2>

              <p className="text-xl text-white/70 font-medium">
                A chronological track record of industrial scaling and delivered
                scope.
              </p>
            </div>
          </FadeIn>

          {/* Timeline Wrapper */}
          <div className="relative max-w-5xl mx-auto">
            {/* The Glowing Central Orange Pipeline */}
            <div className="absolute left-[36px] md:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[#F36B21] to-transparent transform md:-translate-x-1/2 shadow-[0_0_15px_rgba(243,107,33,0.4)]"></div>

            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <FadeIn key={`${item.year}-${index}`} delay={index * 100}>
                  <div
                    className={`relative flex items-center min-h-[180px] mb-10 md:mb-14 group ${
                      isLeft ? "md:flex-row-reverse" : "md:flex-row"
                    }`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-[36px] md:left-1/2 -translate-x-1/2 w-8 h-8 bg-[#08183A] rounded-full border-[3px] border-white/80 transform -translate-x-1/2 z-20 flex items-center justify-center group-hover:border-[#F36B21] group-hover:scale-125 transition-all duration-300 shadow-lg">
                      <div className="w-2.5 h-2.5 bg-[#F36B21] rounded-full group-hover:shadow-[0_0_12px_#F36B21] transition-all"></div>
                    </div>

                    {/* Connector */}
                    <div
                      className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-12 h-[2px] bg-white/10 group-hover:bg-[#F36B21]/80 transition-colors duration-300 z-10 ${
                        isLeft ? "left-1/2 mr-4" : "right-1/2 ml-4"
                      }`}
                    />

                    {/* Card */}
                    <div
                      className={`ml-[76px] md:ml-0 w-full md:w-[45%] ${
                        isLeft ? "md:pl-10" : "md:pr-10"
                      }`}
                    >
                      <div
                        className={`bg-[#0A1A3A] p-6 rounded-[20px] border border-white/5 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative overflow-hidden ${
                          isLeft ? "md:text-right text-left" : "text-left"
                        }`}
                      >
                        {/* Hover Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#F36B21]/0 to-[#F36B21]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Accent Strip */}
                        <div
                          className={`absolute top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#F36B21] to-[#ff8c5a] ${
                            isLeft ? "md:right-0 left-0" : "left-0"
                          }`}
                        />

                        {/* Watermark */}
                        <div
                          className={`absolute top-1/2 -translate-y-1/2 opacity-5 text-7xl md:text-8xl font-black pointer-events-none select-none ${
                            isLeft ? "md:left-4 right-4" : "right-4"
                          }`}
                        >
                          {item.year}
                        </div>

                        {/* Year */}
                        <div className="relative text-4xl md:text-5xl font-black text-white/80 mb-3 font-mono tracking-tight">
                          {item.year}
                        </div>

                        {/* Title */}
                        <h4 className="relative text-md md:text-lg font-bold text-white/70 leading-relaxed group-hover:text-white transition-colors">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5 — MISSION & VISION */}
      <section className="py-[120px] bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Mission */}
            <FadeIn>
              <div className="bg-[#F8F9FB] group p-12 rounded-[24px] border border-gray-100 h-full">
                <div className="w-16 h-16 bg-[#123D82]/10 rounded-[16px] flex items-center justify-center mb-8">
                  <svg
                    className="w-8 h-8 text-[#123D82]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="w-16 group-hover:w-32 transition-all duration-700 ease-out h-1.5 bg-gradient-to-r from-[#F36B21] to-[#ff8c5a] rounded-full mb-4"></div>

                <h3 className="text-3xl font-black text-[#123D82] mb-6">
                  Our Mission
                </h3>
                <p className="text-lg text-[#1A1A1A]/80 leading-relaxed font-medium">
                  To deliver safe, reliable, and high-quality industrial
                  solutions that exceed client expectations through skilled
                  execution and professional project management.
                </p>
              </div>
            </FadeIn>

            {/* Vision */}
            <FadeIn delay={200}>
              <div className="bg-[#123D82] group p-12 rounded-[24px] shadow-lg h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="w-16 h-16 bg-[#F36B21]/20 rounded-[16px] flex items-center justify-center mb-8 relative z-10">
                  <svg
                    className="w-8 h-8 text-[#F36B21]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <div className="w-16 group-hover:w-32 transition-all duration-700 ease-out h-1.5 bg-gradient-to-r from-[#F36B21] to-[#ff8c5a] rounded-full mb-4"></div>

                <h3 className="text-3xl font-black text-white mb-6 relative z-10">
                  Our Vision
                </h3>
                <p className="text-lg text-white/90 leading-relaxed font-medium relative z-10">
                  To become a trusted industrial partner recognized for
                  excellence, safety, and long-term value creation across
                  diverse industries.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 6 — OUR TEAM (REFINED PORTRAIT GALLERY) */}
      <section className="py-[100px] bg-white relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center group mb-16">
            {/* UPDATED: Changed lg:mx-0 to mx-auto to ensure it stays centered */}
            <div className="w-16 group-hover:w-32 transition-all duration-700 ease-out h-1.5 bg-gradient-to-r from-jmde-orange to-[#ff8c5a] rounded-full mb-6 mx-auto"></div>

            <h2 className="text-4xl md:text-5xl font-black text-[#123D82]">
              Team Members
            </h2>
            <p></p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Ajeet Singh",
                role: "Director",
                mob: "+91 9557905990",
                email: "ajeetsingh5990@gmail.com",
                img: "/members/ajeet.jpeg",
              },
              {
                name: "Chandra Prakash Mishra",
                role: "Project Manager",
                mob: "+91 6388280767",
                email: "cpmishra1943@gmail.com",
                img: "/members/cp.jpeg",
              },
              {
                name: "Chhotu Kumar",
                role: "Civil Engineer",
                mob: "+91 7061719638",
                email: "kumarravichotu070@gmail.com",
                img: "/members/chotu.jpeg",
              },

              {
                name: "Akash Kumar",
                role: "Accountant",
                mob: "+91 8439260490",
                email: "akashkumar.mtr85@gmail.com",
                img: "/members/akash.jpeg",
              },
            ].map((member, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="relative group px-4 py-8 rounded-3xl bg-[#F8F9FB] transition-colors duration-500 flex flex-col items-center object-center text-center">
                  {/* Image Frame */}
                  <div className="relative w-32 h-32 mb-6">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full rounded-3xl object-cover border-4 border-white group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "/images/team/placeholder.jpg";
                      }}
                    />
                  </div>

                  {/* Info */}
                  <h3 className="text-sm font-black text-[#123D82] mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F36B21] mb-4">
                    {member.role}
                  </p>

                  {/* Always Visible Contact Info (Cleaner layout) */}
                  <div className="flex flex-col gap-1 w-full border-t border-gray-200 pt-4">
                    <p className="text-[10px] font-bold text-gray-500 truncate">
                      {member.mob}
                    </p>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-[9px] font-bold text-gray-400 hover:text-[#123D82] transition-colors truncate"
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
