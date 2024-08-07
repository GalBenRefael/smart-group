import { motion } from 'framer-motion';
import FadeInSection from '../ui/FadeIn';
import residentialImage from '../../public/resitential.jpg';
import commercialImage from '../../public/commercial.jpg';
import dataImage from '../../public/data.jpg';
import Footer from '../ui/Footer';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <div className="relative w-screen h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2020/05/28/04/16/electric-meter-5229750_1280.jpg')",
          }}
        ></div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute left-4 md:left-20 top-1/2 transform -translate-y-1/2 text-left w-[90vw] md:w-[40vw] text-white p-4 md:p-0"
        >
          <h4 className="text-lg md:text-2xl">Our Services</h4>
          <h1 className="text-2xl md:text-4xl font-bold">
            Expert Electrical Solutions
          </h1>
          <h3 className="mt-4 text-sm md:text-xl font-semibold">
            Comprehensive Services for Residential, Commercial, and Data &
            Communication Needs
          </h3>
        </motion.div>
      </div>
      <hr />

      <div className="container mx-auto px-4 py-12">
        <FadeInSection>
          <section className="my-12">
            <h2 className="text-center text-3xl font-bold text-gray-800">
              Introduction
            </h2>
            <p className="mt-8 text-lg text-gray-700 leading-8">
              At Direct Electrical Group, we offer a wide range of electrical
              services tailored to meet the unique needs of our residential and
              commercial clients. Our team of certified electricians is
              committed to delivering safe, efficient, and high-quality
              electrical solutions. Whether you need a simple repair or a
              complex installation, we have the expertise to handle it all.
            </p>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="my-12">
            <h2 className="text-center text-3xl font-bold text-gray-800">
              Residential Electrical Services
            </h2>
            <div className="flex flex-wrap justify-center mt-8">
              <div className="w-full md:w-2/3 p-4">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <img
                    src={residentialImage}
                    alt="Residential Services"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <h3 className="mt-4 text-xl font-semibold">
                    Comprehensive Residential Electrical Services
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Our residential services include new installations, repairs,
                    upgrades, and routine maintenance. We handle everything from
                    installing new lighting fixtures to upgrading electrical
                    panels, ensuring your home’s electrical system is safe and
                    efficient.
                  </p>
                  <ul className="mt-4 text-gray-600">
                    <li className="mt-2">• Electrical Installations</li>
                    <li className="mt-2">• Lighting Fixtures</li>
                    <li className="mt-2">• Electrical Panel Upgrades</li>
                    <li className="mt-2">• Routine Maintenance</li>
                    <li className="mt-2">• Emergency Repairs</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="my-12">
            <h2 className="text-center text-3xl font-bold text-gray-800">
              Commercial Electrical Services
            </h2>
            <div className="flex flex-wrap justify-center mt-8">
              <div className="w-full md:w-2/3 p-4">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <img
                    src={commercialImage}
                    alt="Commercial Services"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <h3 className="mt-4 text-xl font-semibold">
                    Reliable Commercial Electrical Solutions
                  </h3>
                  <p className="mt-2 text-gray-600">
                    We provide tailored electrical solutions for commercial
                    properties, including offices, retail spaces, and industrial
                    facilities. Our services ensure that your business
                    operations run smoothly and safely.
                  </p>
                  <ul className="mt-4 text-gray-600">
                    <li className="mt-2">
                      • Electrical System Design and Installation
                    </li>
                    <li className="mt-2">• Lighting Solutions</li>
                    <li className="mt-2">
                      • Electrical Maintenance and Repairs
                    </li>
                    <li className="mt-2">• Energy-Efficient Upgrades</li>
                    <li className="mt-2">• Emergency Electrical Services</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="my-12">
            <h2 className="text-center text-3xl font-bold text-gray-800">
              Data and Communication Services
            </h2>
            <div className="flex flex-wrap justify-center mt-8">
              <div className="w-full md:w-2/3 p-4">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <img
                    src={dataImage}
                    alt="Data and Communication Services"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <h3 className="mt-4 text-xl font-semibold">
                    Advanced Data and Communication Solutions
                  </h3>
                  <p className="mt-2 text-gray-600">
                    We offer a range of services to ensure seamless connectivity
                    for your home or business. From network cabling to data
                    center setups, our experts are equipped to handle all your
                    communication needs.
                  </p>
                  <ul className="mt-4 text-gray-600">
                    <li className="mt-2">• Network Cabling</li>
                    <li className="mt-2">• Phone System Installations</li>
                    <li className="mt-2">• Data Center Setup</li>
                    <li className="mt-2">• Wireless Solutions</li>
                    <li className="mt-2">• System Maintenance and Support</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      </div>
      <FadeInSection>
        <section className="bg-yellow-200 py-12 text-center rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-xl text-gray-700">
            Contact us today to discuss your electrical needs and how we can
            help.
          </p>
          <Link to="/contact">
            <button className="mt-4 px-6 py-3 bg-gray-800 text-yellow-200 rounded font-semibold">
              Contact Us Now
            </button>
          </Link>
        </section>
      </FadeInSection>

      <FadeInSection>
        <Footer />
      </FadeInSection>
    </>
  );
};

export default Services;
