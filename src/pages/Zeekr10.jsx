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
} from "lucide-react";

const Zeekr10 = () => {
  return (
    <div className="p-8 lg:p-16 mt-20 bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Car Image */}
        <div className="flex justify-center">
          <img
            src="/ZEROC11.jpeg"
            alt="ZEEKR 10"
            className="rounded-2xl shadow-lg w-full max-w-lg object-cover"
          />
        </div>

        {/* Details Section */}
        <div>
          <h1 className="text-4xl font-bold text-blue-600">ZEEKR 10</h1>
          <p className="mt-3 text-gray-600 text-lg">
            Premium crossover EV with refined performance, available in both
            electric (EV) and range-extended (EREV) versions.
          </p>

          <div className="mt-8 space-y-6">
            {/* Basic Info */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Car className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Basic Info</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Body: 5-door, 5-seat SUV <br />
                  Drive Type: RWD <br />
                  Variants: EV (530 Premium) | EREV (210 Premium)
                </p>
              </div>
            </div>

            {/* Dimensions */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Ruler className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Dimensions</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Length × Width × Height: 4739 × 1900 × 1680 mm <br />
                  Wheelbase: 2825 mm
                </p>
              </div>
            </div>

            {/* Powertrain */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Gauge className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Powertrain</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Motor: Permanent Magnet Synchronous Motor <br />
                  Max Power/Torque: 170 kW / 320 Nm <br />
                  0–100 km/h: 7.5 s (EV & EREV)
                </p>
              </div>
            </div>

            {/* Battery & Range */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Battery className="w-6 h-6 text-yellow-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Battery & Range</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  EV: 69.9 kWh LFP – 530 km (CLTC) <br />
                  EREV: 28.4 kWh LFP – 210 km Pure Electric Range <br />
                  Total Range (EREV): 1190 km <br />
                  Fast Charge (30–80%): 30 min
                </p>
              </div>
            </div>

            {/* Chassis & Brakes */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Cpu className="w-6 h-6 text-purple-600 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Chassis & Brakes</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Suspension: MacPherson (Front) / Multi-link (Rear) <br />
                  Brake Type: Ventilated Discs (All Wheels) <br />
                  Tire Size: 235/55 R18 or 245/45 R20
                </p>
              </div>
            </div>

            {/* Tech Features */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Monitor className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Tech Features</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Smart Cockpit: 10.25” LCD + 14.6” 2.5K Touchscreen <br />
                  Chip: Qualcomm Snapdragon 8295 <br />
                  Driving Assist: Leapmotor Pilot (L2+)
                </p>
              </div>
            </div>

            {/* Safety */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Shield className="w-6 h-6 text-red-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Safety</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Torsional Stiffness: 42500 N·m/° <br />
                  Airbags: 6 (Including Curtain) <br />
                  Active Safety: AEB, Lane Keeping, Full-speed ACC
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <DollarSign className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Price</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  New: <span className="font-bold">$41,225</span> <br />
                  Second-hand: <span className="font-bold">$32,849</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zeekr10;
