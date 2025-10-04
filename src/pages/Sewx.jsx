import React from "react";

const Sewx = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-16 px-6 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="w-full h-80 bg-gray-100 flex justify-center items-center">
          <img
            src="/SE-WX.jpg"
            alt="SE-WX Electric Bike"
            className="h-full object-contain"
          />
        </div>

        <div className="p-8 md:p-12">
          <h1 className="text-4xl font-extrabold text-red-700 mb-4">
            SE-WX Electric Bike
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Smart and sustainable with long-range performance.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-gray-800">
            <SpecCard title="⚡ Top Speed" value="45–55 km/h" />
            <SpecCard title="💰 Price" value="₦2,126,750" />
            <SpecCard title="🔋 IDC Range" value="100 km" />
            <SpecCard title="⏱ Charging Time" value="6 hours" />
            <SpecCard
              title="🔌 Battery Size"
              value="12V20A acid battery (72V20A total power)"
              span
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SpecCard = ({ title, value, span }) => (
  <div className={`bg-red-50 p-5 rounded-xl shadow-sm ${span ? "md:col-span-2" : ""}`}>
    <h2 className="text-xl font-semibold mb-2 text-red-700">{title}</h2>
    <p>{value}</p>
  </div>
);

export default Sewx;
