"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: "01",
      title: "Indian Oil Corporation",
      location: "Panipat Marketing Complex",
      category: "2013-14",
      image: "/images/project-mechanical.jpg",
      headline: "Contracted by: Anuj Engineering Company",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "02",
      title: "Bharat Petroleum",
      location: "Top Khodi, Haryana",
      category: "2013-14",
      image: "/images/project-wrapping.jpg",
      headline: "Contracted by: Balaji Enterprises",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "03",
      title: "Bharat Petroleum",
      location: "Bijwasan Installation, Delhi",
      category: "2014-15",
      image: "/images/project-blasting.jpg",
      headline: "Contracted by: Dee Gee Saw & Metal Work (P) Ltd.",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "04",
      title: "Bharat Petroleum",
      location: "Jaipur Pipeline Terminal",
      category: "2014-15",
      image: "/images/project-scaffolding.jpg",
      headline: "Contracted by: Civtect(I) Pvt. Ltd",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "05",
      title: "Bharat Petroleum",
      location: "BPCL Mathura Depot",
      category: "2014-15",
      image: "/images/project-civil.jpg",
      headline: "Contracted by: Techno Fac Contracts Pvt. Ltd",
      desc: "Project details, technical specifications, and execution parameters will be updated here in the future. 50+ Projects Completed Across Industrial Sectors",
    },
    {
      id: "06",
      title: "Bharat Petroleum",
      location: "Panipat",
      category: "2015-16",
      image: "/images/project-insulation.jpg",
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
  ];

  const scrollToCard = (index: number) => {
    if (mobileCarouselRef.current) {
      const cardWidth = mobileCarouselRef.current.offsetWidth;
      mobileCarouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const handleProjectSelect = (index: number) => {
    setActiveIndex(index);
    setIsMobileMenuOpen(false);
    scrollToCard(index);
  };

  // Global Auto-Scrolling loop interval trigger
  useEffect(() => {
    if (isMobileMenuOpen) return;

    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % projects.length;
      setActiveIndex(nextIndex);
      scrollToCard(nextIndex);
    }, 8000);

    return () => clearInterval(interval);
  }, [activeIndex, isMobileMenuOpen, projects.length]);

  // Desktop Sidebar Auto-Scroll Sync
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.innerWidth >= 1024 &&
      scrollContainerRef.current
    ) {
      const container = scrollContainerRef.current;
      const activeElement = container.children[activeIndex] as HTMLElement;

      if (activeElement) {
        const containerHeight = container.clientHeight;
        const elementTop = activeElement.offsetTop;
        const elementHeight = activeElement.clientHeight;

        container.scrollTo({
          top: elementTop - containerHeight / 2 + elementHeight / 2,
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex]);

  const handleMobileScroll = () => {
    if (!mobileCarouselRef.current || window.innerWidth >= 1024) return;

    const scrollLeft = mobileCarouselRef.current.scrollLeft;
    const cardWidth = mobileCarouselRef.current.offsetWidth;
    if (cardWidth === 0) return;

    const newIndex = Math.round(scrollLeft / cardWidth);

    if (
      newIndex !== activeIndex &&
      newIndex >= 0 &&
      newIndex < projects.length
    ) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section
      id="projects"
      className="bg-white py-16 md:py-24 relative overflow-hidden"
    >
      {/* Premium Slide Animation Injection */}
      <style>{`
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .slide-in-right {
          animation: slideInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="absolute top-0 left-0 w-full h-[1px] bg-slate-100" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================
            Section Header Row (Centered on Mobile)
        ========================================== */}
        <div className="flex group flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6 text-center md:text-left">
          {/* Centering items on mobile via flex-col items-center */}
          <div className="max-w-2xl mx-auto md:mx-0 flex flex-col items-center md:items-start">
            <div className="w-16 group-hover:w-32 transition-all duration-700 ease-out h-1.5 bg-gradient-to-r from-jmde-orange to-[#ff8c5a] rounded-full mb-6 mx-auto lg:mx-0"></div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-jmde-blue mb-4 tracking-tight">
              {/* Showcasing <span className="text-jmde-orange">50+</span> Completed
              Projects */}
              Completed Projects
            </h2>
            <p className="text-lg text-gray-500 font-medium">
              50+ Projects Completed Across Industrial Sectors.
            </p>
          </div>
          <div className="shrink-0 hidden md:block">
            <Link
              href="#all-projects"
              className="relative inline-flex items-center gap-3 bg-white border-2 border-jmde-blue text-jmde-blue px-10 py-4 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_10px_20px_rgba(28,49,84,0.15)] z-10 group"
            >
              <span className="absolute inset-0 bg-jmde-blue -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out -z-10"></span>

              <span className="group-hover:text-white transition-colors duration-300">
                View All Projects
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
        </div>

        {/* =========================================
            Mobile View All Button (Top) - Singleton
        ========================================== */}
        <div className="md:hidden text-center mb-8 px-1">
          <Link
            href="#all-projects"
            className="inline-flex items-center justify-center border-2 border-jmde-blue text-jmde-blue bg-white hover:bg-jmde-orange hover:border-jmde-orange hover:text-white py-3.5 rounded-xl font-bold text-base transition-all duration-300 px-10 gap-3 group"
          >
            View All Projects
            <svg
              className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>

        {/* MAIN LAYOUT WRAPPER */}
        <div className="flex flex-col lg:flex-row w-full gap-8 xl:gap-12 items-start justify-center">
          {/* =========================================
              LEFT BLOCK: Navigation Control Pillar
          ========================================== */}
          <div className="w-full lg:w-[350px] lg:h-[400px] bg-jmde-blue rounded-[2rem] p-4 lg:p-8 flex flex-col relative shadow-[0_20px_50px_rgba(28,49,84,0.06)] overflow-visible z-20 order-2 lg:order-1">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none rounded-[2rem]" />

            {/* Mobile Dropdown Title Bar */}
            <div className="block lg:hidden w-full relative z-30">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-full flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-white focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm font-bold opacity-60">
                    {projects[activeIndex].id}
                  </span>
                  <span className="text-base font-bold tracking-tight text-left leading-tight pr-2">
                    {projects[activeIndex].title}
                  </span>
                </div>
                <svg
                  className={`w-4 h-4 text-white transition-transform duration-300 flex-shrink-0 ${isMobileMenuOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            {/* Scrolling track array list */}
            <div
              ref={scrollContainerRef}
              className={`relative z-10 lg:flex flex-col w-full h-full lg:max-h-[440px] overflow-y-auto pr-2 scroll-smooth 
                         [scrollbar-width:none] [&::-webkit-scrollbar]:hidden overflow-visible transition-all duration-300 ease-in-out
                         ${isMobileMenuOpen ? "flex max-h-[360px] opacity-100 mt-4 pt-2 border-t border-white/10" : "hidden lg:opacity-100"}`}
            >
              {projects.map((project, index) => {
                const isSelected = activeIndex === index;

                return (
                  <button
                    key={project.id}
                    onClick={() => handleProjectSelect(index)}
                    className={`w-full text-left py-5 sm:py-6 border-b border-white/10 flex items-center group transition-all duration-300 ease-out relative focus:outline-none overflow-visible
                      ${isSelected ? "pl-12 lg:pl-16" : "pl-2 sm:pl-4"}`}
                  >
                    <div
                      className={`absolute left-0 top-1/2 -translate-y-1/2 w-8 lg:w-12 h-[3px] bg-white transition-all duration-300 origin-left z-20
                      ${isSelected ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`}
                    />

                    <div className="flex items-center gap-6 pointer-events-none">
                      <span
                        className={`font-mono text-sm font-bold transition-colors duration-300 ${isSelected ? "text-white" : "text-white/40 group-hover:text-white/60"}`}
                      >
                        {project.id}
                      </span>
                      <span
                        className={`text-[12px] sm:text-[14px] font-bold tracking-tight transition-all duration-300 leading-tight ${isSelected ? "text-white text-[18px]" : "text-white/40 group-hover:text-white/70"}`}
                      >
                        {project.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* =========================================
              RIGHT BLOCK: Presentation Display Canvas
          ========================================== */}
          <div className="w-full lg:w-[780px] flex flex-col items-center order-1 lg:order-2">
            <div
              ref={mobileCarouselRef}
              onScroll={handleMobileScroll}
              className="w-full bg-transparent lg:bg-slate-50/60 lg:rounded-[2.5rem] lg:border lg:border-slate-100 lg:p-12 relative flex items-center overflow-x-auto lg:overflow-hidden snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none hidden lg:block" />

              {/* DESKTOP CONTENT */}
              <div
                className="hidden lg:grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center w-full slide-in-right"
                key={activeIndex}
              >
                <div className="md:col-span-6 space-y-4 order-2 md:order-1">
                  {/* Category / Year */}
                  <span className="text-[11px] font-mono font-black tracking-widest text-jmde-blue uppercase block">
                    {projects[activeIndex].category}
                  </span>

                  {/* Project/Customer Name as Main Heading */}
                  <h3 className="text-2xl sm:text-3xl font-black text-jmde-blue tracking-tight leading-tight">
                    {projects[activeIndex].title}
                  </h3>

                  {/* Description underneath */}
                  <p className="text-gray-500 text-[14.5px] leading-relaxed font-medium">
                    {projects[activeIndex].desc}
                  </p>

                  <div className="pt-2">
                    {/* Contractor / Company Name */}
                    <div className="text-sm font-bold text-jmde-blue mb-1">
                      {projects[activeIndex].headline}
                    </div>

                    {/* Location Pin */}
                    <div className="flex items-center text-gray-400 text-xs font-bold font-mono">
                      <svg
                        className="w-4 h-4 mr-2 text-jmde-orange flex-shrink-0"
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
                      {projects[activeIndex].location.toUpperCase()}
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <div className="pt-4">
                    <Link
                      href="#all-projects"
                      className="inline-flex items-center gap-2.5 text-xs font-black tracking-widest text-jmde-orange uppercase hover:text-[#E06612] group/lnk transition-colors duration-200"
                    >
                      <span>Learn More</span>
                      <svg
                        className="w-4 h-4 transform transition-transform duration-300 group-hover/lnk:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div className="md:col-span-6 order-1 md:order-2">
                  <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(28,49,84,0.08)] bg-slate-200 border-4 border-white">
                    <img
                      src={projects[activeIndex].image}
                      alt={projects[activeIndex].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-jmde-blue/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* MOBILE COMPACT ONE-BY-ONE CAROUSEL */}
              {projects.map((project) => (
                <div
                  key={`mobile-slide-${project.id}`}
                  className="block lg:hidden w-full flex-none snap-center px-1 py-4 focus:outline-none"
                >
                  <div className="w-full overflow-hidden bg-slate-50 border border-slate-100 rounded-[2rem] p-5 sm:p-6 flex flex-col gap-4 text-left shadow-sm">
                    <div className="relative h-48 w-full rounded-[1.5rem] overflow-hidden bg-slate-100 shadow-sm flex-shrink-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Category / Year */}
                    <span className="text-[10px] font-mono font-bold tracking-widest text-jmde-blue uppercase block w-full mt-1">
                      {project.category}
                    </span>

                    {/* Project/Customer Name as Main Heading */}
                    <h3 className="text-xl font-black text-jmde-blue tracking-tight leading-snug w-full whitespace-normal break-words pr-2">
                      {project.title}
                    </h3>

                    {/* Description underneath */}
                    <p className="text-gray-500 text-xs leading-relaxed font-medium w-full whitespace-normal break-words pr-2">
                      {project.desc}
                    </p>

                    <div className="w-full pt-1">
                      {/* Contractor / Company Name inserted here */}
                      <div className="text-[13px] font-bold text-jmde-blue mb-1 w-full whitespace-normal break-words pr-2">
                        {project.headline}
                      </div>

                      {/* Location Pin */}
                      <div className="flex items-center text-gray-400 text-[11px] font-mono w-full truncate">
                        <svg
                          className="w-3.5 h-3.5 mr-1.5 text-jmde-orange flex-shrink-0"
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
                        <span className="truncate">
                          {project.location.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Carousel Slider Dots Indicators */}
            <div className="flex lg:hidden items-center justify-center flex-wrap gap-2 mt-4 px-4 w-full">
              {projects.map((_, dotIdx) => (
                <button
                  key={`dot-${dotIdx}`}
                  onClick={() => handleProjectSelect(dotIdx)}
                  className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none
                    ${activeIndex === dotIdx ? "w-6 bg-jmde-blue" : "w-1.5 bg-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
