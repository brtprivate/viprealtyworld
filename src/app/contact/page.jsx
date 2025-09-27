import Hero from "@/components/common/Hero";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero title="Contact Us" subtitle="Get in touch with us today" />

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Contact Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-center border-b border-gray-200 pb-10 mb-10">
          <div className="px-6">
            <div className="text-2xl mb-2">📍</div>
            <h3 className="font-semibold text-gray-900">Address</h3>
            <p className="text-gray-600 text-sm">
              198 West 21st Street, Suite 721 <br /> New York NY 10016
            </p>
          </div>
          <div className="px-6 border-t md:border-t-0 md:border-l md:border-r border-gray-200">
            <div className="text-2xl mb-2">📞</div>
            <h3 className="font-semibold text-gray-900">Phone</h3>
            <p className="text-gray-600 text-sm">+1 235 2355 98</p>
          </div>
          <div className="px-6">
            <div className="text-2xl mb-2">📧</div>
            <h3 className="font-semibold text-gray-900">Email</h3>
            <p className="text-gray-600 text-sm">info@yoursite.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-center text-lg text-gray-700 mb-6">
            If you got any questions <br />
            please do not hesitate to send us a message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-400"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 h-32 placeholder-gray-400"
            ></textarea>
            <button
              type="button"
              className="w-full bg-pink-500 text-white p-3 rounded-md hover:bg-pink-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map Embed */}
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.508308454!2d77.06889915374026!3d28.527582004654554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2b3b6c9f6e5%3A0xb6f5e9b0a3c57f0!2sDelhi!5e0!3m2!1sen!2sin!4v1695829086000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
