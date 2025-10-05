const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/images/bg-1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-pink-900/40"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-pink-400/15 rounded-full blur-2xl animate-pulse delay-1000"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
          Your Dream Property
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
            Awaits
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-white/90 mb-12 font-light max-w-3xl mx-auto">
          Premium real estate solutions in Greater Noida
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-pink-500/25 hover:scale-105">
            <span className="flex items-center gap-2">
              Explore Properties
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105">
            Contact Us
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
            <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">
              1000+
            </div>
            <div className="text-sm text-white/80 font-medium">Properties</div>
          </div>
          <div className="text-center backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
            <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">
              100%
            </div>
            <div className="text-sm text-white/80 font-medium">Satisfaction</div>
          </div>
          <div className="text-center backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
            <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">
              15+
            </div>
            <div className="text-sm text-white/80 font-medium">Years</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Modern Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0L600,120L1200,0V120H0V0Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
