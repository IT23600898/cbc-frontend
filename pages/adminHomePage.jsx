import axios from "axios";
import { Link, Routes, Route } from "react-router-dom";
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
      <div className="w-[80%] h-full bg-white p-6 overflow-y-auto">
        <Routes>
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
          <Route path="/products" element={<h1>Products</h1>} />
          <Route path="/orders" element={<h1>Orders</h1>} />
          <Route path="/customers" element={<h1>Customers</h1>} />
          <Route path="/*" element={<h1>404 - Admin page not found</h1>} />
        </Routes>
      </div>
    </div>
  );
}
