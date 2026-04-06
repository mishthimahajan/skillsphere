import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "client",
  });

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await API.post("/auth/register", form);
      alert("Registered Successfully");
      navigate("/login");
    } catch (err) {
      alert("Error");
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-linear-to-br from-purple-600 via-indigo-600 to-blue-500">

      <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-96 text-white">

        <h2 className="text-3xl font-bold text-center mb-6">Create Account 🚀</h2>

        <input
          placeholder="Name"
          className="w-full p-3 mb-3 rounded-lg bg-white/30 outline-none"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          className="w-full p-3 mb-3 rounded-lg bg-white/30 outline-none"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-3 rounded-lg bg-white/30 outline-none"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <select
          className="w-full p-3 mb-4 rounded-lg bg-white/30 text-black"
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <option value="client">Client</option>
          <option value="freelancer">Freelancer</option>
          <option value="admin">Admin</option>
        </select>

        <button
          onClick={handleRegister}
          className="w-full bg-blue-500 py-3 rounded-lg font-semibold hover:scale-105 transition"
        >
          Register
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-white/50"></div>
          <p className="px-2">OR</p>
          <div className="flex-1 h-px bg-white/50"></div>
        </div>

        {/* Google Register */}
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
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="underline cursor-pointer"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}