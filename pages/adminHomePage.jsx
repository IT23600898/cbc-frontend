import { Link, Route, Routes } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaBoxOpen, FaShoppingCart, FaUsers } from "react-icons/fa";
import AdminProductPage from "./admin/adminProductPage";

export default function AdminHomePage() {
    return (
        <div className="bg-blue-200 w-full h-screen flex">
            <div className="w-[20%] h-screen bg-purple-950 text-white flex flex-col items-start p-4 gap-6">
                <Link to="/admin/dashboard" className="flex items-center gap-2 hover:text-purple-300">
                    <MdDashboard size={20} />
                    Dashboard
                </Link>
                <Link to="/admin/products" className="flex items-center gap-2 hover:text-purple-300">
                    <FaBoxOpen size={20} />
                    Products
                </Link>
                <Link to="/admin/orders" className="flex items-center gap-2 hover:text-purple-300">
                    <FaShoppingCart size={20} />
                    Orders
                </Link>
                <Link to="/admin/customers" className="flex items-center gap-2 hover:text-purple-300">
                    <FaUsers size={20} />
                    Customers
                </Link>
            </div>

            <div className="w-[80%] h-screen bg-white">
              <Routes path="/*">
                <Route path="/dashboard" element={<h1>Dashboard</h1>}/>
                <Route path="/products" element={<AdminProductPage/>}/>
                <Route path="/orders" element={<h1>Orders</h1>}/>
                <Route path="/customers" element={<h1>Customers</h1>}/>
                <Route path= "/*" element={<h1>404 not found the admin page</h1>}/>

              </Routes>
            </div>
        </div>
    );
}
