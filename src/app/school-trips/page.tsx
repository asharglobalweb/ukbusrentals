import TransferHero from '../../components/Hero2'
import Breadcrumbs from "../../components/Breadcrumbs";
import TransferDetails from '../../components/TransferDetails'
import TestimonialSection from '../../components/TestimonialSection'
import FinalCta from '../../components/FinalCtaSection'
// import PricingSection from '../../components/PricingSection'

const service = {
    title: 'Safe & Exciting',
    span: 'School Trips',
    subTitle: 'Make every school trip memorable with UK Bus Rentals — safe, comfortable, and expertly managed transport for students and staff.',
    image: '/images/scht4.png'
}

const tripDetail = {
    h2: 'About Our School Trip Service',
    title: 'UK Bus Rentals provides reliable and fun school trip transport across the UK. From museums to theme parks, our modern coaches, DBS-checked drivers, and built-in safety features ensure every journey is smooth and secure.',
    features: [
        'Professional, DBS-approved drivers',
        'Custom itineraries to match school needs',
        'Educational and recreational trip options',
        'Air-conditioned coaches with seat belts',
        'Group discounts and clear pricing',
        'Live tracking and safety updates for peace of mind'
    ],
    images: [
        { image: "/images/scht1.png" },
        { image: "/images/scht2.png" }
    ]
}

export default function SchollTrips() {
    return (
        <>
            <Breadcrumbs
                crumbs={[
                    { name: "Home", href: "/" },
                    { name: "School Trips" },
                ]}
            />
            <TransferHero {...service} />
            <TransferDetails {...tripDetail} />
            {/* <PricingSection /> */}
            <TestimonialSection />
            <FinalCta />
        </>
    );
}
