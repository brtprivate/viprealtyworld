const People = () => {
  const stats = [
    {
      number: "1000+",
      label: "Properties",
      sublabel: "Listed"
    },
    {
      number: "500+",
      label: "Happy",
      sublabel: "Clients"
    },
    {
      number: "15+",
      label: "Years",
      sublabel: "Experience"
    },
    {
      number: "100%",
      label: "Customer",
      sublabel: "Satisfaction"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/images/People.png" 
                alt="Happy family with their new home"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-pink-200 rounded-full opacity-40"></div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:pl-8">
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Why Choose VIP Realty?
            </h2>
            
            {/* Description Paragraphs */}
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                At VIP Realty, we are a trusted name in Greater Noida real estate with over 15 years of experience. 
                We specialize in residential homes, commercial spaces, plots, luxury villas, and rental solutions 
                across Delhi NCR including Greater Noida, Jewar, Mathura, and Agra.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>Trusted name in Greater Noida real estate</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>Transparent and hassle-free process</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>Extensive property listings</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>Personalized guidance & support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span>100% customer satisfaction</span>
                </div>
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="mt-8">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Contact Us Today
              </button>
            </div>
          </div>

        </div>

        {/* Statistics Section */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">
                  <div className="font-medium">{stat.label}</div>
                  <div className="text-gray-500">{stat.sublabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default People;