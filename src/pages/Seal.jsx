import { Battery, Car, Zap, Shield, Cpu, Ruler, DollarSign, Gauge } from "lucide-react";

const Seal = () => {
  return (
    <div className="p-10 lg:p-30 bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        
        {/* Car Image */}
        <div className="flex justify-center">
          <img
            src="/Seal.jpeg"
            alt="Seal 2023 Champion 550km"
            className="rounded-2xl shadow-xl w-full max-w-lg object-cover"
          />
        </div>

        {/* Car Info */}
        <div>
          <h1 className="text-4xl font-bold text-blue-700">
            Seal 2023 Champion 550km
          </h1>
          <p className="mt-3 text-gray-600 text-lg">
            Premium electric sedan with exceptional range, advanced aerodynamics, 
            and luxury comfort for modern EV enthusiasts.
          </p>

          {/* Price */}
          <div className="mt-6 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-gray-800">New: $49,975</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-yellow-600" />
              <span className="text-gray-600">Second-hand: $30,462</span>
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
                  RWD Electric Motor <br />
                  Power: 204 kW (278 hp) • Torque: 310 Nm <br />
                  Acceleration (0–100 km/h): 7.5s
                </p>
              </div>
            </div>

            {/* Battery */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Battery className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Battery</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Blade Battery (LFP) • Capacity: 61.4 kWh <br />
                  Range (CLTC): 550 km <br />
                  Energy Consumption: 12.6 kWh/100 km
                </p>
              </div>
            </div>

            {/* Charging */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Zap className="w-6 h-6 text-yellow-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Charging</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Fast Charge: 110 kW DC (30–80% in 30 mins) <br />
                  Slow Charge: 7 kW AC (0–100% in 8.5 hrs)
                </p>
              </div>
            </div>

            {/* Dimensions */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Ruler className="w-6 h-6 text-purple-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Dimensions</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  4800 × 1875 × 1460 mm <br />
                  Wheelbase: 2920 mm <br />
                  15.6″ Rotatable Screen + DiLink 5.0
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Car className="w-6 h-6 text-red-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Tech Features</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  DiPilot L2 Driving Assist <br />
                  CTB Battery Integration Tech <br />
                  Drag Coefficient: 0.219 Cd
                </p>
              </div>
            </div>

            {/* Safety & Suspension */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Shield className="w-6 h-6 text-indigo-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Safety & Comfort</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Double Wishbone + Multi-link Suspension <br />
                  Premium safety and ride stability
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Seal;
