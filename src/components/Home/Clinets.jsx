"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Clients = () => {
  const ClientData = [
    {
      id: 1,
      image: "/images/clients/person_1.jpg",
      name: "Roger Scott",
      role: "Marketing Manager",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: 2,
      image: "/images/clients/person_2.jpg",
      name: "Emily Johnson",
      role: "UI/UX Designer",
      text: "A wonderful serenity has taken possession of my soul, like these sweet mornings of spring which I enjoy with my whole heart.",
    },
    {
      id: 3,
      image: "/images/clients/person_3.jpg",
      name: "Michael Brown",
      role: "Software Engineer",
      text: "I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.",
    },
    {
      id: 4,
      image: "/images/clients/person_1.jpg",
      name: "Anna Lee",
      role: "Product Manager",
      text: "When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface.",
    },
    {
      id: 5,
      image: "/images/clients/person_2.jpg",
      name: "David Wilson",
      role: "Entrepreneur",
      text: "Oh, would I could describe these conceptions, could impress upon paper all that is living so full and warm within me.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-pink-500 text-sm font-medium tracking-wider uppercase mb-2">
            Testimonial
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Happy Clients
          </h2>
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
              <div className="bg-white shadow-md rounded-lg p-8 text-center">
                <p className="text-gray-600 mb-8">{client.text}</p>
                <div className="flex items-center justify-center gap-6">
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900">
                      {client.name}
                    </h4>
                    <p className="text-sm text-gray-500">{client.role}</p>
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
