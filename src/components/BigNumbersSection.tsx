"use client";

import React from "react";

export default function BigNumbersSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center lg:text-left">
        {/* Top Text */}
        <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
          Our Achievements
        </span>
        <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-gray-900">
          Trusted by passengers across the UK
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl">
          At <strong>UK Bus Rentals</strong>, we are proud to provide safe, reliable, and comfortable transport
          for thousands of customers every week. Our dedication to excellence and customer satisfaction
          has made us one of the most trusted coach and minibus hire providers in the country.
        </p>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Large Card */}
          <div className="lg:col-span-2 bg-blue-600 text-white p-10 rounded-2xl shadow-lg">
            <p className="text-sm uppercase tracking-wide opacity-80">
              Passengers Transported
            </p>
            <p className="mt-2 text-5xl font-extrabold">4,900,000+</p>
            <p className="mt-4 text-lg opacity-90">
              Every year, millions of passengers choose UK Bus Rentals for dependable travel across
              the UK — from schools and businesses to private groups and events.
            </p>
          </div>

          {/* Smaller Cards */}
          <div className="flex flex-col gap-6">
            <div className="bg-blue-50 p-8 rounded-2xl shadow-sm">
              <p className="text-2xl font-bold text-blue-600">3,000+</p>
              <p className="mt-1 text-gray-700">Routes operated each year</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl shadow-sm">
              <p className="text-2xl font-bold text-blue-600">24/7</p>
              <p className="mt-1 text-gray-700">Customer support and live assistance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
