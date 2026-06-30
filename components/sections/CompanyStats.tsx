"use client";
import { useEffect, useState, useRef } from "react";

// Helper component to handle the individual counting animation
function AnimatedCounter({
  endValue,
  suffix,
}: {
  endValue: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      // CHANGED: Lowered threshold from 0.5 to 0.1 so it triggers perfectly on mobile
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let startTimestamp: number | null = null;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * endValue));
      if (progress < 1) window.requestAnimationFrame(step);
      else setCount(endValue);
    };
    window.requestAnimationFrame(step);
  }, [inView, endValue]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function CompanyStats() {
  const stats = [
    {
      target: 50,
      suffix: "+",
      label: "Completed Projects",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      bgClass: "md:col-span-2 bg-jmde-blue",
      iconContainerClass: "bg-white/20",
      watermarkClass: "text-white opacity-[0.04]",
      textClass: "text-white",
    },
    {
      target: 9,
      suffix: "+",
      label: "Ongoing Projects",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      bgClass: "md:col-span-1 bg-jmde-orange",
      iconContainerClass: "bg-white/30",
      watermarkClass: "text-white opacity-[0.15]",
      textClass: "text-white",
    },
    {
      target: 18,
      suffix: "+",
      label: "Trusted Clients",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      bgClass:
        "md:col-span-1 bg-white border-2 border-gray-100 shadow-xl shadow-gray-200/40",
      iconContainerClass: "bg-jmde-blue/10",
      watermarkClass: "text-jmde-blue opacity-[0.03]",
      textClass: "text-jmde-blue",
    },
    {
      target: 8,
      suffix: "+",
      label: "Core Services",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
      bgClass: "md:col-span-2 bg-slate-50",
      iconContainerClass: "bg-white shadow-sm",
      watermarkClass: "text-jmde-blue opacity-[0.03]",
      textClass: "text-jmde-blue",
    },
  ];

  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[220px]">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative rounded-[2rem] p-6 lg:p-8 overflow-hidden group transition-transform duration-500 hover:-translate-y-1 ${stat.bgClass}`}
            >
              {/* Flair 1: Blueprint background for the Blue Card */}
              {index === 0 && (
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
              )}

              {/* Flair 2: Pulsing "ACTIVE" badge for the Orange Card */}
              {index === 1 && (
                <div className="absolute top-6 right-6 flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm z-10">
                  <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse"></span>
                  <span className="text-[10px] font-black text-white tracking-widest uppercase">
                    Active
                  </span>
                </div>
              )}

              {/* Flair 3: Overlapping Client Avatars for the White Card */}
              {index === 2 && (
                <div className="absolute top-6 right-6 flex -space-x-3 z-10">
                  <img
                    src="/clients/Bharat_Petroleum-Log.png"
                    alt="Client 2"
                    className="w-9 h-9 rounded-full border-2 bg-white border-white object-contain shadow-sm"
                  />
                  <img
                    src="/clients/Indian_Oil_Corporation-Logo.png"
                    alt="Client 1"
                    className="w-9 h-9 rounded-full border-2 bg-white border-white object-contain shadow-sm"
                  />
                  <div className="w-9 h-9 rounded-full border-2 border-white bg-jmde-orange flex items-center justify-center text-[10px] text-white font-bold shadow-sm z-10">
                    18+
                  </div>
                </div>
              )}

              {/* Flair 4: Ghosted Service Tags AND Dotted Background for the Slate Card */}
              {index === 3 && (
                <>
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000000_1px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none"></div>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 lg:flex pointer-events-none z-10 items-end opacity-50">
                    <div className="px-5 py-1.5 rounded-full border border-jmde-blue/10 bg-transparent text-jmde-blue/30 font-black tracking-widest uppercase text-[10px] transform -translate-x-4">
                      Civil Works
                    </div>
                    <div className="px-5 py-1.5 rounded-full border border-jmde-blue/10 bg-transparent text-jmde-blue/30 font-black tracking-widest uppercase text-[10px] transform -translate-x-12">
                      Scaffolding
                    </div>
                    <div className="px-5 py-1.5 rounded-full border border-jmde-blue/10 bg-transparent text-jmde-blue/30 font-black tracking-widest uppercase text-[10px] transform -translate-x-2">
                      Mechanical
                    </div>
                  </div>
                </>
              )}

              {/* === CORE CARD CONTENT === */}
              <div
                className={`absolute -bottom-4 -right-2 text-[8rem] md:text-[10rem] font-black leading-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-110 ${stat.watermarkClass}`}
              >
                {stat.target}
              </div>

              <div className="relative z-20 flex flex-col h-full justify-between pointer-events-none">
                {/* Top Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-md shadow-sm transition-transform duration-500 group-hover:scale-110 ${stat.iconContainerClass}`}
                >
                  <svg
                    className={`w-6 h-6 ${stat.textClass}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={stat.icon}
                    />
                  </svg>
                </div>

                {/* Bottom Stats Text */}
                <div className="mt-auto">
                  <h3
                    className={`text-5xl lg:text-6xl font-black mb-0.5 tracking-tighter drop-shadow-sm ${stat.textClass}`}
                  >
                    <AnimatedCounter
                      endValue={stat.target}
                      suffix={stat.suffix}
                    />
                  </h3>
                  <p
                    className={`text-xs md:text-sm font-bold uppercase tracking-widest opacity-90 ${stat.textClass}`}
                  >
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
