import { Battery, Gauge, Car, Shield, Cpu, Ruler, DollarSign, Disc, Monitor, Mountain, Zap, Sparkles } from "lucide-react";
import { useEffect } from "react";

const Icar03 = () => {
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);
  
  return (
    <div className="p-10 lg:p-30 bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        
        {/* Car Image */}
        <div className="flex justify-center">
          <img
            src="/ICAR.jpeg"
            alt="ICAR03"
            className="rounded-2xl shadow-xl w-full max-w-lg object-cover"
          />
        </div>

        {/* Car Info */}
        <div>
          <h1 className="text-4xl font-bold text-blue-700">ICAR03</h1>
          <p className="mt-3 text-gray-600 text-lg">
            Compact EV with smart city features and impressive off-road capability,
            offering flexibility between RWD and AWD with advanced tech inside.
          </p>

          {/* Price */}
          <div className="mt-6 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-gray-800">New: $38,425</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-yellow-600" />
              <span className="text-gray-600">Second-hand: $30,583</span>
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
                  Vehicle Type: Compact Electric SUV (“Boxy” design) <br />
                  Drivetrain: RWD (Single Motor) / AWD (Dual Motor) <br />
                  Single Motor: 135kW (184hp) / 225Nm <br />
                  Dual Motor: 205kW (279hp) / 372Nm (0–100 km/h in 6.5s) <br />
                  AWD: iWD Smart Electric AWD (auto-switching)
                </p>
              </div>
            </div>

            {/* Powertrain */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Cpu className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Powertrain</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Suspension: Front MacPherson + Rear H-Multi-link <br />
                  Brakes: EPB + Ventilated Discs <br />
                  Ground Clearance: 170mm (Full Load)
                </p>
              </div>
            </div>

            {/* Battery & Range */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Battery className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Battery & Range</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Battery Type: LFP (CATL) <br />
                  Capacities: 50.6kWh (410km), 65.6kWh (510km), 77.6kWh (501km AWD) <br />
                  Battery Swap: 3 min swap (lifetime free for first owner) <br />
                  Fast Charge (30–80%): 30 mins
                </p>
              </div>
            </div>

            {/* Dimensions */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Ruler className="w-6 h-6 text-purple-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Dimensions</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  L × W × H: 4406 × 1910 × 1715 mm <br />
                  Wheelbase: 2715 mm <br />
                  Curb Weight: — <br />
                </p>
              </div>
            </div>

            {/* Off-Road Capability */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Mountain className="w-6 h-6 text-orange-600 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Off-Road Capability</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Approach/Departure Angle: 20° / 25° <br />
                  Max Climb Angle: 55% <br />
                  Wading Depth: 600mm <br />
                  Features: Tank Turn, Crawl Mode, 9 Drive Modes
                </p>
              </div>
            </div>

            {/* Smart Features */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Sparkles className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Smart Features</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Chip: Snapdragon 8155 (base) / Snapdragon 8i55 (high) <br />
                  Display: 15.6″ Touchscreen + 9.2″ Digital Cluster
                </p>
              </div>
            </div>

            {/* ADAS */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Zap className="w-6 h-6 text-yellow-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">ADAS</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  L2 Level Adaptive Cruise Control <br />
                  Lane Keep + Auto Lane Change
                </p>
              </div>
            </div>

            {/* Safety */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Shield className="w-6 h-6 text-red-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Safety</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Body: Full Aluminum Cage (stiffness 21812Nm/°) <br />
                  Battery: Sandwich-structured Pack (22-ton anti-squeeze) <br />
                  Airbags: Front + Side-Curtain (high trim)
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Icar03;
