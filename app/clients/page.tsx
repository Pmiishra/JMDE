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
          let start = end > 2000 ? end - 50 : 0; // Quick jump for years like 2014
          const duration = 2000;
          const increment = (end - start) / (duration / 16);
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

export default function ClientsPage() {
  // Updated Client List with Inferred Industries for the UI
  const clients = [
    {
      id: "bpcl",
      name: "BHARAT PETROLEUM CORPORATION LIMITED",
      industry: "Oil & Gas Sector",
      logo: "/clients/Bharat_petroleum-Log.png",
      width: 300,
      height: 300,
    },
    {
      id: "iocl",
      name: "INDIAN OIL CORPORATION PVT. LTD",
      industry: "Oil & Gas Sector",
      logo: "/clients/Indian_Oil_Corporation-Logo.png",
      width: 300,
      height: 300,
    },
    {
      id: "hpcl",
      name: "HINDUSTAN PETROLEUM CORPORATION LIMITED",
      industry: "Oil & Gas Sector",
      logo: "/clients/Hindustan_petroleum-Logo.png",
      width: 300,
      height: 300,
    },
    {
      id: "deegee",
      name: "Dee Gee Saw & Metal",
      industry: "Manufacturing Sector",
      logo: "/clients/deegee_logo.png",
      width: 250,
      height: 140,
    },
    {
      id: "expo-eng",
      name: "Expo Project Engineering",
      industry: "Engineering Sector",
      logo: "/clients/expo-logo.png",
      width: 250,
      height: 140,
    },
    {
      id: "jpc-infra-1",
      name: "JPC Infratech",
      industry: "Infrastructure Sector",
      logo: "/clients/jpInfratech_logo.png",
      width: 250,
      height: 140,
    },
    {
      id: "civtect",
      name: "Civtect (I) Pvt. Ltd",
      industry: "Civil Construction",
      logo: "/clients/civtectindia_logo.jpg",
      width: 200,
      height: 140,
    },
    {
      id: "petro-india",
      name: "Petro India & Engg.",
      industry: "Petrochemical Sector",
      logo: "/clients/petroIndia-logo.gif",
      width: 250,
      height: 140,
    },
    {
      id: "times",
      name: "Times Projects",
      industry: "Infrastructure Sector",
      logo: "/clients/times_projects_logo.png",
      width: 250,
      height: 140,
    },
    {
      id: "vinod-kumar",
      name: "M/S Vinod Kumar",
      industry: "Industrial Contracting",
      logo: "/clients/vinod_kumar_logo.png",
      width: 150,
      height: 120,
    },
    {
      id: "des-technico",
      name: "DE,S Technico Limited",
      industry: "Technical Services",
      logo: "/clients/des-technico_logo.png",
      width: 250,
      height: 140,
    },
    {
      id: "perfect-const",
      name: "Perfect Construction",
      industry: "Civil Construction",
      logo: "/clients/perfect-construction_logo.png",
      width: 250,
      height: 140,
    },
    {
      id: "blue-star",
      name: "Blue Star Engineering",
      industry: "Engineering Sector",
      logo: "/clients/bluestarindia.png",
      width: 200,
      height: 300,
    },
    {
      id: "rk-ent",
      name: "R.K Enterprises",
      industry: "Industrial Contracting",
      logo: "/clients/RK_Enterprises_logo.png",
      width: 250,
      height: 140,
    },
    {
      id: "anuj-eng",
      name: "Anuj Engineering",
      industry: "Engineering Sector",
      logo: "/clients/anuj-engineering.png",
      width: 250,
      height: 140,
    },
    {
      id: "balaji",
      name: "Balaji Enterprises",
      industry: "Industrial Contracting",
      logo: "/clients/balaji_logo.png",
      width: 250,
      height: 140,
    },
  ];

  return (
    <main className="bg-[#F8F9FB] text-[#1A1A1A] font-sans">
      {/* =========================================
          SECTION 1 — HERO BANNER
      ========================================== */}
      <section className="relative h-screen min-h-[600px] flex flex-col items-center justify-center">
        {/* Background Image & Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero_3.png')" }} // Update with your image path
        ></div>
        <div className="absolute inset-0 z-10 bg-jmde-blue/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-jmde-blue/90 via-jmde-blue/60 to-transparent"></div>

        {/* Main Content - Added mt-24 to push it down slightly */}
        <div className="relative z-20 text-center max-w-[1400px] mx-auto px-6 ">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-md">
              Trusted By Industry Leaders
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-medium drop-shadow-md">
              Over the years, JMDE has partnered with leading industrial
              organizations, delivering reliable solutions through quality
              workmanship, safety, and professional execution.
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
                <span className="text-white font-bold">Clients</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =========================================
          SECTION 3 — CLIENT SHOWCASE (PREMIUM REDESIGN)
      ========================================== */}
      <section className="py-[120px] bg-[#F8F9FB]">
        <div className="max-w-[1400px] mx-auto px-6">
          <FadeIn>
            {/* Added 'group' here so the bar expands on hover */}
            <div className="text-center max-w-3xl mx-auto mb-20 group flex flex-col items-center">
              {/* Added 'mx-auto' to perfectly center the bar */}
              <div className="w-16 group-hover:w-32 transition-all duration-700 ease-out h-1.5 bg-gradient-to-r from-[#F36B21] to-[#ff8c5a] rounded-full mb-6 mx-auto"></div>

              <h2 className="text-3xl md:text-5xl font-black text-[#123D82] mb-6">
                Organizations That Trust JMDE
              </h2>
              <p className="text-lg text-gray-600 font-medium">
                Our Valued Clients.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {clients.map((client, index) => (
              <FadeIn key={client.id} delay={(index % 4) * 100}>
                {/* 
                  PREMIUM CARD CONTAINER 
                  Added structural border, advanced shadow, and group hover classes 
                */}
                <div className="bg-white rounded-[20px] overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-[0_20px_40px_rgba(18,61,130,0.12)] hover:-translate-y-2 transition-all duration-500 group relative flex flex-col h-full">
                  {/* Expanding Orange Left Border */}
                  <div className="absolute top-0 left-0 w-1.5 h-0 bg-[#F36B21] group-hover:h-full transition-all duration-500 ease-out z-20"></div>

                  {/* Logo Area */}
                  <div className="h-48 bg-white flex items-center justify-center p-8 relative overflow-hidden z-10">
                    {/* Subtle Radial Glow on Hover */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(18,61,130,0.03)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative w-full h-full flex items-center justify-center">
                      <img
                        src={client.logo}
                        alt={`${client.name} Logo`}
                        className="max-w-[80%] max-h-[80%] object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.parentElement!.innerHTML = `<span class="text-lg font-black text-gray-300 text-center group-hover:text-[#123D82] transition-colors">${client.name}</span>`;
                        }}
                      />
                    </div>
                  </div>

                  {/* 
                    Text Details Area (The Flip Effect) 
                    Transitions from Gray-50 to Deep Industrial Blue
                  */}
                  <div className="p-3 md:p-4 bg-gray-50 group-hover:bg-[#123D82] transition-colors duration-500 flex-grow flex flex-col justify-end relative z-10 border-t border-gray-100 group-hover:border-[#123D82]">
                    <h4 className="text-lg text-center font-black text-[#123D82] group-hover:text-white transition-colors duration-500 line-clamp-2">
                      {client.name}
                    </h4>
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
