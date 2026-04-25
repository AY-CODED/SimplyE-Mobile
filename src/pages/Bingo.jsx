import { Car, Gauge, Battery, Disc, Shield, Sofa, Ruler, DollarSign, Cpu } from "lucide-react";
import { useEffect } from "react";
const Bingo = () => {
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);
  
  return (
    <div className="p-8 lg:p-16 mt-20 bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        
        {/* Car Image */}
        <div className="flex justify-center">
          <img
            src="/L8.jpeg"
            alt="BINGO"
            className="rounded-2xl shadow-lg w-full max-w-lg object-cover"
          />
        </div>

        {/* Car Details */}
        <div>
          <h1 className="text-4xl font-bold text-blue-700">BINGO</h1>
          <p className="mt-3 text-gray-600 text-lg">
            Fun and compact EV for urban driving. Available in 203KM Base, 333KM Lingxi Connect, and 333KM Premium trims.
          </p>

          <div className="mt-8 space-y-6">

            {/* Basic Info */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Car className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Basic Info</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Category: Base (203km) / Lingxi Connect (333km) / Premium (333km) <br />
                  Warranty: 3yr/100,000 km (Base) | 8yr/120,000 km Battery (Higher trims) <br />
                  Vehicle Type: Compact Urban EV
                </p>
              </div>
            </div>

            {/* Dimensions */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Ruler className="w-6 h-6 text-teal-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Dimensions</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Length × Width × Height: 3650 × 1670 × 1540 mm <br />
                  Wheelbase: 2560 mm <br />
                  Curb Weight: 960–1000 kg (Base), 1125 kg (Higher trims)
                </p>
              </div>
            </div>

            {/* Powertrain */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Gauge className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Powertrain</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Motor Type: Permanent Magnet (Front) <br />
                  Max Power: 30 kW (41 PS, Base) | 50 kW (68 PS, Higher trims) <br />
                  Max Torque: 110 Nm (Base) | 150 Nm (Higher trims) <br />
                  Top Speed: 100 km/h (Base) | 120 km/h (Higher trims)
                </p>
              </div>
            </div>

            {/* Battery & Range */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Battery className="w-6 h-6 text-yellow-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Battery & Range</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Battery Type: LFP <br />
                  Capacity: 17.3 kWh (203 km, Base) | 31.9 kWh (333 km, Higher trims) <br />
                  Fast Charge (0–80%): Not supported (Base) | ~0.58h (Higher trims) <br />
                  Slow Charge: 5.5h (Base) | 9.5h (Higher trims)
                </p>
              </div>
            </div>

            {/* Chassis */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Cpu className="w-6 h-6 text-purple-600 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Chassis</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Front Suspension: MacPherson Strut <br />
                  Rear Suspension: Torsion Beam <br />
                  Rear Brakes: Drum (Base) | Disc (Higher trims) <br />
                  Parking Brake: Handbrake (Base) | Electronic (Higher trims)
                </p>
              </div>
            </div>

            {/* Safety */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Shield className="w-6 h-6 text-indigo-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Safety</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Airbags: Driver + Passenger (Base) <br />
                  Higher trims add: TPMS, Cruise Control, Rear Camera
                </p>
              </div>
            </div>

            {/* Interior & Infotainment */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Sofa className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Interior & Infotainment</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Base: No Infotainment Screen <br />
                  Lingxi Connect: 10.25" LCD Screen <br />
                  Premium: 7" LCD Screen <br />
                  Tyres: 185/60 R15 (All Trims)
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <DollarSign className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Price</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  New: <span className="font-bold">$23,875</span> <br />
                  Second-hand: <span className="font-bold">$18,662</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Bingo;
