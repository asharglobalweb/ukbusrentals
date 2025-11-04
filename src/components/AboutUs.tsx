"use client";

import Image from "next/image";

export default function AboutUs() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left: Fleet or team image */}
                <div className="w-full">
                    <Image
                        src="/images/abtus.png"
                        alt="UK Bus Rentals modern coach fleet"
                        width={1600}               // ✅ higher base resolution
                        height={900}
                        quality={100}              // ✅ full clarity (no compression)
                        priority                   // ✅ faster initial load (above-the-fold image)
                        unoptimized={false}        // ✅ keep Next optimization, full quality
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px" // ✅ correct scaling per screen
                        className="rounded-lg shadow-lg object-cover w-full h-auto"
                    />

                </div>

                {/* Right: About Us text */}
                <div>
                    <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                        About Us
                    </span>
                    <p className="mt-4 text-gray-700">
                        At <strong>UK Bus Rentals</strong>, we are dedicated to providing safe, comfortable,
                        and reliable group transportation across the UK. Our goal is to make every journey
                        effortless by combining professional service, modern vehicles, and transparent pricing.
                    </p>

                    <ul className="mt-6 space-y-3 list-disc list-inside text-gray-700">
                        <li>
                            <strong>Modern Fleet:</strong> From 16-seater minibuses to 50-seat executive coaches,
                            each vehicle in our fleet is clean, comfortable, and equipped with modern amenities
                            such as Wi-Fi and climate control.
                        </li>
                        <li>
                            <strong>Professional Drivers:</strong> Our drivers are fully licensed, background-checked,
                            and trained to deliver a safe, friendly, and punctual travel experience for every passenger.
                        </li>
                        <li>
                            <strong>Custom Travel Solutions:</strong> Whether you need transport for a corporate event,
                            school trip, airport transfer, or private tour, we design travel plans that fit your schedule
                            and requirements.
                        </li>
                        <li>
                            <strong>Transparent Pricing:</strong> We provide clear, all-inclusive quotes with no hidden fees,
                            ensuring you always know exactly what you’re paying for.
                        </li>
                    </ul>

                    <p className="mt-6 text-gray-700">
                        With years of experience in the transport industry, <strong>UK Bus Rentals</strong> has built a
                        trusted reputation for excellence in <strong>coach hire, minibus rental, and group travel </strong>
                        services throughout the UK. Wherever your journey takes you, we make getting there simple, safe,
                        and enjoyable.
                    </p>
                </div>
            </div>
        </section>
    );
}
