import { Car, Gauge, Battery, Disc, Shield, Sofa, DollarSign } from "lucide-react";

const Galaxyl7 = () => {
  return (
    <div className="p-8 lg:p-16 mt-20 bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        
        {/* Car Image */}
        <div className="flex justify-center">
          <img
            src="/GL7.jpeg"
            alt="Galaxy L7"
            className="rounded-2xl shadow-lg w-full max-w-lg object-cover"
          />
        </div>

        {/* Car Details */}
        <div>
          <h1 className="text-4xl font-bold text-blue-700">Galaxy L7</h1>
          <p className="mt-3 text-gray-600 text-lg">
            Luxury EV crossover with stylish looks and advanced technology.
          </p>

          <div className="mt-8 space-y-6">
            
            {/* Basic Info */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Car className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Basic Info</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Segment: Compact SUV <br />
                  Dimensions (L×W×H): 4100 × 1830 × 1600 mm <br />
                  Wheelbase: 2580 mm <br />
                  Curb Weight: 1520 kg <br />
                  Fuel Tank: 60 L <br />
                  Trunk Volume: 650 L (1700 L with rear seats folded)
                </p>
              </div>
            </div>

            {/* Powertrain */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Gauge className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Powertrain</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Engine: 1.5T Turbo (Range Extender) <br />
                  Motor: Permanent Magnet Sync (107 kW / 338 Nm) <br />
                  System Power: 267 kW <br />
                  System Torque: 535 Nm <br />
                  Transmission: 3-speed DHT Pro <br />
                  0–100 km/h: 6.9s <br />
                  Top Speed: 200 km/h
                </p>
              </div>
            </div>

            {/* Battery & Charging */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Battery className="w-6 h-6 text-yellow-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Battery & Charging</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Battery Type: LFP (CTP Flat Battery) <br />
                  Capacity: 9.11 kWh (53 km) / 18.7 kWh (115 km) <br />
                  CLTC EV Range: 53 km / 115 km <br />
                  Total Range: 1310 km / 1370 km <br />
                  Fast Charge (30%–80%): 30 min <br />
                  V2L Power: 3.3 kW
                </p>
              </div>
            </div>

            {/* Chassis & Brakes */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Disc className="w-6 h-6 text-red-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Chassis & Brakes</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Drivetrain: Front-Wheel Drive <br />
                  Front Suspension: MacPherson Strut <br />
                  Rear Suspension: Multi-link (E-type) <br />
                  Brakes: Ventilated Discs (Front/Rear)
                </p>
              </div>
            </div>

            {/* Driver Assistance & Safety */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Shield className="w-6 h-6 text-purple-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Driver Assistance & Safety</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  ADAS: L2 Autopilot (Top Trim) <br />
                  Features: AEB, ACC, Lane Keeping, Traffic Sign Recognition <br />
                  Shield Battery System: Passed Nail/Gun tests <br />
                  Airbags: 6 Standard
                </p>
              </div>
            </div>

            {/* Interior & Comfort */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Sofa className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Interior & Comfort</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Seats: Synthetic Leather, Ventilation + Heating + Massage (Driver), Leg Support/Physiotherapy (Passenger) <br />
                  AC: Dual-Zone Auto + PM2.5 Filter <br />
                  Sunroof: Openable Panoramic (Optional) <br />
                  Screens: 10.25" Instrument + 12.3" Center + 12.3" Passenger <br />
                  Chip: Qualcomm Snapdragon 8155 <br />
                  OS: Galaxy N OS <br />
                  Audio: 11-speaker Infinity (Top Trim)
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <DollarSign className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Price</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  New: <span className="font-bold">$42,594</span> <br />
                  Second-hand: <span className="font-bold">$31,947</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Galaxyl7;
