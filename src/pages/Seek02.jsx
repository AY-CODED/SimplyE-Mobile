import React, { useEffect } from "react";

const Seek02 = () => {
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);
  
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-16 px-6 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Image Section */}
        <div className="w-full h-80 bg-gray-100 flex justify-center items-center">
          <img
            src="/M6.jpg"
            alt="SE-EK02 Electric Tricycle"
            className="h-full object-contain"
          />
        </div>

        {/* Details Section */}
        <div className="p-8 md:p-12">
          <h1 className="text-4xl font-extrabold text-emerald-700 mb-4">
            SE-EK02 Electric Tricycle
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Spacious cargo tricycle designed for businesses, logistics, and
            heavy-duty transport. Offers reliability, long range, and efficient
            power delivery for commercial use.
          </p>

          {/* Specifications */}
          <div className="grid md:grid-cols-2 gap-6 text-gray-800">
            <SpecCard title="⚡ Top Speed" value="50 km/h" />
            <SpecCard title="💰 Price" value="₦9,600,000" />
            <SpecCard title="🔋 IDC Range" value="150 km" />
            <SpecCard title="⏱ Charging Time" value="4 hours" />
            <SpecCard
              title="🔌 Battery Size"
              value="72V150AH LiFePO₄ battery"
              span
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SpecCard = ({ title, value, span }) => (
  <div
    className={`bg-emerald-50 p-5 rounded-xl shadow-sm ${
      span ? "md:col-span-2" : ""
    }`}
  >
    <h2 className="text-xl font-semibold mb-2 text-emerald-700">{title}</h2>
    <p>{value}</p>
  </div>
);

export default Seek02;
