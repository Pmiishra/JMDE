import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-jmde-blue to-white pt-16 pb-8  border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* =========================================
              COLUMN 1: Brand & Socials
          ========================================== */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-8">
            {/* CHANGED: Added -mt-4 to pull the logo up so it aligns with adjacent headers */}
            <Link href="/" className="inline-block -mt-8">
              <img
                src="/images/jmd_logo_1.png"
                alt="JMDE Logo"
                className="h-30 lg:h-30 w-auto object-contain object-left-top"
              />
            </Link>

            <h3 className="text-lg font-bold text-jmde-blue tracking-tight mb-3 ">
              M/S JAI MATA DI ENTERPRISES
            </h3>

            <p className="text-slate-500 lg:text-slate-700 text-sm leading-relaxed font-medium mb-2">
              YOU BRING THE VISION.
              <br />
              WE BRING THE EXECUTION.
            </p>

            <p className="text-slate-500 lg:text-slate-700 text-sm leading-relaxed font-medium mb-8">
              Delivering quality, safety and performance in every project.
            </p>

            <div className="flex gap-3">
              {/* Facebook */}
              <a
                href="#"
                className="w-10 h-10 rounded-full hover:bg-slate-50 border hover:border-slate-200 flex items-center justify-center hover:text-jmde-blue bg-jmde-orange/80 text-white border-jmde-orange/80 transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              {/* Twitter / X */}
              <a
                href="#"
                className="w-10 h-10 rounded-full hover:bg-slate-50 border hover:border-slate-200 flex items-center justify-center hover:text-jmde-blue bg-jmde-orange/80 text-white border-jmde-orange/80 transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="w-10 h-10 rounded-full hover:bg-slate-50 border hover:border-slate-200 flex items-center justify-center hover:text-jmde-blue bg-jmde-orange/80 text-white border-jmde-orange/80 transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* YouTube */}
              {/* <a
                href="#"
                className="w-10 h-10 rounded-full hover:bg-slate-50 border hover:border-slate-200 flex items-center justify-center hover:text-jmde-blue bg-jmde-orange/80 text-white border-jmde-orange/80 transition-colors duration-300"
                aria-label="YouTube"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a> */}
            </div>
          </div>

          {/* =========================================
              COLUMN 2: Quick Links
          ========================================== */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold text-center items-center text-jmde-blue mb-6 border-b-2 border-jmde-orange pb-2 inline-block">
              Quick Links
            </h4>

            <ul className="space-y-4">
              {[
                "Home",
                "About",
                "Services",
                "Projects",
                "Clients",
                // "Gallery",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="group flex items-center text-center text-sm text-slate-700 hover:text-slate-900 font-semibold transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-3 group-hover:bg-slate-900 transition-colors"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================================
              COLUMN 3: Contact Info
          ========================================== */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold text-jmde-blue mb-6 border-b-2 border-jmde-orange pb-2 inline-block">
              Contact Us
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-jmde-sectionLight flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-jmde-orange"
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span className="text-sm text-slate-700 hover:text-slate-900 font-medium leading-relaxed">
                  H.NO. 77, Shyam Ji Dham Colony , Tikona Park , Barari
                  <br />
                  NH 19, Dehli Road, Mathura, Near Royal Krishna Hospital,
                  <br />
                  Uttar Pradesh — 281005, India.
                </span>
              </li>

              <li className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-jmde-sectionLight flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-jmde-orange"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <a
                  href="mailto:jaimatadienterprises020@gmail.com"
                  className="text-sm text-slate-700 hover:text-slate-900 font-medium transition-colors duration-200"
                >
                  jaimatadienterprises020@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-jmde-sectionLight flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-jmde-orange"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <a
                  href="tel:+91955790599"
                  className="text-sm text-slate-700 hover:text-slate-900 font-medium transition-colors duration-200"
                >
                  +91 955790599, +91 7351905990
                </a>
              </li>
            </ul>
          </div>

          {/* =========================================
              COLUMN 4: Business Hours
          ========================================== */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold text-jmde-blue mb-6 border-b-2 border-jmde-orange pb-2 inline-block">
              Business Hours
            </h4>
            <ul className="space-y-4">
              <li className="text-sm text-slate-700 flex justify-between items-center font-medium border-b border-slate-100 pb-2">
                <span>Office Timing :</span>
              </li>
              <li className="text-sm text-slate-700 flex justify-between items-center font-medium pb-0">
                <span>Mon - Sat:</span>
                <span className="text-jmde-blue font-semibold">
                  08:00 AM - 06:00 PM
                </span>
              </li>
              <li className="text-sm text-slate-700 flex justify-between  pb-4 items-center font-medium">
                <span>Sunday:</span>
                <span className="text-white font-bold bg-jmde-orange/80 px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                  Closed
                </span>
              </li>
              {/* <li className="text-sm text-slate-700 flex justify-between items-center font-medium border-b border-slate-100 pb-2">
                <span>On site Timing :</span>
              </li>
              <li className="text-sm text-slate-700 flex justify-between items-center font-medium pb-2">
                <span>Mon - Sat:</span>
                <span className="text-jmde-blue font-semibold">
                  08:00 AM - 08:00 PM
                </span>
              </li>
              <li className="text-sm text-slate-700 flex justify-between items-center font-medium">
                <span>Sunday :</span>
                <span className="text-jmde-blue font-semibold">
                  09:00 AM - 02:00 PM
                </span>
              </li> */}
            </ul>
          </div>
        </div>

        {/* =========================================
            BOTTOM BAR: Centered Copyright
        ========================================== */}
        <div className="pt-8 border-t border-slate-200/50 flex justify-center items-center">
          <p className="text-sm text-white font-medium text-center">
            &copy; {currentYear} JMDE Industrial Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
