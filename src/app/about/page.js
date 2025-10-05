import Hero from "@/components/common/Hero";
import People from "@/components/Home/People";
import About from "@/components/Home/About";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero title="About VIP Realty" subtitle="Building Trust, One Property at a Time" />
      <About />
      
      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/images/bg-2.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-pink-500 text-sm font-medium tracking-wider uppercase mb-4">
              OUR ACHIEVEMENTS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Numbers That Speak for Themselves
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Over 15+ years of excellence in Greater Noida real estate market
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-5xl font-bold text-pink-500 mb-4">15+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Years Experience</h3>
              <p className="text-gray-600">Trusted expertise in real estate</p>
            </div>
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-5xl font-bold text-pink-500 mb-4">1000+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Properties Listed</h3>
              <p className="text-gray-600">Successful transactions completed</p>
            </div>
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-5xl font-bold text-pink-500 mb-4">100%</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600">Happy clients across Greater Noida</p>
            </div>
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-5xl font-bold text-pink-500 mb-4">24/7</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Support Available</h3>
              <p className="text-gray-600">Always here to help you</p>
            </div>
          </div>
        </div>
      </section>

      <People />
    </div>
  );
};

export default About;