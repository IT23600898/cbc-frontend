import axios from "axios";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

export default function AdminProductPage() {
    const [products, setProducts] = useState([
        {
            "_id": "68867a2252ffad990b806874",
            "productId": "PROD001",
            "productName": "Rose Water Toner",
            "alternativeName": [["Refreshing Facial Mist", "Natural Toner"]],
            "images": [
                "https://example.com/images/rose-toner-1.jpg",
                "https://example.com/images/rose-toner-2.jpg"
            ],
            "price": 650,
            "lastPrice": 750,
            "description": "A gentle toner distilled from pure rose petals, ideal for tightening pores and balancing skin pH.",
            "__v": 0
        },
        {
            "_id": "68867a4852ffad990b806876",
            "productId": "PROD002",
            "productName": "Aloe Vera Soothing Gel",
            "alternativeName": [["Hydrating Aloe Gel", "Skin Cooling Gel"]],
            "images": [
                "https://example.com/images/aloe-gel-1.jpg",
                "https://example.com/images/aloe-gel-2.jpg"
            ],
            "price": 950,
            "lastPrice": 1100,
            "description": "A multi-purpose soothing gel made from 99% pure aloe vera, perfect for calming sunburned or irritated skin.",
            "__v": 0
        },
        {
            "_id": "68867a5552ffad990b806878",
            "productId": "PROD003",
            "productName": "Vitamin C Brightening Serum",
            "alternativeName": [["Glow Boost Serum", "Antioxidant Skin Serum"]],
            "images": [
                "https://example.com/images/vitamin-c-serum-1.jpg",
                "https://example.com/images/vitamin-c-serum-2.jpg"
            ],
            "price": 1890,
            "lastPrice": 2050,
            "description": "A powerful Vitamin C serum that helps reduce dark spots, brighten complexion, and improve skin elasticity.",
            "__v": 0
        }
    ]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/products").then((res) => {
            console.log(res.data.List);
            setProducts(res.data.List);
        });
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            {/* Topic Heading */}
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Products Page</h1>

            {/* Table Container */}
            <div className="overflow-x-auto bg-white rounded-lg shadow-md p-4">
                <table className="min-w-full text-sm text-left text-gray-700 border-collapse">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-6 py-4 font-semibold">Product ID</th>
                            <th className="px-6 py-4 font-semibold">Product Name</th>
                            <th className="px-6 py-4 font-semibold">Price</th>
                            <th className="px-6 py-4 font-semibold">Last Price</th>
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
                                    Rs. {product.price}
                                </td>
                                <td className="px-6 py-4 line-through text-red-500">
                                    Rs. {product.lastPrice}
                                </td>
                                <td className="px-6 py-4 text-gray-600">
                                    {product.description}
                                </td>
                                <td className="px-6 py-4 flex justify-center gap-4">
                                    <button className="text-red-500 hover:text-red-700 transition-colors">
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
            </div>
        </div>
    );
}
