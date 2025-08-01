import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-blue-800 p-6">
      <div className="bg-white bg-opacity-90 shadow-2xl rounded-3xl p-10 max-w-2xl text-center">
        <h1 className="text-5xl font-extrabold text-indigo-800 mb-6 tracking-tight leading-snug">
          Redefine Your Natural Beauty
        </h1>
        <p className="text-lg text-gray-800 mb-8">
          Explore our luxury collection of skincare, cosmetics, and wellness products made for modern women who glow inside and out.
        </p>
        <button className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-3 rounded-full text-lg font-medium transition duration-300 shadow-md hover:shadow-xl">
          Browse Collection
        </button>
        <div className="mt-6">
          <Link to="/login" className="text-indigo-600 underline hover:text-indigo-800 transition duration-200">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
