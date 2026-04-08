// import { useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import API from "../services/api";

// export default function SelectRole() {
//   const navigate = useNavigate();
//   const location = useLocation();

  
//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const email = params.get("email");
//     const token = params.get("token");
//     const image = params.get("image");
//     const name = params.get("name");

//     if (image && image !== "undefined") {
//   localStorage.setItem("image", image);
// }
//     if (name) localStorage.setItem("name", name);

//     if (email) {
//       localStorage.setItem("email", email);
      
//     }
//     if (token) { localStorage.setItem("token", token);
//     }
//   }, [location]);
  
  

  
//   // const setRole = async (role) => {
//   //   try {
//   //     const email = localStorage.getItem("email");

//   //     if (!email) {
//   //       alert("Email not found. Please login again.");
//   //       return;
//   //     }

//   //     const res = await API.post("/auth/set-role", {
//   //       role,
//   //       email,
//   //     });
//   //     localStorage.setItem("role", role);

//   //     console.log("Role Updated:", res.data);

      
//   //     if (role === "client") navigate("/client");
//   //     else if (role === "freelancer") navigate("/freelancer");
//   //     else navigate("/admin");

//   //   } catch (err) {
//   //     console.log(err.response?.data || err.message);
//   //     alert("Error setting role");
//   //   }
//   // };
// const setRole = async (role) => {
//   try {
//     const email = localStorage.getItem("email");
//     const token = localStorage.getItem("token");

//     if (!email || !token) {
//       alert("Email or token missing. Please login again.");
//       return;
//     }

//     const res = await API.post(
//       "/auth/set-role",
//       { role, email },
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     localStorage.setItem("role", role);

//     // Optionally refresh JWT
//     const newToken = jwt.sign(
//       { id: res.data.user._id, role: res.data.user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" }
//     );
//     localStorage.setItem("token", newToken);

//     // Navigate to correct dashboard
//     if (role === "client") navigate("/client");
//     else if (role === "freelancer") navigate("/freelancer");
//     else navigate("/admin");

//   } catch (err) {
//     console.error(err.response?.data || err.message);
//     alert("Error setting role");
//   }
// };
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-600 via-indigo-600 to-blue-500">

//       <div className="bg-white/20 backdrop-blur-lg p-10 rounded-2xl shadow-2xl text-white w-87.5 text-center">

//         <h2 className="text-3xl font-bold mb-6">Choose Your Role 🚀</h2>
//         <p className="mb-8 text-sm text-gray-200">
//           Select how you want to use SkillSphere
//         </p>

//         <div className="flex flex-col gap-4">

          
//           <button
//             onClick={() => setRole("client")}
//             className="bg-blue-500 py-3 rounded-lg font-semibold hover:scale-105 transition"
//           >
//             👤 Client
//           </button>

          
//           <button
//             onClick={() => setRole("freelancer")}
//             className="bg-green-500 py-3 rounded-lg font-semibold hover:scale-105 transition"
//           >
//             💻 Freelancer
//           </button>

          
//           <button
//             onClick={() => setRole("admin")}
//             className="bg-red-500 py-3 rounded-lg font-semibold hover:scale-105 transition"
//           >
//             🛠 Admin
//           </button>

//         </div>

//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import API from "../services/api";

export default function SelectRole() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const email = params.get("email");
    const token = params.get("token");
    const image = params.get("image");
    const name = params.get("name");

    if (image && image !== "undefined") localStorage.setItem("image", image);
    if (name) localStorage.setItem("name", name);
    if (email) localStorage.setItem("email", email);
    if (token) localStorage.setItem("token", token);
  }, [location]);

  const setRole = async (role) => {
    try {
      const email = localStorage.getItem("email");
      const token = localStorage.getItem("token");

      if (!email || !token) {
        alert("Email or token missing. Please login again.");
        return;
      }

      setLoading(true);

      
      const res = await API.post(
        "/auth/set-role",
        { role, email },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Save role locally
      localStorage.setItem("role", role);

      setLoading(false);

      
      if (role === "client") navigate("/client");
      else if (role === "freelancer") navigate("/freelancer");
      else navigate("/admin");

    } catch (err) {
      setLoading(false);
      console.error(err.response?.data || err.message);
      alert("Error setting role. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-600 via-indigo-600 to-blue-500">
      <div className="bg-white/20 backdrop-blur-lg p-10 rounded-2xl shadow-2xl text-white w-87.5 text-center">
        <h2 className="text-3xl font-bold mb-6">Choose Your Role 🚀</h2>
        <p className="mb-8 text-sm text-gray-200">
          Select how you want to use SkillSphere
        </p>

        <div className="flex flex-col gap-4">
          <button
            disabled={loading}
            onClick={() => setRole("client")}
            className="bg-blue-500 py-3 rounded-lg font-semibold hover:scale-105 transition disabled:opacity-50"
          >
            👤 Client
          </button>

          <button
            disabled={loading}
            onClick={() => setRole("freelancer")}
            className="bg-green-500 py-3 rounded-lg font-semibold hover:scale-105 transition disabled:opacity-50"
          >
            💻 Freelancer
          </button>

          <button
            disabled={loading}
            onClick={() => setRole("admin")}
            className="bg-red-500 py-3 rounded-lg font-semibold hover:scale-105 transition disabled:opacity-50"
          >
            🛠 Admin
          </button>
        </div>

        {loading && <p className="mt-4 text-gray-200">Saving role...</p>}
      </div>
    </div>
  );
}