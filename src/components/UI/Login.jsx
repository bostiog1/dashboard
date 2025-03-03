import { useState } from "react";

const Login = () => {

  const [email, setEmail] = useState("gabihospital");
  const [password, setPassword] = useState("123456");
  const [errors, setErrors] = useState({});

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrors({});

    //   try {
    //     await loginSchema.validate({ email, password }, { abortEarly: false });

    //     const mockResponse = {
    //       message: "Login successful",
    //       jwt: "mock-jwt-token", // Mock JWT token
    //     };

    //     sessionStorage.setItem("authToken", mockResponse.jwt);
    //     window.dispatchEvent(new Event("storage"));

    //     console.log("✅ Mock login successful. Redirecting to dashboard...");
    //     navigate("/dashboard"); // Redirect to the dashboard
    //   } catch (validationErrors) {
    //     // Handle validation errors
    //     const newErrors = {};
    //     validationErrors.inner.forEach((error) => {
    //       newErrors[error.path] = error.message;
    //     });
    //     setErrors(newErrors);
    //   }
    // };

    return (
      <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-900 min-h-screen">
        <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors">
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
            Login
          </h2>

          <form onSubmit={handleLogin}>
            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="text"
                className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Username"
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-sm text-red-600 mt-1">{errors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 dark:bg-blue-700 cursor-pointer text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition"
            >
              Login
            </button>
          </form>

          {/* Register Link */}
          <div className="mt-4 text-center">
            <span className="text-gray-700 dark:text-gray-300">
              Not registered?{" "}
              <div
                to="/register"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Register here
              </div>
            </span>
          </div>
        </div>
      </div>
    );
  };
};
export default Login;
