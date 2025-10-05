import { MapPin, Phone, Mail, Globe, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Head Office",
      content: "22/1st B Park View, Gaur Yamuna City, Greater Noida, U.P. – 203201"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Numbers",
      content: "+91 7017097608, +91 9667039965"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "info@viprealtynet.com"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Website",
      content: "www.viprealtyworld.com"
    }
  ];

  return (
    <section className="py-20  text-white relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-30"
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

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-pink-500 text-sm font-medium tracking-wider uppercase mb-4">
            GET IN TOUCH
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Get in Touch with VIP Realty – We&apos;re Here to Help!
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Contact us for buying, selling, renting, construction or interior projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-white">{info.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {info.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Action Buttons */}
            <div className="space-y-4 pt-6">
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg">
                📞 Call Now
              </button>
              <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg">
                💬 WhatsApp Chat
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>

              <form className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Phone & Service Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Property Type / Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                    >
                      <option value="" className="bg-gray-800">Select a service</option>
                      <option value="residential" className="bg-gray-800">Residential Property</option>
                      <option value="commercial" className="bg-gray-800">Commercial Property</option>
                      <option value="plots" className="bg-gray-800">Plots</option>
                      <option value="luxury" className="bg-gray-800">Luxury Homes</option>
                      <option value="rental" className="bg-gray-800">Rental Properties</option>
                      <option value="construction" className="bg-gray-800">Construction Services</option>
                      <option value="interiors" className="bg-gray-800">Interior Design</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message / Query *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm resize-vertical transition-all duration-300"
                    placeholder="Tell us about your requirements, budget, preferred location..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;