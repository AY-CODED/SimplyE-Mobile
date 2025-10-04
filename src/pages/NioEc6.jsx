import { Battery, Gauge, Car, Zap, Shield, Cpu, Ruler, DollarSign, Disc, Monitor } from "lucide-react";

const NioEc6 = () => {
  return (
    <div className="p-10 lg:p-30 bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        
        {/* Car Image */}
        <div className="flex justify-center">
          <img
            src="/Nio.jpeg"
            alt="NIO EC6"
            className="rounded-2xl shadow-xl w-full max-w-lg object-cover"
          />
        </div>

        {/* Car Info */}
        <div>
          <h1 className="text-4xl font-bold text-blue-700">NIO EC6</h1>
          <p className="mt-3 text-gray-600 text-lg">
            Performance-oriented mid-size electric coupe SUV with sleek styling 
            and advanced smart features. Discontinued, but 2025 models available.
          </p>

          {/* Price */}
          <div className="mt-6 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-gray-800">New: $85,700</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-yellow-600" />
              <span className="text-gray-600">Second-hand: $41,863</span>
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
                  Vehicle Type: Mid-size Electric Coupe SUV <br />
                  Production Status: Discontinued (2025 model available)
                </p>
              </div>
            </div>

            {/* Powertrain */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Cpu className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Powertrain</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  AWD Dual Motor (Front ASM + Rear PMSM) <br />
                  Sport Version: 320 kW (435 hp), 810 N·m, 0–100 km/h: 5.8s <br />
                  Performance/Signature: 400 kW (544 hp), 725 N·m, 0–100 km/h: 4.5s <br />
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
                  Battery Type: Ternary Lithium (CATL/Jiangsu Era) <br />
                  Capacity: 70 kWh (430–465 km) / 100 kWh (605–615 km) <br />
                  Warranty: 10 years / Unlimited km (1 owner, terms apply) <br />
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
                  Front Suspension: Five-Link Independent <br />
                  Rear Suspension: Five-Link Independent <br />
                  Steering Assist: Electric Power
                </p>
              </div>
            </div>

            {/* Wheels & Brakes */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Disc className="w-6 h-6 text-gray-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Wheels & Brakes</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tire Size: 255/50 R20 (Standard) <br />
                  Brake Type: Ventilated Discs (Front + Rear) + E. Parking
                </p>
              </div>
            </div>

            {/* Dimensions */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Ruler className="w-6 h-6 text-purple-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Dimensions</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Signature: 4850 × 1965 × 1714 mm <br />
                  Sport: 4849 × 1995 × 1697 mm <br />
                  Wheelbase: 2900 mm <br />
                  Curb Weight: ~2200–2299 kg (varies by battery)
                </p>
              </div>
            </div>

            {/* Interior */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Monitor className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Interior</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Infotainment: 11.3″ Touchscreen (Navigation / OTA / Voice Control) <br />
                  Instrument Cluster: 9.8″ LCD <br />
                  Seats: Nappa Leather / Fabric-leather blend (Sport) <br />
                  Seat Functions: Front Heating, Ventilation, Massage, Driver Memory <br />
                  Smart System: NOMI Mate 2.0 Voice Assistant + Connectivity
                </p>
              </div>
            </div>

            {/* Safety */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Shield className="w-6 h-6 text-red-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Safety</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  ADAS: NIO Pilot Full Package <br />
                  Airbags: Front, Rear Side + Curtain <br />
                  Features: AEB, Forward Collision Warning, 360° Camera
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default NioEc6;
