import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import About from "./pages/AboutAndProducts";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Landing from "./pages/LandingPage";
import ElectricBike from "./pages/ElectricBike";
import ElectricTricycle from "./pages/ElectricTricycle";
import ElectricCar from "./pages/ElectricCar";
import FleetSolutions from "./pages/FleetSolutions";
import BydInfo from "./pages/BydInfo";
import Seagull from "./pages/Seagull";
import Songplus from "./pages/Songplus";
import Seal from "./pages/Seal";
import Tangl from "./pages/Tangl";
import LiOne from "./pages/LiOne";
import Lil7 from "./pages/Lil7";
import Lil8 from "./pages/Lil8";
import Lil9 from "./pages/Lil9";
import NioEc6 from "./pages/NioEc6";
import NioEs6 from "./pages/NioEs6";
import NioEs8 from "./pages/NioEs8";
import GacAionY from "./pages/GacAionY";
import Iynk08 from "./pages/Iynk08";
import Icar03 from "./pages/Icar03";
import GeometryA from "./pages/GeometryA";
import Galaxyl7 from "./pages/GalaxyL7";
import Aitom8 from "./pages/AitoM8";
import G6 from "./pages/G6";
import Bingo from "./pages/Bingo";
import Zeekr009 from "./pages/Zeekr009";
import Zeekrc11 from "./pages/Zeekrc11";
import Zeekr10 from "./pages/Zeekr10";
import Modely from "./pages/Modely";
import Altom9 from "./pages/Altom9";
import Altom7 from "./pages/Altom7";
import Altom5 from "./pages/Altom5";
import Semdf from "./pages/Semdf";
import Sect from "./pages/Sect";
import Sech from "./pages/Sech";
import Sewx from "./pages/Sewx";
import Semzt from "./pages/Semzt";
import Seme1 from "./pages/Seme1";
import Seek07 from "./pages/Seek07";
import Seek02 from "./pages/Seek02";
import Seek03 from "./pages/Seek03";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          {/* Main Pages */}
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />

          {/* Product Categories */}
          <Route path="/products/electric-bikes" element={<ElectricBike />} />
          <Route path="/products/electric-tricycles" element={<ElectricTricycle />} />
          <Route path="/products/electric-cars" element={<ElectricCar />} />
          <Route path="/products/fleet-solutions" element={<FleetSolutions />} />

          {/* Car Pages */}
          <Route path="/BydInfo" element={<BydInfo />} />
          <Route path="/Seagull" element={<Seagull />} />
          <Route path="/Songplus" element={<Songplus />} />
          <Route path="/Seal" element={<Seal />} />
          <Route path="/Tangl" element={<Tangl />} />
          <Route path="/LiOne" element={<LiOne />} />
          <Route path="/Lil7" element={<Lil7 />} />
          <Route path="/Lil8" element={<Lil8 />} />
          <Route path="/Lil9" element={<Lil9 />} />
          <Route path="/NioEc6" element={<NioEc6 />} />
          <Route path="/NioEs6" element={<NioEs6 />} />
          <Route path="/NioEs8" element={<NioEs8 />} />
          <Route path="/GacAionY" element={<GacAionY />} />
          <Route path="/Iynk08" element={<Iynk08 />} />
          <Route path="/Icar03" element={<Icar03 />} />
          <Route path="/GeometryA" element={<GeometryA />} />
          <Route path="/Galaxyl7" element={<Galaxyl7 />} />
          <Route path="/Aitom8" element={<Aitom8 />} />
          <Route path="/G6" element={<G6 />} />
          <Route path="/Bingo" element={<Bingo />} />
          <Route path="/Zeekr009" element={<Zeekr009 />} />
          <Route path="/Zeekrc11" element={<Zeekrc11 />} />
          <Route path="/Zeekr10" element={<Zeekr10 />} />
          <Route path="/Modely" element={<Modely />} />
          <Route path="/Altom9" element={<Altom9 />} />
          <Route path="/Altom7" element={<Altom7 />} />
          <Route path="/Altom5" element={<Altom5 />} />

          {/* Electric Bike Detail Pages */}
          <Route path="/Semdf" element={<Semdf />} />
          <Route path="/Sect" element={<Sect />} />
          <Route path="/Sech" element={<Sech />} />
          <Route path="/Sewx" element={<Sewx />} />
          <Route path="/Semzt" element={<Semzt />} />

          {/* Electric Tricycle Detail Page */}
          <Route path="/Seme1" element={<Seme1/>}/>
          <Route path="/Seek07" element={<Seek07/>}/>
          <Route path="/Seek02" element={<Seek02/>}/>
          <Route path="/Seek03" element={<Seek03/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
