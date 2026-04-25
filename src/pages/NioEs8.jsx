import { Battery, Gauge, Car, Zap, Shield, Cpu, Ruler, DollarSign, Disc, Monitor } from "lucide-react";
import { useEffect } from "react";

const NioEs8 = () => {
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);
  
  return (
    <div className="p-10 lg:p-30 bg-gray-50 mt-20">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        
        {/* Car Image */}
        <div className="flex justify-center">
          <img
            src="/ES8.jpg"
            alt="NIO ES8"
            className="rounded-2xl shadow-xl w-full max-w-lg object-cover"
          />
        </div>

        {/* Car Info */}
        <div>
          <h1 className="text-4xl font-bold text-blue-700">NIO ES8</h1>
          <p className="mt-3 text-gray-600 text-lg">
            Premium luxury electric SUV with cutting-edge performance, smart
            technology, and advanced safety features.
          </p>

          {/* Price */}
          <div className="mt-6 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-gray-800">New: $106,288</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-yellow-600" />
              <span className="text-gray-600">Second-hand: $50,578</span>
            </div>
          </div>

          {/* Specs */}
          <div className="mt-10 space-y-6">

            {/* Basic Info */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Car className="w-6 h-6 text-indigo-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Basic Info</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Vehicle Type: Large Electric SUV (6/7 Seater) <br />
                  Drivetrain: AWD Dual Motor (Front PMSM + Rear ASM) <br />
                  Max Power: 480 kW (653 hp) <br />
                  Acceleration: 0–100 km/h in 4.1s <br />
                  Peak Torque: 850 N·m <br />
                  Top Speed: 200 km/h
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
                  Capacity: 70 kWh (465 km) / 100 kWh (605 km) <br />
                  Battery Swap: 3 min swap (free for first owner) <br />
                  Fast Charge (10–80%): ~0.5 hours
                </p>
              </div>
            </div>

            {/* Chassis */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Gauge className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Chassis</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Suspension: Double-Wishbone + Multi-Link Independent <br />
                  Tech: Intelligent Dual-Chamber Air Suspension <br />
                  Drive Mode: AWD
                </p>
              </div>
            </div>

            {/* Wheels & Brakes */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Disc className="w-6 h-6 text-gray-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Wheels & Brakes</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tire Size: 255/55 R19 (Standard) <br />
                  Brakes: Ventilated Discs (Front + Rear) <br />
                  Parking Brakes: Electronic
                </p>
              </div>
            </div>

            {/* Dimensions */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Ruler className="w-6 h-6 text-purple-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Dimensions</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  5099 × 1969 × 1750 mm <br />
                  Wheelbase: 3070 mm <br />
                  Curb Weight: ~2400–2500 kg (varies by battery)
                </p>
              </div>
            </div>

            {/* Interior */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Monitor className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Interior</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Infotainment: 12.8″ Touchscreen (Snapdragon 8155) <br />
                  Cluster + HUD: 9.8″ LCD + 16.3″ AR-HUD <br />
                  Seats: 6-seat (2+2+2) / 7-seat (2+3+2) <br />
                  Seat Functions: Nappa Leather, Heating, Ventilation, Massage <br />
                  Smart System: NOMI Mate 2.0, Banyan OS
                </p>
              </div>
            </div>

            {/* Safety */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Shield className="w-6 h-6 text-red-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Safety</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  ADAS: NIO Pilot Full Package (Auto Lane Change) <br />
                  Airbags: 12 + Curtain Airbags <br />
                  Active Safety: Lane Keeping, AEB, 360° Camera
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default NioEs8;
