"use client";
import { useState } from "react";

// 1. We create a tiny component right here to handle the state of EACH logo independently.
const LogoCard = ({ client }: { client: any }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex justify-center items-center h-40 md:h-48 w-full relative">
      {/* If there is an error, show the Board */}
      {imgError ? (
        <div className="flex w-full h-24 sm:h-32 items-center justify-center bg-white/80 backdrop-blur-sm border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-4 cursor-default">
          <span className="text-xs sm:text-sm font-black text-jmde-blue tracking-widest uppercase text-center leading-relaxed line-clamp-3">
            {client.name}
          </span>
        </div>
      ) : (
        /* Otherwise, try to show the image */
        <img
          src={client.logo}
          alt={`${client.name} Logo`}
          title={client.name}
          width={client.width}
          height={client.height}
          className="max-h-full max-w-full object-contain filter hover:scale-110 transition-transform duration-300"
          // If it fails, we trigger the React state change
          onError={() => setImgError(true)}
        />
      )}
    </div>
  );
};

export default function ClientsSection() {
  const clients = [
    {
      id: "bpcl",
      name: "BHARAT PETROLEUM CORPORATION LIMITED",
      logo: "/clients/Bharat_Petroleum-Log.png",
      width: 300,
      height: 300,
    },
    {
      id: "iocl",
      name: "INDIAN OIL CORPORATION PVT. LTD",
      logo: "/clients/Indian_Oil_Corporation-Logo.png",
      width: 300,
      height: 300,
    },
    {
      id: "hpcl",
      name: "HINDUSTAN PETROLEUM CORPORATION LIMITED",
      logo: "/clients/Hindustan_Petroleum-Logo.png",
      width: 300,
      height: 300,
    },
    {
      id: "deegee",
      name: "Dee Gee Saw & Metal",
      logo: "/clients/deegee_logo.png",
      width: 250,
      height: 140,
    },
    {
      id: "expo-eng",
      name: "Expo Project Engineering",
      logo: "/clients/expo-logo.png",
      width: 250,
      height: 140,
    },
    {
      id: "jpc-infra-1",
      name: "JPC Infratech",
      logo: "/clients/jpInfratech_logo.png",
      width: 250,
      height: 140,
    },
    {
      id: "civtect",
      name: "Civtect (I) Pvt. Ltd",
      logo: "/clients/civtectindia_logo.png",
      width: 200,
      height: 140,
    },
    {
      id: "petro-india",
      name: "Petro India & Engg.",
      logo: "/clients/petroIndia-logo.gif",
      width: 250,
      height: 140,
    },
    {
      id: "times",
      name: "Times Projects",
      logo: "/clients/times_projects_logo.png",
      width: 250,
      height: 140,
    },
    {
      id: "vinod-kumar",
      name: "M/S Vinod Kumar",
      logo: "/clients/vinod_kumar_logo.png",
      width: 150,
      height: 120,
    },
    {
      id: "des-technico",
      name: "DE,S Technico Limited",
      logo: "/clients/des-technico_logo.png",
      width: 250,
      height: 140,
    },
    {
      id: "perfect-const",
      name: "Perfect Construction",
      logo: "/clients/perfect-construction_logo.png",
      width: 250,
      height: 140,
    },
    {
      id: "blue-star",
      name: "Blue Star Engineering",
      logo: "/clients/bluestarindia.png",
      width: 200,
      height: 300,
    },
    {
      id: "rk-ent",
      name: "R.K Enterprises",
      logo: "/clients/RK_Enterprises_logo.png",
      width: 250,
      height: 140,
    },
    {
      id: "anuj-eng",
      name: "Anuj Engineering",
      logo: "/clients/anuj-engineering.png",
      width: 250,
      height: 140,
    },
    {
      id: "balaji",
      name: "Balaji Enterprises",
      logo: "/clients/balaji_logo.png",
      width: 250,
      height: 140,
    },
  ];

  return (
    <section
      id="clients"
      className="bg-jmde-sectionLight py-12 md:py-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto group px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24 md:mb-32">
          <div className="w-16 group-hover:w-32 transition-all duration-700 ease-out h-1.5 bg-gradient-to-r from-jmde-orange to-[#ff8c5a] rounded-full mb-6 mx-auto"></div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-jmde-blue mb-4 tracking-tight">
            OUR CLIENTS
          </h2>

          <p className="text-lg text-gray-500 font-medium">
            Companies That Trust JMDE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-16 items-center">
          {/* 2. We map over the array and use our tiny component for each logo */}
          {clients.map((client) => (
            <LogoCard key={client.id} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
