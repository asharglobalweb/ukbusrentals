"use client";
import { Star } from "lucide-react";
import { useState } from 'react';

export default function TestimonialSection() {
  const testimonials = [
    // Passengers testimonials
    {
      key: 'passengers',
      name: "Amanda Roberts",
      role: "Regular Commuter",
      avatar: "avatar1",
      message:
        "I travel from Manchester to London weekly for work. UK Bus Rentals is always punctual, even during peak hours. The comfortable seats and reliable Wi-Fi make the journey productive.",
    },
    {
      key: 'passengers',
      name: "James Wilson",
      role: "University Student",
      avatar: "avatar2",
      message:
        "As a student travelling between home and campus, UK Bus Rentals has been affordable and reliable. The drivers are helpful with luggage and always on schedule.",
    },
    {
      key: 'passengers',
      name: "Sarah Patel",
      role: "Family Traveller",
      avatar: "avatar3",
      message:
        "We used UK Bus Rentals for our family trip to the Lake District. The coach was spotless, the driver was lovely with the children, and we arrived relaxed and on time.",
    },
    // Corporate testimonials
    {
      key: 'corporate',
      name: "David Campbell",
      role: "Office Manager",
      avatar: "avatar4",
      message:
        "We've used UK Bus Rentals for our quarterly team building trips for three years. Their professional service and flexible scheduling make corporate travel effortless.",
    },
    {
      key: 'corporate',
      name: "Rachel Green",
      role: "HR Director",
      avatar: "avatar5",
      message:
        "When we transported our entire staff from London to our Edinburgh conference, UK Bus Rentals handled everything flawlessly. Excellent communication throughout.",
    },
    {
      key: 'corporate',
      name: "Michael O'Connor",
      role: "Event Coordinator",
      avatar: "avatar6",
      message:
        "The executive coaches we hired for our client summit in Birmingham were impeccable. Several international guests commented on the quality of the transport.",
    },
    // School testimonials
    {
      key: 'school',
      name: "Mrs. Jennifer Brown",
      role: "Year 6 Teacher",
      avatar: "avatar7",
      message:
        "Our school trip to the Natural History Museum was stress-free thanks to UK Bus Rentals. The driver was DBS checked and wonderful with the children.",
    },
    {
      key: 'school',
      name: "Mr. Thomas Evans",
      role: "Sports Director",
      avatar: "avatar8",
      message:
        "We rely on UK Bus Rentals for all our away matches. They understand school schedules and the importance of getting our teams to venues on time.",
    },
    {
      key: 'school',
      name: "Dr. Emily Watson",
      role: "School Principal",
      avatar: "avatar9",
      message:
        "Safety is paramount for our school, and UK Bus Rentals meets all our safeguarding requirements. Parents appreciate the reliable service for school journeys.",
    },
  ];

  const categories = ['passengers', 'corporate', 'school'];
  const [active, setActive] = useState(categories[0]);
  const filtered = testimonials.filter(t => t.key === active);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <h3 className="inline-block bg-blue-100 text-blue-600 px-3 py-2 rounded-full text-sm font-semibold ">
            Client Testimonials
          </h3>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
        </div>
        {/* Tabs */}
        <div className="mb-12 flex justify-center gap-4 flex-wrap">
          {categories.map(key => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={
                `px-5 py-2 rounded-full transition-colors duration-200 focus:outline-none border 
                ${active === key
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-600 border-gray-300 hover:bg-blue-50 hover:text-blue-600'}`
              }
            >
              {key === 'passengers'
                ? 'From passengers'
                : key === 'corporate'
                  ? 'From companies'
                  : 'From schools'}
            </button>
          ))}
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-white rounded-xl shadow-md p-6 text-left h-full"
            >
              <p className="text-gray-700 mb-6 flex-grow">{t.message}</p>
              {/* Stars */}
              <div className="flex mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                    />
                  ))}
              </div>
              {/* Avatar & Name */}
              <div className="flex items-center gap-4 mt-auto">
                {/* <img
                  src={`/images/${t.avatar}.png`}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                /> */}
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}