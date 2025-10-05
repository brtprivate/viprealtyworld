import { Home, Building, MapPin, Hammer, Palette, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="w-12 h-12 text-pink-500" />,
      title: "Property Purchase & Sales",
      description: "Villas, rental flats, apartments, luxury apartments, and agricultural land in Delhi NCR (Greater Noida, Jewar, Mathura, Agra)."
    },
    {
      icon: <Hammer className="w-12 h-12 text-pink-500" />,
      title: "Construction Services",
      description: "New building construction, renovations, and remodeling supervised by top engineers to ensure highest quality."
    },
    {
      icon: <Palette className="w-12 h-12 text-pink-500" />,
      title: "Interiors & Facade Work",
      description: "Interior design and facade work with in-house manufacturing of glass and facade systems for custom solutions."
    },
    {
      icon: <Users className="w-12 h-12 text-pink-500" />,
      title: "Trusted Partnership",
      description: "Transparent and hassle-free process with personalized guidance & support ensuring 100% customer satisfaction."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-pink-500 text-sm font-medium tracking-wider uppercase mb-4">
            OUR SERVICES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Building Trust, One Property at a Time
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            At VIP Realty, we believe that real estate is more than just property – it's about building dreams, securing futures, and creating lasting value.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>
    </section>
  );
};

export default Services;