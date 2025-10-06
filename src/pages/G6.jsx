import { Car, Gauge, Battery, Disc, Shield, Sofa, Ruler, Cpu, DollarSign } from "lucide-react";
import { useEffect } from "react";
const G6 = () => {
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);
  
  return (
    <div className="p-8 lg:p-16 mt-20 bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        
        {/* Car Image */}
        <div className="flex justify-center">
          <img
            src="/G6.jpeg"
            alt="G6"
            className="rounded-2xl shadow-lg w-full max-w-lg object-cover"
          />
        </div>

        {/* Car Details */}
        <div>
          <h1 className="text-4xl font-bold text-blue-700">G6</h1>
          <p className="mt-3 text-gray-600 text-lg">
            Compact EV SUV with modern features and strong performance.
          </p>

          <div className="mt-8 space-y-6">
            
            {/* Basic Info */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Car className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Basic Info</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Vehicle Type: Mid-size Electric Coupe SUV <br />
                  Production Status: Discontinued (2025 model still available)
                </p>
              </div>
            </div>

            {/* Powertrain */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Gauge className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Powertrain</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Drivetrain: AWD Dual Motor (Front ASM + Rear PMSM) <br />
                  Sport Version: 320 kW (435 hp), 810 Nm, 0–100 km/h in 5.8s <br />
                  Performance/Signature: 400 kW (544 hp), 725 Nm, 0–100 km/h in 4.5s <br />
                  Top Speed: 200 km/h <br />
                  Transmission: Fixed-ratio Single-speed
                </p>
              </div>
            </div>

            {/* Battery & Range */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Battery className="w-6 h-6 text-yellow-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Battery & Range</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Type: Ternary Lithium (CATL/Jiangsu Era) <br />
                  Capacity: 70 kWh (430–465 km) / 100 kWh (605–615 km) <br />
                  Fast Charge (0–80%): ~0.8h (Industry Standard) <br />
                  Warranty: 10 years / Unlimited km (First Owner, Terms Apply)
                </p>
              </div>
            </div>

            {/* Chassis */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Cpu className="w-6 h-6 text-purple-600 mt-1" />
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
              <Disc className="w-6 h-6 text-red-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Wheels & Brakes</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tire Size: 255/50 R20 (Standard) <br />
                  Brake Type: Ventilated Discs (Front + Rear) + Electronic Parking
                </p>
              </div>
            </div>

            {/* Dimensions */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Ruler className="w-6 h-6 text-teal-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Dimensions</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sport: 4849 × 1995 × 1697 mm <br />
                  Signature: 4850 × 1965 × 1714 mm <br />
                  Wheelbase: 2900 mm <br />
                  Curb Weight: ~2200–2299 kg (depending on battery)
                </p>
              </div>
            </div>

            {/* Interior */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Sofa className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Interior</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Infotainment: 11.3" Touchscreen (Navigation/OTA/Voice) <br />
                  Instrument Cluster: 9.8" LCD <br />
                  Seats: Nappa Leather / Fabric-leather blend (Sport) <br />
                  Functions: Heating, Ventilation, Massage, Driver Memory <br />
                  Smart Assistant: NOMI Mate 2.0 Voice AI
                </p>
              </div>
            </div>

            {/* Safety */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Shield className="w-6 h-6 text-indigo-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Safety</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  ADAS: NIO Pilot Full Package <br />
                  Airbags: Front + Rear Side + Curtain <br />
                  Features: AEB, Forward Collision Warning, 360° Camera <br />
                  V2L Output Supported
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <DollarSign className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Price</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  New: <span className="font-bold">$52,418</span> <br />
                  Second-hand: <span className="font-bold">$41,156</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default G6;
