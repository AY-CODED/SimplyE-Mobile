import React from "react";
import {
  Car,
  Gauge,
  Battery,
  Disc,
  Shield,
  Ruler,
  Cpu,
  DollarSign,
  Monitor,
  Fuel,
} from "lucide-react";
import { useEffect } from "react";

const Altom5 = () => {
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);
  
  return (
    <div className="p-8 lg:p-16 mt-20 bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Car Image */}
        <div className="flex justify-center">
          <img
            src="/AltoM5.jpeg"
            alt="Alto M5"
            className="rounded-2xl shadow-lg w-full max-w-lg object-cover"
          />
        </div>

        {/* Details Section */}
        <div>
          <h1 className="text-4xl font-bold text-blue-700">ALTO M5</h1>
          <p className="mt-3 text-gray-600 text-lg">
            A compact luxury electric SUV that blends modern styling with
            Huawei’s HarmonyOS technology, offering both RWD and Dual-Motor
            4WD performance variants for dynamic city and long-range travel.
          </p>

          <div className="mt-8 space-y-6">
            {/* Basic Info */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Car className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Basic Info</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Body: 5-door SUV <br />
                  Wheelbase: 2880 mm <br />
                  Curb Weight: 2235–2350 kg <br />
                  Trunk: 369 L + 70 L Frunk
                </p>
              </div>
            </div>

            {/* Dimensions */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Ruler className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Dimensions</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Length × Width × Height: 4770 × 1930 × 1625 mm
                </p>
              </div>
            </div>

            {/* Powertrain */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Gauge className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Powertrain</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Drive Type: RWD / Dual Motor 4WD <br />
                  Power: 200 kW (RWD) | 315 kW (4WD) <br />
                  Torque: 360 Nm / 720 Nm <br />
                  0–100 km/h: 7.1 s → 4.4 s
                </p>
              </div>
            </div>

            {/* Battery & Range */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Battery className="w-6 h-6 text-yellow-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Battery & Range</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Type: NCM Lithium-ion (CATL supplied) <br />
                  Capacity: 40 kWh <br />
                  Range: 150 km (WLTC) ≈ 200 km (CLTC) <br />
                  Total Range: &gt; 1000 km (With Range Extender)
                </p>
              </div>
            </div>

            {/* Fuel & Efficiency */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Fuel className="w-6 h-6 text-red-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Fuel & Efficiency</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Fuel Type: #95 Gasoline (Range Extender 1.5T 4-Cyl Engine) <br />
                  Fuel Consumption: 6.4–7.3 L / 100 km (NEDC) <br />
                  Energy Consumption: 21–23 kWh / 100 km
                </p>
              </div>
            </div>

            {/* Chassis & Brakes */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Disc className="w-6 h-6 text-gray-700 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Chassis & Brakes</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Suspension: Double Wishbone (Front) / Multi-link (Rear) <br />
                  Chassis: Full Aluminum Alloy Frame <br />
                  Brakes: Ventilated + Solid Discs | 4-Piston Calipers (Performance)
                </p>
              </div>
            </div>

            {/* Technology */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Monitor className="w-6 h-6 text-purple-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Technology</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  OS: HarmonyOS Cockpit (15.6” Touchscreen) <br />
                  ADAS: L2 – ACC, AEB, LKA <br />
                  Fast Charge (30–80%): ≈ 45 min (DC Fast)
                </p>
              </div>
            </div>

            {/* Safety */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Shield className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Safety</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Includes AEB, Lane Keep Assist, Adaptive Cruise Control (ACC)
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <DollarSign className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Price</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  New: <span className="font-bold">$61,144</span> <br />
                  Second-hand: <span className="font-bold">$42,616</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Altom5;
