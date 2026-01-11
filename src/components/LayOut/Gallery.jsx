import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import siteConfig from "../../config/siteConfig";

const galleryImages = [
  import.meta.env.VITE_SERVICE_URL + "/siteimages/class4.jpg",
  import.meta.env.VITE_SERVICE_URL + "/siteimages/skill.jpg",
  import.meta.env.VITE_SERVICE_URL + "/siteimages/explore.jpg",
  import.meta.env.VITE_SERVICE_URL + "/siteimages/achive.jpg",
  import.meta.env.VITE_SERVICE_URL + "/siteimages/class4.jpg",
  import.meta.env.VITE_SERVICE_URL + "/siteimages/skill.jpg",
  import.meta.env.VITE_SERVICE_URL + "/siteimages/explore.jpg",
  import.meta.env.VITE_SERVICE_URL + "/siteimages/achive.jpg",
];

export default function Gallery() {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const nextSlide = () => {
    const newIndex = Math.min(index + 1, galleryImages.length - 1);
    setIndex(newIndex);
    sliderRef.current.scrollTo({
      left: sliderRef.current.offsetWidth * newIndex,
      behavior: "smooth",
    });
  };

  const prevSlide = () => {
    const newIndex = Math.max(index - 1, 0);
    setIndex(newIndex);
    sliderRef.current.scrollTo({
      left: sliderRef.current.offsetWidth * newIndex,
      behavior: "smooth",
    });
  };

  /* DRAG HANDLERS */
  const handleMouseDown = (e) => {
    isDown.current = true;
    sliderRef.current.classList.add("cursor-grabbing");
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    sliderRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseUp = () => {
    isDown.current = false;
    sliderRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section className="w-full px-4 lg:px-8 py-16 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-12">
          <div data-aos="fade-right">
            <p className={`${siteConfig.text.secondary} font-medium uppercase mb-3`}>
              Image Gallery
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Discover our colorful kindergarten <br />
              <span className={`${siteConfig.text.primary}`}>
                moments gallery
              </span>
            </h2>

            <p className="text-gray-600 max-w-2xl">
              A glimpse into joyful learning, creativity, and fun-filled memories.
            </p>
          </div>

          <div className="flex lg:items-start" data-aos="fade-left">
            <Link
              to="/Gallery/vss-gallery"
              className="group flex items-center gap-2 border-b pb-1 text-gray-700 hover:text-blue-900"
            >
              View In Gallery
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
              />
            </Link>
          </div>
        </div>

        {/* SLIDER */}
        <div className="relative">

          <div
            ref={sliderRef}
            className="flex overflow-hidden scroll-smooth cursor-grab select-none"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="min-w-full sm:min-w-[50%] lg:min-w-[25%] px-2"
              >
                <div
                  data-aos="zoom-in"
                  className="relative h-[260px] sm:h-[300px] rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <img
                    src={img}
                    alt="Gallery"
                    draggable={false}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* ARROWS */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
