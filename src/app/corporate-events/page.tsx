import ServicesHero from '../../components/Hero2'
import Breadcrumbs from "../../components/Breadcrumbs";
import TransferDetails from '../../components/TransferDetails'
import TestimonialSection from '../../components/TestimonialSection'
import FinalCta from '../../components/FinalCtaSection'
// import PricingSection from '../../components/PricingSection'

const corporate = {
  title: 'Executive',
  span: 'Corporate Events',
  subTitle: 'Travel in style with UK Bus Rentals — professional, on-time corporate shuttles for meetings, conferences, and business events across the UK.',
  image: '/images/corporate3.png',
};

const corporateDetail = {
  h2: 'About Our Corporate Transport Service',
  title: 'UK Bus Rentals delivers seamless executive transport for corporate events, client meetings, and business travel. Enjoy modern coaches, professional chauffeurs, and a punctual, stress-free experience every time.',
  features: [
    'Dedicated account manager for event planning',
    'On-board Wi-Fi and charging ports',
    'Live tracking & real-time updates',
    'Uniformed, professional drivers',
    'Optional branded vehicles for your company',
    'Clear, fixed pricing with no hidden costs'
  ],
  images: [
    { image: '/images/corporate2.png' },
    { image: '/images/corporate1.png' }
  ]
};

export default function Corporate() {
    return (
        <>
            <Breadcrumbs
                crumbs={[
                    { name: "Home", href: "/" },
                    { name: "Corporate Events" },
                ]}
            />
            <ServicesHero  {...corporate} />
            <TransferDetails {...corporateDetail} />
            {/* <PricingSection /> */}
            <TestimonialSection />
            <FinalCta />
        </>
    );
}
