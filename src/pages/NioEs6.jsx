import { Battery, Gauge, Car, Zap, Shield, Cpu, Ruler, DollarSign, Disc, Monitor } from "lucide-react";

const NioEs6 = () => {
  return (
    <div className="p-10 lg:p-30 bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        
        {/* Car Image */}
        <div className="flex justify-center">
          <img
            src="/ES6.jpeg"
            alt="NIO ES6"
            className="rounded-2xl shadow-xl w-full max-w-lg object-cover"
          />
        </div>

        {/* Car Info */}
        <div>
          <h1 className="text-4xl font-bold text-blue-700">NIO ES6</h1>
          <p className="mt-3 text-gray-600 text-lg">
            Mid-size SUV EV designed for comfort and versatility, combining
            strong performance with smart technology and premium features.
          </p>

          {/* Price */}
          <div className="mt-6 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-gray-800">New: $80,816</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-yellow-600" />
              <span className="text-gray-600">Second-hand: $41,406</span>
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
                  Vehicle Type: Mid-size Electric SUV <br />
                  Drivetrain: AWD Dual Motor (Front PMSM + Rear ASM)
                </p>
              </div>
            </div>

            {/* Powertrain */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Cpu className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Powertrain</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Low-Power: 320 kW, 610 N·m, 0–100 km/h: 5.6s <br />
                  High-Power: 400 kW, 725 N·m, 0–100 km/h: 4.7s <br />
                  Top Speed: 200 km/h <br />
                  Transmission: Fixed-ratio Single-speed
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
                  Capacity: 70 kWh / 80 kWh (Optional) <br />
                  Slow Charge: ~10 hours <br />
                  Fast Charge (0–80%): ~0.8 hours
                </p>
              </div>
            </div>

            {/* Chassis */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Gauge className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Chassis</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Front Suspension: Double-Wishbone Independent <br />
                  Rear Suspension: Multi-Link Independent <br />
                  Optional: Active Air Suspension (Std. on Performance Edition)
                </p>
              </div>
            </div>

            {/* Wheels & Brakes */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Disc className="w-6 h-6 text-gray-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Wheels & Brakes</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tire Size: 19″ (Optional 20″ / 21″) <br />
                  Tire Brand: Continental (Std. on Performance) <br />
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
                  4850 × 1965 × 1758 mm <br />
                  Wheelbase: 2900 mm <br />
                  Curb Weight: ~2300 kg (varies by battery)
                </p>
              </div>
            </div>

            {/* Interior */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Monitor className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Interior</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Infotainment: 11.3″ Touchscreen <br />
                  Instrument Cluster: 8.8″ LCD <br />
                  Seats: Leather (Optional Ventilation/Heating/Massage) <br />
                  Sunroof: Panoramic Sunroof <br />
                  Smart System: NOMI Voice Assistant, Connectivity, OTA Updates
                </p>
              </div>
            </div>

            {/* Safety */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Shield className="w-6 h-6 text-red-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Safety</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  ADAS: Lane Warning, AEB, Fatigue Monitor, 360° Camera <br />
                  Airbags: Front/Rear Side + Curtain <br />
                  Cruise Control: Standard (NIO Pilot Adaptive Cruise Optional)
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default NioEs6;
