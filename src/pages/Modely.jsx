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
  Sun,
  Briefcase,
} from "lucide-react";

const Modely = () => {
  return (
    <div className="p-8 lg:p-16 mt-20 bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Car Image */}
        <div className="flex justify-center">
          <img
            src="/ModelY.jpeg"
            alt="Tesla Model Y"
            className="rounded-2xl shadow-lg w-full max-w-lg object-cover"
          />
        </div>

        {/* Details Section */}
        <div>
          <h1 className="text-4xl font-bold text-blue-600">Tesla Model Y</h1>
          <p className="mt-3 text-gray-600 text-lg">
            Tesla’s best-selling all-electric SUV, combining efficiency, speed,
            and advanced autonomous features across Standard, Long Range, and
            Performance variants.
          </p>

          <div className="mt-8 space-y-6">
            {/* Basic Info */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Car className="w-6 h-6 text-red-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Basic Info</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Body: 5-door SUV <br />
                  Variants: Standard Range RWD, Long Range AWD, Performance AWD <br />
                  Top Speed: 217–250 km/h
                </p>
              </div>
            </div>

            {/* Dimensions */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Ruler className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Dimensions</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Length × Width × Height: 4750 × 1921 × 1624 mm <br />
                  Wheelbase: 2860 mm <br />
                  Curb Weight: 1929–2010 kg
                </p>
              </div>
            </div>

            {/* Powertrain */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Gauge className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Powertrain</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Drive Type: RWD (Standard) | Dual-Motor AWD (Others) <br />
                  Power: 194–357 kW <br />
                  Torque: 340–659 Nm <br />
                  0–100 km/h: 6.9 s → 3.7 s
                </p>
              </div>
            </div>

            {/* Battery & Range */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Battery className="w-6 h-6 text-yellow-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Battery & Range</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Battery Type: LFP (RWD), NMC (AWD) <br />
                  Range (CLTC): 545–615 km <br />
                  Energy Consumption: 12.7–14.4 kWh/100 km <br />
                  Fast Charging (0–80%): 1 hour
                </p>
              </div>
            </div>

            {/* Chassis & Brakes */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Cpu className="w-6 h-6 text-purple-600 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Chassis & Brakes</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Suspension: Double Wishbone (Front) / Multi-link (Rear) <br />
                  Brakes: Ventilated Discs + EPB <br />
                  Tires: 255/45 R19 or 21” Performance Set
                </p>
              </div>
            </div>

            {/* Smart Cabin */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Monitor className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Smart Cabin</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Display: 15” Touchscreen (AMD Ryzen) <br />
                  Seats: Synthetic Leather <br />
                  Heating: Steering Wheel + All Seats
                </p>
              </div>
            </div>

            {/* Safety */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Shield className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Safety & Assist</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sensors: 9 Cameras + 12 Ultrasonic + 1 Radar <br />
                  Assist: AEB, Lane Keeping, Blind Spot Monitoring <br />
                  Build: Tesla’s High-Strength Structure
                </p>
              </div>
            </div>

            {/* Comfort & Cargo */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Sun className="w-6 h-6 text-orange-400 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Comfort & Cargo</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Roof: Fixed Glass Sunroof <br />
                  Cargo Space: Frunk + 971L (Max 2158L)
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <DollarSign className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Price</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  New: <span className="font-bold">$63,239</span> <br />
                  Second-hand: <span className="font-bold">$42,744</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modely;
