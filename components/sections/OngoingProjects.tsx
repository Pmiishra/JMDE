"use client";
import { useState } from "react";

export default function OngoingProjects() {
  const [showAll, setShowAll] = useState(false);

  const ongoing = [
    {
      id: 1,
      title: "Phase 2 Mechanical Expansion",
      location: "Industrial Zone, Plant A",
      status: "In Progress",
      progress: 60,
      image: "/images/ongoing-1.jpg",
    },
    {
      id: 2,
      title: "Plant-wide Industrial Painting",
      location: "Main Refinery Hub",
      status: "Active Execution",
      progress: 42,
      image: "/images/ongoing-2.jpg",
    },
    {
      id: 3,
      title: "Heavy Support Scaffolding",
      location: "Power Plant Unit 3",
      status: "Erection Phase",
      progress: 85,
      image: "/images/ongoing-3.jpg",
    },
    {
      id: 4,
      title: "Structural Framework Welding",
      location: "Chemical Sector 4",
      status: "Initial Phase",
      progress: 15,
      image: "/images/project-mechanical.jpg",
    },
    {
      id: 5,
      title: "Pipeline Anti-Corrosion Setup",
      location: "North Wing Storage",
      status: "In Progress",
      progress: 55,
      image: "/images/project-wrapping.jpg",
    },
    {
      id: 6,
      title: "Containment Tank Blasting",
      location: "East Depot",
      status: "Final Inspection",
      progress: 92,
      image: "/images/project-blasting.jpg",
    },
    {
      id: 7,
      title: "Thermal Insulation Wrapping",
      location: "Petrochemical Plant",
      status: "Active Execution",
      progress: 34,
      image: "/images/project-insulation.jpg",
    },
    {
      id: 8,
      title: "Concrete Foundation Pouring",
      location: "New Manufacturing Wing",
      status: "Curing Phase",
      progress: 78,
      image: "/images/project-civil.jpg",
    },
    {
      id: 9,
      title: "High-Altitude Rigging",
      location: "Unit 2 Cooling Towers",
      status: "In Progress",
      progress: 45,
      image: "/images/project-scaffolding.jpg",
    },
  ];

  const displayedProjects = showAll ? ongoing : ongoing.slice(0, 3);

  return (
    <section className="bg-slate-50/50 py-16 md:py-24 relative  border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================
            UPDATED HEADER SECTION (Centered on Mobile)
        ========================================== */}
        <div className="flex group flex-col md:flex-row md:items-end justify-between mb-12 gap-8 text-center md:text-left">
          {/* Main Title Block */}
          <div className="max-w-2xl mx-auto md:mx-0 flex flex-col items-center md:items-start w-full">
            <div className="w-16 group-hover:w-32 transition-all duration-700 ease-out h-1.5 bg-gradient-to-r from-jmde-orange to-[#ff8c5a] rounded-full mb-6 mx-auto lg:mx-0"></div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-jmde-blue mb-4 tracking-tight">
              Ongoing Projects
            </h2>
            <p className="text-lg text-gray-500 font-medium">
              Live updates from our active deployments, showcasing precision
              engineering and execution in real-time.
            </p>
          </div>

          {/* Active Projects Status Badge */}
          <div className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto">
            <div className="inline-flex items-center gap-2.5 bg-jmde-orange shadow-md px-6 py-2.5 rounded-full font-extrabold text-white text-sm uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
              9+ Active Projects
            </div>
          </div>
        </div>

        {/* =========================================
            PREMIUM PROJECT CARDS GRID
        ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-[2.5rem] border border-slate-100 p-5 sm:p-6 shadow-[0_8px_30px_rgba(28,49,84,0.04)] hover:shadow-[0_20px_50px_rgba(28,49,84,0.08)] transition-all duration-300 flex flex-col animate-[fadeIn_0.5s_ease-out]"
            >
              {/* Image Frame with Floating Badge */}
              <div className="relative h-56 w-full rounded-[1.5rem] overflow-hidden bg-slate-100 mb-6 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Embedded Status Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm border border-white">
                  <div className="w-1.5 h-1.5 rounded-full bg-jmde-orange animate-pulse" />
                  <span className="text-[10px] font-bold text-jmde-blue uppercase tracking-widest">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-grow px-2">
                <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase mb-3">
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
                  <span className="truncate">{project.location}</span>
                </div>

                <h3 className="text-xl font-black text-jmde-blue leading-snug mb-4">
                  {project.title}
                </h3>

                {/* Progress Bar Section */}
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <div className="flex justify-between items-end mb-2.5">
                    <span className="text-[11px] font-bold font-mono text-gray-400 tracking-wider">
                      EXECUTION PROGRESS
                    </span>
                    <span className="text-sm font-black text-jmde-blue">
                      {project.progress}%
                    </span>
                  </div>

                  {/* Track */}
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    {/* Fill Line */}
                    <div
                      className="h-full bg-jmde-blue rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================
            DYNAMIC LOAD MORE BUTTON
        ========================================== */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="relative inline-flex items-center gap-3 bg-white border-2 border-jmde-blue text-jmde-blue px-10 py-4 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_10px_20px_rgba(28,49,84,0.15)] z-10 group"
          >
            <span className="absolute inset-0 bg-jmde-blue -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out -z-10"></span>

            <span className="group-hover:text-white transition-colors duration-300">
              {showAll ? "View Less Projects" : "View All Active Projects"}
            </span>
            <svg
              className={`w-5 h-5 text-jmde-blue group-hover:text-white transform transition-all duration-300 ${showAll ? "rotate-[-90deg]" : "rotate-90 group-hover:translate-y-1"}`}
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
          </button>
        </div>
      </div>
    </section>
  );
}
