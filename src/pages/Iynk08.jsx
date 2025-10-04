import { Battery, Gauge, Car, Zap, Shield, Cpu, Ruler, DollarSign, Disc, Monitor, Sparkles, Sun, Lightbulb } from "lucide-react";

const Iynk08 = () => {
  return (
    <div className="p-10 lg:p-30 bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        
        {/* Car Image */}
        <div className="flex justify-center">
          <img
            src="/L8.jpeg"
            alt="IYNK & CO 08"
            className="rounded-2xl shadow-xl w-full max-w-lg object-cover"
          />
        </div>

        {/* Car Info */}
        <div>
          <h1 className="text-4xl font-bold text-blue-700">IYNK & CO 08</h1>
          <p className="mt-3 text-gray-600 text-lg">
            Crossover EV with futuristic styling, advanced hybrid powertrain, 
            long range, and luxury smart tech.
          </p>

          {/* Price */}
          <div className="mt-6 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-gray-800">New: $48,950</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-yellow-600" />
              <span className="text-gray-600">Second-hand: $41,156</span>
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
                  Vehicle Type: Mid-size PHEV SUV <br />
                  Energy Type: Plug-in Hybrid (PHEV) <br />
                  Engine: 1.5T 4-cylinder Turbo (BHE15-BFZ) Sport Ver. <br />
                  Engine Max Power/Torque: 120kW (163hp)/250Nm
                </p>
              </div>
            </div>

            {/* Powertrain */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Cpu className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Powertrain</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Drive Motor: Front (150kW/310Nm) <br />
                  AWD: Dual Motors (Front 150kW/310Nm, Rear 158kW/320Nm) <br />
                  System Power/Torque: FWD 408kW/685Nm | AWD 436kW/775Nm <br />
                  Transmission: 3-speed DHT Dedicated Hybrid Transmission
                </p>
              </div>
            </div>

            {/* Battery & Range */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Battery className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Battery & Range</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Battery Type: Ternary Lithium (CATL/SVOLT) <br />
                  Capacity: 21.2 kWh <br />
                  CLTC Pure Electric Range: 120km / 125km / 140km <br />
                  Total Range: 1250km / 1268km <br />
                  Fast Charge (30-80%): 25 mins
                </p>
              </div>
            </div>

            {/* Chassis & Brakes */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Gauge className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Chassis & Brakes</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Suspension: Front MacPherson + Rear Multi-link (with stabilizer bar) <br />
                  Drive Mode: FWD / Electric AWD <br />
                  Tire Size: 235/55 R19 / 265/45 R20 <br />
                  Brake System: Ventilated Disc (Front/Rear) + Electronic Parking
                </p>
              </div>
            </div>

            {/* Dimensions */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Ruler className="w-6 h-6 text-purple-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Dimensions</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  L × W × H: 4820 × 1915 × 1665 mm <br />
                  Wheelbase: 2845 mm <br />
                  Curb Weight: ~1970-2140 kg (depending on battery)
                </p>
              </div>
            </div>

            {/* Exterior */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Sun className="w-6 h-6 text-yellow-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Exterior</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sunroof: Panoramic <br />
                  Lighting: LED Matrix Headlights + Full-width Taillights
                </p>
              </div>
            </div>

            {/* Interior & Tech */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Monitor className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Interior & Tech</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Infotainment Screen: 15.6″ (3+1 mode, 8-core CPU, 5nm) <br />
                  Instrument Cluster: 12.3″ LCD + 27″ AR-HUD <br />
                  Seats: Front Heating / Ventilation / Massage <br />
                  Smart Driving: L2 ADAS (Full-speed ACC + Lane Centering) <br />
                  Audio: Harman Kardon 25-speaker (high trim optional)
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Iynk08;
