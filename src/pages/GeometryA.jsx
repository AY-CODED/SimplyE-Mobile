import { Car, Gauge, Battery, Disc, Sparkles, DollarSign } from "lucide-react";
import { useEffect } from "react";
const GeometryA = () => {
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);
  
  return (
    <div className="p-20 lg:p-16 mt-20 bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        
        {/* Car Image */}
        <div className="flex justify-center">
          <img
            src="/GA.jpeg"
            alt="Geometry A"
            className="rounded-2xl shadow-lg w-full max-w-lg object-cover"
          />
        </div>

        {/* Car Details */}
        <div>
          <h1 className="text-4xl font-bold text-blue-700">Geometry A</h1>
          <p className="mt-3 text-gray-600 text-lg">
            Budget-friendly EV sedan with efficient range and practical features.
          </p>

          <div className="mt-8 space-y-6">
            
            {/* Basic Info */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Car className="w-6 h-6 text-blue-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Basic Info</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Brand: Geely Premium EV Sub-brand <br />
                  Vehicle Class: Compact Sedan <br />
                  Launch Date: Apr-19 <br />
                  Dimensions (L×W×H): 4736 × 1804 × 1530 mm <br />
                  Wheelbase: 2700 mm <br />
                  Ground Clearance: 120 mm <br />
                  Curb Weight: 1650 kg <br />
                  Trunk Capacity: 430 L (rear seats foldable)
                </p>
              </div>
            </div>

            {/* Performance */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Gauge className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Performance</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Motor Type: Permanent Magnet Sync (Front Single Motor) <br />
                  Max Power: 120 kW (163 PS) <br />
                  Max Torque: 250 Nm <br />
                  0–100 km/h: 8.8s <br />
                  Top Speed: 150 km/h
                </p>
              </div>
            </div>

            {/* Battery & Range */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Battery className="w-6 h-6 text-yellow-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Battery & Range</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Battery Type: NCM Lithium (CATL) <br />
                  Capacity: 51.9 kWh (Std) / 61.9 kWh (Long Range) <br />
                  NEDC Range: 410 km (Std) / 500 km (Long Range) <br />
                  Fast Charge (30%–80%): 0.5h (Std) / 0.55h (Long Range) <br />
                  Slow Charge: 8h (Std) / 11h (Long Range)
                </p>
              </div>
            </div>

            {/* Chassis & Brakes */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Disc className="w-6 h-6 text-red-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Chassis & Brakes</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Drive Layout: Front-Wheel Drive <br />
                  Front Suspension: MacPherson Independent <br />
                  Rear Suspension: Torsion Beam Non-Independent <br />
                  Braking: Front Ventilated Disc / Rear Disc + EPB <br />
                  Tire Size: 205/60 R16 (Base) / 195/50 R18 (High)
                </p>
              </div>
            </div>

            {/* Key Variations */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <Sparkles className="w-6 h-6 text-purple-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Key Variations</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  L2 Autonomy in High-trim: Lane Keep + ACC <br />
                  Airbags: Std Front + Side; High-trim Add Curtain <br />
                  Seats: EU-certified Fabric or Synthetic Leather
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-3">
              <DollarSign className="w-6 h-6 text-green-500 mt-1" />
              <div>
                <h2 className="font-semibold text-gray-800">Price</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Second-hand: <span className="font-bold">$21,960</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default GeometryA;
