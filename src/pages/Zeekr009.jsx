import { Car, Gauge, Battery, Disc, Shield, Ruler, Cpu, DollarSign, Monitor } from "lucide-react";

const Zeekr009 = () => {
  return (
    <div className="p-8 lg:p-16 mt-20 bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-10 items-start">

        {/* Car Image */}
        <div className="flex justify-center">
          <img
            src="/Z009.webp"
            alt="ZEEKR 009"
            className="rounded-2xl shadow-lg w-full max-w-lg object-cover"
          />
        </div>

        {/* Details Section */}
        <div>
          <h1 className="text-4xl font-bold text-purple-600">ZEEKR 009</h1>
          <p className="mt-3 text-gray-600 text-lg">
            Luxury MPV EV with futuristic styling, cutting-edge safety, and a tech-forward interior experience.
          </p>

          <div className="mt-8 space-y-6">

            {/* Basic Info */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Car className="w-6 h-6 text-purple-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Basic Info</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Body: 5-door, 5-seat SUV <br />
                  Trims: Base Model / Premium Model <br />
                  Warranty: 4 yr / 120,000 km (vehicle), 8 yr / 150,000 km (battery)
                </p>
              </div>
            </div>

            {/* Dimensions */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Ruler className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Dimensions</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Length × Width × Height: 4750 × 1905 × 1675 mm <br />
                  Wheelbase: 2930 mm
                </p>
              </div>
            </div>

            {/* Powertrain */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Gauge className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Powertrain</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Motor: Rear Permanent Magnet Synchronous Motor <br />
                  Max Power: 230 kW (312 HP) <br />
                  Max Torque: 360 Nm <br />
                  0–100 km/h: 7.0 s (Base) | 7.9 s (Premium) <br />
                  Drivetrain: RWD (Rear-Wheel Drive)
                </p>
              </div>
            </div>

            {/* Battery & Range */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Battery className="w-6 h-6 text-yellow-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Battery & Range</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Base Model: 75.6 kWh LFP Battery – 510 km CLTC Range <br />
                  Premium Model: 80 kWh NCM Battery – 605 km CLTC Range <br />
                  Fast Charge (30–80%): ~30 min <br />
                  Slow Charge: 6.5 h (Base) | 7.5 h (Premium)
                </p>
              </div>
            </div>

            {/* Chassis & Brakes */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Cpu className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Chassis & Brakes</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Front Suspension: Double Wishbone <br />
                  Rear Suspension: Multi-link <br />
                  Brakes: Ventilated Discs (Front & Rear) <br />
                  Tyres: 235/60 R18
                </p>
              </div>
            </div>

            {/* Smart Cabin */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Monitor className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Smart Cabin</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Triple Display: 10.25” Instrument + 12.8” Center + 10.25” Co-driver <br />
                  Driving Assist: Leapmotor Pilot 3.0 (L2) <br />
                  Sensors: 28 units (Cameras + Radars)
                </p>
              </div>
            </div>

            {/* Safety */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Shield className="w-6 h-6 text-red-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Safety & Driver Assist</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Active Safety: Lane Keeping, AEB, Full-speed ACC <br />
                  28 total sensors for enhanced driving awareness
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <DollarSign className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Price</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  New: <span className="font-bold">$99,463</span> <br />
                  Second-hand: <span className="font-bold">$82,051</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Zeekr009;
