import { Zap, Package, Battery, Bike } from "lucide-react";

const ElectricBike = () => {
    const bikes = [
        {
            name: "SEM-DF Electric Bike",
            desc: "Lightweight and efficient, perfect for daily city commutes.",
            img: "/SEM-DF-Electric-Bike.webp",
            price: "₦2,014,890",
            icon: <Bike className="w-6 h-6 text-blue-500" />,
        },
        {
            name: "SE-CT Electric Bike",
            desc: "High-speed performance bike with long range for adventurous rides.",
            img: "/SE-CT-Electric-Bike.webp",
            price: "₦2,250,000",
            icon: <Zap className="w-6 h-6 text-yellow-500" />,
        },
        {
            name: "SE-CH Bike",
            desc: "Designed for delivery and heavy loads with extra storage capacity.",
            img: "/SE-CH-Bike.png",
            price: "₦2,215,000",
            icon: <Package className="w-6 h-6 text-green-500" />,
        },
        {
            name: "SE-WX",
            desc: "Smart and sustainable with long-range performance.",
            img: "/SE-WX.jpg",
            price: "₦2,126,750",
            icon: <Zap className="w-6 h-6 text-red-500" />,
        },
        {
            name: "SEM-ZT Electric Bike",
            desc: "Durable, stylish, and power-efficient for your everyday needs.",
            img: "/SEM-ZT-Electric-Bike.webp",
            price: "₦1,796,350",
            icon: <Battery className="w-6 h-6 text-purple-500" />,
        },
    ];

    return (
        <div className="px-6 md:px-16 lg:px-24 py-20 bg-gradient-to-b from-gray-50 to-gray-100 pt-32">
            {/* Section Heading */}
            <div className="text-center mb-14">
                <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
                    Electric Bikes
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                    Explore our stylish, eco-friendly electric bikes 🚲. Whether for
                    commuting, delivery, or adventure, there’s a perfect ride waiting for
                    you.
                </p>
            </div>

            {/* Bikes Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {bikes.map((bike, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
                    >
                        {/* Bike Image */}
                        <div className="relative overflow-hidden h-56 bg-gray-50">
                            <img
                                src={bike.img}
                                alt={bike.name}
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm">
                                {bike.icon}
                            </div>
                        </div>

                        {/* Bike Info */}
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">
                                {bike.name}
                            </h2>
                            <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                                {bike.desc}
                            </p>

                            <div className="flex items-center justify-between">
                                <span className="text-blue-700 font-bold text-lg">
                                    {bike.price}
                                </span>
                                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-xl shadow-md hover:bg-blue-700 transition">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ElectricBike;
