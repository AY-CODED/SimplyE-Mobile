import { Battery, Gauge, Car, Zap, Shield, Cpu, Ruler, DollarSign } from "lucide-react";

const Lil7 = () => {
  return (
    <div className="p-10 lg:p-30 bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Car Image */}
        <div className="flex justify-center">
          <img
            src="/L7.jpeg"
            alt="Li L7 SUV"
            className="rounded-2xl shadow-xl w-full max-w-lg object-cover"
          />
        </div>

        {/* Car Info */}
        <div>
          <h1 className="text-4xl font-bold text-blue-700">Li L7</h1>
          <p className="mt-3 text-gray-600 text-lg">
            Stylish crossover EV • Family-friendly long-distance SUV with extended range, 
            advanced ADAS, and premium comfort features.
          </p>

          {/* Price */}
          <div className="mt-6 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-gray-800">New: $68,919</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-yellow-600" />
              <span className="text-gray-600">Second-hand: $55,160</span>
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
                  AWD Dual Motor <br />
                  Engine: 1.5T 4-Cylinder Range Extender <br />
                  Total System Power: 245 kW (333 hp) <br />
                  Torque: 620 N·m <br />
                  Acceleration (0–100 km/h): 5.3s
                </p>
              </div>
            </div>

            {/* Battery & Range */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Battery className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Battery & Range</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Battery Type: Ternary Lithium <br />
                  Capacity: 42.8 kWh <br />
                  EV Range (NEDC): 210 km <br />
                  Total Range (NEDC): 1315 km
                </p>
              </div>
            </div>

            {/* Charging */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Zap className="w-6 h-6 text-yellow-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Charging</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Fast Charge (30%–80%): 30 mins <br />
                  Slow Charge (0–100%): 6.5 hrs
                </p>
              </div>
            </div>

            {/* Suspension */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Gauge className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Suspension</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Front: Double Wishbone <br />
                  Rear: Multi-Link Independent <br />
                  Pro Suspension: Continuous Damping Control <br />
                  Max Suspension: Air Suspension + CDC (70 mm Adjustable)
                </p>
              </div>
            </div>

            {/* Dimensions */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Ruler className="w-6 h-6 text-purple-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Dimensions</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  5050 × 1995 × 1750 mm <br />
                  Wheelbase: 3005 mm <br />
                  Curb Weight: 2450 kg
                </p>
              </div>
            </div>

            {/* Tech & ADAS */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Car className="w-6 h-6 text-red-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Tech & ADAS</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  ADAS Chip: Pro Horizon Journey 5 | Max: Dual NVIDIA <br />
                  LiDAR: Standard on Max (128-line) <br />
                  Displays: Dual 15.7″ OLED (3K Resolution) for Center & Co-pilot <br />
                  Rear Entertainment Screen: 15.7″ (Max Exclusive) <br />
                  System: Li AD Max / AD Pro Driving Assistant
                </p>
              </div>
            </div>

            {/* Energy / Safety */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Shield className="w-6 h-6 text-indigo-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Energy</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Fuel Tank Capacity: 65 L <br />
                  Fuel Type: 95 Octane Gasoline <br />
                  V2L Output: 3.5 kW
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Lil7;
    