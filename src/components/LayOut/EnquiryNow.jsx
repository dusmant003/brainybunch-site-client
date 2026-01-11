import React from "react";

const EnquiryNow = () => {
  return (
    <section className="w-full py-16 px-4 bg-[#fff7ec]">
      <div
        className="max-w-6xl mx-auto rounded-[28px] relative overflow-hidden
        bg-gradient-to-r from-[#6fcf97] to-[#56ccf2] p-6 sm:p-10"
      >
        {/* Cartoon Decoration */}
        <img
          src="https://kindergarten.nicdark.com/wp-content/uploads/2025/06/Animal-11.png"
          alt="cartoon"
          className="absolute top-4 right-4 w-20 sm:w-24 md:w-28 opacity-90"
        />

        {/* Content */}
        <div className="relative z-10 text-center">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl
            font-[Comic_Neue,cursive] font-extrabold text-white"
          >
            Enquiry Now ✨
          </h2>

          <p
            className="mt-2 text-sm sm:text-base md:text-lg
            font-[Comic_Neue,cursive] text-white/90"
          >
            Give your child the best start to a bright future 🌈
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-6 py-3 rounded-full bg-white
              text-green-700 font-semibold
              hover:scale-105 transition shadow-md"
            >
              Enquire Now
            </a>

            <a
              href="tel:+919999999999"
              className="px-6 py-3 rounded-full border-2 border-white
              text-white font-semibold
              hover:bg-white hover:text-green-700 transition"
            >
              Call Us 📞
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryNow;
