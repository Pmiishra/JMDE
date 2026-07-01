"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

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

// ==========================================
// THE 8 CORE COMPANY SERVICES
// ==========================================
const coreServices = [
  {
    title: "Civil Works",
    icon: "🏗️",
    desc: "Comprehensive structural construction and deep foundation engineering for heavy industry.",
    link: "/services/civil",
  },
  {
    title: "Mechanical Works",
    icon: "⚙️",
    desc: "Heavy equipment installation, precision fabrication, and plant maintenance operations.",
    link: "/services/mechanical",
  },
  {
    title: "Shot-Grit Blasting",
    icon: "💨",
    desc: "Aggressive surface preparation and deep contaminant removal for industrial assets.",
    link: "/services/shot-grit-blasting",
  },
  {
    title: "Industrial Painting",
    icon: "🎨",
    desc: "High-performance protective coatings engineered for extreme environmental conditions.",
    link: "/services/painting",
  },
  {
    title: "Wrapping & Coating",
    icon: "🛡️",
    desc: "Advanced anti-corrosion protection systems for pipelines and critical plant infrastructure.",
    link: "/services/wrapping-coating",
  },
  {
    title: "Insulation Works",
    icon: "🌡️",
    desc: "Thermal, acoustic, and cryogenic insulation for process pipes and storage tanks.",
    link: "/services/insulation",
  },
  {
    title: "Writing Logo",
    icon: "✍️",
    desc: "Professional industrial branding, safety signage, and high-visibility asset marking.",
    link: "/services/writing-logo",
  },
  {
    title: "Scaffolding Work",
    icon: "🪜",
    desc: "Engineered high-altitude access solutions and heavy-duty structural support systems.",
    link: "/services/scaffolding",
  },
];

const processSteps = [
  {
    id: "01",
    title: "Consultation",
    desc: "Understanding project requirements.",
  },
  {
    id: "02",
    title: "Site Inspection",
    desc: "Evaluating project conditions.",
  },
  {
    id: "03",
    title: "Planning",
    desc: "Preparing manpower, equipment and schedule.",
  },
  {
    id: "04",
    title: "Execution",
    desc: "Performing work with quality and safety.",
  },
  {
    id: "05",
    title: "Handover",
    desc: "Final quality verification and completion.",
  },
];

const whyChoose = [
  {
    title: "Experienced Workforce",
    desc: "Highly trained personnel with years of field experience.",
  },
  {
    title: "Quality Workmanship",
    desc: "Strict adherence to engineering and quality standards.",
  },
  {
    title: "Safety-First Approach",
    desc: "Zero-compromise policy on worksite safety protocols.",
  },
  {
    title: "Timely Completion",
    desc: "Rigorous project management to meet strict deadlines.",
  },
  {
    title: "Reliable Support",
    desc: "24/7 client communication and post-project support.",
  },
  {
    title: "Industrial Expertise",
    desc: "Specialized knowledge in heavy plant environments.",
  },
];

export default function ServicesPage() {
  // State to track if the user is on a mobile device for specific animations
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    handleResize(); // Check immediately on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      {/* =========================================
          SECTION 1 — HERO
      ========================================== */}
      <section className="relative h-screen min-h-[600px] flex flex-col items-center justify-center">
        {/* Background Image & Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/services_page.png')" }}
        ></div>
        <div className="absolute inset-0 z-10 bg-[#123D82]/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#123D82]/90 via-[#123D82]/60 to-transparent"></div>

        <div className="relative z-20 text-center max-w-[1400px] mx-auto px-6">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-md">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-medium drop-shadow-md">
              Explore our comprehensive portfolio of industrial, infrastructure,
              and commercial execution capabilities delivered with unmatched
              precision and safety.
            </p>
          </FadeIn>
        </div>

        {/* Breadcrumb */}
        <div className="absolute bottom-12 left-0 w-full z-20 px-6">
          <FadeIn delay={200}>
            <div className="max-w-[1400px] mx-auto flex justify-center">
              <div className="text-white/80 text-sm md:text-md font-semibold tracking-wide flex items-center gap-3 drop-shadow-lg">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span className="text-white font-light">/</span>
                <span className="text-white font-bold">Services</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =========================================
          SECTION 2 — THE 8 CORE SERVICES DIRECTORY
      ========================================== */}
      <section className="py-24 bg-[#F8F9FB] border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16 group">
            <div className="w-16 group-hover:w-32 transition-all duration-700 ease-out h-1.5 bg-gradient-to-r from-[#F36B21] to-[#ff8c5a] rounded-full mb-6 mx-auto"></div>

            <h2 className="text-4xl md:text-5xl font-black text-[#123D82] mb-4">
              Our Core Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service, idx) => (
              <Link href={service.link} key={idx}>
                <div className="bg-white p-8 border border-gray-100 hover:border-[#123D82] hover:shadow-[0_20px_40px_rgba(18,61,130,0.08)] hover:-translate-y-2 transition-all duration-300 group rounded-[20px] h-full flex flex-col cursor-pointer">
                  <div className="text-4xl mb-6 md:grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110 origin-left">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-black text-[#1A1A1A] group-hover:text-[#123D82] transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed mb-6 flex-grow">
                    {service.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3 — OUR PROCESS
      ========================================== */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-20">
            <div className="w-16 group-hover:w-32 transition-all duration-700 ease-out h-1.5 bg-gradient-to-r from-[#F36B21] to-[#ff8c5a] rounded-full mb-6 mx-auto"></div>

            <h2 className="text-4xl md:text-5xl font-black text-[#123D82] mb-4">
              How We Execute
            </h2>
            <span className="text-gray-400 text-[11px] font-black uppercase tracking-[0.2em] block mb-4">
              Methodology
            </span>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-[40px] left-0 w-full h-px bg-gray-200"></div>

            <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-6 relative z-10">
              {processSteps.map((step, idx) => (
                <div key={idx} className="flex-1 relative group">
                  {/* Apply staggered delay ONLY on mobile view */}
                  <FadeIn delay={isMobile ? idx * 200 : 0}>
                    {idx !== processSteps.length - 1 && (
                      <div className="block lg:hidden absolute top-12 left-[39px] w-px h-[calc(100%+30px)] bg-gray-200"></div>
                    )}

                    <div className="flex lg:flex-col gap-6 lg:gap-0 lg:items-center text-left lg:text-center">
                      <div className="w-20 h-20 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center group-hover:border-[#F36B21] group-hover:bg-[#F36B21] transition-colors duration-500 z-10 relative lg:mb-8 shrink-0">
                        <span className="text-2xl font-black text-gray-300 group-hover:text-white transition-colors font-mono">
                          {step.id}
                        </span>
                      </div>

                      <div className="pt-4 lg:pt-0">
                        <h3 className="text-lg font-black text-[#123D82] mb-2">
                          {step.title}
                        </h3>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4 — WHY CHOOSE JMDE (EDITORIAL LIST)
      ========================================== */}
      <section className="py-32 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row gap-20">
          {/* Left Column: Sticky Header */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-32">
              <div className="w-16 group-hover:w-24 transition-all duration-700 ease-out h-1.5 bg-gradient-to-r from-[#F36B21] to-[#ff8c5a] rounded-full mb-6 mx-auto lg:mx-0"></div>

              <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-[#123D82] leading-[1.1] tracking-tight relative z-10 mb-4">
                Why <br className="hidden lg:block" /> Choose US?
              </h2>
            </div>
          </div>

          {/* Right Column: Interactive List */}
          <div className="lg:w-2/3 flex flex-col">
            {whyChoose.map((item, idx) => (
              <div
                key={idx}
                className="group border-t-2 border-gray-100 py-12 hover:border-[#123D82] transition-colors duration-500 flex flex-col md:flex-row gap-6 md:gap-12 md:items-start cursor-default"
              >
                {/* Index Number */}
                <div className="text-5xl font-black text-gray-200 group-hover:text-[#F36B21] transition-colors duration-500 font-mono mt-[-8px]">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-[#1A1A1A] group-hover:text-[#123D82] transition-colors duration-300 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-500 font-medium leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
            {/* Final closing border */}
            <div className="border-t-2 border-gray-100 w-full"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
