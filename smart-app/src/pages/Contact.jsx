import { motion } from 'framer-motion';
import FadeInSection from '../ui/FadeIn';
import Footer from '../ui/Footer';

const Contact = () => {
  return (
    <>
      <div className="relative w-screen h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2022/01/12/18/51/contact-us-6933645_1280.jpg')",
          }}
        ></div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute left-20 top-1/2 transform -translate-y-1/2 text-left w-[40vw] text-white"
        >
          <h4 className="text-2xl">Contact Us</h4>
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <h3 className="mt-4 text-xl font-semibold">
            Wed love to hear from you
          </h3>
        </motion.div>
      </div>
      <hr />

      <div className="container mx-auto px-4 py-12">
        <FadeInSection>
          <section className="my-12">
            <h2 className="text-center text-3xl font-bold text-gray-800">
              Contact Us
            </h2>
            <p className="mt-8 text-lg text-gray-700 leading-8 text-center">
              Fill out the form below to get in touch with us. We look forward
              to hearing from you!
            </p>
            <div className="flex justify-center mt-8">
              <div className="w-full md:w-2/3 lg:w-1/2">
                <form className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                      id="message"
                      rows="5"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      className="px-6 py-3 bg-gray-800 text-yellow-200 rounded font-semibold hover:bg-gray-700"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="my-12">
            <h2 className="text-center text-3xl font-bold text-gray-800">
              Contact Details
            </h2>
            <div className="flex flex-wrap justify-center mt-8">
              <div className="w-full md:w-1/3 p-4 text-center">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="mt-4 text-gray-600">+61 415693-545</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4 text-center">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="mt-4 text-gray-600">
                    info@directelectricalgroup.com
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4 text-center">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold">Address</h3>
                  <p className="mt-4 text-gray-600">
                    7 Augusta St, Condell Park, NSW, 2200
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="my-12">
            <h2 className="text-center text-3xl font-bold text-gray-800">
              Our Location
            </h2>
            <div className="flex justify-center mt-8">
              <div className="w-full md:w-2/3 lg:w-1/2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.7425952839085!2d151.1533741!3d-33.8817727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12afdf91f344f9%3A0x17b9c7a0be6d48c0!2s7%20Augusta%20St%2C%20Strathfield%20NSW%202137%2C%20Australia!5e0!3m2!1sen!2sus!4v1692449306407!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          </section>
        </FadeInSection>
      </div>

      <FadeInSection>
        <Footer />
      </FadeInSection>
    </>
  );
};

export default Contact;
