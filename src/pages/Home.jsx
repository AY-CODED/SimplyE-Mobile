<<<<<<< HEAD
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setShowModal(true);
  }, []);

=======
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);
  
  // Smooth scroll handler
>>>>>>> 023b53cd7e46af7aa39d5ebc3f293169443e7392
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
<<<<<<< HEAD
      style={{ backgroundImage: "url('/BYD_HAN.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

=======
      style={{ backgroundImage: "url('/BYD_HAN.jpg')" }} // replace with your image path
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
>>>>>>> 023b53cd7e46af7aa39d5ebc3f293169443e7392
      <div className="relative flex flex-1 flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-10">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-snug sm:leading-tight">
          Welcome to Simply-Emobile
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl">
          Get an electric vehicle that suits your lifestyle.
        </p>

<<<<<<< HEAD
=======
        {/* CTA Button */}
>>>>>>> 023b53cd7e46af7aa39d5ebc3f293169443e7392
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
<<<<<<< HEAD

      {/* Image Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="relative inline-block max-w-full">
            {/* Modal Image */}
            <img
              src="/modal.jpeg"
              alt="Promotion"
              className="block h-auto max-h-[85vh] max-w-full rounded-lg shadow-2xl"
            />
            
            {/* Close Button positioned specifically on the image corner */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 p-1 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors backdrop-blur-sm"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
=======
>>>>>>> 023b53cd7e46af7aa39d5ebc3f293169443e7392
    </div>
  );
};

<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> 023b53cd7e46af7aa39d5ebc3f293169443e7392
