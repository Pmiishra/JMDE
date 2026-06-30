"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of background images
  const slides = [
    "/images/hero_3.png",
    "/images/hero_4.png",
    "/images/hero_5.png",
  ];

  // Auto-play carousel logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full h-screen flex flex-col justify-center overflow-hidden">
      {/* Carousel Background Images */}
      {slides.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${img}')` }}
        />
      ))}

      {/* Overlays to ensure text is always readable */}
      <div className="absolute inset-0 z-10 bg-jmde-blue/80 mix-blend-multiply"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-jmde-blue/90 via-jmde-blue/60 to-transparent"></div>

      {/* Hero Content (Text & Buttons) */}
      {/* CHANGED: Added md:mt-32 and lg:mt-48 to push the text downward on larger screens */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 md:mt-32 lg:mt-48">
        <div className="max-w-4xl mx-auto md:mx-0 text-center md:text-left">
          {/* STEP 1: The Kicker */}
          <p className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.2em] md:tracking-[0.25em] text-white/90 uppercase mb-4 md:mb-6">
            YOU BRING THE VISION.
          </p>

          {/* STEP 2: The Main Heading */}
          <h1 className="text-[2.75rem] sm:text-5xl md:text-7xl lg:text-[5.1rem] font-serif font-normal text-white leading-[1.1] mb-6 md:mb-8 tracking-tight">
            <span className="block md:hidden">
              <span className="block mb-1">WE BRING</span>
              <span className="block">THE EXECUTION.</span>
            </span>
            <span className="hidden md:block">
              <span className="block mb-2">WE BRING THE</span>
              <span className="block">EXECUTION.</span>
            </span>
          </h1>

          {/* STEP 3: The Subheadline */}
          <p className="text-base md:text-xl text-white/90 mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto md:mx-0 font-light px-4 md:px-0">
            Delivering quality, safety and performance in every project.
          </p>
        </div>
      </div>

      {/* Slider Controls: Left/Right Arrows (Mobile Only) */}
      <button
        onClick={prevSlide}
        className="md:hidden absolute z-30 bottom-24 left-4 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="md:hidden absolute z-30 bottom-24 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white transition-all duration-300"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Slider Controls: Pagination Dots */}
      <div className="absolute z-30 bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-20 h-2.5 bg-jmde-orange"
                : "w-3 h-3 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
