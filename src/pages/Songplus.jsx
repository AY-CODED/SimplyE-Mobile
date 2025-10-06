import { Battery, Car, Zap, Shield, Cpu, Ruler, DollarSign } from "lucide-react";
import { useEffect } from "react";
useEffect
const Songplus = () => {
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);
  
  return (
    <div className="p-10 lg:p-30 bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        
        {/* Car Image */}
        <div className="flex justify-center">
          <img
            src="/Song.jpeg"
            alt="Song PLUS DM-i110km"
            className="rounded-2xl shadow-xl w-full max-w-lg object-cover"
          />
        </div>

        {/* Car Info */}
        <div>
          <h1 className="text-4xl font-bold text-blue-700">Song PLUS DM-i110km</h1>
          <p className="mt-3 text-gray-600 text-lg">
            Stylish crossover EV built for families and long-distance travel, 
            available in both DM-i hybrid and full EV versions.
          </p>

          {/* Price */}
          <div className="mt-6 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-gray-800">New: $40,207</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-yellow-600" />
              <span className="text-gray-600">Second-hand: $24,883</span>
            </div>
          </div>

          {/* Specs */}
          <div className="mt-10 space-y-6">

            {/* Powertrain */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Cpu className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Powertrain</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  DM-i Super Hybrid / Pure Electric <br />
                  Engine: 1.5L Xiaoyun PHEV (DM-i Only) <br />
                  Motor Power: 145 kW (DM-i) / 160 kW (EV) <br />
                  Total System Power: 226 kW (DM-i Combined) <br />
                  Acceleration: 0–100 km/h → 7.9s (DM-i) / 8.5s (EV)
                </p>
              </div>
            </div>

            {/* Battery */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Battery className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Battery</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Blade Battery (LFP) <br />
                  Capacity: 18.3 kWh (DM-i) / 87.04 kWh (EV) <br />
                  EV Range (NEDC): 110 km (DM-i) / 605 km (EV) <br />
                  Total Range (CLTC): 1200 km+ (DM-i) <br />
                  Fuel Economy (CLTC): 0.9 L/100km (DM-i) <br />
                  Energy Consumption: 14.1 kWh/100km (EV)
                </p>
              </div>
            </div>

            {/* Charging */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Zap className="w-6 h-6 text-yellow-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Charging</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  DM-i: 30% → 80% in 30 mins <br />
                  EV: 10% → 80% in 40 mins
                </p>
              </div>
            </div>

            {/* Dimensions */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Ruler className="w-6 h-6 text-purple-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Dimensions</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  4705 × 1890 × 1680 mm <br />
                  Wheelbase: 2765 mm <br />
                  Interior: 12.8″ Rotatable Screen + DiLink 4.0
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Car className="w-6 h-6 text-red-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Tech Features</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  DiPilot Driving Assist <br />
                  VTOL Mobile Power Station (V2L)
                </p>
              </div>
            </div>

            {/* Safety */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Shield className="w-6 h-6 text-indigo-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Safety</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Advanced stability & safety systems <br />
                  Strong build for family protection
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Songplus;
