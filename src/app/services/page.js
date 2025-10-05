import Hero from "@/components/common/Hero";
import Services from "@/components/Home/Services";
import Works from "@/components/Home/Works";
import Construction from "@/components/Home/Construction";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero title="Our Services" subtitle="Complete real estate solutions for all your property needs" />
      
      {/* Enhanced Services Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/images/bg-4.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm"></div>

        <div className="relative z-10">
          <Services />
        </div>
      </section>

      <Construction />
      <Works />

      {/* Service Guarantee Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Our Service Guarantee
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            We're committed to providing exceptional service and ensuring your complete satisfaction
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-3xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-4">100% Transparency</h3>
              <p className="text-gray-300">No hidden costs or surprises. Everything is clear and upfront.</p>
            </div>
            <div className="p-6">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-4">Quick Response</h3>
              <p className="text-gray-300">Fast turnaround times and immediate support when you need it.</p>
            </div>
            <div className="p-6">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-4">Results Driven</h3>
              <p className="text-gray-300">We focus on delivering results that exceed your expectations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
