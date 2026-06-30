import Link from "next/link";
import { FaAward } from "react-icons/fa";

export default function AboutUsSection() {
  const cards = [
    {
      title: "SINCE 2016",
      desc: "A decade of engineering excellence.",
      delay: "",
    },
    {
      title: "10+ YEARS",
      desc: "Industry Experience.",
      delay: "animation-delay-500",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-28  border-jmde-border relative overflow-hidden">
      {/* CUSTOM ANIMATIONS */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>

      {/* BACKGROUND: Faint grid for the whole section */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>

      {/* Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-jmde-blue rounded-full mix-blend-multiply filter blur-[80px] opacity-15 animate-blob z-0"></div>
      <div className="absolute top-40 left-40 w-72 h-72 bg-jmde-orange rounded-full mix-blend-multiply filter blur-[80px] opacity-10 animate-blob animation-delay-2000 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-14 items-center">
          {/* =========================================
              LEFT SIDE: Image with Background Card & Dotted Pattern
          ========================================== */}
          <div className="relative group mt-8 lg:mt-0 pb-6 pl-6 md:pb-8 md:pl-8">
            {/* The Dotted Pattern Background */}
            <div className="absolute bottom-0 left-0 w-[80%] h-[80%] bg-[radial-gradient(#E85D22_2.5px,transparent_2.5px)] [background-size:24px_24px] opacity-40 z-0 rounded-bl-[3rem] transition-transform duration-700 group-hover:-translate-x-3 group-hover:translate-y-3"></div>

            {/* Container for the image and the tilted card */}
            <div className="relative p-2 sm:p-3 z-10">
              {/* CHANGED: The Tilted Background Card */}
              {/* I made it an absolute element behind the image with -rotate-3. On hover, it rotates back to 0. */}
              <div className="absolute inset-0 bg-slate-50 border-[3px] border-slate-100 rounded-[3rem] shadow-sm transform -rotate-3 transition-transform duration-700 ease-out group-hover:rotate-0 z-0"></div>

              {/* Main Image Container (Stays straight) */}
              <div className="relative aspect-[5/4] rounded-[2.5rem] overflow-hidden shadow-xl border-[4px] border-white bg-white z-10">
                <img
                  src="/images/jmde_office.png"
                  alt="JMDE Engineering"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-jmde-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Floating Card 1: ESTABLISHED */}
            <div
              className={`absolute -top-4 -left-2 md:-left-4 w-44 bg-white/70 backdrop-blur-xl p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white z-20 animate-float ${cards[0].delay}`}
            >
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="relative w-7 h-7 flex items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-jmde-orange opacity-40 animate-ping"></span>
                  <div className="w-7 h-7 rounded-full bg-jmde-orange/20 shadow-sm flex items-center justify-center text-jmde-orange">
                    <FaAward className=" text-jmde-orange" />
                  </div>
                </div>
                <p className="text-[9px] font-bold tracking-[0.2em] text-jmde-orange uppercase">
                  ESTABLISHED
                </p>
              </div>
              <p className="text-xl md:text-2xl font-black text-jmde-blue tracking-tight">
                {cards[0].title}
              </p>
              {/* <p className="text-[11px] text-gray-700 font-medium mt-0.5 leading-snug">
                {cards[0].desc}
              </p> */}
            </div>

            {/* Floating Card 2: EXPERIENCE */}
            <div
              className={`absolute bottom-6 -right-2 md:-right-6 w-48 bg-jmde-blue p-4 rounded-2xl shadow-[0_20px_50px_rgba(28,49,84,0.3)] border border-white/10 z-20 animate-float ${cards[1].delay}`}
            >
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="relative w-7 h-7 flex items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-white opacity-40 animate-ping"></span>
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p className="text-[9px] font-bold tracking-[0.2em] text-white/80 uppercase">
                  EXPERIENCE
                </p>
              </div>
              <p className="text-xl md:text-2xl font-black text-white text-center tracking-tight">
                {cards[1].title}
              </p>
              <p className="text-[11px] text-white/80 font-medium mt-0.5 text-center leading-snug">
                {cards[1].desc}
              </p>
            </div>
          </div>

          {/* =========================================
              RIGHT SIDE: Text Content
          ========================================== */}
          {/* CHANGED: Added `text-center lg:text-left` and `mt-12 lg:mt-0` for mobile spacing */}
          <div className="lg:pl-8 group cursor-default text-center lg:text-left mt-12 lg:mt-0">
            {/* CHANGED: Added `mx-auto lg:mx-0` to center the orange line on mobile */}
            <div className="w-16 group-hover:w-32 transition-all duration-700 ease-out h-1.5 bg-gradient-to-r from-jmde-orange to-[#ff8c5a] rounded-full mb-6 mx-auto lg:mx-0"></div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-jmde-blue to-[#2b5c96] mb-6 tracking-tight">
              About JMDE
            </h2>

            <p className="text-[17px] text-gray-600 leading-relaxed font-medium mb-6 transition-colors duration-300 group-hover:text-gray-900">
              JMDE is a trusted industrial services company specializing in
              Civil Works, Mechanical Works, Shot Grit Blasting, Industrial
              Painting, Wrapping & Coating, Insulation Works, Logo Writing and
              Scaffolding Services.
            </p>

            <p className="text-[17px] text-gray-600 leading-relaxed font-medium mb-10 transition-colors duration-300 group-hover:text-gray-900">
              We deliver reliable solutions for industrial, commercial and
              infrastructure projects with a strong commitment to quality
              workmanship, safety and client satisfaction.
            </p>

            <Link
              href="#about"
              className="relative inline-flex items-center justify-center gap-3 bg-white border-2 border-jmde-blue text-jmde-blue px-8 py-3.5 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_10px_20px_rgba(28,49,84,0.15)] hover:-translate-y-1 z-10"
            >
              <span className="absolute inset-0 bg-jmde-blue -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out -z-10"></span>
              <span className="group-hover:text-white transition-colors duration-300">
                Learn More
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
      </div>
    </section>
  );
}
