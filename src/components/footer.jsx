import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-customHeader text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6 lg:gap-8">
          {/* Logo and buttons column */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <img
                src={Logo}
                alt="InstiX Logo"
                width={180}
                height={80}
                className="w-[120px] sm:w-[150px] md:w-[180px]"
              />
            </div>
            <p className="text-sm mb-4">
              Institutional OTC Platform.
              <br />
              Licensed from Poland.
            </p>
            <div className="space-y-2 sm:space-y-0 sm:flex sm:space-x-2">
              <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded w-full sm:w-auto">
                Create Account
              </button>
              <button className="border border-white text-white font-bold py-2 px-4 rounded w-full sm:w-auto">
                Sign In
              </button>
            </div>
          </div>

          {/* Programs column */}
          <div className="mt-8 sm:mt-0">
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Insights
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* About us column */}
          <div className="mt-8 sm:mt-0">
            <h3 className="text-lg font-semibold mb-4">About us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Cookies Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Disclosure Statements
                </a>
              </li>
            </ul>
          </div>

          {/* Legal informations column */}
          <div className="mt-8 lg:mt-0">
            <h3 className="text-lg font-semibold mb-4">Legal informations</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-400">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Help Disk
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Vender Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Partnerships
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Research Support
                </a>
              </li>
            </ul>
          </div>

          {/* Address column */}
          <div className="mt-8 lg:mt-0">
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            <p className="mb-2">D 49 Noida 320120</p>
            <p className="mb-4">support@instix.ocm</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-400">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-yellow-400">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-yellow-400">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          © instiX 2023-2024 ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
