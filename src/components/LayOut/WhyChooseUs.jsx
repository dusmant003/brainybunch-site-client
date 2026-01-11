import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Phone,
  Mail,
} from "lucide-react";

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative bg-[#0b1220] py-16 lg:py-24 overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT IMAGE */}
        <div className="relative" data պետական-aos="fade-right">
          <div className="rounded-3xl overflow-hidden">
            <img
              src='https://demo.awaikenthemes.com/kiddin/wp-content/uploads/2025/12/why-choose-us-image.jpg'
              alt="Kids Classroom"
              className="w-full h-full object-cover"
            />
          </div>

          {/* CONTACT CARD */}
          <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl p-5 w-[240px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#ff7a45] p-2 rounded-full text-white">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-500">Call Us!</p>
                <p className="font-semibold text-sm">+(123) 456-789</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#ff7a45] p-2 rounded-full text-white">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-500">Email Us!</p>
                <p className="font-semibold text-sm">info@domin.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div data-aos="fade-left">
          {/* Pill */}
          <span className="inline-flex items-center gap-2 px-4 py-1 mb-6 text-sm rounded-full bg-white/10 text-white">
            ✨ Why Choose Us
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
            Why parents choose us for <br /> their child's growth
          </h2>

          {/* Description */}
          <p className="text-gray-300 max-w-xl mb-10">
            We provide an inspiring space where children discover new skills,
            build confidence, and enjoy learning through hands-on activities.
          </p>

          {/* FEATURE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* CARD 1 */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="flex gap-2 mb-4">
                <img
                  src="https://i.pravatar.cc/40?img=12"
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
                <img
                  src="https://i.pravatar.cc/40?img=15"
                  className="w-10 h-10 rounded-full -ml-3"
                  alt=""
                />
                <img
                  src="https://i.pravatar.cc/40?img=18"
                  className="w-10 h-10 rounded-full -ml-3"
                  alt=""
                />
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">
                Individual Attention
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                We ensure every child receives the care, guidance.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full text-xs bg-white/10 text-white">
                  Learning
                </span>
                <span className="px-3 py-1 rounded-full text-xs bg-white/10 text-white">
                  Growth
                </span>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <div className="flex gap-2 mb-4">
                <img
                  src="https://i.pravatar.cc/40?img=22"
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
                <img
                  src="https://i.pravatar.cc/40?img=25"
                  className="w-10 h-10 rounded-full -ml-3"
                  alt=""
                />
                <img
                  src="https://i.pravatar.cc/40?img=28"
                  className="w-10 h-10 rounded-full -ml-3"
                  alt=""
                />
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">
                Healthy Snacks
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                We ensure every child receives the care, guidance.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full text-xs bg-white/10 text-white">
                  Learning
                </span>
                <span className="px-3 py-1 rounded-full text-xs bg-white/10 text-white">
                  Growth
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
