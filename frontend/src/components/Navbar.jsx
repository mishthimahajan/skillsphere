// import { Link } from "react-router-dom";

// const logout = () => {
//   localStorage.removeItem("token");
//   localStorage.removeItem("role");
//   localStorage.removeItem("email");

//   window.location.href = "/login";
// };

// export default function Navbar() {
//   return (
//     <div className="flex items-center justify-between px-10 py-4 bg-linear-to-r from-purple-600 to-pink-500 text-white">

      
//       <h1 className="text-2xl font-bold">SkillSphere</h1>

      
//       <div className="flex items-center gap-6">

//         <Link to="/" className="hover:text-yellow-300">
//           Home
//         </Link>

//         <Link to="/client" className="hover:text-yellow-300">
//           Find Work
//         </Link>

//         <Link to="/freelancer" className="hover:text-yellow-300">
//           Find Talent
//         </Link>

//         <Link to="/login" className="hover:text-yellow-300">
//           Login
//         </Link>

//         <Link
//           to="/register"
//           className="bg-white text-black px-4 py-2 rounded-full hover:scale-105 transition"
//         >
//           Sign Up
//         </Link>
//         <button
//   onClick={logout}
//   className="bg-red-500 px-4 py-2 rounded text-white mb-4"
// >
//   Logout
// </button>

//       </div>
//     </div>
//   );
// }

// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);

//   const token = localStorage.getItem("token");
//   const name = localStorage.getItem("name");
//   const role = localStorage.getItem("role");

//   const logout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   const goDashboard = () => {
//     if (role === "client") navigate("/client");
//     else if (role === "freelancer") navigate("/freelancer");
//     else navigate("/admin");
//   };

//   return (
//     <div className="flex items-center justify-between px-10 py-4 bg-linear-to-r from-purple-600 to-pink-500 text-white relative">

//       {/* LOGO */}
//       <h1 className="text-2xl font-bold">SkillSphere</h1>

//       {/* RIGHT SIDE */}
//       <div className="flex items-center gap-6">

//         <Link to="/" className="hover:text-yellow-300">Home</Link>
//         <Link to="/client" className="hover:text-yellow-300">Find Work</Link>
//         <Link to="/freelancer" className="hover:text-yellow-300">Find Talent</Link>

//         {!token ? (
//           <>
//             <Link to="/login">Login</Link>
//             <Link
//               to="/register"
//               className="bg-white text-black px-4 py-2 rounded-full"
//             >
//               Sign Up
//             </Link>
//           </>
//         ) : (
//           <div className="relative">

//             {/* PROFILE BUTTON */}
//             <div
//               onClick={() => setOpen(!open)}
//               className="flex items-center gap-2 cursor-pointer bg-white/20 px-3 py-2 rounded-full hover:scale-105 transition"
//             >
//               <div className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full">
//                 👤
//               </div>
//               <span>{name || "User"}</span>
//             </div>

//             {/* DROPDOWN */}
//             {open && (
//               <div className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg w-40">

//                 <button
//                   onClick={goDashboard}
//                   className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//                 >
//                   Dashboard
//                 </button>

//                 <button
//                   onClick={logout}
//                   className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
//                 >
//                   Logout
//                 </button>

//               </div>
//             )}

//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  const role = localStorage.getItem("role");
  const image = localStorage.getItem("image"); // ✅ GET IMAGE

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const goDashboard = () => {
    if (role === "client") navigate("/client");
    else if (role === "freelancer") navigate("/freelancer");
    else navigate("/admin");
  };

  return (
    <div className="flex items-center justify-between px-10 py-4 bg-linear-to-r from-purple-600 to-pink-500 text-white relative">

      {/* LOGO */}
      <h1 className="text-2xl font-bold">SkillSphere</h1>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">

        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/client" className="hover:text-yellow-300">Find Work</Link>
        <Link to="/freelancer" className="hover:text-yellow-300">Find Talent</Link>

        {!token ? (
          <>
            <Link to="/login">Login</Link>
            <Link
              to="/register"
              className="bg-white text-black px-4 py-2 rounded-full"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <div className="relative">

            {/* PROFILE BUTTON */}
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 cursor-pointer bg-white/20 px-3 py-2 rounded-full hover:scale-105 transition"
            >
              
              {/* ✅ PROFILE IMAGE */}
              {image ? (
                <img
                  src={image}
                  alt="profile"
                  className="w-8 h-8 rounded-full object-cover border"
                />
              ) : (
                <div className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full">
                  👤
                </div>
              )}

              <span>{name || "User"}</span>
            </div>

            {/* DROPDOWN */}
            {open && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg w-40">

                <button
                  onClick={goDashboard}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Dashboard
                </button>

                <button
                  onClick={logout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                >
                  Logout
                </button>

              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}