import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaPlus, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AdminProductPage() {
    const [products, setProducts] = useState([]);
    const [productsLoaded, setProductsLoaded] = useState(false);
    

    useEffect(() => {
        if(!productsLoaded){
            axios.get("http://localhost:5000/api/products").then((res) => {
            console.log(res.data.List);
            setProducts(res.data.List);
            setProductsLoaded(true);
           });
        }
    }, [productsLoaded]);

    return (
        <div className="p-6 bg-gray-100 min-h-screen relative">
            {/* Floating Add Button */}
            <Link
                to={"/admin/products/addProduct"}
                className="absolute right-6 bottom-6 text-white bg-purple-700 hover:bg-purple-800 transition-all duration-300 p-5 rounded-full shadow-lg hover:shadow-xl focus:outline-none"
                title="Add New Product"
            >
                <FaPlus size={22} />
            </Link>

        

            {/* Topic Heading */}
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Products Page</h1>
            
            {
                productsLoaded?<div className="overflow-x-auto bg-white rounded-lg shadow-md p-4">
                <table className="min-w-full text-sm text-left text-gray-700 border-collapse">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-6 py-4 font-semibold">Product ID</th>
                            <th className="px-6 py-4 font-semibold">Product Name</th>
                            <th className="px-6 py-4 font-semibold">Price</th>
                            <th className="px-6 py-4 font-semibold">Last Price</th>
                            <th className="px-6 py-4 font-semibold">Stock</th>
                            <th className="px-6 py-4 font-semibold">Description</th>
                            <th className="px-6 py-4 font-semibold text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr
                                key={index}
                                className="border-b hover:bg-gray-50 transition-colors"
                            >
                                <td className="px-6 py-4">{product.productId}</td>
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    {product.productName}
                                </td>
                                <td className="px-6 py-4 text-green-600 font-semibold">
                                     {product.price}
                                </td>
                                <td className="px-6 py-4 line-through text-red-500">
                                     {product.lastPrice}
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-800">
                                    {product.stock}
                                </td>
                                <td className="px-6 py-4 text-gray-600">
                                    {product.description}
                                </td>
                                <td className="px-6 py-4 flex justify-center gap-4">
                                    <button className="text-red-500 hover:text-red-700 transition-colors"
                                    title="Delete"
                                    
                                    onClick={()=>{
                                        alert(product.productId)
                                        const token = localStorage.getItem("token");
                                        axios.delete(`http://localhost:5000/api/products/${product.productId}`, {
                                                headers: {
                                                      Authorization: "Bearer "+token
                                                },
                                        }).then((res)=>{
                                            console.log(res.data.List);
                                            toast.success("Product Deleted Successfully")
                                            setProductsLoaded(false);
                                        })
                                    }}>
                    
                                        <FaTrash size={18} />
                                    </button>
                                    <button className="text-blue-500 hover:text-blue-700 transition-colors">
                                        <FaPencil size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>: <div className="w-full h-full flex justify-center items-center">
                <div className="w-[60px] h-[60px] border-[4px] border-gray-200 border-b-[#3b82f6] animate-spin rounded-full"></div>
            </div>
            }
        </div>
    );
}

