"use client";

import Image from "next/image";
import {
  ShieldCheck,
  User,
  Clock,
  Headset
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      Icon: ShieldCheck,
      title: "Best Price Guarantee",
      desc: "With UK Bus Rentals, you always get the best value. If you find a lower quote for the same journey, we will match it and make sure you travel for less.",
    },
    {
      Icon: User,
      title: "Experienced Drivers",
      desc: "Our fully licensed and friendly drivers make every trip safe, comfortable, and enjoyable from start to finish.",
    },
    {
      Icon: Clock,
      title: "Always Available",
      desc: "Whether it is an early morning airport transfer or a late evening event, our fleet operates day and night to fit your schedule.",
    },
    {
      Icon: Headset,
      title: "24/7 Support",
      desc: "Our support team is ready whenever you need help with bookings, updates, or travel assistance.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Bus Image */}
        <div className="flex justify-center lg:justify-end relative">
          <Image
            src="/images/bus2.png"
            alt="Luxury coach from UK Bus Rentals"
            width={600}
            height={400}
            className="object-cover z-10"
          />
          <Image
            src="/images/Vector.png"
            alt="Decorative background graphic"
            width={600}
            height={400}
            className="object-cover absolute"
          />
        </div>

        {/* Right: Text & Features */}
        <div className="space-y-6">
          <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            Why Choose Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Why UK Bus Rentals
          </h2>
          <p className="text-gray-700">
            Choose <strong>UK Bus Rentals</strong> for reliable service, professional drivers, and complete comfort. We make group travel easy and enjoyable anywhere in the UK.
          </p>
          <div className="space-y-4">
            {features.map(({ Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {title}
                  </h3>
                  <p className="mt-1 text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
