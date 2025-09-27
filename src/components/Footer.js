import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Uptown Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-900">Uptown</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            Far far away, behind the word mountains, far from the countries.
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

        {/* Community Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-900">Community</h3>
          <ul className="space-y-2">
            {["Search Properties", "For Agents", "Reviews", "FAQs"].map(
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

        {/* About Us Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-900">About Us</h3>
          <ul className="space-y-2">
            {["Our Story", "Meet the Team", "Careers"].map((item, idx) => (
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

        {/* Company Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-900">Company</h3>
          <ul className="space-y-2">
            {["About Us", "Press", "Contact", "Careers"].map((item, idx) => (
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
            Have a Question?
          </h3>
          <div className="text-gray-600 text-sm space-y-2">
            <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            <p>+2 392 3929 210</p>
            <p>info@yourdomain.com</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 mt-12 pt-6 text-center">
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Uptown. All rights reserved. | Built with{" "}
          <span className="text-pink-500">♥</span> by Viprealtyworld
        </p>
      </div>
    </footer>
  );
};

export default Footer;
