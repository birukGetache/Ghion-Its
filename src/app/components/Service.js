"use client";
import {
  FaCode,           // Website Development
  FaEthereum,       // Web3 DApps
  FaBullhorn,       // Promotion
  FaChartLine,      // Digital Marketing
  FaCogs,           // ERP System
  FaRobot,          // Automation with DevOps
  FaBrain,          // AI-Based Solutions
  FaPalette,        // Logo and Graphics Design
  FaDesktop,        // UI Development
} from "react-icons/fa";

const Services = ({ isVisible }) => {
  return (
    <section id="services" className="service">
      {/* Only show content when it's visible */}
      <section
        className={`py-16 service transition-opacity duration-500 ease-in-out ${
          isVisible ? "opacity-100 animate-serviceanime" : "opacity-0"
        }`}
        id="services"
      >
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Website Development Card */}
            <div
              className="bg-white bg-opacity-10 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform scale-95 hover:scale-100 duration-300"
              style={{ border: "2px solid #33afff" }}
            >
              <div className="mb-6 text-blue-500">
                <FaCode className="w-20 h-20 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Website Development
              </h3>
              <p className="text-gray-600">
                We specialize in building responsive, mobile-friendly websites
                that ensure fast load times, great user experiences, and
                effective SEO.
              </p>
            </div>

            {/* Web3 DApps Card */}
            <div
              className="bg-white bg-opacity-10 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform scale-95 hover:scale-100 duration-300"
              style={{ border: "2px solid purple" }}
            >
              <div className="mb-6 text-purple-500">
                <FaEthereum className="w-20 h-20 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Web3 DApps
              </h3>
              <p className="text-gray-600">
                We create decentralized applications that leverage blockchain
                technology, ensuring security, transparency, and scalability.
              </p>
            </div>

            {/* Promotion Card */}
            <div
              className="bg-white bg-opacity-10 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform scale-95 hover:scale-100 duration-300"
              style={{ border: "2px solid orange" }}
            >
              <div className="mb-6 text-orange-500">
                <FaBullhorn className="w-20 h-20 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Promotion
              </h3>
              <p className="text-gray-600">
                We provide innovative promotional strategies to help your brand
                stand out and connect with your audience effectively.
              </p>
            </div>

            {/* Digital Marketing Card */}
            <div
              className="bg-white bg-opacity-10 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform scale-95 hover:scale-100 duration-300"
              style={{ border: "2px solid teal" }}
            >
              <div className="mb-6 text-teal-500">
                <FaChartLine className="w-20 h-20 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Digital Marketing
              </h3>
              <p className="text-gray-600">
                Our digital marketing services help you achieve better online
                visibility, drive traffic, and grow your business.
              </p>
            </div>

            {/* ERP System Card */}
            <div
              className="bg-white bg-opacity-10 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform scale-95 hover:scale-100 duration-300"
              style={{ border: "2px solid #33afff" }}
            >
              <div className="mb-6 text-blue-500">
                <FaCogs className="w-20 h-20 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                ERP System for Companies
              </h3>
              <p className="text-gray-600">
                We provide customized ERP solutions to streamline your business
                processes and improve efficiency.
              </p>
            </div>

            {/* Automation with DevOps Card */}
            <div
              className="bg-white bg-opacity-10 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform scale-95 hover:scale-100 duration-300"
              style={{ border: "2px solid purple" }}
            >
              <div className="mb-6 text-purple-500">
                <FaRobot className="w-20 h-20 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Automation with DevOps
              </h3>
              <p className="text-gray-600">
                We offer automated workflows using DevOps practices to enhance
                collaboration, reduce deployment times, and improve product
                quality.
              </p>
            </div>

            {/* AI-Based Solutions Card */}
            <div
              className="bg-white bg-opacity-10 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform scale-95 hover:scale-100 duration-300"
              style={{ border: "2px solid teal" }}
            >
              <div className="mb-6 text-teal-500">
                <FaBrain className="w-20 h-20 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                AI-Based Solutions
              </h3>
              <p className="text-gray-600">
                We leverage AI technologies to provide innovative solutions
                that help businesses improve decision-making and streamline
                operations.
              </p>
            </div>

            {/* Logo and Graphics Design Card */}
            <div
              className="bg-white bg-opacity-10 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform scale-95 hover:scale-100 duration-300"
              style={{ border: "2px solid #33afff" }}
            >
              <div className="mb-6 text-blue-500">
                <FaPalette className="w-20 h-20 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Logo and Graphics Design
              </h3>
              <p className="text-gray-600">
                We provide custom logo and graphic designs to enhance your
                brand identity and make a lasting impression.
              </p>
            </div>

            {/* UI Development Card */}
            <div
              className="bg-white bg-opacity-10 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform scale-95 hover:scale-100 duration-300"
              style={{ border: "2px solid orange" }}
            >
              <div className="mb-6 text-orange-500">
                <FaDesktop className="w-20 h-20 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                UI Development
              </h3>
              <p className="text-gray-600">
                We specialize in creating user interfaces that provide
                excellent user experiences and seamless navigation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;