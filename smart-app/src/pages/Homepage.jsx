import { motion } from 'framer-motion';
import FadeInSection from '../ui/FadeIn';

import back1 from '../../public/back1.jpg';
import electrician1 from '../../public/electrician1.jpg';
import electrician2 from '../../public/electrician2.jpg';
import network from '../../public/network.jpg';
import Footer from '../ui/Footer';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <>
      <div className="relative w-screen h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${back1})` }}
        ></div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute right-4 md:right-20 top-1/3 transform -translate-y-1/2 text-right w-[90vw] md:w-[40vw] text-yellow-200 p-4 md:p-0"
        >
          <h4 className="text-lg md:text-2xl">Direct Electrical Group</h4>
          <h1 className="text-2xl md:text-4xl">
            Expert Electrical Solutions for Your Home and Business
          </h1>
          <h3 className="mt-4 text-base md:text-xl font-semibold">
            Reliable, efficient, and professional electrical services.
          </h3>
          <button className="mt-4 px-4 py-2 bg-yellow-200 text-black rounded font-semibold">
            Get a Quote
          </button>
        </motion.div>
      </div>
      <hr />

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
        <FadeInSection direction="up">
          <div className="w-[90vw] md:w-[28vw] h-[100%] border-grey-300 border-[3px] text-center p-4 bg-white rounded-lg overflow-hidden shadow-lg">
            <div>
              <h1 className="text-2xl md:text-3xl font-robo">
                Residential Electrical Services
              </h1>
            </div>
            <div>
              <h4 className="font-semibold">
                Comprehensive Residential Electrical Services
              </h4>
            </div>
            <div>
              <img
                src={electrician1}
                className="w-full h-48 object-cover rounded mt-4"
              />
            </div>
            <div>
              <h6 className="font-semibold mt-3 text-sm md:text-base">
                From new installations to repairs, our expert electricians
                ensure your home’s electrical system is safe, efficient, and up
                to code. Whether it’s installing new lighting fixtures,
                upgrading your electrical panel, or conducting routine
                maintenance, we’ve got you covered.
              </h6>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection direction="left">
          <div className="w-[90vw] md:w-[28vw] h-[100%] border-grey-300 border-[3px] text-center p-4 bg-white rounded-lg overflow-hidden shadow-lg">
            <div>
              <h1 className="text-2xl md:text-3xl">
                Commercial Electrical Solutions
              </h1>
            </div>
            <div>
              <h4 className="font-semibold">
                Reliable Commercial Electrical Solutions
              </h4>
            </div>
            <div>
              <img
                src={electrician2}
                className="w-full h-48 object-cover rounded mt-4"
              />
            </div>
            <div>
              <h6 className="font-semibold mt-3 text-sm md:text-base">
                Keep your business running smoothly with our professional
                commercial electrical services. We offer tailored solutions for
                offices, retail spaces, and industrial properties, including
                system upgrades, fit-outs, and emergency services. Trust us to
                keep your operations powered and productive.
              </h6>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection direction="right">
          <div className="w-[90vw] md:w-[28vw] h-[100%] border-grey-300 border-[3px] text-center p-4 bg-white rounded-lg overflow-hidden shadow-lg">
            <div>
              <h1 className="text-2xl md:text-3xl">
                Data and Communication Services
              </h1>
            </div>
            <div>
              <h4 className="font-semibold">
                Advanced Data and Communication Services
              </h4>
            </div>
            <div>
              <img
                src={network}
                className="w-full h-48 object-cover rounded mt-4"
              />
            </div>
            <div>
              <h6 className="font-semibold mt-3 text-sm md:text-base">
                Ensure seamless connectivity with our top-tier data and
                communication services. From network cabling and phone system
                installations to data center setups and wireless solutions, we
                provide the infrastructure you need for reliable communication
                and data transfer.
              </h6>
            </div>
          </div>
        </FadeInSection>
      </div>
      <FadeInSection>
        <div className="mt-16 bg-[#CDF9FF] py-12">
          <h2 className="text-center text-3xl font-bold text-gray-800">
            Why Choose Us
          </h2>
          <div className="flex justify-center mt-8">
            <div className="max-w-[90vw] md:max-w-[60vw] text-center">
              <div className="flex flex-wrap justify-around">
                <div className="w-[90%] md:w-[45%] p-4 m-2 bg-white rounded-lg shadow-md">
                  <h3 className="text-lg md:text-xl font-semibold">
                    Experienced and Certified Electricians
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Our team consists of highly trained and certified
                    electricians who ensure the highest standards of quality and
                    safety.
                  </p>
                </div>
                <div className="w-[90%] md:w-[45%] p-4 m-2 bg-white rounded-lg shadow-md">
                  <h3 className="text-lg md:text-xl font-semibold">
                    High-Quality Workmanship
                  </h3>
                  <p className="mt-2 text-gray-600">
                    We pride ourselves on delivering top-notch workmanship in
                    every project, big or small.
                  </p>
                </div>
                <div className="w-[90%] md:w-[45%] p-4 m-2 bg-white rounded-lg shadow-md">
                  <h3 className="text-lg md:text-xl font-semibold">
                    Competitive Pricing
                  </h3>
                  <p className="mt-2 text-gray-600">
                    We offer competitive pricing without compromising on
                    quality, ensuring you get the best value for your money.
                  </p>
                </div>
                <div className="w-[90%] md:w-[45%] p-4 m-2 bg-white rounded-lg shadow-md">
                  <h3 className="text-lg md:text-xl font-semibold">
                    24/7 Emergency Services
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Our team is available around the clock for any electrical
                    emergencies, providing peace of mind when you need it most.
                  </p>
                </div>
                <div className="w-[90%] md:w-[45%] p-4 m-2 bg-white rounded-lg shadow-md">
                  <h3 className="text-lg md:text-xl font-semibold">
                    Customer Satisfaction Guaranteed
                  </h3>
                  <p className="mt-2 text-gray-600">
                    We prioritize customer satisfaction and work diligently to
                    exceed expectations on every project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="py-12 bg-yellow-200 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-700">
            Contact us today for a free quote and let us take care of all your
            electrical needs.
          </p>
          <Link to="/contact">
            <button className="mt-4 px-6 py-3 bg-gray-800 text-yellow-200 rounded font-semibold">
              Contact Us Now
            </button>
          </Link>
        </div>
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </>
  );
}

export default Homepage;
