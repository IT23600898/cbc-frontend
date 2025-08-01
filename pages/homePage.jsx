import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-yellow-100 p-6">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-6">
          Redefine Your Natural Beauty
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Explore our luxury collection of skincare, cosmetics, and wellness products made for modern women who glow inside and out.
        </p>
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition duration-300">
          Browse Collection
        </button>
        <div className="mt-6">
          <Link to="/login" className="text-pink-700 underline hover:text-pink-900">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
