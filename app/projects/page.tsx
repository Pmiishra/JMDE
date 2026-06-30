"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

// --- ANIMATION HELPERS ---

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

const AnimatedCounter = ({
  end,
  suffix = "",
  prefix = "",
}: {
  end: number;
  suffix?: string;
  prefix?: string;
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
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

// --- MAIN COMPONENT ---

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);

  // Complete List of 50+ Projects
  const projects = [
    {
      id: "01",
      title: "Indian Oil Corporation",
      location: "Panipat Marketing Complex",
      category: "2016-17",
      image: "/projects/1.jpeg",
      headline: "Contracted by: Anuj Engineering Company",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "02",
      title: "Bharat Petroleum",
      location: "Top Khodi, Haryana",
      category: "2016-17",
      image: "/projects/2.jpeg",
      headline: "Contracted by: Balaji Enterprises",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "03",
      title: "Bharat Petroleum",
      location: "Bijwasan Installation, Delhi",
      category: "2016-17",
      image: "/projects/3.jpeg",
      headline: "Contracted by: Dee Gee Saw & Metal Work (P) Ltd.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "04",
      title: "Bharat Petroleum",
      location: "Jaipur Pipeline Terminal",
      category: "2016-17",
      image: "/projects/4.jpeg",
      headline: "Contracted by: Civtect(I) Pvt. Ltd",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "05",
      title: "Bharat Petroleum",
      location: "BPCL Mathura Depot",
      category: "2016-17",
      image: "/projects/5.jpeg",
      headline: "Contracted by: Techno Fac Contracts Pvt. Ltd",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "06",
      title: "Bharat Petroleum",
      location: "Panipat",
      category: "2016-17",
      image: "/projects/7.jpeg",
      headline: "Contracted by: Petro India & Engg. Co.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "07",
      title: "Bharat Petroleum",
      location: "Mathura Installation",
      category: "2016-17",
      image: "/images/project-mechanical.jpg",
      headline: "Contracted by: Dee Gee Saw & Metal Work (P) Ltd.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "08",
      title: "Bharat Petroleum",
      location: "Mathura",
      category: "2016-17",
      image: "/images/project-wrapping.jpg",
      headline: "Contracted by: Dee Gee Saw & Metal Work (P) Ltd.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "09",
      title: "Hindustan Petroleum",
      location: "Nalagarh, Himachal Pradesh",
      category: "2017-18",
      image: "/images/project-blasting.jpg",
      headline: "Contracted by: Blue Star Engineering Company",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "10",
      title: "Bharat Petroleum",
      location: "Sidhpur Depot, Gujarat",
      category: "2017-18",
      image: "/images/project-scaffolding.jpg",
      headline: "Contracted by: Dee Gee Saw & Metal Work (P) Ltd.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "11",
      title: "Indian Oil Corporation",
      location: "IOCL Refinery Panipat",
      category: "2018-19",
      image: "/images/project-civil.jpg",
      headline: "Contracted by: M/S Vinod Kumar",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "12",
      title: "Indian Oil Corporation",
      location: "Sagar",
      category: "2018-19",
      image: "/images/project-insulation.jpg",
      headline: "Contracted by: Perfect Construction Co.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "13",
      title: "Hindustan Petroleum",
      location: "IRD Sagar, Madhya Pradesh",
      category: "2018-19",
      image: "/images/project-mechanical.jpg",
      headline: "Contracted by: Dee Gee Saw & Metal Work (P) Ltd.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "14",
      title: "Bharat Petroleum",
      location: "Rairu Depot, Gwalior (M.P)",
      category: "2019-20",
      image: "/images/project-wrapping.jpg",
      headline: "Contracted by: Dee Gee Saw & Metal Work (P) Ltd.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "15",
      title: "Bharat Petroleum",
      location: "Bina Terminal",
      category: "2019-20",
      image: "/images/project-blasting.jpg",
      headline: "Contracted by: Dee Gee Saw & Metal Work (P) Ltd.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "16",
      title: "Bharat Petroleum",
      location: "BPCL Bina, Madhya Pradesh",
      category: "2019-20",
      image: "/images/project-scaffolding.jpg",
      headline: "Contracted by: Essdee Projects Engineering Pvt. Ltd.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "17",
      title: "Bharat Petroleum",
      location: "Bina",
      category: "2020-21",
      image: "/images/project-civil.jpg",
      headline: "Contracted by: R.K Enterprises",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "18",
      title: "Bharat Petroleum",
      location: "Mathura Refinery",
      category: "2020-21",
      image: "/images/project-insulation.jpg",
      headline: "Contracted by: Times Projects",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "19",
      title: "Bharat Petroleum",
      location: "Mathura Refinery",
      category: "2020-21",
      image: "/images/project-mechanical.jpg",
      headline: "Contracted by: Times Projects",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "21",
      title: "Indian Oil Corporation",
      location: "Yadamari Vill, Chitoor",
      category: "2021-22",
      image: "/images/project-wrapping.jpg",
      headline: "Contracted by: Indian Oil Corporation Pvt. Ltd.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "22",
      title: "Bharat Petroleum",
      location: "Lalru Depot, Punjab",
      category: "2021-22",
      image: "/images/project-blasting.jpg",
      headline: "Contracted by: Dee Gee Saw & Metal Work (P) Ltd.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "23",
      title: "Bharat Petroleum",
      location: "Koyali Installation, Vadodara",
      category: "2021-22",
      image: "/images/project-scaffolding.jpg",
      headline: "Contracted by: Dee Gee Saw & Metal Work (P) Ltd.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "24",
      title: "Hindustan Petroleum",
      location: "Bagru, MDPL Terminal, Jaipur",
      category: "2021-22",
      image: "/images/project-civil.jpg",
      headline: "Contracted by: Dee Gee Saw & Metal Work (P) Ltd.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "25",
      title: "Hindustan Petroleum",
      location: "Sitarganj Depot & LPG Bottling Plant",
      category: "2021-22",
      image: "/images/project-insulation.jpg",
      headline: "Contracted by: Dee Gee Saw & Metal Work (P) Ltd.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "26",
      title: "Hindustan Petroleum",
      location: "Sitarganj Depot & LPG Bottling Plant",
      category: "2021-22",
      image: "/images/project-mechanical.jpg",
      headline: "Contracted by: Hindustan Petroleum Corporation Ltd.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "27",
      title: "Bharat Petroleum",
      location: "Bhatinda Depot, Punjab",
      category: "2022-23",
      image: "/images/project-wrapping.jpg",
      headline: "Contracted by: Dee Gee Saw & Metal Work (P) Ltd.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "28",
      title: "Indian Oil Corporation",
      location: "IOCL Pipeline Division WRPL, Viramgam",
      category: "2022-23",
      image: "/images/project-blasting.jpg",
      headline: "Contracted by: Hari Om Enterprises",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "29",
      title: "Bharat Petroleum",
      location: "Krishnapatnam Coastal Installation, Nellore",
      category: "2023-24",
      image: "/images/project-scaffolding.jpg",
      headline: "Contracted by: Dee Gee Saw & Metal Work (P) Ltd.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "30",
      title: "Hindustan Petroleum",
      location: "Durgapur IRD, West Bengal",
      category: "2023-24",
      image: "/images/project-civil.jpg",
      headline: "Contracted by: JPC Infratech Pvt. Ltd.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "31",
      title: "Indian Oil Corporation",
      location: "WRPL, Viramgam, Ahmedabad",
      category: "2023-24",
      image: "/images/project-insulation.jpg",
      headline: "Contracted by: Expo Gas Containers Limited",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "32",
      title: "Indian Oil Corporation",
      location: "IOCL Haldia Refinery",
      category: "2023-24",
      image: "/images/project-mechanical.jpg",
      headline: "Contracted by: Expo Gas Containers Limited",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "33",
      title: "Indian Oil Corporation",
      location: "Orai, Jalaun, U.P",
      category: "2024-25",
      image: "/images/project-wrapping.jpg",
      headline: "Contracted by: Expo Project Engineering Services (P) Ltd.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "34",
      title: "Bharat Petroleum",
      location: "BPCL Mathura Depot",
      category: "2024-25",
      image: "/images/project-blasting.jpg",
      headline: "Contracted by: Bharat Petroleum Corporation Limited",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "35",
      title: "Indian Oil Corporation",
      location: "AFS Gouripur, Birati, Kolkata",
      category: "2024-25",
      image: "/images/project-scaffolding.jpg",
      headline: "Contracted by: Expo Gas Containers Limited",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "36",
      title: "Indian Oil Corporation",
      location: "IOCL Gujarat Refinery, Vadodara",
      category: "2024-25",
      image: "/images/project-civil.jpg",
      headline: "Contracted by: Expo Gas Containers Limited",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "37",
      title: "Indian Oil Corporation",
      location: "IOCL, Dahod, Gujarat",
      category: "2024-25",
      image: "/images/project-insulation.jpg",
      headline: "Contracted by: Expo Project Engineering Services (P) Ltd.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "38",
      title: "Indian Oil Corporation",
      location: "Uttar Pradesh Projects",
      category: "2024-25",
      image: "/images/project-mechanical.jpg",
      headline: "Contracted by: Dee Gee Saw & Metal Work (P) Ltd.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "39",
      title: "Bharat Petroleum",
      location: "Hazira Depot, Surat",
      category: "2024-25",
      image: "/images/project-wrapping.jpg",
      headline: "Contracted by: Dee Gee Saw & Metal Work (P) Ltd.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "40",
      title: "Matrix Fertilisers & Chemicals",
      location: "Panagarh, West Bengal",
      category: "2024-25",
      image: "/images/project-blasting.jpg",
      headline: "Contracted by: Expo Project Engineering Services (P) Ltd.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "41",
      title: "Indian Oil Corporation",
      location: "Malkapur, Telangana",
      category: "2024-25",
      image: "/images/project-scaffolding.jpg",
      headline: "Contracted by: Dee Gee Saw & Metal Work (P) Ltd.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "42",
      title: "Matrix Fertilisers & Chemicals",
      location: "Panagarh, West Bengal",
      category: "2024-25",
      image: "/images/project-civil.jpg",
      headline: "Contracted by: Expo Project Engineering Services (P) Ltd.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "43",
      title: "Indian Oil Corporation",
      location: "Unchahar, Uttar Pradesh",
      category: "2024-25",
      image: "/images/project-insulation.jpg",
      headline: "Contracted by: Dee Gee Saw & Metal Work (P) Ltd.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "44",
      title: "Indian Oil Corporation",
      location: "Sehore, Madhya Pradesh",
      category: "2024-25",
      image: "/images/project-mechanical.jpg",
      headline: "Contracted by: Dee Gee Saw & Metal Work (P) Ltd.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "45",
      title: "Hindustan Petroleum",
      location: "Pachpadra, Rajasthan",
      category: "2024-25",
      image: "/images/project-wrapping.jpg",
      headline: "Contracted by: DE,S Technico Limited",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "46",
      title: "Hindustan Petroleum",
      location: "Petchem Marketing, Balotra",
      category: "2024-25",
      image: "/images/project-blasting.jpg",
      headline: "Contracted by: Dee Gee Saw & Metal Work (P) Ltd.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "47",
      title: "Bharat Petroleum",
      location: "Mysuru Installation, Karnataka",
      category: "2024-25",
      image: "/images/project-scaffolding.jpg",
      headline: "Contracted by: Expo Gas Containers Limited",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "48",
      title: "Indian Oil Corporation",
      location: "Chaksu, Jaipur",
      category: "2025-26",
      image: "/images/project-civil.jpg",
      headline: "Contracted by: Expo Gas Containers Limited",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "49",
      title: "Indian Oil Corporation",
      location: "Khirai, Gujarat",
      category: "2025-26",
      image: "/images/project-insulation.jpg",
      headline: "Contracted by: Expo Project Engineering Services (P) Ltd.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "50",
      title: "Hindustan Petroleum",
      location: "Pachpadra, Balotra, Rajasthan",
      category: "2025-26",
      image: "/images/project-mechanical.jpg",
      headline: "Contracted by: Dee Gee Saw & Metal Work (P) Ltd.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "51",
      title: "Bharat Petroleum",
      location: "Devangonthi Installation, Kolkata",
      category: "2025-26",
      image: "/images/project-wrapping.jpg",
      headline: "Contracted by: Expo Gas Containers Limited",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
  ];

  const ongoing = [
    {
      id: 1,
      title: "Phase 2 Mechanical Expansion",
      location: "Industrial Zone, Plant A",
      status: "In Progress",
      progress: 60,
      image: "/projects/1.jpeg",
    },
    {
      id: 2,
      title: "Plant-wide Industrial Painting",
      location: "Main Refinery Hub",
      status: "Active Execution",
      progress: 42,
      image: "/projects/2.jpeg",
    },
    {
      id: 3,
      title: "Heavy Support Scaffolding",
      location: "Power Plant Unit 3",
      status: "Erection Phase",
      progress: 85,
      image: "/projects/7.jpeg",
    },
    {
      id: 4,
      title: "Structural Framework Welding",
      location: "Chemical Sector 4",
      status: "Initial Phase",
      progress: 15,
      image: "/projects/5.jpeg",
    },
    {
      id: 5,
      title: "Pipeline Anti-Corrosion Setup",
      location: "North Wing Storage",
      status: "In Progress",
      progress: 55,
      image: "/projects/6.jpeg",
    },
    {
      id: 6,
      title: "Containment Tank Blasting",
      location: "East Depot",
      status: "Final Inspection",
      progress: 92,
      image: "/projects/4.jpeg",
    },
    {
      id: 7,
      title: "Thermal Insulation Wrapping",
      location: "Petrochemical Plant",
      status: "Active Execution",
      progress: 34,
      image: "/projects/3.jpeg",
    },
    {
      id: 8,
      title: "Concrete Foundation Pouring",
      location: "New Manufacturing Wing",
      status: "Curing Phase",
      progress: 78,
      image: "/projects/2.jpeg",
    },
    {
      id: 9,
      title: "High-Altitude Rigging",
      location: "Unit 2 Cooling Towers",
      status: "In Progress",
      progress: 45,
      image: "/projects/1.jpeg",
    },
  ];

  // Dynamically extract unique categories (years) from the data, sorted descending so newest is first
  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category)))
      .sort()
      .reverse(),
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Pagination Logic (Show 12 initially, then load more)
  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  return (
    <main className="bg-[#F8F9FB] text-[#1A1A1A] font-sans">
      {/* =========================================
          SECTION 1 — HERO BANNER
      ========================================== */}

      <section className="relative h-screen min-h-[600px] flex flex-col items-center justify-center">
        {/* Background Image & Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/project_page.png')" }} // Update with your image path
        ></div>
        <div className="absolute inset-0 z-10 bg-jmde-blue/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-jmde-blue/90 via-jmde-blue/60 to-transparent"></div>

        {/* Main Content - Added mt-24 to push it down slightly */}
        <div className="relative z-20 text-center max-w-[1400px] mx-auto px-6 ">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-md">
              Our Work
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-medium drop-shadow-md">
              Explore our portfolio of successful industrial, infrastructure,
              and commercial projects executed with unmatched precision and
              safety.
            </p>
          </FadeIn>
        </div>

        {/* Breadcrumb - Pinned to the absolute bottom of the section */}
        <div className="absolute bottom-12 left-0 w-full z-20 px-6">
          <FadeIn delay={200}>
            <div className="max-w-[1400px] mx-auto flex justify-center md:justify-center">
              {/* Styled to match your reference image (larger and bolder) */}
              <div className="text-white/80 text-sm md:text-md font-semibold tracking-wide flex items-center gap-3 drop-shadow-lg">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span className="text-white font-light">/</span>
                <span className="text-white font-bold">Projects</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =========================================
          SECTION 2 — BRUTALIST DATA MANIFEST
      ========================================== */}
      <section className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Stat 1 */}
            <div className="bg-jmde-blue p-10 flex flex-col justify-between rounded-4xl min-h-[350px]">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">
                Major Projects
              </span>
              <div className="flex flex-col">
                <div className="text-[120px] font-black leading-[0.8] tracking-tighter text-white">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <span className="text-xl font-bold mt-4 text-white">
                  Completed Industrial Executions
                </span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className=" border-[3px] border-jmde-orange p-10 flex flex-col rounded-4xl justify-between min-h-[350px]">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-jmde-orange">
                Current Status
              </span>
              <div className="flex flex-col">
                <div className="text-[120px] font-black leading-[0.8] tracking-tighter text-jmde-orange">
                  <AnimatedCounter end={9} suffix="+" />
                </div>
                <span className="text-xl font-bold text-jmde-orange mt-4">
                  Active Field Assignments
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3 — PROJECT GALLERY
      ========================================== */}
      <section className="py-[120px] bg-[#F8F9FB] min-h-[800px]">
        <div className="max-w-[1400px] mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center group">
              <div className="w-16 group-hover:w-32 transition-all duration-700 ease-out h-1.5 bg-gradient-to-r from-[#F36B21] to-[#ff8c5a] rounded-full mb-6 mx-auto"></div>
              <h2 className="text-3xl md:text-5xl font-black text-[#123D82] mb-6">
                Completed Projects
              </h2>
              <p className="text-lg text-gray-600 font-medium">
                A chronological showcase of our capabilities across various
                industrial sectors.
              </p>
            </div>
          </FadeIn>

          {/* Interactive Filtering Menu by Year */}
          <FadeIn delay={200}>
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setVisibleCount(12); // Reset pagination on filter change
                  }}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-[#123D82] text-white shadow-md scale-105"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-[#F36B21] hover:text-[#F36B21]"
                  }`}
                >
                  {category === "All" ? "All Timeline" : category}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Projects Grid (Animated Accordion Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-4">
            {displayedProjects.map((project, index) => {
              // Creating a sub-component to manage local expansion state
              const ProjectCard = () => {
                const [isExpanded, setIsExpanded] = useState(false);
                const contentRef = useRef<HTMLDivElement>(null);

                return (
                  <div className="group relative flex flex-col h-full cursor-pointer rounded-[24px]">
                    {/* Backdrop Image Canvas */}
                    <div className="absolute top-0 left-0 w-full h-[300px] rounded-[24px] overflow-hidden shadow-sm">
                      <img
                        src={project.image}
                        alt={project.location}
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-70"></div>
                      <div className="absolute top-5 left-5 right-5 flex justify-between items-center z-10">
                        <span className="bg-[#123D82] text-white text-[10px] font-black uppercase tracking-[0.15em] px-3 py-1.5 rounded-full shadow-md">
                          PRJ-{project.id}
                        </span>
                        <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Overlapping Content Box */}
                    <div className="relative z-20 mt-[200px] mx-4 lg:mx-6 bg-white rounded-[20px] p-6 lg:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] flex-grow flex flex-col border border-gray-50 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F36B21]"></div>
                        <span className="text-[#F36B21] text-[10px] font-black uppercase tracking-widest">
                          {project.title}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-black text-[#123D82] leading-tight mb-5">
                        {project.location}
                      </h3>

                      <div className="bg-[#F8F9FB] rounded-xl p-4 mb-4 border border-gray-100">
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block mb-1">
                          Contractor
                        </span>
                        <span className="text-sm font-bold text-gray-800 line-clamp-2">
                          {project.headline
                            .replace("Contracted by: ", "")
                            .replace("Contracted by :", "")}
                        </span>
                      </div>

                      {/* Animated Description Section */}
                      <div className="flex-grow">
                        <div
                          ref={contentRef}
                          className="overflow-hidden transition-all duration-500 ease-in-out"
                          style={{
                            maxHeight: isExpanded
                              ? `${contentRef.current?.scrollHeight}px`
                              : "40px",
                          }}
                        >
                          <p className="text-sm text-gray-500 font-medium leading-relaxed">
                            {project.desc}
                          </p>
                        </div>

                        <button
                          onClick={() => setIsExpanded(!isExpanded)}
                          className="mt-3 flex items-center gap-2 text-[#123D82] text-[11px] font-black uppercase tracking-widest hover:text-[#F36B21] transition-colors duration-300"
                        >
                          {isExpanded ? "Read Less" : "Read More"}
                          <svg
                            className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              };

              return (
                <FadeIn key={project.id} delay={(index % 3) * 100}>
                  <ProjectCard />
                </FadeIn>
              );
            })}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-16">
              <button
                onClick={() => setVisibleCount((prev) => prev + 12)}
                className="relative inline-flex items-center gap-3 bg-white border-2 border-[#123D82] text-[#123D82] px-10 py-4 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_10px_20px_rgba(18,61,130,0.15)] z-10 group"
              >
                <span className="absolute inset-0 bg-[#123D82] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out -z-10"></span>
                <span className="group-hover:text-white transition-colors duration-300">
                  Load More Projects
                </span>
                <svg
                  className="w-5 h-5 text-[#123D82] group-hover:text-white transform transition-all duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          )}

          {/* Empty State Fallback */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-400">
                No projects found for this period.
              </h3>
            </div>
          )}
        </div>
      </section>

      {/* =========================================
        SECTION: ONGOING PROJECTS (DESIGN: image_74579d.png)
       ========================================== */}
      <section className="py-20 bg-gray-50">
        <div className="flex flex-col items-center group text-center mb-16">
          {/* The Orange Bar */}
          <div className="w-16 group-hover:w-32 transition-all duration-700 ease-out h-1.5 bg-gradient-to-r from-[#F36B21] to-[#ff8c5a] rounded-full mb-6 mx-auto"></div>

          {/* The Main Title */}
          <h2 className="text-4xl md:text-5xl font-black text-[#123D82] mb-4">
            {/* Replace these titles as needed */}
            Ongoing Projects
          </h2>

          {/* The Subtitle */}
          <p className="text-gray-500 max-w-lg font-medium">
            {/* Replace these descriptions as needed */}A chronological showcase
            of our capabilities across various industrial sectors.
          </p>
        </div>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ongoing.map((project) => (
              <div
                key={project.id}
                className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100 flex flex-col"
              >
                {/* Image & Status Badge */}
                <div className="relative h-64 w-full bg-gray-100 rounded-[24px] overflow-hidden mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 flex items-center gap-2 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-[#F36B21]"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#123D82]">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="px-2">
                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      className="w-3.5 h-3.5 text-jmde-orange"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                    </svg>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      {project.location}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-[#123D82] mb-6 leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
