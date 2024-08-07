import { motion } from 'framer-motion';
import FadeInSection from '../ui/FadeIn';
import Footer from '../ui/Footer';
import historyImg from '../../public/electricity-hist.jpg';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <>
      <div className="relative w-screen h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2018/01/17/06/21/electrician-3087536_1280.jpg')",
          }}
        ></div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute left-20 top-1/2 transform -translate-y-1/2 text-left w-[40vw] text-white"
        >
          <h4 className="text-2xl">About Us</h4>
          <h1 className="text-4xl font-bold">Direct Electrical Group</h1>
          <h3 className="mt-4 text-xl font-semibold">
            Dedicated to Providing Top-Notch Electrical Services
          </h3>
        </motion.div>
      </div>
      <hr />

      <div className="container mx-auto px-4 py-12">
        <FadeInSection>
          <section className="my-12">
            <h2 className="text-center text-3xl font-bold text-gray-800">
              Company Overview
            </h2>
            <p className="mt-8 text-lg text-gray-700 leading-8">
              Direct Electrical Group is a trusted name in the electrical
              industry, providing top-notch residential and commercial
              electrical services. Our mission is to deliver reliable,
              efficient, and safe electrical solutions to our clients, ensuring
              their complete satisfaction. With years of experience and a team
              of certified electricians, we are committed to maintaining the
              highest standards of quality and safety in every project we
              undertake.
            </p>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="my-12">
            <h2 className="text-center text-3xl font-bold text-gray-800">
              Our History
            </h2>
            <div className="flex flex-wrap justify-center mt-8">
              <div className="w-full md:w-2/3 p-4">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <img
                    src={historyImg}
                    alt="History"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <h3 className="mt-4 text-xl font-semibold">Our Journey</h3>
                  <p className="mt-2 text-gray-600">
                    Direct Electrical Group was founded in 2012 by Quan Chung,
                    who envisioned a company dedicated to excellence in
                    electrical services. Over the years, we have grown
                    significantly, expanding our services and reaching more
                    clients. Here are some of our key milestones:
                  </p>
                  <ul className="mt-4 text-gray-600">
                    <li className="mt-2">
                      • In 2012, we completed our first major commercial
                      project, establishing our presence in the industry.
                    </li>
                    <li className="mt-2">
                      • In 2017, we expanded our services to include advanced
                      data and communication solutions.
                    </li>
                    <li className="mt-2">
                      • In 2020, we achieved Best Retail award, demonstrating
                      our commitment to quality and innovation.
                    </li>
                    <li className="mt-2">
                      • Today, we continue to grow and innovate, providing
                      top-notch services to our valued clients.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="my-12">
            <h2 className="text-center text-3xl font-bold text-gray-800">
              Our Values
            </h2>
            <div className="flex flex-wrap justify-center mt-8">
              <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                <div className="bg-white h-[100%] rounded-lg shadow-lg p-6 text-center">
                  <h3 className="text-xl font-semibold">Safety</h3>
                  <p className="mt-2 text-gray-600">
                    We prioritize safety in every project we undertake, ensuring
                    the well-being of our team and clients.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                <div className="bg-white h-[100%] rounded-lg shadow-lg p-6 text-center">
                  <h3 className="text-xl font-semibold">Quality</h3>
                  <p className="mt-2 text-gray-600">
                    We ensure the highest quality standards in our work,
                    delivering exceptional results every time.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                <div className="bg-white h-[100%] rounded-lg shadow-lg p-6 text-center">
                  <h3 className="text-xl font-semibold">Integrity</h3>
                  <p className="mt-2 text-gray-600">
                    We operate with honesty and integrity, building trust with
                    our clients and partners.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                <div className="bg-white h-[100%] rounded-lg shadow-lg p-6 text-center">
                  <h3 className="text-xl font-semibold">Customer Focus</h3>
                  <p className="mt-2 text-gray-600">
                    We are dedicated to meeting our customers needs and
                    exceeding their expectations.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      </div>
      <FadeInSection>
        <section className=" bg-yellow-200 py-12 text-center rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800">
            Ready to Work with Us?
          </h2>
          <p className="mt-4 text-xl text-gray-700">
            Contact us today to discuss your electrical needs and how we can
            help.
          </p>
          <Link to="/contact">
            <button className="mt-4 bg-gray-800 text-yellow-200 rounded font-semibold">
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

export default AboutUs;
