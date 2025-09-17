export default function ProductNotFound() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-red-100">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-red-600 mb-4">404</h1>
        <p className="text-xl text-red-500 mb-6">Oops! Product not found.</p>
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
