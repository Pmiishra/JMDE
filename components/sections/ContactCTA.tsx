import Link from "next/link";

export default function ContactCTA() {
  return (
    <section
      className="relative overflow-hidden group bg-fixed bg-cover bg-center py-24 md:py-32"
      // Make sure this points to your actual image in the public folder
      style={{ backgroundImage: "url('/images/contact_section.png')" }}
    >
      {/* Deep Blue Overlay to keep text readable */}
      <div className="absolute inset-0 bg-jmde-blue/65 mix-blend-multiply"></div>

      {/* Subtle industrial pattern/texture overlay */}
      {/* <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div> */}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* CHANGED: Made the heading significantly larger (text-4xl to text-7xl) */}
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight drop-shadow-lg">
          Looking for Reliable Industrial Services?
        </h2>

        {/* CHANGED: Slightly bumped up paragraph text size to balance the giant heading */}
        <p className="text-md md:text-lg text-white/90 mb-12 font-medium max-w-3xl mx-auto drop-shadow-sm">
          Our engineering and execution teams are ready to deliver quality
          results.
        </p>

        {/* CHANGED: Removed the second button and centered the primary Contact Us button */}
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="relative inline-flex items-center justify-center gap-3 border-2 group-hover:border-jmde-orange border-white text-white px-14 py-3 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_10px_20px_rgba(28,49,84,0.15)]  z-10"
          >
            <span className="absolute inset-0 bg-jmde-orange -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out -z-10"></span>
            <span className="group-hover:text-white transition-colors duration-300">
              Contact Us
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
