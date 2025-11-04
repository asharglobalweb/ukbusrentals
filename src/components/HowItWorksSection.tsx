"use client";

import { MapPin, Calendar, Bus } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      Icon: MapPin,
      title: "Choose route",
      desc: "Select your pickup and drop-off locations to plan your journey.",
    },
    {
      Icon: Calendar,
      title: "Pick a date & time",
      desc: "Choose when you want to travel—one-way or round trip.",
    },
    {
      Icon: Bus,
      title: "Book your coach",
      desc: "Confirm your ride and we’ll dispatch your executive bus.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
          How it works
        </span>
        <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-gray-900">
          Rent with our simple 3-step process
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map(({ Icon, title, desc }) => (
            <div key={title} className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <Icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
