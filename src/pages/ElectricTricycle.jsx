import { Package, Leaf, Users } from "lucide-react";
import { Link } from "react-router-dom";

const ElectricTricycle = () => {
  const tricycles = [
    {
      name: "SEM-E1 Electric Tricycle",
      desc: "Compact and efficient, perfect for urban deliveries.",
      img: "/M5.jpg",
      price: "₦2,345,000",
      icon: <Package className="w-6 h-6 text-blue-500" />,
      path: "/Seme1",
    },
    {
      name: "SE-EK07 Electric Tricycle",
      desc: "Heavy-duty design built for carrying larger loads with ease.",
      img: "/M2.jpg",
      price: "₦2,750,000",
      icon: <Users className="w-6 h-6 text-green-500" />,
      path: "/Seek07",
    },
    {
      name: "SE-EK02 Electric Tricycle",
      desc: "Spacious cargo hold for businesses and logistics needs.",
      img: "/SE-Cargo-Tricycle.webp",
      price: "₦3,050,000",
      icon: <Leaf className="w-6 h-6 text-emerald-500" />,
      path: "/Seek02",
    },
    {
      name: "SE-EK03 Electric Tricycle",
      desc: "Spacious cargo hold for businesses and logistics needs.",
      img: "/M4.jpg",
      price: "₦3,050,000",
      icon: <Leaf className="w-6 h-6 text-emerald-500" />,
      path: "/Seek03",
    },
  ];

  return (
    <div className="px-6 md:px-16 lg:px-24 py-16 bg-gradient-to-b pt-32 from-gray-50 to-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Electric Tricycles
      </h1>
      <p className="text-gray-700 mb-12 max-w-2xl">
        Explore our range of electric tricycles 🚜 designed for stability,
        comfort, and sustainable transport. Perfect for businesses, deliveries,
        and personal mobility.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {tricycles.map((trike, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition transform overflow-hidden flex flex-col"
          >
            <img
              src={trike.img}
              alt={trike.name}
              className="w-full h-56 object-contain bg-gray-100"
            />
            <div className="p-6 flex-1 flex flex-col">
              {/* Icon + Title */}
              <div className="flex items-center gap-2 mb-3">
                {trike.icon}
                <h2 className="text-xl font-semibold text-gray-800">
                  {trike.name}
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-600 flex-1">{trike.desc}</p>

              {/* Price + Button beside each other */}
              <div className="mt-4 flex items-center justify-between">
                <span className="inline-block bg-blue-100 text-blue-600 font-semibold px-4 py-2 rounded-full text-sm">
                  {trike.price}
                </span>

                <Link to={trike.path}>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm">
                    View More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElectricTricycle;
