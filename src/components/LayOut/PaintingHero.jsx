import React from "react";

const PaintingHero = () => {
    return (
        <section className="w-full bg-[#f57c4a] py-10 px-4">
            {/* OUTER FRAME */}
            <div className="max-w-7xl mx-auto rounded-[28px] overflow-hidden relative">

                {/* VIDEO BACKGROUND */}
                <video
                    className="w-full h-[320px] sm:h-[420px] md:h-[520px] object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/30" />

                {/* CONTENT */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">

                    {/* ICON */}
                    <div className="mb-4">
                        <span className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-white/60">
                            🐰
                        </span>
                    </div>

                    {/* HEADING */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-[Comic_Neue,cursive] tracking-wide drop-shadow-lg">
                        Caring Your Children
                    </h2>

                    {/* BUTTON */}
                    <button className="mt-5 px-6 py-2 rounded-full bg-[#6fcf97] text-sm font-semibold text-black shadow-md hover:scale-105 transition">
                        START NOW
                    </button>

                    {/* BOTTOM TEXT */}
                    <p className="absolute bottom-4 sm:bottom-6 text-xs sm:text-sm md:text-base font-[Comic_Neue,cursive] tracking-widest opacity-90">
                        Imagination ✦ Exploration ✦ Kindness ✦ Growth
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PaintingHero;
