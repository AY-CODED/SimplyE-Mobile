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

const Zeekrc11 = () => {
  return (
    <div className="p-8 lg:p-16 mt-20 bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Car Image */}
        <div className="flex justify-center">
          <img
            src="/ZEROC11.jpeg"
            alt="ZEEKR C11"
            className="rounded-2xl shadow-lg w-full max-w-lg object-cover"
          />
        </div>

        {/* Details Section */}
        <div>
          <h1 className="text-4xl font-bold text-purple-600">ZEEKR C11</h1>
          <p className="mt-3 text-gray-600 text-lg">
            Premium crossover EV with strong performance and modern design,
            offering electric and range-extended variants.
          </p>

          <div className="mt-8 space-y-6">
            {/* Basic Info */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Car className="w-6 h-6 text-purple-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Basic Info</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Body: 5-door, 5-seat SUV <br />
                  Variants: EV (530 Premium) | EREV (210 Premium) <br />
                  Warranty: 4 yr / 120,000 km (vehicle), 8 yr / 150,000 km (battery)
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
                  Motor: Permanent Magnet Synchronous Motor (RWD) <br />
                  Max Power/Torque: 170 kW / 320 Nm <br />
                  0–100 km/h: 7.6 s (EV) | 7.8 s (EREV)
                </p>
              </div>
            </div>

            {/* Battery & Range */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Battery className="w-6 h-6 text-yellow-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Battery & Range</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  EV (530 Premium): 69.9 kWh LFP – 530 km CLTC Range <br />
                  EREV (210 Premium): 28.4 kWh LFP – 110 km Pure Electric Range <br />
                  Total Range (EREV): 1150 km <br />
                  Fast Charge (30–80%): 30 min
                </p>
              </div>
            </div>

            {/* Chassis & Brakes */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Cpu className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Chassis & Brakes</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Front Suspension: MacPherson <br />
                  Rear Suspension: Multi-link <br />
                  Brakes: Ventilated Discs (All Wheels) <br />
                  Tyres: 235/55 R18 or 245/45 R20
                </p>
              </div>
            </div>

            {/* Smart Cabin */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Monitor className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Smart Cabin</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Displays: 10.25” Instrument + 14.6” Touchscreen <br />
                  Chip: Qualcomm Snapdragon 8295 <br />
                  Driving Assist: L2+ (Highway Assist)
                </p>
              </div>
            </div>

            {/* Safety */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Shield className="w-6 h-6 text-red-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Safety & Driver Assist</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sensors: 30 units (Lidar + 12 Cameras) <br />
                  Airbags: 6 (including Curtain) <br />
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
                  New: <span className="font-bold">$40,163</span> <br />
                  Second-hand: <span className="font-bold">$31,037</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zeekrc11;
