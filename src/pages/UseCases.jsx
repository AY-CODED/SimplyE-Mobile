import { Package, Bike, Bus, Home } from 'lucide-react';

const UseCases = () => {
    const cases = [
        {
            icon: Package,
            title: "Last-Mile Delivery & Logistics",
            description: "Fast, quiet, and low-cost transport for couriers and food delivery platforms. Electric Bikes and Tricycles (Keke) are ideal for dense urban areas.",
            products: ["Electric Bikes", "Electric Tricycles", "Electric Truck"],
        },
        {
            icon: Bus,
            title: "Intra-City Passenger Transport",
            description: "Perfect for taxi services and private hire. The Electric Tricycle (Keke/Maruwa) offers a sustainable and economical alternative to traditional taxis for short routes.",
            products: ["Electric Tricycles", "Electric Cars"],
        },
        {
            icon: Home,
            title: "Estate & Community Mobility",
            description: "Exclusive programs with residential estates for clean, silent intra-estate transport for residents and staff, as suggested in our profile.",
            products: ["Electric Bikes", "Electric Tricycles", "Electric Cars"],
        },
        {
            icon: Bike,
            title: "Personal & Commuter Travel",
            description: "Affordable commuting for students and workers looking for reliable, zero-emission personal transport across metropolitan areas.",
            products: ["Electric Bikes", "Electric Cars"],
        },
    ];

    return (
        // !!! The crucial ID for scrolling !!!
        <section id="use-cases" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                        Where Our Vehicles Go
                    </h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Real-World Applications of Simply E-Mobiles
                    </p>
                    <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                        Our electric vehicles are built to thrive in Nigerian and West African metropolitan environments, delivering efficiency across multiple sectors.
                    </p>
                </div>

                {/* Use Cases Grid */}
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {cases.map((useCase, index) => (
                        <div key={index} className="border border-gray-200 p-6 rounded-lg shadow-md">
                            <useCase.icon className="h-8 w-8 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {useCase.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {useCase.description}
                            </p>

                            {/* Products relevant to the case */}
                            <div className="mt-3">
                                <p className="text-sm font-semibold text-gray-700">Best for:</p>
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {useCase.products.map((product, pIndex) => (
                                        <span key={pIndex} className="text-xs font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                                            {product}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default UseCases;