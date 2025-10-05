import { Hammer, Building, Home, Users } from 'lucide-react';

const Construction = () => {
  const capabilities = [
    {
      icon: <Building className="w-8 h-8 text-pink-500" />,
      title: "New Building Construction",
      description: "Complete construction services for residential and commercial projects"
    },
    {
      icon: <Hammer className="w-8 h-8 text-pink-500" />,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with our expert renovation services"
    },
    {
      icon: <Home className="w-8 h-8 text-pink-500" />,
      title: "Studio & Luxury Apartments",
      description: "Specialized construction for premium living spaces"
    },
    {
      icon: <Users className="w-8 h-8 text-pink-500" />,
      title: "Custom Projects",
      description: "Tailored construction solutions for unique requirements"
    }
  ];

  return (
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
      <div className="absolute inset-0  backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/bg-3.png"
                alt="VIP Realty Construction Services"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-pink-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-30"></div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:pl-8">
            {/* Section Header */}
            <div className="mb-8">
              <p className="text-pink-500 text-sm font-medium tracking-wider uppercase mb-4">
                CONSTRUCTION SERVICES
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Building Your Vision with Precision & Quality
              </h2>
              {/* <p className="text-gray-600 text-lg leading-relaxed">
                VIP Realty provides construction services including new building projects, renovations, and remodeling. All work is supervised by top engineers to ensure the highest quality.
              </p> */}
            </div>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-pink-50 rounded-lg">
                      {capability.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        {capability.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Get Construction Quote</h3>
              <div className="space-y-2 text-sm">
                <p>📍 22/1st B Park View, Gaur Yamuna City, Greater Noida, U.P. – 203201</p>
                <p>📞 +91 7017097608, +91 9667039965</p>
                <p>✉️ info@viprealtynet.com</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Construction;