import { Battery, Gauge, Car, Zap, Shield, Cpu, Ruler, DollarSign } from "lucide-react";

const Lil8 = () => {
  return (
    <div className="p-10 lg:p-30 bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Car Image */}
        <div className="flex justify-center">
          <img
            src="/L8.jpeg"
            alt="Li L8 SUV"
            className="rounded-2xl shadow-xl w-full max-w-lg object-cover"
          />
        </div>

        {/* Car Info */}
        <div>
          <h1 className="text-4xl font-bold text-blue-700">Li L8</h1>
          <p className="mt-3 text-gray-600 text-lg">
            Spacious SUV EV • Combining extended range, premium comfort, and 
            cutting-edge ADAS features for modern families.
          </p>

          {/* Price */}
          <div className="mt-6 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-gray-800">New: $74,132</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-yellow-600" />
              <span className="text-gray-600">Second-hand: $56,235</span>
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
                  Engine: 1.5T Range Extender (details TBD) <br />
                  System Power: — <br />
                  Torque: — <br />
                  Acceleration (0–100 km/h): —
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
                  Capacity: — <br />
                  EV Range (NEDC): — <br />
                  Total Range (NEDC): —
                </p>
              </div>
            </div>

            {/* Charging */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Zap className="w-6 h-6 text-yellow-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Charging</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Fast Charge (30%–80%): — <br />
                  Slow Charge (0–100%): —
                </p>
              </div>
            </div>

            {/* Suspension */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Gauge className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Suspension</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Front: — <br />
                  Rear: — <br />
                  Adaptive / Air Suspension: —
                </p>
              </div>
            </div>

            {/* Dimensions */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Ruler className="w-6 h-6 text-purple-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Dimensions</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  L × W × H: — <br />
                  Wheelbase: — <br />
                  Curb Weight: —
                </p>
              </div>
            </div>

            {/* Tech & ADAS */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Car className="w-6 h-6 text-red-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Tech & ADAS</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  ADAS Chip: — <br />
                  Sensors: — <br />
                  Displays: — <br />
                  System: —
                </p>
              </div>
            </div>

            {/* Energy / Safety */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Shield className="w-6 h-6 text-indigo-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Energy</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Fuel Tank Capacity: — <br />
                  Fuel Type: 95 Octane Gasoline <br />
                  V2L Output: —
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Lil8;
