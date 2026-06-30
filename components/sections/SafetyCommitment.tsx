"use client";

export default function SafetyCommitment() {
  const safetyPillars = [
    {
      title: "PPE Compliance",
      desc: "Mandatory, top-tier protective gear protocols rigorously enforced across all active operational zones.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
    {
      title: "Trained Workforce",
      desc: "Continuous hazard-response drills and specialized safety certifications for every on-site engineer.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    },
    {
      title: "Quality Assurance",
      desc: "Multi-layered inspection checkpoints guaranteeing structural integrity and zero operational defects.",
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    },
    {
      title: "Safe Work Practices",
      desc: "Strict adherence to international safety codes, permit-to-work systems, and zero-tolerance policies.",
      icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    },
  ];

  const getGridBorders = (index: number) => {
    if (index === 0) return "border-b sm:border-r border-slate-200";
    if (index === 1) return "border-b border-slate-200";
    if (index === 2)
      return "border-b sm:border-b-0 sm:border-r border-slate-200";
    return "";
  };

  return (
    <section className="bg-slate-50/50 py-10 md:py-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white -skew-x-12 transform origin-top-right -z-0 pointer-events-none shadow-[0_0_50px_rgba(0,0,0,0.02)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-[2rem] bg-white overflow-hidden shadow-[0_20px_50px_rgba(28,49,84,0.06)] flex flex-col lg:flex-row border border-slate-100">
          {/* =========================================
              LEFT: FULLY VISIBLE IMAGE + MANIFESTO
          ========================================== */}
          <div className="w-full lg:w-[45%] p-6 group sm:p-8 lg:p-10 relative flex flex-col bg-white">
            <div className="relative w-full h-48 sm:h-56 lg:h-52 rounded-[1.5rem] overflow-hidden mb-5 shadow-sm flex-shrink-0">
              <img
                src="/images/safety_section.png"
                alt="Safety Worker"
                className="w-full h-full object-cover"
              />
              {/* <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-slate-100 text-[#ED7644] text-[10px] font-black uppercase tracking-[0.2em]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ED7644] animate-pulse" />
                Safety Protocol Active
              </div> */}
            </div>

            <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-grow">
              <div className="w-16 group-hover:w-32 transition-all duration-700 ease-out h-1.5 bg-gradient-to-r from-jmde-orange to-[#ff8c5a] rounded-full mb-6 mx-auto lg:mx-0"></div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-jmde-blue mb-4 tracking-tight">
                ZERO HARM.
                <br />
                ZERO EXCEPTIONS.
              </h2>

              <p className="text-md text-gray-500 font-medium">
                We don't just comply with safety standards; we engineer them
                into our DNA. Every active project is fortified by four
                foundational safety pillars to protect our workforce and your
                assets.
              </p>
            </div>
          </div>

          {/* =========================================
              RIGHT: THE INTERACTIVE VAULT MATRIX
          ========================================== */}
          <div className="w-full lg:w-[55%] relative grid grid-cols-1 sm:grid-cols-2 border-t lg:border-t-0 lg:border-l border-slate-200 bg-slate-50">
            {/* FIXED: Changed z-20 to z-50 so the hub always stays on top of hovering cards */}
            <div className="hidden sm:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] bg-white border-[4px] border-slate-50 rounded-full z-50 items-center justify-center shadow-md">
              <svg
                className="w-6 h-6 text-[#ED7644]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path
                  d="M12 7a2 2 0 100 4 2 2 0 000-4zm-1 5h2v4h-2v-4z"
                  fill="#ffffff"
                />
              </svg>
            </div>

            {safetyPillars.map((pillar, index) => (
              <div
                key={index}
                className={`group relative p-6 sm:p-8 lg:p-8 bg-transparent hover:bg-[#ED7644] transition-all duration-500 overflow-hidden flex flex-col justify-center min-h-[220px] sm:hover:z-30 sm:hover:shadow-[0_20px_50px_rgba(237,118,68,0.3)] sm:hover:scale-105 cursor-default ${getGridBorders(index)}`}
              >
                <div className="absolute top-4 right-5 text-5xl lg:text-6xl font-black text-jmde-blue/[0.03] group-hover:text-white/20 transition-colors duration-500 pointer-events-none select-none">
                  0{index + 1}
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#ED7644] group-hover:border-transparent transition-all duration-500 mb-4 group-hover:-translate-y-2 group-hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)]">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={pillar.icon}
                      />
                    </svg>
                  </div>

                  <h3 className="text-lg font-bold text-jmde-blue mb-2 group-hover:-translate-y-1 group-hover:text-white transition-all duration-500">
                    {pillar.title}
                  </h3>

                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed group-hover:text-white/90 transition-all duration-500 font-medium">
                    {pillar.desc}
                  </p>
                </div>

                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-white/30 blur-[30px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
