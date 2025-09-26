import { useState, useEffect } from "react";

const cars = [
  {
    id: 1,
    title: "Get your Electric Vehicles now",
    desc: "Discover our premium range of electric cars, bikes, and tricycles. Drive into the future of mobility today.",
    img: "/landingcar.png",
    watermark: "Cars",
  },
  {
    id: 2,
    title: "Ride Smart with Our Bikes",
    desc: "Eco-friendly, cost-effective, and perfect for the city. Explore our electric bikes today.",
    img: "/SE-CH-Bike.png",
    watermark: "Bikes",
  },
  {
    id: 3,
    title: "Future of Mobility: Tricycles",
    desc: "Safe, spacious, and sustainable. Check out our latest electric tricycles.",
    img: "/Tricycle.png",
    watermark: "Tricycles",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 10s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cars.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20 bg-blue-100">
      {/* Dynamic Watermark text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        text-[6rem] sm:text-[10rem] md:text-[15rem] lg:text-[20rem] 
        text-slate-400/40 tracking-tight z-0 select-none"
      >
        {cars[current].watermark}
      </div>

      {/* Slides wrapper */}
      <div className="relative z-20 w-full h-full overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            width: `${cars.length * 100}%`,
            transform: `translateX(-${current * (100 / cars.length)}%)`,
          }}
        >
          {cars.map((car) => (
            <div
              key={car.id}
              className="w-full h-full flex flex-col md:flex-row items-center 
                justify-center md:justify-between gap-8 md:gap-20 
                px-6 sm:px-10 md:px-16 flex-shrink-0"
              style={{ width: `${100 / cars.length}%` }}
            >
              {/* Left section: text */}
              <div className="max-w-xl space-y-4 md:space-y-6 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-gray-900">
                  {car.title.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="text-blue-600">
                    {car.title.split(" ").slice(-1)}
                  </span>
                </h1>
                <p className="text-gray-600 text-base sm:text-lg">
                  {car.desc}
                </p>
                <button className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white text-base sm:text-lg font-medium rounded-xl shadow-md hover:bg-blue-700 hover:cursor-pointer transition">
                  Explore Fleet
                </button>
              </div>

              {/* Right section: car image */}
              <div className="flex-shrink-0 flex justify-center md:justify-end">
                <img
                  src={car.img}
                  alt="Electric Vehicle"
                  className="w-[18rem] sm:w-[25rem] md:w-[35rem] lg:w-[45rem] max-w-full drop-shadow-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {cars.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition ${index === current ? "bg-blue-600 scale-110" : "bg-gray-300"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
