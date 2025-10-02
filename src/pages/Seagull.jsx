import { Battery, Car, Zap, Shield, Cpu, Ruler, DollarSign } from "lucide-react";

const Seagull = () => {
  return (
    <div className="p-10 lg:p-30 bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        
        {/* Car Image */}
        <div className="flex justify-center">
          <img
            src="/Byd.webp"
            alt="BYD Seagull 2023"
            className="rounded-2xl shadow-xl w-full max-w-lg object-cover"
          />
        </div>

        {/* Car Info */}
        <div>
          <h1 className="text-4xl font-bold text-blue-700">
            BYD Seagull 2023
          </h1>
          <p className="mt-3 text-gray-600 text-lg">
            Compact pure electric hatchback with efficient performance, 
            smart features, and urban-friendly design.
          </p>

          {/* Price */}
          <div className="mt-6 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-gray-800">New: $22,525</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-yellow-600" />
              <span className="text-gray-600">Second-hand: $18,098</span>
            </div>
          </div>

          {/* Specs */}
          <div className="mt-10 space-y-6">

            {/* Powertrain */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Cpu className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Powertrain</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pure Electric (EV) <br />
                  Engine: 55 kW (75 hp) <br />
                  Motor Power: 160 kW (Peak) • Torque: 135 Nm <br />
                  Acceleration (0–100 km/h): 4.9s
                </p>
              </div>
            </div>

            {/* Battery */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Battery className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Battery</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Blade Battery (LFP) • Capacity: 38.88 kWh <br />
                  Total Range (CLTC): 405 km <br />
                  Energy Consumption: 9.6 kWh/100km
                </p>
              </div>
            </div>

            {/* Charging */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Zap className="w-6 h-6 text-yellow-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Charging</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Fast Charge: 45 kW (30–80% in 30 mins) <br />
                  Slow Charge: 7 kW (0–100% in 5.5 hrs)
                </p>
              </div>
            </div>

            {/* Dimensions */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Ruler className="w-6 h-6 text-purple-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Dimensions</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  3780 × 1715 × 1540 mm <br />
                  Wheelbase: 2500 mm <br />
                  Interior: 10.1″ Rotatable Screen + DiLink 4.0
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Car className="w-6 h-6 text-red-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Tech Features</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Rear Camera + Cruise Control <br />
                  VTOL Discharge (3.3 kW)
                </p>
              </div>
            </div>

            {/* Safety */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Shield className="w-6 h-6 text-indigo-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Safety</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  4 Airbags • ESP Stability Control <br />
                  Curb Weight: 1240 kg
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Seagull;
