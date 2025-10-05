import { Palette, Home, Building2, Sparkles } from 'lucide-react';

const Interiors = () => {
  const services = [
    {
      icon: <Palette className="w-12 h-12 text-pink-500" />,
      title: "Interior Design & Execution",
      description: "Complete interior design solutions from concept to completion"
    },
    {
      icon: <Building2 className="w-12 h-12 text-pink-500" />,
      title: "Glass & Facade Work",
      description: "Professional glass installation and facade solutions"
    },
    {
      icon: <Home className="w-12 h-12 text-pink-500" />,
      title: "Self-Manufactured Facade Solutions",
      description: "In-house manufacturing for custom facade systems"
    },
    {
      icon: <Sparkles className="w-12 h-12 text-pink-500" />,
      title: "Custom Interior Solutions",
      description: "Tailored interior designs for unique spaces"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-pink-500 text-sm font-medium tracking-wider uppercase mb-4">
            INTERIORS & FACADE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Elevate Spaces with World-Class Interiors & Facade Solutions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We provide interior design and facade work with in-house manufacturing of glass and facade systems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="flex justify-center mb-6">
                <div className="p-6 bg-pink-50 rounded-full group-hover:bg-pink-100 transition-colors duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img 
              src="/images/Offer/Offer-1.png" 
              alt="Interior Design Project"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-semibold">Interior Design</span>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img 
              src="/images/Offer/Offer-2.png" 
              alt="Facade Work Project"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-semibold">Facade Solutions</span>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img 
              src="/images/Offer/Offer-3.png" 
              alt="Glass Work Project"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-semibold">Glass Work</span>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Space?</h3>
          <p className="mb-6 text-pink-100">Contact us for a free consultation and quote</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <div className="flex items-center gap-2">
              <span>📞</span>
              <span>+91 7017097608, +91 9667039965</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <span>info@viprealtynet.com</span>
            </div>
          </div>
          
          <button className="bg-white text-pink-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            Get Free Quote
          </button>
        </div>

      </div>
    </section>
  );
};

export default Interiors;