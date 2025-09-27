import { PiggyBank, Wallet, FileText, Lock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <PiggyBank className="w-12 h-12 text-pink-500" />,
      title: "No Downpayment",
      description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
    },
    {
      icon: <Wallet className="w-12 h-12 text-pink-500" />,
      title: "All Cash Offer",
      description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
    },
    {
      icon: <FileText className="w-12 h-12 text-pink-500" />,
      title: "Experts in Your Corner",
      description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
    },
    {
      icon: <Lock className="w-12 h-12 text-pink-500" />,
      title: "Locked in Pricing",
      description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
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
            The smartest way to buy a home
          </h2>
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