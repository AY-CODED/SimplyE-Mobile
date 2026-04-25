import React from "react";
import {
  Car,
  Ruler,
  Gauge,
  Battery,
  Cpu,
  Monitor,
  Shield,
  Sun,
  DollarSign,
  Zap,
  Radio,
} from "lucide-react";
import { useEffect } from "react";
const Altom9 = () => {
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);
  
  return (
    <div className="p-8 lg:p-16 mt-20 bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Car Image */}
        <div className="flex justify-center">
          <img
            src="/AltoM9.jpeg"
            alt="ALTO M9"
            className="rounded-2xl shadow-lg w-full max-w-lg object-cover"
          />
        </div>

        {/* Details Section */}
        <div>
          <h1 className="text-4xl font-bold text-blue-600">ALTO M9</h1>
          <p className="mt-3 text-gray-600 text-lg">
            High-end luxury electric MPV powered by Huawei DriveONE dual-motor
            system. Available in Range Extender (RE) and Pure Electric (BEV)
            variants, both offering cutting-edge tech and ultimate comfort.
          </p>

          <div className="mt-8 space-y-6">
            {/* Basic Info */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Car className="w-6 h-6 text-red-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Basic Info</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Category: Premium 6-Seater MPV (2+2+2) <br />
                  Variants: Range Extender (RE) &amp; BEV (Pure Electric) <br />
                  Zero-Gravity Seats: Standard
                </p>
              </div>
            </div>

            {/* Dimensions */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Ruler className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Dimensions</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  L × W × H: 5020 × 1960 × 1800 mm <br />
                  Wheelbase: 3100 mm <br />
                  Curb Weight: 2650–2780 kg
                </p>
              </div>
            </div>

            {/* Powertrain */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Gauge className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Powertrain</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Drive: Dual-Motor 4WD (Huawei DriveONE) <br />
                  Power: 365 kW (RE) / 390 kW (BEV) <br />
                  Torque: 675 Nm (RE) / 700 Nm (BEV) <br />
                  0–100 km/h: 4.9 s (RE) / 4.3 s (BEV)
                </p>
              </div>
            </div>

            {/* Battery & Range */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Battery className="w-6 h-6 text-yellow-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Battery & Range</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Type: NCM Li-ion (CATL Qilin) <br />
                  Capacity: 40 kWh (RE) / 100 kWh (BEV) <br />
                  Range (CLTC): &gt; 1400 km (RE+EV) / 620 km (BEV) <br />
                  Fast Charge: 30 min (RE) / 10 min (4C Ultra-Fast)
                </p>
              </div>
            </div>

            {/* Chassis & Brakes */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Cpu className="w-6 h-6 text-purple-600 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Chassis & Brakes</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Suspension: Full Aluminum + Air Suspension (5-Level Adjustable) <br />
                  Brakes: Ventilated Discs (F/R) + Dual Piston Calipers <br />
                  Magic Suspension with Road Preview
                </p>
              </div>
            </div>

            {/* Smart Cabin */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Monitor className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Smart Cabin</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  OS: HarmonyOS 4.0 Cockpit (Triple Screens: 12.3” + 15.6” + 16”) <br />
                  AR-HUD: 75” + 32” Projection Screen <br />
                  AI Projection Sync with Huawei Vision
                </p>
              </div>
            </div>

            {/* ADAS & Safety */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Shield className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">ADAS & Safety</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Huawei ADS 2.0 (1 Lidar + 11 Cameras + 12 Radars) <br />
                  L2+ Autonomy, Lane Keep, Adaptive Cruise Control <br />
                  Build: High-Strength Body with EPB System
                </p>
              </div>
            </div>

            {/* Comfort & Features */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Sun className="w-6 h-6 text-orange-400 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Comfort & Features</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Luxury 6-Seat Layout (2+2+2) with Zero-Gravity Seats <br />
                  Advanced Climate Control &amp; Quiet Cabin Tech <br />
                  Trunk Volume: 213 L → 718 L (max)
                </p>
              </div>
            </div>

            {/* Energy & Charging */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Zap className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Energy & Charging</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Fuel (RE only): #95 Gasoline – 1.5T 4-cyl Engine <br />
                  Charging: AC Slow (7 kW) | DC Fast (800 V) + AC Slow <br />
                  V2L Support (6 kW)
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <DollarSign className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Price</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  New: <span className="font-bold">$94,363</span> <br />
                  Second-hand: <span className="font-bold">$82,121</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Altom9;
