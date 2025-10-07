import { Battery, Car, Zap, Shield, Cpu, Ruler, DollarSign, Gauge } from "lucide-react";
import { useEffect } from "react";

const Tangl = () => {
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);
  
  return (
    <div className="p-10 lg:p-30 bg-gray-50 mt-20">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        
        {/* Car Image */}
        <div className="flex justify-center">
          <img
            src="/Tangl.jpeg"
            alt="Tang L"
            className="rounded-2xl shadow-xl w-full max-w-lg object-cover"
          />
        </div>

        {/* Car Info */}
        <div>
          <h1 className="text-4xl font-bold text-blue-700">Tang L</h1>
          <p className="mt-3 text-gray-600 text-lg">
            Luxury full-size electric SUV designed for comfort, long trips, and cutting-edge technology. 
            Available in both RWD and AWD variants.
          </p>

          {/* Price */}
          <div className="mt-6 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-gray-800">New: $49,125</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-yellow-600" />
              <span className="text-gray-600">Second-hand: $29,132</span>
            </div>
          </div>

          {/* Specs */}
          <div className="mt-10 space-y-6">

            {/* Performance */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Cpu className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Performance</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Drive Type: RWD (Single Motor) / AWD (Dual Motor) <br />
                  Front Motor (AWD): 180 kW • Rear Motor: 200 kW <br />
                  Total Power (AWD): 360 kW (≈ 150 hp) <br />
                  Acceleration 0–100 km/h: 4.4s (AWD)
                </p>
              </div>
            </div>

            {/* Battery & Range */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Battery className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Battery & Range</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Blade Battery (LFP) • Capacity: 108.8 kWh <br />
                  Range (CLTC): 730 km (RWD) • 635 km (AWD)
                </p>
              </div>
            </div>

            {/* Charging */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Zap className="w-6 h-6 text-yellow-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Charging</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Dual-gun fast charging support <br />
                  High efficiency for long journeys
                </p>
              </div>
            </div>

            {/* Dimensions */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Ruler className="w-6 h-6 text-purple-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Specifications</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Segment: Full-Size Electric SUV <br />
                  Dimensions: 4900 × 1950 × 1725 mm <br />
                  Wheelbase: 2820 mm <br />
                  Seating Layout: 6-seat (main) / 7-seat optional
                </p>
              </div>
            </div>

            {/* Interior Tech */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Car className="w-6 h-6 text-red-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Interior Tech</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Central Display: 15.6″ Adaptive Rotating Screen <br />
                  Infotainment: DiLink 4.0 (5G version) <br />
                  Audio: 12-speaker Dynaudio <br />
                  Seat Features: 2nd-row independent heated/ventilated seats
                </p>
              </div>
            </div>

            {/* Autonomous Driving */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Shield className="w-6 h-6 text-indigo-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Autonomous Driving</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Equipped with ADAS hardware including front corner radar <br />
                  Supports advanced DiPilot driving assistance features
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Tangl;
