import { Battery, Gauge, Car, Zap, Shield, Cpu, Ruler, DollarSign } from "lucide-react";

const BydInfo = () => {
  return (
    <div className="p-10 lg:p-30 bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Car Image */}
        <div className="flex justify-center">
          <img
            src="/BYD_HAN.jpg"
            alt="BYD Qin L 2024 DM-i120km"
            className="rounded-2xl shadow-xl w-full max-w-lg object-cover"
          />
        </div>

        {/* Car Info */}
        <div>
          <h1 className="text-4xl font-bold text-blue-700">
            BYD Qin L 2024 DM-i120km
          </h1>
          <p className="mt-3 text-gray-600 text-lg">
            Superior Edition • Luxury plug-in hybrid sedan with advanced DM-i technology, 
            efficient performance and premium features.
          </p>

          {/* Price */}
          <div className="mt-6 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-gray-800">
                New: $28,994
              </span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-yellow-600" />
              <span className="text-gray-600">Second-hand: $23,073</span>
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
                  5th Gen DM-i Plug-in Hybrid (PHEV) <br />
                  Engine: 1.5L High Efficiency Hybrid (43% Thermal Efficiency) <br />
                  Motor: 160 kW Peak • System Total: 240 kW <br />
                  Acceleration (0–100 km/h): 7.5s
                </p>
              </div>
            </div>

            {/* Battery */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Battery className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Battery</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Blade Battery (LFP) • Capacity: 18.32 kWh <br />
                  EV Range (NEDC): 120 km • Total Range (CLTC): 1300 km <br />
                  Fuel Economy: 3.8 L/100km (HEV) • Energy: 12.5 kWh/100km
                </p>
              </div>
            </div>

            {/* Charging */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Zap className="w-6 h-6 text-yellow-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Charging</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Fast Charge: 45 kW DC (30–80% in 19 mins) <br />
                  Slow Charge: 6.6 kW AC (0–100% in 3 hrs)
                </p>
              </div>
            </div>

            {/* Dimensions */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Ruler className="w-6 h-6 text-purple-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Dimensions</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  4830 × 1900 × 1495 mm • Wheelbase: 2790 mm <br />
                  Interior: 12.8″ Rotatable Screen + DiLink 5.0
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Car className="w-6 h-6 text-red-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Tech Features</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  DiPilot L2 Driving Assist <br />
                  Full-Scenario Digital Key (NFC + BT + UWB)
                </p>
              </div>
            </div>

            {/* Safety */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Shield className="w-6 h-6 text-indigo-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Safety</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  6 Airbags • CTB Body Integration Tech <br />
                  Fuel Tank: 48 L
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BydInfo;
