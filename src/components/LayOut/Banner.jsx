import React from "react";

const KidsNatureSection = () => {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div
        className="max-w-7xl mx-auto h-[260px] sm:h-[320px] md:h-[380px]
        rounded-[28px] overflow-hidden relative
        bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://html.tonatheme.com/wp/saratov/wp-content/uploads/2023/03/3.png')", 
        }}
      >
        {/* Soft overlay */}
        <div className="absolute inset-0 bg-white/40" />

        {/* TOP RIGHT CARTOON */}
        <img
          src="https://kindergarten.nicdark.com/wp-content/uploads/2025/06/Animal-11.png"
          alt="cartoon animal"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 animate-bounce
          w-16 sm:w-20 md:w-24 lg:w-28
          pointer-events-none select-none"
        />

        {/* LEFT BOTTOM CARTOON */}
        <img
          src="https://kindergarten.nicdark.com/wp-content/uploads/2025/06/Animal-6.png"
          alt="cartoon animal"
          className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 animate-bounce
          w-20 sm:w-24 md:w-28 lg:w-32
          pointer-events-none select-none"
        />

        {/* CENTER CONTENT */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl
              font-[Comic_Neue,cursive] font-extrabold
              text-green-700 drop-shadow-md"
            >
              New Brainy Bunch
            </h2>

            <p
              className="mt-2 text-sm sm:text-base md:text-lg
              font-[Comic_Neue,cursive]
              text-green-900 tracking-wide"
            >
              Pre-School Where Little Minds Grow 🌈
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsNatureSection;
