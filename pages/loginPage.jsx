export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center text-yellow-600 mb-8">Login</h1>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-xl transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-gray-500 text-center mt-6">
          Don't have an account? <span className="text-yellow-600 cursor-pointer hover:underline">Sign up</span>
        </p>
      </div>
    </div>
  );
}
