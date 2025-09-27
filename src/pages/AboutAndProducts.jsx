// About + Products Sections
const AboutAndProducts = () => {
    const products = [
        {
            title: "Electric Bikes",
            desc: "Commuter & cargo variants for individuals and last-mile couriers.",
            img: "/BIke.jpeg",
        },
        {
            title: "Electric Tricycles",
            desc: "Passenger & cargo models for estates and local routes.",
            img: "/Tricycle.jpeg",
        },
        {
            title: "Electric Cars",
            desc: "Efficient electric cars for logistics and daily use.",
            img: "/BYD_HAN.jpg",
        },
        {
            title: "Fleet & After-Sales",
            desc: "Procurement, financing, maintenance, spare parts & technician training.",
            img: "/Solutions.jpeg",
        },
    ];

    return (
        <div className="bg-white">
            {/* About Us */}
            <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    {/* Left text */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            About <span className="text-blue-600">Simply E-Mobiles</span>
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            We are a Nigerian electric mobility company delivering affordable, reliable,
                            and locally-appropriate transport solutions. From electric bikes and tricycles
                            to cars and fleet packages, we’re accelerating the transition to sustainable
                            mobility in Africa.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our mission is to power safe, clean, and efficient movement for people and goods
                            while offering dependable after-sales support including maintenance, warranties,
                            and spare parts.
                        </p>
                    </div>

                    {/* Right image */}
                    <div className="flex justify-center">
                        <img
                            src="/Charge.jpg"
                            alt="About Simply E-Mobiles"
                            className="w-full max-w-md rounded-2xl shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-16 px-6 md:px-16 lg:px-24">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                        Our <span className="text-blue-600">Products & Solutions</span>
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {products.map((item, index) => (
                            <div
                                key={index}
                                // Increased padding from 'p-6' to 'p-8'
                                className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
                            >
                                <img
                                    // Increased image size from 'w-20 h-20' to 'w-24 h-24'
                                    src={item.img}
                                    alt={item.title}
                                    className="w-24 h-24 object-contain mx-auto mb-6"
                                />
                                <h3
                                    // Increased title size from 'text-xl' to 'text-2xl'
                                    className="text-2xl font-semibold text-gray-800 mb-3"
                                >
                                    {item.title}
                                </h3>
                                <p
                                    // Increased description size from 'text-sm' to 'text-base'
                                    className="text-gray-600 text-base"
                                >
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutAndProducts;