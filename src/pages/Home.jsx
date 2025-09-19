    const Home = () => {
    return (
        <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">
        {/* Watermark text */}
        <div className="absolute top-45 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[20rem] text-slate-400/40 tracking-tight z-0 select-none">
            Seal
        </div>

        {/* Content */}
        <div className="relative z-20 flex gap-20 p-8 justify-between -mt-28">
            {/* Left section: text */}
            <div className="max-w-lg space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                Get your Electric{" "}
                <span className="text-blue-600">Vehicles</span> now
            </h1>
            <p className="text-gray-600 text-lg">
                Discover our premium range of electric cars, bikes, and tricycles.
                Drive into the future of mobility today.
            </p>
            <button className="px-8 py-4 bg-blue-600 text-white text-lg font-medium rounded-xl shadow-md hover:bg-blue-700 hover:cursor-pointer transition">
                Explore Fleet
            </button>
            </div>

            {/* Right section: car image */}
            <div className="flex-shrink-0">
            <img
                src="/landingcar.png"
                alt="Electric Car"
                className="w-[45rem] max-w-full drop-shadow-2xl"/>
            </div>
        </div>
        </div>
    );
    };

    export default Home;
