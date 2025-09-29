import { motion } from "framer-motion";

const AboutUs = () => {
    return (
        <div className="bg-gray-50 py-20 px-6 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-extrabold text-center text-blue-700 mb-10"
                >
                    About Our Company
                </motion.h1>

                {/* Company Overview */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-gray-700 leading-relaxed text-lg mb-8 text-center md:text-left"
                >
                    <span className="font-bold text-blue-600">Simply E-Mobiles</span> is a
                    Nigerian electric mobility company focused on delivering affordable,
                    reliable, and locally-appropriate electric transport solutions. We
                    combine product supply (new electric bikes, keke & EVs), fleet and
                    logistics applications, and after-sales support (servicing, warranties,
                    spare parts) to help businesses and communities switch to low-cost,
                    low-emission transport.
                </motion.p>

                {/* Vision & Mission Section */}
                <div className="grid md:grid-cols-2 gap-10 mt-12">
                    {/* Vision */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white hover:cursor-pointer rounded-2xl shadow-md p-8 hover:shadow-2xl transition"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            Our Vision
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            To be the most trusted and accessible provider of electric mobility
                            solutions in West Africa, powering safe, clean, and efficient movement
                            for people and goods.
                        </p>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white hover:cursor-pointer rounded-2xl shadow-md p-8 hover:shadow-2xl transition"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            Our Mission
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            To accelerate the transition to sustainable urban transport in
                            Nigeria by providing durable, cost-effective electric mobility
                            products and dependable after-sales service tailored for Nigerian
                            and similar metropolitan environments.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
