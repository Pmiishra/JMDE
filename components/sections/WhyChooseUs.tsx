"use client";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Skilled Workforce",
      desc: "Our team consists of highly trained and certified professionals equipped to handle complex industrial tasks.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    },
    {
      title: "Quality Workmanship",
      desc: "We adhere to strict quality control measures to ensure every project meets the highest industry standards.",
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    },
    {
      title: "Timely Delivery",
      desc: "We understand that downtime costs money. Our project management ensures strict adherence to deadlines.",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      title: "Safety-Focused Approach",
      desc: "Zero-harm policy with mandatory PPE compliance and rigorous on-site safety protocols.",
      icon: "M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01",
    },
    {
      title: "Professional Execution",
      desc: "From planning to handover, we maintain transparent communication and engineering excellence.",
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    },
    {
      title: "Client Satisfaction",
      desc: "Building long-term partnerships through reliability, responsiveness, and consistent results.",
      icon: "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5",
    },
  ];

  return (
    <section className="bg-white py-8">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        {/* MAINTAINED: The exact flex container layout */}
        <div className="flex flex-col lg:flex-row w-full overflow-hidden rounded-[2rem] shadow-lg border border-gray-100">
          {/* =========================================
              LEFT SIDE: 1/4 Width
          ========================================== */}
          <div className="lg:w-1/4 group bg-jmde-blue flex flex-col items-center lg:items-start justify-center p-10 lg:p-10 relative text-center lg:text-left">
            {/* <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#ffffff_25%,transparent_25%,transparent_50%,#ffffff_50%,#ffffff_75%,transparent_75%,transparent)] bg-[size:10px_10px]"></div> */}

            <div className="w-16 group-hover:w-24 transition-all duration-700 ease-out h-1.5 bg-gradient-to-r from-jmde-orange to-[#ff8c5a] rounded-full mb-6 mx-auto lg:mx-0"></div>

            <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight relative z-10">
              Why <br className="hidden lg:block" /> Choose US?
            </h2>

            <div className="hidden lg:block absolute right-[-14px] top-1/2 -translate-y-1/2 w-8 h-8 bg-jmde-blue rotate-45 z-10 rounded-sm"></div>
            <div className="block lg:hidden absolute bottom-[-14px] left-1/2 -translate-x-1/2 w-8 h-8 bg-jmde-blue rotate-45 z-10 rounded-sm"></div>
          </div>

          {/* =========================================
              RIGHT SIDE: 3/4 Width
          ========================================== */}
          <div className="lg:w-3/4 bg-white p-8 sm:p-10 lg:p-16">
            {/* MAINTAINED: The exact 3-column grid structure */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10">
              {reasons.map((reason, index) => (
                // CHANGED: Switched to flex-row to prevent the icon from taking the whole row
                <div
                  key={index}
                  className="flex flex-row items-start gap-5 relative group"
                >
                  {/* ICON: Now sits neatly on the left side */}
                  <div className="w-14 h-14 rounded-2xl bg-jmde-orange/80 flex items-center justify-center text-white flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md border border-[#ED7644]/10">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={reason.icon}
                      />
                    </svg>
                  </div>

                  {/* TEXT CONTENT: Flows naturally beside the icon */}
                  <div className="flex flex-col pt-1">
                    <h3 className="text-[17px] font-bold text-jmde-blue uppercase tracking-wide leading-tight group-hover:text-[#ED7644] transition-colors duration-300">
                      {reason.title}
                    </h3>

                    {/* INTERACTIVE DIVIDER: Sleek line that expands on hover */}
                    <div className="w-8 h-[3px] bg-[#ED7644]/30 rounded-full my-3 group-hover:w-16 group-hover:bg-[#ED7644] transition-all duration-500"></div>

                    <p className="text-gray-500 text-sm leading-relaxed font-medium">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
