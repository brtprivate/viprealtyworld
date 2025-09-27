"use client";

const Hero = ({
  bgImage = "/images/bg-4.png",
  title = "Choose Your Desired Home",
  subtitle = "",
}) => {
  return (
    <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Zoom */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-110 hover:scale-100"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>

      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="text-center text-white z-10">
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-lg md:text-xl drop-shadow-md">{subtitle}</p>
        )}
      </div>

      {/* Curved Bottom Shape */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Scroll Indicator on the curve center */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-black/30 rounded-full flex justify-center bg-white shadow-md">
          <div className="w-1 h-3 bg-black/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
