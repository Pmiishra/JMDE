"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";

// 1. ScrollTriggeredCard Component
function ScrollTriggeredCard({
  service,
  index,
}: {
  service: any;
  index: number;
}) {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Left cards (0, 2, 4...) have 0ms delay. Right cards (1, 3, 5...) get a 300ms delay.
          const delayAmount = (index % 2) * 300;

          timeout = setTimeout(() => {
            setIsActive(true);
          }, delayAmount);
        } else {
          clearTimeout(timeout);
          setIsActive(false);
        }
      },
      {
        rootMargin: "-30% 0px -30% 0px",
        threshold: 0,
      },
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`group relative bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-[2rem] transition-all duration-500 ease-out border overflow-hidden h-full
        ${isActive ? "shadow-[0_30px_60px_rgba(28,49,84,0.08)] border-jmde-blue/10 -translate-y-2" : "shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-white"}
        hover:shadow-[0_30px_60px_rgba(28,49,84,0.08)] hover:border-jmde-blue/10 hover:-translate-y-2
      `}
    >
      <div
        className={`absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-jmde-orange to-[#ff8c5a] transform transition-transform duration-500 ease-out origin-left
          ${isActive ? "scale-x-100" : "scale-x-0"} 
          group-hover:scale-x-100
        `}
      ></div>

      <div className="flex justify-between items-start mb-8">
        <div
          className={`w-16 h-16 rounded-2xl border flex items-center justify-center transition-all duration-500 transform shadow-sm
            ${isActive ? "bg-jmde-orange border-jmde-orange text-white -rotate-6" : "bg-slate-50 border-gray-100 text-jmde-blue"}
            group-hover:bg-jmde-orange group-hover:border-jmde-orange group-hover:text-white group-hover:-rotate-6
          `}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d={service.icon}
            />
          </svg>
        </div>

        <span
          className={`text-5xl font-black transition-colors duration-500 select-none pointer-events-none
            ${isActive ? "text-jmde-orange/10" : "text-slate-100"} 
            group-hover:text-jmde-orange/10
          `}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3
        className={`text-2xl font-extrabold mb-4 tracking-tight transition-colors duration-300
          ${isActive ? "text-jmde-orange" : "text-jmde-blue"} 
          group-hover:text-jmde-orange
        `}
      >
        {service.title}
      </h3>
      <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
        {service.desc}
      </p>
    </div>
  );
}

// 2. The Main Section Component
export default function ServicesSection() {
  const services = [
    {
      title: "Civil Works",
      desc: "Expert construction and structural services for heavy industrial and commercial facilities.",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    },
    {
      title: "Mechanical Works",
      desc: "Precision mechanical installations, equipment erection, and maintenance solutions.",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    },
    {
      title: "Shot / Grit Blasting",
      desc: "High-performance surface preparation for maximum coating adhesion and protection.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      title: "Industrial Painting",
      desc: "Heavy-duty protective coating systems designed for harsh industrial environments.",
      icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
    },
    {
      title: "Wrapping & Coating",
      desc: "Specialized pipeline wrapping and anti-corrosion coatings for long-term asset integrity.",
      icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    },
    {
      title: "Insulation Works",
      desc: "Thermal and acoustic insulation services for industrial pipes, tanks, and vessels.",
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    },
    {
      title: "Logo Writing",
      desc: "Large-scale industrial branding, safety signage, and precision logo applications.",
      icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
    },
    {
      title: "Scaffolding Services",
      desc: "Safe, robust, and compliant scaffolding erection for access to high-elevation work zones.",
      icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
    },
  ];

  return (
    <section
      id="services"
      // CHANGED: Removed border class so there are no hard lines at all
      className="bg-slate-50 relative overflow-hidden"
    >
      {/* =========================================
          NEW: Top White Fade Mask
          This perfectly blends the white section above into this section's background
      ========================================== */}
      <div className="absolute top-0 left-0 w-full h-32 md:h-64 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>

      {/* =========================================
          NEW: Bottom Slate Fade Mask
          This softens the bottom edge as it transitions to the next section
      ========================================== */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-slate-50 to-transparent z-10 pointer-events-none"></div>

      {/* 1. Background Sketch */}
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-cover bg-center 
                   bg-[url('/images/service_section_bg_img_mobile.png')] 
                   md:bg-[url('/images/service_section_bg_img.png')]"
      ></div>

      {/* Ambient glowing orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-jmde-orange/5 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-jmde-blue/5 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/3 pointer-events-none z-0"></div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* LEFT SIDE: Sticky Header */}
          <div className="lg:w-1/3 lg:sticky group lg:top-32 w-full text-center lg:text-left lg:bg-transparent rounded-3xl p-6 lg:p-0 z-10">
            <div className="w-16 group-hover:w-32 transition-all duration-700 ease-out h-1.5 bg-gradient-to-r from-jmde-orange to-[#ff8c5a] rounded-full mb-6 mx-auto lg:mx-0"></div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-jmde-blue mb-6 tracking-tight leading-tight">
              Engineering <br className="hidden lg:block" />
              {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-jmde-blue to-jmde-orange"> */}
              Excellence
              {/* </span> */}
            </h2>

            <p className="text-[17px] text-gray-600 font-medium leading-relaxed mb-10">
              We provide comprehensive industrial solutions engineered with
              precision, delivered by skilled professionals, and built for
              ultimate durability in harsh environments.
            </p>

            <Link
              href="/services"
              className="relative inline-flex items-center gap-3 bg-white border-2 border-jmde-blue text-jmde-blue px-10 py-4 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_10px_20px_rgba(28,49,84,0.15)] z-10 group"
            >
              <span className="absolute inset-0 bg-jmde-blue -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out -z-10"></span>
              <span className="group-hover:text-white transition-colors duration-300">
                View All Services
              </span>
              <svg
                className="w-5 h-5 text-jmde-blue group-hover:text-white transform transition-all duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </Link>
          </div>

          {/* RIGHT SIDE: Staggered Grid Layout */}
          <div className="lg:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 z-10 relative pb-14">
            {services.map((service, index) => {
              const isEvenBox = index % 2 !== 0;

              return (
                <div
                  key={index}
                  className={`${isEvenBox ? "sm:translate-y-48" : ""} transition-transform duration-500`}
                >
                  <ScrollTriggeredCard service={service} index={index} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
