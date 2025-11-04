// components/PartnersSwiper.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from 'next/image';



const partners = [
  { name: "Partner 1", logo: "/images/partner/Alpadia-language-schools-logo-banner.avif" },
  { name: "Partner 2", logo: "/images/partner/Apple-logo-banner.avif" },
   { name: "Partner 9", logo: "/images/partner/PGA-tour-logo-banner.avif" },
  { name: "Partner 3", logo: "/images/partner/CeX-logo-banner.avif" },
   { name: "Partner 4", logo: "/images/partner/Chigwell-school-logo-banner.avif" },
   { name: "Partner 5", logo: "/images/partner/Gala-bingo-logo-banner.avif" },
  { name: "Partner 6", logo: "/images/partner/ITV-logo-banner.avif" },
  { name: "Partner 7", logo: "/images/partner/Nintendo-logo-banner.avif" },
   { name: "Partner 8", logo: "/images/partner/North-london-collegiate-school-logo-banner.avif" },
  
   { name: "Partner 10", logo: "/images/partner/Sky-group-logo-banner.avif" },
   { name: "Partner 11", logo: "/images/partner/Wychwood-school-logo-banner.avif" },
];

export default function PartnersSwiper() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="inline-block bg-blue-100 text-blue-600 px-3 py-2 rounded-full text-sm font-semibold">
          We’ve partnered with
        </h3>
      
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={4}
          loop
          speed={8000}              // 8 segundos de ponta a ponta
          autoplay={{
            delay: 0,               // sem pausa entre loops
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 3 },
            640: { slidesPerView: 5 },
            1024: { slidesPerView: 8 },
          }}
        >
          {partners.map(({ name, logo }) => (
            <SwiperSlide key={name}>
              <div className="flex items-center justify-center max-h-[96px]">

                <Image
                                                src={logo}
                                                alt={name}
                                                fill
                                                className="!h-[96px] !relative !w-[auto]"
                                            />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
       
      </div>
    </section>
  );
}
