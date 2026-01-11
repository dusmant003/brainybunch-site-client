import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import siteConfig from "../../config/siteConfig";

const slides = [
  {
    pill: "Play, Learn, And Shine",
    title: "Creating joyful",
    highlight: "learning moment",
    subtitle: "every day",
    desc: "We believe that every day brings new opportunities for children to explore, imagine, and discover. Through fun activities, hands-on learning, and a caring environment.",
    image: import.meta.env.VITE_SERVICE_URL + "/siteimages/collegebnr.jpg",
  },
  {
    pill: "Growing Together",
    title: "Inspiring young",
    highlight: "minds with",
    subtitle: "creativity",
    desc: "Our school nurtures curiosity, confidence, and creativity to help children build a strong foundation for lifelong learning.",
    image: import.meta.env.VITE_SERVICE_URL + "/siteimages/class4.jpg",
  },
  {
    pill: "Safe & Caring Space",
    title: "A happy place",
    highlight: "to learn",
    subtitle: "and grow",
    desc: "We provide a safe, supportive, and joyful environment where every child feels valued and encouraged.",
    image: import.meta.env.VITE_SERVICE_URL + "/siteimages/entrance.jpg",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setIndex(index === 0 ? slides.length - 1 : index - 1);

  const nextSlide = () =>
    setIndex((index + 1) % slides.length);

  return (
    <section className="relative w-full overflow-hidden min-h-[70vh] md:min-h-[85vh] lg:min-h-screen p-2">
      
      {/* Background */}
      <img
        src={slides[index].image}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
        draggable="false"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-full flex items-center">
        <div
          data-aos="fade-up"
          className="
            text-white max-w-2xl
            pt-20 sm:pt-24 md:pt-28 lg:pt-32
          "
        >
          {/* Pill */}
          <span className="inline-flex items-center gap-2 px-4 py-1 mb-4 sm:mb-5 text-xs sm:text-sm rounded-full bg-white/20 backdrop-blur">
            ✨ {slides[index].pill}
          </span>

          {/* Heading */}
          <h1 className="font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            {slides[index].title} <br />
            {slides[index].highlight} <br />
            <span className="text-orange-400">
              {slides[index].subtitle}
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed">
            {slides[index].desc}
          </p>

          {/* Button */}
          <div className="mt-6 sm:mt-8 ">
            <Link to="/About/about-vss">
              <button className={`${siteConfig.background.bgcolor} hover:sacle-105 transition-all duration-500 px-6 py-3 rounded-full font-semibold text-sm sm:text-base`}>
              About Us →
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-black/70 p-2 md:p-3 rounded-full"
      >
        <ChevronLeft className="text-white w-5 h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-black/70 p-2 md:p-3 rounded-full"
      >
        <ChevronRight className="text-white w-5 h-5 md:w-6 md:h-6" />
      </button>
    </section>
  );
}
