import { Award, Users, Home, TrendingUp } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Home className="w-8 h-8 text-pink-500" />,
      title: "1000+ Properties",
      description: "Successfully delivered across Greater Noida"
    },
    {
      icon: <Users className="w-8 h-8 text-pink-500" />,
      title: "100% Satisfaction",
      description: "Transparent and hassle-free process"
    },
    {
      icon: <Award className="w-8 h-8 text-pink-500" />,
      title: "15+ Years Experience",
      description: "Trusted name in real estate industry"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-pink-500" />,
      title: "Premium Solutions",
      description: "Complete real estate & construction services"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="lg:pr-8">
            {/* Section Header */}
            <div className="mb-8">
              <p className="text-pink-500 text-sm font-medium tracking-wider uppercase mb-4">
                ABOUT VIP REALTY
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Building Trust, One Property at a Time
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Your trusted partner for premium real estate solutions in Greater Noida. From dream homes to commercial spaces, we deliver excellence.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-pink-50 rounded-lg">
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Ready to Find Your Dream Property?</h3>
              <div className="space-y-2 text-sm">
                <p>📍 22/1st B Park View, Gaur Yamuna City, Greater Noida</p>
                <p>📞 +91 7017097608, +91 9667039965</p>
                <p>✉️ info@viprealtynet.com</p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/images/People.png" 
                alt="VIP Realty Team - Building Trust"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-pink-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-30"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;