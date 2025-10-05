import Image from "next/image";
import { Bed, Bath, Square, Heart } from "lucide-react";

const Offer = () => {
  const offers = [
    {
      id: 1,
      image: "/images/prop/a.png",
      price: "₹85 Lakh",
      originalPrice: "₹95 Lakh",
      beds: 3,
      baths: 2,
      sqft: "1,200 sqft",
      title: "Luxury Villa",
      location: "Greater Noida",
    },
    {
      id: 2,
      image: "/images/prop/b.png",
      price: "₹45 Lakh",
      originalPrice: "₹50 Lakh",
      beds: 2,
      baths: 2,
      sqft: "900 sqft",
      title: "Premium Apartment",
      location: "Gaur Yamuna City",
    },
    {
      id: 3,
      image: "/images/prop/c.png",
      price: "₹25 Lakh",
      originalPrice: "₹30 Lakh",
      beds: 1,
      baths: 1,
      sqft: "600 sqft",
      title: "Studio Apartment",
      location: "Greater Noida West",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-pink-500 text-sm font-medium tracking-wider uppercase mb-4">
            PROPERTY SOLUTIONS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find Your Perfect Property with VIP Realty
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We offer villas, rental flats, apartments, luxury apartments, and agricultural land in Delhi NCR. Our team ensures smooth transactions from start to finish.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Heart Icon */}
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-pink-50 transition-colors">
                  <Heart className="w-5 h-5 text-gray-600 hover:text-pink-500" />
                </button>

                {/* Price Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white px-3 py-1 rounded-lg shadow-md">
                    <span className="text-lg font-bold text-gray-900">
                      {offer.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through ml-2">
                      {offer.originalPrice}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Property Details */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{offer.beds}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>{offer.baths}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="w-4 h-4" />
                    <span>{offer.sqft}</span>
                  </div>
                </div>

                {/* Title and Location */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {offer.title}
                </h3>
                <p className="text-gray-600 text-sm">{offer.location}</p>

                {/* View Details Button */}
                <button className="w-full mt-4 bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white py-3 px-8 rounded-lg font-semibold transition-all duration-300">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offer;
