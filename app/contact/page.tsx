"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

// --- ANIMATION HELPER ---
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

export default function ContactPage() {
  // State for Custom Dropdown
  const [selectedService, setSelectedService] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const servicesList = [
    "Civil Works",
    "Mechanical Works",
    "Shot Grit Blasting",
    "Industrial Painting",
    "Wrapping & Coating",
    "Insulation Works",
    "Scaffolding Works",
    "Logo Writing",
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
          style={{ backgroundImage: "url('/images/contact_us_page.png')" }} // Update with your image path
        ></div>
        <div className="absolute inset-0 z-10 bg-jmde-blue/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-jmde-blue/90 via-jmde-blue/60 to-transparent"></div>

        {/* Main Content - Added mt-24 to push it down slightly */}
        <div className="relative z-20 text-center max-w-[1400px] mx-auto px-6 ">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-md">
              Let's Discuss Your Next Project
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-medium drop-shadow-md">
              Whether you need civil works, mechanical services, industrial
              coating, insulation, or scaffolding support, our team is ready to
              help.
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
                <span className="text-white font-bold">Contact Us</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =========================================
          SECTION 2 — UNIFIED CONTACT PORTAL
      ========================================== */}
      <section className="py-[120px] max-w-[1400px] mx-auto px-6 relative z-30 mt-0">
        <FadeIn>
          {/* The Massive Unified Split-Card */}
          <div className="flex flex-col lg:flex-row bg-white rounded-[32px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.08)] ">
            {/* =========================================
                LEFT SIDE: Dark Industrial Info Panel
            ========================================== */}
            <div className="w-full lg:w-[40%] group bg-gradient-to-br from-[#123D82] to-[#0A224A] relative overflow-hidden p-10 lg:p-14 flex flex-col justify-between">
              {/* Subtle Background Architectural Rings */}
              <div className="absolute -top-24 -right-24 w-64 h-64 border-[30px] border-white/5 rounded-full pointer-events-none"></div>
              <div className="absolute -bottom-24 -left-24 w-80 h-80 border-[40px] border-white/5 rounded-full pointer-events-none"></div>
              {/* Engineering Grid Overlay */}
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:24px_24px] pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-16 group-hover:w-32 transition-all duration-700 ease-out h-1.5 bg-gradient-to-r from-[#F36B21] to-[#ff8c5a] rounded-full mb-6"></div>

                  <h2 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">
                    Contact Information
                  </h2>

                  <p className="text-white/70 font-medium mb-12 text-lg">
                    Reach out to our engineering and support teams. We typically
                    respond to all inquiries within 24 hours.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F36B21] transition-colors duration-300">
                      <svg
                        className="w-5 h-5 text-[#F36B21] group-hover:text-white transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white/50 text-sm font-bold uppercase tracking-wider mb-1">
                        Head Office
                      </h4>
                      <p className="text-white font-medium leading-relaxed">
                        H.NO. 77, Shyam Ji Dham Colony , Tikona Park , Barari
                        <br />
                        NH 19, Dehli Road, Mathura, Near Royal Krishna Hospital,
                        <br />
                        Uttar Pradesh — 281005, India.
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-white/10"></div>

                  {/* Contact Methods */}
                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F36B21] transition-colors duration-300">
                      <svg
                        className="w-5 h-5 text-[#F36B21] group-hover:text-white transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-white/50 text-sm font-bold uppercase tracking-wider mb-1">
                        Direct Lines
                      </h4>
                      <a
                        href="tel:+919557905990"
                        className="text-white font-bold hover:text-[#F36B21] transition-colors text-lg"
                      >
                        +91 9557905990
                      </a>
                      <a
                        href="tel:+917351905990"
                        className="text-white font-bold hover:text-[#F36B21] transition-colors text-lg"
                      >
                        +91 7351905990
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F36B21] transition-colors duration-300">
                      <svg
                        className="w-5 h-5 text-[#F36B21] group-hover:text-white transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white/50 text-sm font-bold uppercase tracking-wider mb-1">
                        Email Support
                      </h4>
                      <a
                        href="mailto:jaimatadienterprises020@gmail.com"
                        className="text-white font-medium hover:text-[#F36B21] transition-colors break-all"
                      >
                        jaimatadienterprises020@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Business Hours Block */}
              <div className="relative z-10 mt-12 pt-8 border-t border-white/10 items-center text-center">
                {/* <div className="grid grid-row-2 gap-6"> */}
                <div>
                  <h5 className="text-[#F36B21] text-xs font-bold uppercase tracking-widest mb-3">
                    Office Hours
                  </h5>
                  <p className="text-white/90 text-sm font-medium leading-relaxed">
                    Mon – Sat
                    <br />
                    09:00 AM – 06:00 PM
                    <br />
                    <span className="text-white/50">Sunday: Closed</span>
                  </p>
                  {/* </div> */}
                  {/* <div>
                    <h5 className="text-[#F36B21] text-xs font-bold uppercase tracking-widest mb-3">
                      Site Hours
                    </h5>
                    <p className="text-white/90 text-sm font-medium leading-relaxed">
                      Mon – Sat
                      <br />
                      08:00 AM – 08:00 PM
                      <br />
                      <span className="text-white/90">
                        Sun: 09:00 AM – 02:00 PM
                      </span>
                    </p>
                  </div> */}
                </div>
              </div>
            </div>

            {/* =========================================
                RIGHT SIDE: Clean White Form Portal
            ========================================== */}
            <div className="w-full lg:w-[60%] group p-10 lg:p-16 bg-white">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-16 group-hover:w-32 transition-all duration-700 ease-out h-1.5 bg-gradient-to-r from-[#F36B21] to-[#ff8c5a] rounded-full mb-6 "></div>

                <h3 className="text-3xl md:text-4xl font-black text-[#123D82] mb-2">
                  Send Us An Inquiry
                </h3>
                <p className="text-gray-500 font-medium mb-10">
                  Fill out the form below and we will get back to you with a
                  comprehensive solution.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2 group">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider group-focus-within:text-[#F36B21] transition-colors duration-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-200 outline-none focus:outline-none focus:ring-0 focus:border-[#F36B21] transition-colors font-medium text-gray-900 placeholder-gray-300 shadow-none"
                      required
                    />
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2 group">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider group-focus-within:text-[#F36B21] transition-colors duration-300">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Industrial"
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-200 outline-none focus:outline-none focus:ring-0 focus:border-[#F36B21] transition-colors font-medium text-gray-900 placeholder-gray-300 shadow-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone Number */}
                  <div className="space-y-2 group">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider group-focus-within:text-[#F36B21] transition-colors duration-300">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-200 outline-none focus:outline-none focus:ring-0 focus:border-[#F36B21] transition-colors font-medium text-gray-900 placeholder-gray-300 shadow-none"
                      required
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2 group">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider group-focus-within:text-[#F36B21] transition-colors duration-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-200 outline-none focus:outline-none focus:ring-0 focus:border-[#F36B21] transition-colors font-medium text-gray-900 placeholder-gray-300 shadow-none"
                      required
                    />
                  </div>
                </div>

                {/* Service Required (Custom Premium Dropdown) */}
                <div className="space-y-2 pt-2 group relative">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider group-focus-within:text-[#F36B21] transition-colors duration-300">
                    Service Required
                  </label>

                  {/* The clickable select area */}
                  <div
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`w-full px-0 py-3 bg-transparent border-0 border-b-2 cursor-pointer flex items-center justify-between transition-colors ${
                      isDropdownOpen ? "border-[#F36B21]" : "border-gray-200"
                    }`}
                  >
                    <span
                      className={
                        selectedService
                          ? "font-bold text-[#123D82]"
                          : "font-medium text-gray-300"
                      }
                    >
                      {selectedService || "Select a service..."}
                    </span>

                    {/* Animated Arrow */}
                    <div
                      className={`text-gray-400 transition-transform duration-300 ${
                        isDropdownOpen ? "rotate-180 text-[#F36B21]" : ""
                      }`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* The Floating Dropdown Menu */}
                  {isDropdownOpen && (
                    <>
                      {/* Invisible backdrop to close dropdown when clicking outside */}
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsDropdownOpen(false)}
                      ></div>

                      <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-[16px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-100 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                          {servicesList.map((service) => (
                            <div
                              key={service}
                              onClick={() => {
                                setSelectedService(service);
                                setIsDropdownOpen(false);
                              }}
                              className={`px-5 py-3.5 cursor-pointer text-sm font-bold transition-colors ${
                                selectedService === service
                                  ? "bg-[#123D82]/5 text-[#123D82]"
                                  : "text-gray-600 hover:bg-[#F8F9FB] hover:text-[#F36B21]"
                              }`}
                            >
                              {service}
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {/* Hidden actual input for form submission */}
                  <input
                    type="hidden"
                    name="service"
                    value={selectedService}
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-2 pt-2 group">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider group-focus-within:text-[#F36B21] transition-colors duration-300">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your project requirements, timeline, or any specific challenges..."
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-200 outline-none focus:outline-none focus:ring-0 focus:border-[#F36B21] transition-colors font-medium text-gray-900 placeholder-gray-300 resize-none shadow-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <Link
                  href="/"
                  className="relative mt-10 inline-flex items-center gap-3 bg-white border-2 border-jmde-blue text-jmde-blue px-10 py-4 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_10px_20px_rgba(28,49,84,0.15)] z-10 group"
                >
                  <span className="absolute inset-0 bg-jmde-blue -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out -z-10"></span>
                  <span className="group-hover:text-white text-sm md:text-lg transition-colors duration-300">
                    Submit
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
              </form>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* =========================================
          SECTION 3 — GOOGLE MAP
      ========================================== */}
      <section className="py-[120px] group bg-white border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="w-16 group-hover:w-32 transition-all duration-700 ease-out h-1.5 bg-gradient-to-r from-[#F36B21] to-[#ff8c5a] rounded-full mb-6 mx-auto"></div>

              <h2 className="text-4xl font-black text-[#123D82] mb-4">
                Visit Our Office
              </h2>
              <p className="text-xl text-gray-600 font-medium">
                Our office is located in Mathura, Uttar Pradesh.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="relative w-full h-[500px] rounded-[24px] overflow-hidden shadow-xl border border-gray-200">
              {/* Google Map Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3543.375791646154!2d77.7086194744748!3d27.36397694055414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDIxJzUwLjMiTiA3N8KwNDInNDAuMyJF!5e0!3m2!1sen!2sin!4v1782804412945!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JMDE Office Location Map"
                className="absolute inset-0"
              ></iframe>

              {/* Floating Location Overlay Card (Exact Native Map Theme) */}
              {/* <div className="hidden md:block absolute bottom-6 left-6 bg-white p-5 rounded-lg shadow-[0_2px_5px_rgba(0,0,0,0.3)] border border-gray-200/60 w-[340px] z-10 font-sans">
              
                <div className="flex items-center gap-3.5">
                
                  <div className="w-11 h-11 rounded-full bg-[#123D82] flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-[17px] font-bold text-[#123D82] leading-tight mb-0.5">
                      JMDE Office
                    </h4>
                    <p className="text-[14px] font-medium text-[#70757A] leading-tight">
                      Mathura, Uttar Pradesh
                    </p>
                  </div>
                </div>

               
                <div className="w-full h-px bg-[#E8EAED] my-4"></div>

               
                <div className="flex flex-col gap-3.5">
                 
                  <div className="flex items-center gap-3.5">
                    <svg
                      className="w-5 h-5 text-[#F36B21] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text-[14px] font-medium text-[#3C4043]">
                      +91 9557905990 / +91 7351905990
                    </span>
                  </div>

                 
                  <div className="flex items-center gap-3.5">
                    <svg
                      className="w-5 h-5 text-[#F36B21] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-[14px] font-medium text-[#3C4043] truncate">
                      jaimatadienterprises020@gmail.com
                    </span>
                  </div>
                </div>
              </div> */}
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
