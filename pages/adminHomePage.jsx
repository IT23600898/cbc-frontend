import { Link } from "react-router-dom";
import { FaTachometerAlt, FaBoxOpen, FaShoppingCart, FaUsers } from "react-icons/fa";

export default function AdminHomePage() {
  return (
    <div className="bg-gray-100 w-full h-screen flex">
      {/* Sidebar */}
      <div className="w-[20%] h-full bg-indigo-900 text-white flex flex-col items-start p-6 space-y-6">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

        <Link
          to="/admin/dashboard"
          className="flex items-center gap-3 hover:text-indigo-300 transition"
        >
          <FaTachometerAlt />
          Dashboard
        </Link>

        <Link
          to="/admin/products"
          className="flex items-center gap-3 hover:text-indigo-300 transition"
        >
          <FaBoxOpen />
          Products
        </Link>

        <Link
          to="/admin/orders"
          className="flex items-center gap-3 hover:text-indigo-300 transition"
        >
          <FaShoppingCart />
          Orders
        </Link>

        <Link
          to="/admin/customers"
          className="flex items-center gap-3 hover:text-indigo-300 transition"
        >
          <FaUsers />
          Customers
        </Link>
      </div>

      {/* Main Content */}
      <div className="w-[80%] h-full bg-white p-6">
        <h1 className="text-3xl font-semibold text-gray-800">Welcome, Admin!</h1>
        {/* Additional dashboard content can go here */}
      </div>
    </div>
  );
}
