import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);
      localStorage.setItem("name", res.data.user.name);

      if (res.data.user.role === "client") navigate("/client");
      else if (res.data.user.role === "freelancer") navigate("/freelancer");
      else navigate("/admin");

    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-linear-to-br from-indigo-600 via-purple-600 to-blue-500">

      <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-96 text-white">

        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back 👋</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg bg-white/30 outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded-lg bg-white/30 outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 py-3 rounded-lg font-semibold hover:scale-105 transition"
        >
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-white/50"></div>
          <p className="px-2">OR</p>
          <div className="flex-1 h-px bg-white/50"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={() =>
            (window.location.href = "http://localhost:5000/api/auth/google")
          }
          className="flex items-center justify-center gap-2 w-full bg-white text-black py-2 rounded-lg hover:scale-105 transition"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
            className="w-5"
          />
          Continue with Google
        </button>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="underline cursor-pointer"
          >
            Register
          </span>
        </p>

      </div>
    </div>
  );
}