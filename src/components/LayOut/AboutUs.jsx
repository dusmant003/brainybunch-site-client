import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Users,
  MessageCircle,
  CheckCircle,
  Star,
} from "lucide-react";
import siteConfig from "../../config/siteConfig";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT IMAGES */}
        <div className="relative flex gap-6 justify-center lg:justify-start">
          {/* Large Image */}
          <div
            data-aos="fade-right"
            className="rounded-3xl overflow-hidden w-[260px] sm:w-[300px] md:w-[340px]"
          >
            <img
              src={import.meta.env.VITE_SERVICE_URL + "/siteimages/entrance2.jpg"}
              alt="classroom"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Small Image */}
          <div
            data-aos="fade-up"
            className="absolute -bottom-10 right-0 rounded-3xl overflow-hidden w-[220px] sm:w-[260px] shadow-xl"
          >
            <img
              src={import.meta.env.VITE_SERVICE_URL + "/siteimages/entrance2.jpg"}
              alt="kids"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div data-aos="fade-left">
          {/* Pill */}
          <span className="inline-flex items-center gap-2 px-4 py-1 mb-5 text-sm rounded-full bg-orange-50 text-orange-500 font-semibold">
            ✨ About Us
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
            Nurturing young learners <br />
            with care and creativity
          </h2>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-8 max-w-xl">
            We provide an inspiring space where children discover new skills,
            build confidence, and enjoy learning through hands-on activities.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-[#0b4a6f] text-white p-3 rounded-full">
                <Users size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  Experienced & Caring Teachers
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  Child centered learning approach
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#0b4a6f] text-white p-3 rounded-full">
                <MessageCircle size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  Strong Parent-Teacher Communication
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  Focus on creativity & imagination
                </p>
              </div>
            </div>
          </div>

          {/* CHECK LIST */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              "Child centered learning approach",
              "Experienced early education teacher",
              "Focus on creativity & imagination",
              "Clean, safe & joyful environment",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="text-[#0b4a6f]" size={18} />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* BUTTON + REVIEWS */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <Link to="/About/about-vss">
              <button className={`${siteConfig.background.bgcolor} hover:scale-105 duration-500 transition-all text-white font-semibold px-7 py-3 rounded-full flex items-center gap-2`}>
                Know More →
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
