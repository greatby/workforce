import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import clsx from "clsx";

const slides = [
  {
    title: "Linter Integration",
    description:
      "If Cascade generates code that doesn’t pass a linter, it will fix the errors automatically.",
    image:
      "/images/pexels-photo-29789465.jpeg",
    icon: "/icons/linter.svg",
  },
  {
    title: "Model Context Protocol (MCP)",
    description:
      "Enhance your AI workflows by connecting to custom tools and services.",
    image:
      "/images/pexels-photo-32079860.jpeg",
    icon: "/icons/mcp.svg",
  },
  {
    title: "Tab to Jump",
    description:
      "Predicts the next location of your cursor to seamlessly navigate through the file.",
    image:
      "/images/pexels-photo-30824935.jpeg",
    icon: "/icons/tab.svg",
  },
  {
    title: "Supercomplete",
    description: "Supercomplete analyzes what your next action might be.",
    image: "/images/pexels-photo-29145098.jpeg",
    icon: "/icons/supercomplete.svg",
  },
];

export default function CardSlider() {
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(380);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateCardWidth = () => {
      const screenWidth = window.innerWidth;
      const padding = 40; // left+right space
      setCardWidth(screenWidth < 560 ? screenWidth - padding : 380);
    };
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const goPrev = () => {
    if (index > 0) setIndex(index - 1);
  };
  const goNext = () => {
    if (index < slides.length - 1) setIndex(index + 1);
  };

  return (
    <section className="bg-[#001935] py-16">
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Cards Wrapper */}
        <div className="overflow-hidden">
          <div
            ref={containerRef}
            className="flex gap-5 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * (cardWidth + 20)}px)`,
              width: `${slides.length * (cardWidth + 20)}px`,
            }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="shrink-0 flex flex-col p-[1px]"
                style={{ width: `${cardWidth}px` }}
              >
                <div className="flex h-full flex-col justify-between rounded-md bg-[#FAF7F5]">
                  <div className="flex flex-col gap-4 p-5">
                    <img src={slide.icon} alt="icon" className="h-6 w-6" />
                    <p className="text-sm font-semibold text-gray-900">
                      {slide.title}
                    </p>
                    <p className="text-sm text-gray-500">{slide.description}</p>
                  </div>
                  <div className="flex h-[250px] justify-end overflow-hidden rounded-b-md bg-black">
                    <img
                      src={slide.image}
                      alt={slide.title}
                        loading="eager"
                      className="-mb-3 h-auto w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex justify-center gap-6">
          <button
            onClick={goPrev}
            disabled={index === 0}
            className={clsx(
              "rounded-full p-3 transition-all",
              index === 0
                ? "bg-transparent text-white/20"
                : "bg-white text-black hover:bg-gray-200"
            )}
          >
            <FaChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goNext}
            disabled={index === slides.length - 1}
            className={clsx(
              "rounded-full p-3 transition-all",
              index === slides.length - 1
                ? "bg-transparent text-white/20"
                : "bg-white text-black hover:bg-gray-200"
            )}
          >
            <FaChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
