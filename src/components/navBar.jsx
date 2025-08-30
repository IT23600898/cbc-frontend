import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
         <nav className="bg-purple-700 dark:bg-purple-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <img src="/cbcLogo.png" className="cursor-pointerh-15 w-15  rounded-full absolute left-[15px]" />
          <div className="text-xl font-bold">BeautyStore</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
            <Link to="/products" className="hover:text-blue-500 transition-colors">Products</Link>
            <Link to="/about" className="hover:text-blue-500 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2">
              <FaUser /> Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}