import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import About from "./pages/AboutAndProducts";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Landing from "./pages/LandingPage";
import ElectricBike from "./pages/ElectricBike";
import ElectricTricycle from "./pages/ElectricTricycle";
import ElectricCar from "./pages/ElectricCar";
import FleetSolutions from "./pages/FleetSolutions";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/products/electric-bikes" element={<ElectricBike />} />
          <Route path="/products/electric-tricycles" element={<ElectricTricycle />} />
          <Route path="/products/electric-cars" element={<ElectricCar />} />
          <Route path="/products/fleet-solutions" element={<FleetSolutions />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
