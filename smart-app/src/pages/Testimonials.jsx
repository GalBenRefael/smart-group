import { motion } from 'framer-motion';
import FadeInSection from '../ui/FadeIn';
import customer1 from '../../public/vogt_legal_logo.jpeg'; // Add relevant customer images here
import customer2 from '../../public/hitech.jpeg';
import customer3 from '../../public/carpentry.jpeg';
import Footer from '../ui/Footer';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  return (
    <>
      <div className="relative w-screen h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://absolutequality.co/wp-content/uploads/2015/08/background-testimonials-1200x375.jpg')",
          }}
        ></div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute left-20 top-1/2 transform -translate-y-1/2 text-left w-[40vw] text-white"
        >
          <h4 className="text-2xl">Testimonials</h4>
          <h1 className="text-4xl font-bold">What Our Clients Say</h1>
          <h3 className="mt-4 text-xl font-semibold">
            Hear from our satisfied customers
          </h3>
        </motion.div>
      </div>
      <hr />

      <div className="container mx-auto px-4 py-12">
        <FadeInSection>
          <section className="my-12">
            <h2 className="text-center text-3xl font-bold text-gray-800">
              Customer Testimonials
            </h2>
            <p className="mt-8 text-lg text-gray-700 leading-8 text-center">
              At Direct Electrical Group, we pride ourselves on the positive
              feedback we receive from our clients. Here are some testimonials
              from our satisfied customers.
            </p>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="my-12">
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <img
                    src={customer1}
                    alt="Customer 1"
                    className="w-24 h-24 rounded-full mx-auto"
                  />
                  <h3 className="mt-4 text-xl font-semibold">
                    Vogt Legal Perth
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Direct Electrical Group provided exceptional service for our
                    office renovation. The team was professional, efficient, and
                    their work was of the highest quality. Highly recommend!
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <img
                    src={customer2}
                    alt="Customer 2"
                    className="w-24 h-24 rounded-full mx-auto"
                  />
                  <h3 className="mt-4 text-xl font-semibold">HighTech Group</h3>
                  <p className="mt-2 text-gray-600">
                    We had an urgent electrical issue at our office, and Direct
                    Electrical Group was there within an hour. Their quick
                    response and expertise saved us from significant downtime.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <img
                    src={customer3}
                    alt="Customer 3"
                    className="w-24 h-24 rounded-full mx-auto"
                  />
                  <h3 className="mt-4 text-xl font-semibold">
                    Carpentry Australia
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Excellent service and great attention to detail. The team at
                    Direct Electrical Group did an outstanding job with our new
                    office setup. Highly recommend their services.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      </div>
      <FadeInSection>
        <section className="bg-yellow-200 py-12 text-center rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800">
            Want to Share Your Experience?
          </h2>
          <p className="mt-4 text-xl text-gray-700">
            Wed love to hear from you. Contact us to share your feedback.
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

export default Testimonials;
