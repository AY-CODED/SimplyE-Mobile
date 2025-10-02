import { Car, BatteryCharging, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const ElectricCar = () => {
  const cars = [
    {
      name: "BYD Qin L 2024 DM-i120km",
      desc: "Luxury electric sedan with premium features and long range.",
      img: "/BYD_HAN.jpg",
      price: "$28,994",
      icon: <Car className="w-6 h-6 text-blue-500" />,
      path: "/BydInfo",
    },
    {
      name: "BYD Seagull 2023",
      desc: "High-performance EV with smart tech and efficient range.",
      img: "/Byd.webp",
      price: "$22,525",
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      path: "/Seagull",
    },
    {
      name: "Song PLUS DM-i110km",
      desc: "Stylish crossover EV built for families and long-distance travel.",
      img: "/Song.jpeg",
      price: "$40,207",
      icon: <BatteryCharging className="w-6 h-6 text-green-500" />,
      path: "/Songplus",
    },
    {
      name: "Seal 2023 Champion 550km",
      desc: "Premium sedan with outstanding range and performance.",
      img: "/Seal.jpeg",
      price: "$49,975",
      icon: <BatteryCharging className="w-6 h-6 text-green-500" />,
      path: "/Seal",
    },
    {
      name: "Tang L",
      desc: "Luxury SUV designed for comfort and long trips.",
      img: "/Tangl.jpeg",
      price: "$49,125",
      icon: <BatteryCharging className="w-6 h-6 text-green-500" />,
      path: "/Tangl",
    },
    {
      name: "Li One",
      desc: "Family-friendly EV with modern technology integration.",
      img: "/Li.jpeg",
      price: "$41,877",
      icon: <BatteryCharging className="w-6 h-6 text-green-500" />,
      path: "/cars/li-one",
    },
    {
      name: "Li L7",
      desc: "Stylish crossover EV built for families and long-distance travel.",
      img: "/L7.jpeg",
      price: "$68,919",
      icon: <BatteryCharging className="w-6 h-6 text-green-500" />,
      path: "/cars/li-l7",
    },
    {
      name: "Li L8",
      desc: "Spacious SUV EV with cutting-edge features.",
      img: "/L8.jpeg",
      price: "$74,132",
      icon: <BatteryCharging className="w-6 h-6 text-green-500" />,
      path: "/cars/li-l8",
    },
    {
      name: "Li L9",
      desc: "Flagship luxury EV SUV with premium comfort.",
      img: "/L9.jpeg",
      price: "$91,800",
      icon: <BatteryCharging className="w-6 h-6 text-green-500" />,
      path: "/cars/li-l9",
    },
    {
      name: "NIO EC6",
      desc: "Performance-oriented SUV with sleek styling.",
      img: "/Nio.jpeg",
      price: "$85,700",
      icon: <BatteryCharging className="w-6 h-6 text-green-500" />,
      path: "/cars/nio-ec6",
    },
    {
      name: "NIO ES6",
      desc: "Mid-size SUV EV with comfort and versatility.",
      img: "/ES6.jpeg",
      price: "$80,816",
      icon: <BatteryCharging className="w-6 h-6 text-green-500" />,
      path: "/cars/nio-es6",
    },
    {
      name: "NIO ES8",
      desc: "Premium luxury EV SUV with advanced features.",
      img: "/ES8.jpg",
      price: "$106,288",
      icon: <BatteryCharging className="w-6 h-6 text-green-500" />,
      path: "/cars/nio-es8",
    },
    {
      name: "GAC AION Y",
      desc: "Affordable EV designed for city lifestyle.",
      img: "/GAC.jpeg",
      price: "$38,413",
      icon: <BatteryCharging className="w-6 h-6 text-green-500" />,
      path: "/cars/gac-aion-y",
    },
    {
      name: "IYNK & CO 08",
      desc: "Crossover EV with futuristic styling.",
      img: "/L8.jpeg",
      price: "$48,950",
      icon: <BatteryCharging className="w-6 h-6 text-green-500" />,
      path: "/cars/iynk-08",
    },
    {
      name: "ICAR03",
      desc: "Compact EV with smart city features.",
      img: "/ICAR.jpeg",
      price: "$52,418",
      icon: <BatteryCharging className="w-6 h-6 text-green-500" />,
      path: "/cars/icar03",
    },
    {
      name: "Geometry A",
      desc: "Budget-friendly EV sedan with efficient range.",
      img: "/GA.jpeg",
      price: "$21,960",
      icon: <BatteryCharging className="w-6 h-6 text-green-500" />,
      path: "/cars/geometry-a",
    },
    {
      name: "Galaxy L7",
      desc: "Luxury EV crossover with stylish looks.",
      img: "/GL7.jpeg",
      price: "$42,594",
      icon: <BatteryCharging className="w-6 h-6 text-green-500" />,
      path: "/cars/galaxy-l7",
    },
    {
      name: "AITO M8",
      desc: "Luxury MPV with spacious design and range.",
      img: "/AltoM8.jpeg",
      price: "$90,863",
      icon: <BatteryCharging className="w-6 h-6 text-green-500" />,
      path: "/cars/aito-m8",
    },
    {
      name: "G6",
      desc: "Compact EV SUV with modern features.",
      img: "/G6.jpeg",
      price: "$52,418",
      icon: <BatteryCharging className="w-6 h-6 text-green-500" />,
      path: "/cars/g6",
    },
    {
      name: "BINGO",
      desc: "Fun and compact EV for urban driving.",
      img: "/L8.jpeg",
      price: "$23,875",
      icon: <BatteryCharging className="w-6 h-6 text-green-500" />,
      path: "/cars/bingo",
    },
    {
      name: "ZEEKR 009",
      desc: "Luxury MPV EV with futuristic styling.",
      img: "/Z009.webp",
      price: "$99,463",
      icon: <BatteryCharging className="w-6 h-6 text-green-500" />,
      path: "/cars/zeekr-009",
    },
    {
      name: "ZEEKR C11",
      desc: "Premium crossover EV with strong performance.",
      img: "/ZEROC11.jpeg",
      price: "$40,163",
      icon: <BatteryCharging className="w-6 h-6 text-green-500" />,
      path: "/cars/zeekr-c11",
    },
    {
      name: "ZEEKR 10",
      desc: "Stylish EV with balanced comfort and performance.",
      img: "/ZEROC10.jpeg",
      price: "$41,225",
      icon: <BatteryCharging className="w-6 h-6 text-green-500" />,
      path: "/cars/zeekr-10",
    },
    {
      name: "MODEL Y",
      desc: "Tesla’s popular EV SUV with excellent range.",
      img: "/ModelY.jpeg",
      price: "$63,239",
      icon: <BatteryCharging className="w-6 h-6 text-green-500" />,
      path: "/cars/model-y",
    },
    {
      name: "ALTO M9",
      desc: "High-end EV with luxury interiors.",
      img: "/AltoM9.jpeg",
      price: "$94,363",
      icon: <BatteryCharging className="w-6 h-6 text-green-500" />,
      path: "/cars/alto-m9",
    },
    {
      name: "ALTO M7",
      desc: "Spacious EV SUV for families.",
      img: "/AltoM7.jpeg",
      price: "$68,163",
      icon: <BatteryCharging className="w-6 h-6 text-green-500" />,
      path: "/cars/alto-m7",
    },
    {
      name: "ALTO M5",
      desc: "Compact luxury EV with modern styling.",
      img: "/AltoM5.jpeg",
      price: "$61,144",
      icon: <BatteryCharging className="w-6 h-6 text-green-500" />,
      path: "/cars/alto-m5",
    },
  ];

  return (
    <div className="px-6 md:px-16 lg:px-24 py-20 bg-gradient-to-b from-gray-50 to-gray-100 pt-32">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
          Electric Cars
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Discover our curated selection of electric cars that combine
          performance, sustainability, and cutting-edge technology. Perfect for
          both city and highway driving.
        </p>
      </div>

      {/* Cars Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition transform overflow-hidden flex flex-col"
          >
            <img
              src={car.img}
              alt={car.name}
              className="w-full h-64 object-cover bg-gray-100"
            />

            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                {car.icon}
                <h2 className="text-xl font-semibold text-gray-900 line-clamp-1">
                  {car.name}
                </h2>
              </div>

              <p className="text-gray-600 flex-1 text-sm">{car.desc}</p>

              <div className="mt-4 flex justify-between items-center">
                <span className="inline-block bg-blue-100 text-blue-600 font-semibold px-4 py-2 rounded-full text-sm">
                  {car.price}
                </span>
                <Link
                  to={car.path}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-xl shadow-md hover:bg-blue-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElectricCar;
