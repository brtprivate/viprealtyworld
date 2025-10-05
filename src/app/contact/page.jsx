import Hero from "@/components/common/Hero";
import Services from "@/components/Home/Services";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title="Get in Touch with VIP Realty – We&apos;re Here to Help!"
        subtitle="Contact us for buying, selling, renting, construction or interior projects."
      />

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Contact Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center border-b border-gray-200 pb-10 mb-10">
          <div className="px-6">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="font-semibold text-gray-900 mb-2">Head Office</h3>
            <p className="text-gray-600 text-sm">
              22/1st B Park View, Gaur Yamuna City, <br />
              Greater Noida, U.P. – 203201
            </p>
          </div>
          <div className="px-6">
            <div className="text-3xl mb-3">📞</div>
            <h3 className="font-semibold text-gray-900 mb-2">Phone Numbers</h3>
            <p className="text-gray-600 text-sm">
              +91 7017097608<br />
              +91 9667039965
            </p>
          </div>
          <div className="px-6">
            <div className="text-3xl mb-3">📧</div>
            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 text-sm">info@viprealtynet.com</p>
          </div>
          <div className="px-6">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="font-semibold text-gray-900 mb-2">Website</h3>
            <p className="text-gray-600 text-sm">www.viprealtyworld.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-2">
            Send us a Message
          </h2>
          <p className="text-center text-gray-600 mb-8">
            We&apos;re here to help with all your real estate needs. Get in touch today!
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent placeholder-gray-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type / Service
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="residential">Residential Property</option>
                  <option value="commercial">Commercial Property</option>
                  <option value="plots">Plots</option>
                  <option value="luxury">Luxury Homes</option>
                  <option value="rental">Rental Properties</option>
                  <option value="construction">Construction Services</option>
                  <option value="interiors">Interior Design & Facade Work</option>
                  <option value="agricultural">Agricultural Land</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message / Query *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell us about your requirements, budget, preferred location, or any specific questions you have..."
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent placeholder-gray-400 resize-vertical"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 text-white p-4 rounded-lg hover:bg-pink-600 transition-colors duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Services Overview */}
        {/* <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-bold text-center mb-6">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🏠</div>
              <h4 className="font-semibold mb-1">Property Sales</h4>
              <p className="text-pink-100 text-sm">Villas, Apartments, Plots</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🔨</div>
              <h4 className="font-semibold mb-1">Construction</h4>
              <p className="text-pink-100 text-sm">New Buildings, Renovations</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🎨</div>
              <h4 className="font-semibold mb-1">Interiors</h4>
              <p className="text-pink-100 text-sm">Design & Facade Work</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🏘️</div>
              <h4 className="font-semibold mb-1">Rentals</h4>
              <p className="text-pink-100 text-sm">Residential & Commercial</p>
            </div>
          </div>
        </div> */}
        <Services/>

        {/* Google Map Embed - Greater Noida */}
        <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.50493287549596!3d28.474608775766847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea6b4c8f6c85%3A0x6c3b7f0b8b8b8b8b!2sGaur%20Yamuna%20City%2C%20Greater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1695829086000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="VIP Realty Location - Gaur Yamuna City, Greater Noida"
          ></iframe>
        </div>

        {/* Additional Contact Information */}
        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Why Contact VIP Realty?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-3">⭐</div>
              <h4 className="font-semibold text-gray-900 mb-2">15+ Years Experience</h4>
              <p className="text-gray-600 text-sm">Trusted name in Greater Noida real estate</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="font-semibold text-gray-900 mb-2">100% Satisfaction</h4>
              <p className="text-gray-600 text-sm">Transparent and hassle-free process</p>
            </div>
            <div>
              <div className="text-4xl mb-3">📋</div>
              <h4 className="font-semibold text-gray-900 mb-2">Complete Solutions</h4>
              <p className="text-gray-600 text-sm">From property search to interior design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
