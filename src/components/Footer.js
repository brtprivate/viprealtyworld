import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* VIP Realty Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-900">VIP Realty</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            Your trusted real estate partner for Residential, Commercial, Plots, Luxury Homes & Rentals in Greater Noida.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-500 hover:text-pink-500 transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-pink-500 transition-colors"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-pink-500 transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-pink-500 transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-900">Our Services</h3>
          <ul className="space-y-2">
            {["Property Purchase & Sales", "Construction Services", "Interior & Facade Work", "Rental Solutions"].map(
              (item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-pink-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Property Types Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-900">Property Types</h3>
          <ul className="space-y-2">
            {["Villas & Luxury Apartments", "Apartments & Rental Flats", "Agricultural Land", "Studio Apartments"].map((item, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-pink-500 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-900">Our Locations</h3>
          <ul className="space-y-2">
            {["Greater Noida", "Jewar", "Mathura", "Agra"].map((item, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="text-gray-600 text-sm hover:text-pink-500 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-900">
            Contact Us
          </h3>
          <div className="text-gray-600 text-sm space-y-2">
            <p>22/1st B Park View, Gaur Yamuna City, Greater Noida, U.P. – 203201</p>
            <p>+91 7017097608</p>
            <p>+91 9667039965</p>
            <p>info@viprealtynet.com</p>
            <p>www.viprealtyworld.com</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 mt-12 pt-6 text-center">
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} VIP Realty. All rights reserved. | Built with{" "}
          <span className="text-pink-500">♥</span> by VIP Realty World
        </p>
      </div>
    </footer>
  );
};

export default Footer;
