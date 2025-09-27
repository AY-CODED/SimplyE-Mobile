import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('/BYD_HAN.jpg')" }} // replace with your image path
    >
      {/* Hero Content */}
      <div className="flex flex-1 flex-col items-center justify-center text-center text-white bg-black/55 px-6">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Welcome to Simply-Emobile
        </h1>
        <p className="text-lg sm:text-xl">
          Get an electric vehicle that suits your lifestyle.
        </p>
      </div>
    </div>
  );
};

export default Home;
