import Hero from "@/components/common/Hero";
import Offer from "@/components/Home/Offer";
import Services from "@/components/Home/Services";

const PropertiesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero title="Choose Your Dream Property" subtitle="Discover premium properties in Greater Noida" />
      
      {/* Enhanced Properties Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
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

        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>

        <div className="relative z-10">
          <Offer />
        </div>
      </section>

      {/* Property Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-pink-500 text-sm font-medium tracking-wider uppercase mb-4">
              PROPERTY TYPES
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Find Your Perfect Property Type
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-gray-50 p-8 rounded-2xl hover:bg-pink-50 transition-all duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Residential</h3>
              <p className="text-gray-600">Apartments, villas, and independent houses</p>
            </div>
            <div className="group bg-gray-50 p-8 rounded-2xl hover:bg-pink-50 transition-all duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Commercial</h3>
              <p className="text-gray-600">Office spaces, shops, and business centers</p>
            </div>
            <div className="group bg-gray-50 p-8 rounded-2xl hover:bg-pink-50 transition-all duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏞️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Plots</h3>
              <p className="text-gray-600">Residential and commercial land plots</p>
            </div>
            <div className="group bg-gray-50 p-8 rounded-2xl hover:bg-pink-50 transition-all duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">✨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Luxury</h3>
              <p className="text-gray-600">Premium villas and luxury apartments</p>
            </div>
          </div>
        </div>
      </section>

      <Services />

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Let our experts help you find the perfect property that matches your needs and budget
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Browse Properties
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors">
              Schedule Site Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertiesPage;