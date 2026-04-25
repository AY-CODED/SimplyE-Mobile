import { Car, Gauge, Battery, Disc, Shield, Sofa, Cpu, DollarSign } from "lucide-react";
import { useEffect } from "react";

const AitoM8 = () => {
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);
  
  return (
    <div className="p-8 lg:p-16 mt-20 bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        
        {/* Car Image */}
        <div className="flex justify-center">
          <img
            src="/AltoM8.jpeg"
            alt="AITO M8"
            className="rounded-2xl shadow-lg w-full max-w-lg object-cover"
          />
        </div>

        {/* Car Details */}
        <div>
          <h1 className="text-4xl font-bold text-blue-700">AITO M8</h1>
          <p className="mt-3 text-gray-600 text-lg">
            Luxury MPV with spacious design, advanced tech, and long range.
          </p>

          <div className="mt-8 space-y-6">
            
            {/* Basic Info */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Car className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Basic Info</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Positioning: Family Smart Flagship SUV <br />
                  Dimensions (L×W×H): 5190 × 1999 × 1795 mm <br />
                  Wheelbase: 3105 mm <br />
                  Seating: 5/6 seats optional <br />
                  Curb Weight: 2640–2715 kg
                </p>
              </div>
            </div>

            {/* Powertrain */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Gauge className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Powertrain</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Range Extender: 1.5T (113 kW Max Power) <br />
                  Motors: Front 165 kW + Rear 227 kW <br />
                  Combined Output: 392 kW / 533 PS <br />
                  0–100 km/h: 5.2s <br />
                  Top Speed: 200 km/h <br />
                  Fuel Consumption: 6.5–6.8 L/100 km
                </p>
              </div>
            </div>

            {/* Battery & Charging */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Battery className="w-6 h-6 text-yellow-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Battery & Charging</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  CLTC EV Range: 201 km (LFP) / 310 km (NCM) <br />
                  Total Range: 1400 km (LFP) / 1520 km (NCM)
                </p>
              </div>
            </div>

            {/* Autonomous Drive */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Cpu className="w-6 h-6 text-purple-600 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Autonomous Drive</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  System: HUAWEI ADS 3.0 (Map-free NCA) <br />
                  Sensors: 30 (incl. 3 Lidars: Roof 192-Line + Rear Solid-State) <br />
                  Features: Parking-to-Parking Pilot, Auto Parking, Narrow Road Assist, Light Projection
                </p>
              </div>
            </div>

            {/* Smart Cabin */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Sofa className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Smart Cabin</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  OS: HarmonyOS 4.0 <br />
                  Screens: 12.3" Instrument + 15.6" Central + 16" Co-driver + AR-HUD (68" equivalent) <br />
                  2nd Row: 32" Laser Projection Screen (Floating Window Mode) <br />
                  Audio: HUAWEI SOUND (19 Speakers + Headrest Audio)
                </p>
              </div>
            </div>

            {/* Chassis & Comfort */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Disc className="w-6 h-6 text-red-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Chassis & Comfort</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Platform: HUAWEI TURING Intelligent Chassis <br />
                  Suspension: Front Double Wishbone + Rear Multi-Link <br />
                  Features: Air Suspension + CDC Damping, Road Preview 2.0, Torque Vectoring (&lt;5ms response) <br />
                  Seats: Zero Gravity Seat (2nd Row Right, 6-seat version), Heating/Ventilation/Massage <br />
                  AC: Quad-Zone Independent Control <br />
                  Cooler/Heater: 7.3L Compressor (-30°C to 50°C) <br />
                  Lights: Million-Pixel Projection Headlights (City Light Scenes)
                </p>
              </div>
            </div>

            {/* Safety */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Shield className="w-6 h-6 text-indigo-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Safety</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Material: Aluminum + High-Strength Steel (81%) <br />
                  Airbags: 9 <br />
                  Collision Avoidance: Omnidirectional Active Protection (effective up to 150 km/h)
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <DollarSign className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Price</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  New: <span className="font-bold">$90,863</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AitoM8;
