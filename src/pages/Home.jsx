import { useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);
  
  // Smooth scroll handler
  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("About");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative h-screen flex flex-col bg-cover bg-center sm:bg-top lg:bg-center"
      style={{ backgroundImage: "url('/BYD_HAN.jpg')" }} // replace with your image path
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative flex flex-1 flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-10">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-snug sm:leading-tight">
          Welcome to Simply-Emobile
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl">
          Get an electric vehicle that suits your lifestyle.
        </p>

        {/* CTA Button */}
        <div className="mt-6">
          <Link
            to="#About"
            onClick={scrollToAbout}
            className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white text-base sm:text-lg font-medium rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            Explore Fleet
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
