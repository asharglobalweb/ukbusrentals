import ServicesHero from '../../components/Hero2'
import Breadcrumbs from "../../components/Breadcrumbs";
import TransferDetails from '../../components/TransferDetails'
import TestimonialSection from '../../components/TestimonialSection'
import FinalCta from '../../components/FinalCtaSection'
// import PricingSection from '../../components/PricingSection'

const shuttle = {
  title: 'Reliable',
  span: 'Shuttle Services',
  subTitle: 'Experience seamless travel with UK Bus Rentals — efficient, comfortable, and dependable shuttle solutions across the UK for groups of all sizes.',
  image: '/images/shuttle3.png',
};

const shuttleDetail = {
  h2: 'About Our Shuttle Service',
  title: 'UK Bus Rentals provides smooth, scheduled shuttles between airports, hotels, and event venues. Our modern fleet and professional drivers ensure every transfer runs on time — perfect for corporate groups, events, and organized travel logistics.',
  features: [
    'Scheduled and on-demand shuttle options',
    'Modern, air-conditioned coaches',
    'Professional, uniformed drivers',
    'Real-time tracking & updates',
    'Custom routes for airports, hotels, and events',
    'Competitive group pricing with no hidden fees'
  ],
  images: [
    { image: '/images/shuttle1.png' },
    { image: '/images/shuttle2.png' }
  ]
};

export default function Shuttles() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Shuttles" },
        ]}
      />
      <ServicesHero {...shuttle} />
      <TransferDetails {...shuttleDetail} />
      {/* <PricingSection /> */}
      <TestimonialSection />
      <FinalCta />
    </>
  );
}
