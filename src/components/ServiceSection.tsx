"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  {
    key: "corporate",
    title: "Corporate Events",
    description: `Make your corporate travel exceptional with our premium coach hire services. Whether it’s for board meetings, business conferences, or company-wide events, we provide reliable and comfortable transport for your team. Our modern fleet, from luxury minibuses to executive coaches, ensures punctuality, comfort, and a professional image for your business.`,
    image: "/images/corporate21.png",
  },
  {
    key: "school",
    title: "School Trips",
    description: `Turn every educational outing into a safe and enjoyable journey with our trusted school coach hire service. Our child-friendly drivers and modern vehicles ensure comfort and security from start to finish. Whether it’s a museum visit or a field trip, we make group travel simple, reliable, and stress-free for teachers and students.`,
    image: "/images/school21.png",
  },
  {
    key: "shuttles",
    title: "Shuttles",
    description: `Experience seamless travel between airports, hotels, and event venues with our efficient shuttle services. We specialize in providing dependable group transport across the UK, designed for convenience and comfort. Perfect for corporate transfers, large events, and organized travel logistics.`,
    image: "/images/shuttle21.png",
  },
  {
    key: "transfers",
    title: "Transfers",
    description: `Enjoy personalized door-to-door transport with our professional transfer service. From airport pickups to city transfers, we deliver a smooth, comfortable, and timely travel experience. Our modern fleet is perfect for families, business travelers, and anyone seeking premium comfort on the move.`,
    image: "/images/transfer21.png",
  },
  {
    key: "home",
    title: "Home to School",
    description: `Simplify your daily routine with our safe and reliable home-to-school transport service. Our professional drivers ensure punctuality and peace of mind for parents. With well-maintained vehicles and excellent safety standards, we provide a dependable daily school run solution for students across the UK.`,
    image: "/images/home21.png",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(services[0].key);
  const current = services.find((s) => s.key === active)!;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            Our Services
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            UK Coach Hire & Bus Rentals
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover reliable and affordable coach hire, minibus rental, and group transport services across the UK. We make every journey smooth, safe, and comfortable.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {services.map((s) => (
            <button
              key={s.key}
              onClick={() => setActive(s.key)}
              className={`px-6 py-3 rounded-full border-2 transition-all duration-200 font-medium
                ${
                  active === s.key
                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:border-blue-500 hover:shadow-sm"
                }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900">{current.title}</h3>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              {current.description}
            </p>
          </div>

          {/* Right: High-quality Image */}
          <div className="w-full flex justify-center">
            <div className="relative w-full max-w-[700px] h-[450px]">
              <Image
                src={current.image}
                alt={`${current.title} - UK Bus Rentals`}
                fill
                className="object-cover rounded-lg shadow-lg"
                quality={100}                 // ✅ full-resolution rendering
                priority                      // ✅ quick load for visible tab
                unoptimized={false}           // ✅ keeps Next optimization at high quality
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px" // ✅ crisp responsive sizing
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
