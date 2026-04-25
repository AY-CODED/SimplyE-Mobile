import { Battery, Gauge, Car, Zap, Shield, Cpu, Ruler, DollarSign, Disc, Monitor, Sparkles } from "lucide-react";
import { useEffect } from "react";
const GacAionY = () => {
    useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="p-10 lg:p-30 bg-gray-50 mt 20">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        
        {/* Car Image */}
        <div className="flex justify-center">
          <img
            src="/GAC.jpeg"
            alt="GAC AION Y"
            className="rounded-2xl shadow-xl w-full max-w-lg object-cover"
          />
        </div>

        {/* Car Info */}
        <div>
          <h1 className="text-4xl font-bold text-blue-700">GAC AION Y</h1>
          <p className="mt-3 text-gray-600 text-lg">
            Affordable EV designed for city lifestyle with smart features,
            practical range options, and modern technology.
          </p>

          {/* Price */}
          <div className="mt-6 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-gray-800">New: $38,413</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-yellow-600" />
              <span className="text-gray-600">Second-hand: $25,805</span>
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
                  Vehicle Type: Compact Electric SUV <br />
                  Drivetrain: Permanent Magnet Synchronous <br />
                  Max Power: 70kW (95hp) / 135kW (184hp, 70/80 Version) <br />
                  Peak Torque: 225 N·m
                </p>
              </div>
            </div>

            {/* Battery & Range */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Battery className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Battery & Range</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  60 Version: 55.05 kWh LFP (410 km) <br />
                  70 Version: 63.68 kWh LFP (500 km) <br />
                  80 Version: 76.8 kWh NCM (600 km) <br />
                  Tech: Needle-puncture proof
                </p>
              </div>
            </div>

            {/* Powertrain */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Cpu className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Powertrain</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Drive: Front-wheel Drive <br />
                  Transmission: Single-speed automatic
                </p>
              </div>
            </div>

            {/* Chassis */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Gauge className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Chassis</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Front Suspension: MacPherson <br />
                  Rear Suspension: Torsion Beam
                </p>
              </div>
            </div>

            {/* Wheels & Brakes */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Disc className="w-6 h-6 text-gray-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Wheels & Brakes</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tire Sizes: 215/55 R17 (Base), 215/50 R18 (High) <br />
                  Brakes: Front Ventilated Disc / Rear Solid Disc + EPB
                </p>
              </div>
            </div>

            {/* Dimensions */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Ruler className="w-6 h-6 text-purple-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Dimensions</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  L × W × H: 4410 × 1760 × 1545 mm <br />
                  Wheelbase: 2750 mm <br />
                  Curb Weight: 1735 kg (70 Version)
                </p>
              </div>
            </div>

            {/* Smart Features */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Monitor className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Smart Features</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Standard: BCM/Keyless (Auto lock), 14.6″ Touchscreen, OTA <br />
                  Advanced: Bluetooth Key, Power Tailgate, Remote Parking, 150m Summon
                </p>
              </div>
            </div>

            {/* Safety */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Shield className="w-6 h-6 text-red-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Safety</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Base: Dual Front Airbags, TPMS, Rear Camera <br />
                  Advanced: Side-Curtain Airbags, AEB, Full-speed ACC
                </p>
              </div>
            </div>

            {/* Special Functions */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Sparkles className="w-6 h-6 text-yellow-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Special Functions</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  V2L Discharge <br />
                  Heat Pump AC <br />
                  Panoramic Roof (70 Tech+)
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default GacAionY;
