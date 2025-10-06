import { Battery, Gauge, Car, Zap, Shield, Cpu, Ruler, DollarSign } from "lucide-react";
import { useEffect } from "react";

const Lil9 = () => {
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);
  
  return (
    <div className="p-10 lg:p-30 bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Car Image */}
        <div className="flex justify-center">
          <img
            src="/L9.jpeg"
            alt="Li L9 SUV"
            className="rounded-2xl shadow-xl w-full max-w-lg object-cover"
          />
        </div>

        {/* Car Info */}
        <div>
          <h1 className="text-4xl font-bold text-blue-700">Li L9</h1>
          <p className="mt-3 text-gray-600 text-lg">
            Flagship luxury EV SUV • Premium family vehicle with extended range, 
            dual-motor AWD, advanced ADAS, and unmatched comfort features.
          </p>

          {/* Price */}
          <div className="mt-6 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-gray-800">New: $91,800</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-yellow-600" />
              <span className="text-gray-600">Second-hand: $77,025</span>
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
                  Range Extender: 1.5T 4-Cylinder (40.5% Thermal Efficiency) <br />
                  Front Motor Power: 130 kW <br />
                  Rear Motor Power: 200 kW <br />
                  Total System Power: 330 kW (449 hp) <br />
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
                  Battery Type: Ternary Lithium (CATL) <br />
                  Capacity: 44.5 kWh <br />
                  EV Range (CLTC): 215 km <br />
                  Total Range (CLTC): 1315 km
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
                  Front: Double Wishbone + Air Spring <br />
                  Rear: Multi-Link + Air Spring <br />
                  Adjustment: CDC + Dual-Chamber Air Suspension (80 mm)
                </p>
              </div>
            </div>

            {/* Dimensions */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Ruler className="w-6 h-6 text-purple-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Dimensions</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  5218 × 1998 × 1800 mm <br />
                  Wheelbase: 3105 mm <br />
                  Curb Weight: 2520 kg
                </p>
              </div>
            </div>

            {/* Tech & ADAS */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Car className="w-6 h-6 text-red-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Tech & ADAS</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  ADAS Chip: Dual NVIDIA Orin-X (508 TOPS) <br />
                  Sensors: 1× 128-line LiDAR + 6× 5MP Cameras + 5× Radars <br />
                  Screens: 3 × 15.7″ OLED (3K Resolution) <br />
                  HUD: 13.35″ AR Navigation <br />
                  Seat Functions: Heated + Massage (2nd Row) <br />
                  Built-in Refrigerator (Cooling & Heating: 0–7°C / 35–50°C)
                </p>
              </div>
            </div>

            {/* Energy / Fuel */}
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

export default Lil9;
