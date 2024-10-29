import { useState } from 'react'
import { ArrowRight, LogOut, Menu, X } from 'lucide-react'
import Logo from '../assets/logo.png'

export default function Navbar() {
 const [isMenuOpen, setIsMenuOpen] = useState(false)

 const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

 return (
  <div className="bg-[#0a0b0d] text-white">
   <header className="bg-customHeader text-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
     <nav className="flex items-center justify-between py-4 relative z-20">
      <div className="flex items-center">
       <img
        src={Logo}
        alt="InstiX Logo"
        width={180}
        height={80}
        className="w-[120px] sm:w-[150px] md:w-[180px]"
       />
      </div>
      <ul className="hidden lg:flex space-x-4 xl:space-x-6">
       <li><a href="#" className="text-yellow-400 font-light text-sm xl:text-base  hover:bg-yellow-300 hover:bg-opacity-20 list-none px-2 py-1 rounded-full leading-6">Home</a></li>
       <li><a href="#" className="hover:text-yellow-400 font-light text-sm xl:text-base  hover:bg-yellow-300 hover:bg-opacity-20 list-none px-2 py-1 rounded-full leading-6">Company</a></li>
       <li><a href="#" className="hover:text-yellow-400 font-light text-sm xl:text-base  hover:bg-yellow-300 hover:bg-opacity-20 list-none px-2 py-1 rounded-full leading-6">Our Services</a></li>
       <li><a href="#" className="hover:text-yellow-400 font-light text-sm xl:text-base  hover:bg-yellow-300 hover:bg-opacity-20 list-none px-2 py-1 rounded-full leading-6">Insights</a></li>
       <li><a href="#" className="hover:text-yellow-400 font-light text-sm xl:text-base  hover:bg-yellow-300 hover:bg-opacity-20 list-none px-2 py-1 rounded-full leading-6">Contact Us</a></li>
      </ul>
      <div className="hidden lg:flex items-center space-x-4">
       <button className="px-3 py-1.5 xl:px-4 xl:py-2 text-xs xl:text-sm font-light hover:text-yellow-400 flex items-center border border-white rounded-[30px]">
        Log in <ArrowRight className="ml-2 h-4 w-4 xl:h-6 xl:w-6 bg-white text-black rounded-full" />
       </button>
       <button className="px-3 py-1.5 xl:px-4 xl:py-2 text-xs xl:text-sm font-medium bg-yellow-400 text-black rounded-full flex items-center">
        Get Started
        <ArrowRight className="ml-2 h-4 w-4 xl:h-6 xl:w-6 bg-white text-black rounded-full" />
       </button>
      </div>
      <button
       className="lg:hidden text-white focus:outline-none"
       onClick={toggleMenu}
       aria-label="Toggle menu"
      >
       {isMenuOpen ? (
        <X className="h-6 w-6" />
       ) : (
        <Menu className="h-6 w-6" />
       )}
      </button>
     </nav>
    </div>
   </header>

   {/* Mobile menu */}
   <div
    className={`fixed top-0 right-0 z-30 h-full w-full sm:w-[350px] bg-white transform ${
     isMenuOpen ? 'translate-x-0' : 'translate-x-full'
    } transition-transform duration-300 ease-in-out lg:hidden`}
   >
    <div className="flex flex-col h-full p-6 text-black">
     <button
      className="self-end text-black focus:outline-none mb-8"
      onClick={toggleMenu}
      aria-label="Close menu"
     >
      <X className="h-6 w-6" />
     </button>
     <div className="flex flex-col items-start space-y-6 sm:space-y-8">
      <a href="#" className="text-yellow-400 text-xl sm:text-2xl font-light">Home</a>
      <a href="#" className="text-black text-xl sm:text-2xl font-light hover:text-yellow-400">Company</a>
      <a href="#" className="text-black text-xl sm:text-2xl font-light hover:text-yellow-400">Our Services</a>
      <a href="#" className="text-black text-xl sm:text-2xl font-light hover:text-yellow-400">Insights</a>
      <a href="#" className="text-black text-xl sm:text-2xl font-light hover:text-yellow-400">Contact Us</a>
      <a href="#" className="text-black text-xl sm:text-2xl font-light hover:text-yellow-400">Login</a>
      <button className="px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-medium bg-yellow-400 text-black rounded-full flex items-center">
       Get Started
       <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
      </button>
     </div>
    </div>
   </div>
  </div>
 )
}
