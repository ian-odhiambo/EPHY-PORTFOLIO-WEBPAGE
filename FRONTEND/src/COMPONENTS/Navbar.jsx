import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Main Navbar */}
      <div className="bg-black/60 backdrop-blur-md text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-24">
          {/* Logo */}

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-white/90 hover:text-white font-medium font-bold"
            >
              Home
            </Link>
            <Link
              to="/whatido"
              className="text-white/90 hover:text-amber-500 font-bold"
            >
              What I Do
            </Link>
            <Link
              to="/whoiam"
              className="text-white/90 hover:text-amber-500  font-bold"
            >
              Who I Am
            </Link>
            <Link
              to="/mywork"
              className="text-white/90 hover:text-amber-500  font-bold"
            >
              My Work
            </Link>
            <Link
              to="/contact"
              className="text-white/90 hover:text-amber-500  font-bold"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-amber-500"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-md px-4 pt-2 pb-4 space-y-1">
            <Link
              to="/"
              className="block text-white/90 hover:text-amber-600 py-2 font-bold"
            >
              Home
            </Link>
            <Link
              to="/whatido"
              className="block text-white/90 hover:text-amber-600 py-2 font-bold "
            >
              What I Do
            </Link>
            <Link
              to="/whoiam"
              className="block text-white/90 hover:text-amber-600 py-2 font-bold"
            >
              Who I Am
            </Link>
            <Link
              to="/mywork"
              className="block text-white/90 hover:text-amber-600 py-2 font-bold"
            >
              My Work
            </Link>
            <Link
              to="/contact"
              className="block text-white/90 hover:text-amber-600 py-2 font-bold"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
