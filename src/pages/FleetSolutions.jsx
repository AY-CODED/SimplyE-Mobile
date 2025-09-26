import { Zap, DollarSign, Briefcase, MapPin } from 'lucide-react';

const FleetSolutions = () => {
    const features = [
        {
            icon: DollarSign,
            title: "Cost Savings & ROI",
            description: "Significantly reduce operating expenses with zero petrol costs and minimal maintenance. Our electric fleets offer faster ROI compared to traditional fuel vehicles.",
        },
        {
            icon: Briefcase,
            title: "Dedicated Fleet Management",
            description: "We provide comprehensive fleet tracking, diagnostics, and management services tailored to logistics, last-mile delivery, and passenger transport needs.",
        },
        {
            icon: Zap,
            title: "Sustainable & Silent Power",
            description: "Switch to a zero-emission fleet, enhancing your brand's commitment to sustainability while operating silently in residential and urban areas.",
        },
        {
            icon: MapPin,
            title: "Local After-Sales Support",
            description: "Dependable after-sales service, warranties, and readily available spare parts (tyres, batteries, motors) through our dedicated local service centers.",
        },
    ];

    return (
        // !!! The crucial ID for scrolling !!!
        <section id="fleet" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                        For Businesses
                    </h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Powering Your Commercial Fleet
                    </p>
                    <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                        Affordable, reliable, and locally-appropriate electric transport solutions designed to maximize efficiency and profitability for your business.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-[1.02] transition duration-300">
                            <feature.icon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition"
                    >
                        Start Your Fleet Transition Today
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FleetSolutions;