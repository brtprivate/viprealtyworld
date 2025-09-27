const People = () => {
  const stats = [
    {
      number: "305",
      label: "Area",
      sublabel: "Population"
    },
    {
      number: "1,090",
      label: "Total",
      sublabel: "Properties"
    },
    {
      number: "209",
      label: "Average",
      sublabel: "House"
    },
    {
      number: "67",
      label: "Total",
      sublabel: "Branches"
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
              We Put People First.
            </h2>
            
            {/* Description Paragraphs */}
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                A small river named Duden flows by their place and supplies it with the necessary 
                regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your 
                mouth.
              </p>
              
              <p>
                On her way she met a copy. The copy warned the Little Blind Text, that where it came 
                from it would have been rewritten a thousand times and everything that was left from 
                its origin would be the word "and" and the Little Blind Text should turn around and 
                return to its own, safe country. But nothing the copy said could convince her and so it 
                didn't take long until a few insidious Copy Writers ambushed her, made her drunk with 
                Longe and Parole and dragged her into their agency, where they abused her for their.
              </p>
            </div>

            {/* Call to Action Button */}
            <div className="mt-8">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Learn More About Us
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