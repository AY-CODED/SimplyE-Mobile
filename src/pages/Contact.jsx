import { Mail, Phone, MapPin, Link, Users, Instagram, Facebook } from "lucide-react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="pt-40 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Get in Touch with Simply E-Mobiles
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We are ready to discuss your personal or fleet mobility needs. Reach out to our team today!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-white p-8 rounded-xl shadow-2xl">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-8 p-6 bg-blue-600 text-white rounded-lg">
            <h2 className="text-3xl font-bold mb-6 border-b border-blue-400 pb-3">
              Our Information
            </h2>

            {/* Phone Numbers */}
            <div className="flex items-start space-x-3">
              <Phone className="flex-shrink-0 h-6 w-6" />
              <div>
                <h3 className="text-lg font-semibold">Call Us</h3>
                <p className="text-blue-200">0906 367 1109</p>
                <p className="text-blue-200">0704 790 7575</p>
                <p className="text-blue-200">0806 362 6413</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-3">
              <Mail className="flex-shrink-0 h-6 w-6" />
              <div>
                <h3 className="text-lg font-semibold">Email Us</h3>
                <p className="text-blue-200 text-[14px]">simplyemobilesng@gmail.com</p>
              </div>
            </div>

            {/* Sales Enquiry */}
            <div className="flex items-start space-x-3">
              <Link className="flex-shrink-0 h-6 w-6" />
              <div>
                <h3 className="text-lg font-semibold">Sales Enquiry / Proposals</h3>
                <a
                  href="https://simplysolar.ng/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 underline hover:text-white transition"
                >
                  simplysolar.ng
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-start space-x-3">
              <Users className="flex-shrink-0 h-6 w-6" />
              <div>
                <h3 className="text-lg font-semibold">Connect with Us</h3>
                <div className="flex flex-col gap-2 mt-2">

                  {/* Facebook */}
                  <div className="flex items-center gap-3">
                    <Facebook className="text-white" />
                    <a
                      href="https://www.facebook.com/share/19HkFm8dHe/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-200 hover:underline"
                    >
                      Simply Emobile
                    </a>
                  </div>

                  {/* TikTok */}
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faTiktok} className="text-pink-400 text-xl" />
                    <a
                      href="https://www.tiktok.com/@simplyemobilesng?_t=ZS-90eMDixqN7q&_r=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-200 hover:underline"
                    >
                      Simply Emobile
                    </a>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-center gap-3">
                    <Instagram className="text-white" />
                    <a
                      href="https://www.instagram.com/simply_emobiles?igsh=MzMzcDRlYWw5OHN6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-200 hover:underline"
                    >
                      @simply_emobiles
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-3">
              <MapPin className="flex-shrink-0 h-6 w-6" />
              <div>
                <h3 className="text-lg font-semibold">Our Office</h3>
                <p className="text-blue-200">
                  DLK HOUSE, Plot 10, Block 124, T.F Kuboye Street, Oniru, Lagos
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-2 p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Inquiry
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
