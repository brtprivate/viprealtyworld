import Hero from "@/components/common/Hero";
import Agents from "@/components/Home/Agents";

const AgentPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero title="Our Expert Agents" subtitle="Meet the professionals who make your property dreams come true" />
      
      {/* Enhanced Agents Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/images/bg-3.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>

        <div className="relative z-10">
          <Agents />
        </div>
      </section>

      {/* Why Choose Our Agents Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-pink-500 text-sm font-medium tracking-wider uppercase mb-4">
              WHY CHOOSE US
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Expert Guidance Every Step of the Way
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">15+ Years Experience</h3>
              <p className="text-gray-600">Our agents have deep knowledge of Greater Noida real estate market</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Service</h3>
              <p className="text-gray-600">Dedicated support tailored to your specific property needs</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Complete Solutions</h3>
              <p className="text-gray-600">From property search to legal documentation, we handle everything</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgentPage;