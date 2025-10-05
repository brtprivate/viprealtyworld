"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Clients = () => {
  // SVG Avatar Component for Indian-looking profiles
  const IndianAvatar = ({ gender, skinTone, hairStyle }) => (
    <svg width="60" height="60" viewBox="0 0 60 60" className="rounded-full">
      {/* Background circle */}
      <circle cx="30" cy="30" r="30" fill="#f3f4f6" />

      {/* Face */}
      <circle cx="30" cy="25" r="12" fill={skinTone} />

      {/* Hair */}
      <path
        d={hairStyle}
        fill="#2d1b14"
      />

      {/* Eyes */}
      <circle cx="26" cy="22" r="1.5" fill="#000" />
      <circle cx="34" cy="22" r="1.5" fill="#000" />

      {/* Nose */}
      <path d="M30 24 L29 26 L31 26 Z" fill={skinTone} stroke="#00000020" strokeWidth="0.5" />

      {/* Mouth */}
      <path d="M28 28 Q30 30 32 28" stroke="#000" strokeWidth="1" fill="none" />

      {/* Traditional elements */}
      {gender === 'female' && (
        <>
          {/* Bindi */}
          <circle cx="30" cy="19" r="1" fill="#dc2626" />
          {/* Earrings */}
          <circle cx="22" cy="26" r="2" fill="#fbbf24" />
          <circle cx="38" cy="26" r="2" fill="#fbbf24" />
        </>
      )}

      {/* Clothing */}
      <path
        d="M18 45 Q30 40 42 45 L42 60 L18 60 Z"
        fill={gender === 'female' ? "#ec4899" : "#3b82f6"}
      />
    </svg>
  );

  const ClientData = [
    {
      id: 1,
      avatar: <IndianAvatar gender="male" skinTone="#d4a574" hairStyle="M18 18 Q30 12 42 18 L40 25 Q30 20 20 25 Z" />,
      name: "Rajesh Sharma",
      role: "Software Engineer",
      text: "VIP Realty helped us find our dream home in Greater Noida. Their team was professional, transparent, and guided us through every step. Highly recommended!",
    },
    {
      id: 2,
      avatar: <IndianAvatar gender="female" skinTone="#c49574" hairStyle="M18 15 Q30 10 42 15 L42 28 Q30 25 18 28 Z" />,
      name: "Priya Gupta",
      role: "Marketing Manager",
      text: "Excellent service from VIP Realty! They found us the perfect 3BHK apartment within our budget. The documentation process was smooth and hassle-free.",
    },
    {
      id: 3,
      avatar: <IndianAvatar gender="male" skinTone="#b8956f" hairStyle="M20 16 Q30 14 40 16 L38 26 Q30 22 22 26 Z" />,
      name: "Amit Kumar",
      role: "Business Owner",
      text: "I bought a commercial property through VIP Realty for my business. Their market knowledge and negotiation skills saved me lakhs. Truly professional team!",
    },
    {
      id: 4,
      avatar: <IndianAvatar gender="female" skinTone="#d4a574" hairStyle="M16 14 Q30 8 44 14 L44 30 Q30 26 16 30 Z" />,
      name: "Sunita Patel",
      role: "Doctor",
      text: "VIP Realty made our property investment journey seamless. They provided complete legal verification and helped us get the best deal in Gaur Yamuna City.",
    },
    {
      id: 5,
      avatar: <IndianAvatar gender="male" skinTone="#c49574" hairStyle="M19 17 Q30 13 41 17 L39 24 Q30 21 21 24 Z" />,
      name: "Vikash Singh",
      role: "IT Professional",
      text: "Outstanding experience with VIP Realty! They understood our requirements perfectly and showed us properties that matched our needs. Great team to work with!",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-pink-500 text-sm font-medium tracking-wider uppercase mb-4">
            CLIENT TESTIMONIALS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say About Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Real experiences from real people who found their dream properties with VIP Realty
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          // pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
        >
          {ClientData.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>

                <p className="text-gray-600 mb-8 italic leading-relaxed">&quot;{client.text}&quot;</p>

                <div className="flex items-center justify-center gap-4">
                  <div className="flex-shrink-0">
                    {client.avatar}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-gray-900 text-lg">
                      {client.name}
                    </h4>
                    <p className="text-sm text-pink-500 font-medium">{client.role}</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
