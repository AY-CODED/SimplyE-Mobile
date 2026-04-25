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
  Wind,
  Fuel,
} from "lucide-react";
import { useEffect } from "react";

const Altom7 = () => {
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);
  
  return (
    <div className="p-8 lg:p-16 mt-20 bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Car Image */}
        <div className="flex justify-center">
          <img
            src="/AltoM7.jpeg"
            alt="Alto M7"
            className="rounded-2xl shadow-lg w-full max-w-lg object-cover"
          />
        </div>

        {/* Details Section */}
        <div>
          <h1 className="text-4xl font-bold text-blue-700">ALTO M7</h1>
          <p className="mt-3 text-gray-600 text-lg">
            Spacious electric SUV built for families, featuring Huawei HarmonyOS
            smart cockpit, zero-gravity seats, and impressive performance from
            RWD to Dual-Motor 4WD configurations.
          </p>

          <div className="mt-8 space-y-6">
            {/* Basic Info */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Car className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Basic Info</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Body: 5-door SUV <br />
                  Seating: 5 or 6 seats (Zero-Gravity option) <br />
                  Wheelbase: 2920 mm <br />
                  Curb Weight: 2350–2490 kg
                </p>
              </div>
            </div>

            {/* Dimensions */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Ruler className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Dimensions</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Length × Width × Height: 5020 × 1945 × 1760 mm <br />
                  Trunk: 5-seater — 686L / 6-seater — 188L (Max 1714L)
                </p>
              </div>
            </div>

            {/* Powertrain */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Gauge className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Powertrain</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Drive: RWD / Dual-Motor 4WD <br />
                  Power: 200 kW (RWD) / 330 kW (4WD) <br />
                  Torque: 360 Nm / 660 Nm <br />
                  0–100 km/h: 6.9 s → 4.8 s
                </p>
              </div>
            </div>

            {/* Battery & Range */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Battery className="w-6 h-6 text-yellow-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Battery & Range</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Battery Type: NCM Li-ion (CA LFP Applied) <br />
                  Capacity: 40 kWh <br />
                  EV Range: 135 km (WLTC) ≈ 195 km (CLTC) <br />
                  Total Range: ~1100 km (RE mode)
                </p>
              </div>
            </div>

            {/* Fuel & Efficiency */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Fuel className="w-6 h-6 text-red-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Fuel & Efficiency</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Fuel Type: #95 Gasoline (Range Extender) <br />
                  Fuel Consumption: 6.6–7.2 L/100 km (WLTC) <br />
                  Energy Consumption: 22–24 kWh/100 km
                </p>
              </div>
            </div>

            {/* Chassis & Brakes */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Disc className="w-6 h-6 text-gray-700 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Chassis & Brakes</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Suspension: MacPherson (Front) / Multi-link (Rear) <br />
                  Brakes: Front Ventilated, Rear Solid Disc
                </p>
              </div>
            </div>

            {/* Technology */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Monitor className="w-6 h-6 text-purple-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Technology</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Infotainment: HarmonyOS 3.0 Smart Cockpit <br />
                  Displays: 15.6” Center + 10.25” Instrument <br />
                  Fast Charging: 30–80% ≤ 35 min (DC Fast)
                </p>
              </div>
            </div>

            {/* Safety & ADAS */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Shield className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Safety & ADAS</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  ADAS Level: L2+ (ACC, AEB, LKA, APA) <br />
                  Features: Auto Parking Assist (APA)
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <DollarSign className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Price</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  New: <span className="font-bold">$68,163</span> <br />
                  Second-hand: <span className="font-bold">$42,353</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Altom7;
