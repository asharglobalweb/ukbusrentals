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
          Trusted by passengers and partners nationwide
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl">
          At <strong>UK Bus Rentals</strong>, we take pride in offering safe, reliable, and comfortable transport 
          across the UK. From school runs and corporate events to private tours and group travel, 
          thousands of passengers rely on our professional service every year.
        </p>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Large Card */}
          <div className="lg:col-span-2 bg-blue-600 text-white p-10 rounded-2xl shadow-lg">
            <p className="text-sm uppercase tracking-wide opacity-80">
              Passengers Transported
            </p>
            <p className="mt-2 text-5xl font-extrabold">400,000+</p>
            <p className="mt-4 text-lg opacity-90">
              Each year, hundreds of thousands of passengers choose UK Bus Rentals for 
              dependable, comfortable journeys across the country — from local communities 
              to national organisations.
            </p>
          </div>

          {/* Smaller Cards */}
          <div className="flex flex-col gap-6">
            <div className="bg-blue-50 p-8 rounded-2xl shadow-sm">
              <p className="text-2xl font-bold text-blue-600">1,800+</p>
              <p className="mt-1 text-gray-700">Journeys completed annually</p>
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
