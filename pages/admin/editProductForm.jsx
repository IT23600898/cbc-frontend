import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import uploadMediaToSupabase from "/src/utils/mediaUpload.js"

export default function EditProductForm() {
  const location = useLocation()
  const navigate = useNavigate()

  const product = location.state.product

  if (product == null) {
    navigate("/admin/products")
  }

  // Fix: initialize with existing alt names if available
  const [productId, setProductId] = useState(product.productId);
  const [productName, setProductName] = useState(product.productName);
  const [alternativeName, setAlternativeName] = useState(
    product.alternativeName?.join(",") || ""
  );
  const [imageFiles, setImageFiles] = useState([]);
  const [price, setPrice] = useState(product.price);
  const [lastPrice, setLastPrice] = useState(product.lastPrice);
  const [stock, setStock] = useState(product.stock);
  const [description, setDescription] = useState(product.description);

  async function handleSubmit() {
    const altNames = alternativeName.split(",").map(name => name.trim()).filter(Boolean);

    const promisesArray = [];
    let imgUrls = product.images

    if(imageFiles.length == 0){

        for (let i = 0; i < imageFiles.length; i++) {
      promisesArray[i] = uploadMediaToSupabase(imageFiles[i]);
      console.log(imageFiles[i]);
    }

       imgUrls = await Promise.all(promisesArray);
    }

    
    const productData = {
      productId,
      productName,
      alternativeName: altNames,
      images: imgUrls,
      price,
      lastPrice,
      stock,
      description,
    }

    const token = localStorage.getItem("token");

    try {
      await axios.put("http://localhost:5000/api/products/"+product.productId, productData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      navigate("/admin/products");
      toast.success("Product updated successfully.");
    } catch (err) {
      console.log(err);
      toast.error("Failed to update Product.");
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          Edit Product Form
        </h1>

        <div className="flex flex-col space-y-5">
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700">Product Id</label>
            <input
              disabled
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter Product Id"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700">Product Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700">Alternative Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter Alternative Name"
              value={alternativeName}
              onChange={(e) => setAlternativeName(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700">Images URLs (comma separated)</label>
            <input
              type="file"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
              onChange={(e) => {
                const files = Array.from(e.target.files);
                setImageFiles(files);
                console.log("Selected files:", files);
              }}
              multiple
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700">Price</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              min="0"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700">Last Price</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter Last Price"
              value={lastPrice}
              onChange={(e) => setLastPrice(e.target.value)}
              min="0"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700">Stock</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter Stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              min="0"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700">Description</label>
            <textarea
              rows={4}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
              placeholder="Enter product description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 text-white font-semibold py-3 rounded-md transition"
            onClick={handleSubmit}
          >
            Update Product
          </button>
        </div>
      </div>
    </div>
  );
}
