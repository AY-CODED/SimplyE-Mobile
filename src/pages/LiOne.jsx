import { Battery, Gauge, Car, Zap, Shield, Cpu, Ruler, DollarSign } from "lucide-react";
import { useEffect } from "react";

const LiOne = () => {
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);
  
  return (
    <div className="p-10 lg:p-30 bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Car Image */}
        <div className="flex justify-center">
          <img
            src="/Li.jpeg"
            alt="Li One EV SUV"
            className="rounded-2xl shadow-xl w-full max-w-lg object-cover"
          />
        </div>

        {/* Car Info */}
        <div>
          <h1 className="text-4xl font-bold text-blue-700">Li One</h1>
          <p className="mt-3 text-gray-600 text-lg">
            Luxury family SUV • Extended range electric vehicle with dual motor AWD, 
            advanced ADAS, and premium interior features.
          </p>

          {/* Price */}
          <div className="mt-6 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-yellow-600" />
              <span className="font-semibold text-gray-800">
                Second-hand: $41,877
              </span>
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
                  AWD Dual Motor System <br />
                  Range Extender: 1.2T 3-Cylinder (DAM12TD) <br />
                  Front Motor Power: 100 kW <br />
                  Rear Motor Power: 145 kW <br />
                  Total System Power: 245 kW (333 hp) <br />
                  Torque: 455 N·m <br />
                  Acceleration (0–100 km/h): 6.5s
                </p>
              </div>
            </div>

            {/* Battery & Range */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Battery className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Battery & Range</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Battery Type: Ternary Lithium (CATL/BYD) <br />
                  Capacity: 40.5 kWh <br />
                  EV Range (NEDC): 188 km <br />
                  Total Range (NEDC): 1080 km
                </p>
              </div>
            </div>

            {/* Charging */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Zap className="w-6 h-6 text-yellow-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Charging</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Fast Charge (30%–80%): 30 mins
                </p>
              </div>
            </div>

            {/* Suspension */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Gauge className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Suspension</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Front: MacPherson Strut <br />
                  Rear: Multi-Link Independent <br />
                  Adjustment: Standard Spring Damper
                </p>
              </div>
            </div>

            {/* Dimensions */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Ruler className="w-6 h-6 text-purple-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Dimensions</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  5030 × 1960 × 1760 mm <br />
                  Wheelbase: 2935 mm <br />
                  Curb Weight: 2300 kg
                </p>
              </div>
            </div>

            {/* Tech & ADAS */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Car className="w-6 h-6 text-red-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Tech & ADAS</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  ADAS Chip: Horizon Journey 3 (5 TOPs) <br />
                  Sensors: 5× Cameras + 12× Ultrasonic + 5× Radars <br />
                  Screen: 12.3″ Cluster + 16.2″ Center + 10.1″ Control <br />
                  Seating: 6-Seater (2nd Row Captain Seats) <br />
                  Seat Functions: Heated + Massage (2nd Row)
                </p>
              </div>
            </div>

            {/* Safety / Fuel */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Shield className="w-6 h-6 text-indigo-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Fuel & Safety</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Fuel Tank: 55 L • Fuel Type: 95 Octane Gasoline <br />
                  V2L Output: Supported
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LiOne;
