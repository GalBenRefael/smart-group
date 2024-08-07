function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold">Direct Electrical Group</h2>
            <p className="mt-4 text-gray-400">
              Providing expert electrical solutions for residential and
              commercial clients with a focus on quality and safety.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-4">
              <li className="mt-2">
                <a href="/" className="text-gray-400 hover:text-yellow-200">
                  Home
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="/about"
                  className="text-gray-400 hover:text-yellow-200"
                >
                  About Us
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="/services"
                  className="text-gray-400 hover:text-yellow-200"
                >
                  Services
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="/testimonials"
                  className="text-gray-400 hover:text-yellow-200"
                >
                  Testimonials
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-yellow-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <ul className="mt-4 text-gray-400">
              <li className="mt-2">
                <i className="fas fa-phone-alt mr-2"></i> +61 415693-545
              </li>
              <li className="mt-2">
                <i className="fas fa-envelope mr-2"></i>{' '}
                info@directelectricalgroup.com
              </li>
              <li className="mt-2">
                <i className="fas fa-map-marker-alt mr-2"></i> 7 Augusta St. ,
                Condell Park, NSW, 2200
              </li>
            </ul>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-200">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-200">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-200">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-200">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 Direct Electrical Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
