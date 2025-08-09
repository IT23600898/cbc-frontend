export default function AddProductForm() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          Add Product Form
        </h1>

        <div className="flex flex-col space-y-5">
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700">Product Id</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter Product Id"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700">Product Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter Product Name"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700">Alternative Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter Alternative Name"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700">Images URLs (comma separated)</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700">Price</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter Price"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700">Last Price</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter Last Price"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700">Stock</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter Stock"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700">Description</label>
            <textarea
              rows={4}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
              placeholder="Enter product description"
            ></textarea>
          </div>

          <button className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 text-white font-semibold py-3 rounded-md transition">
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}
