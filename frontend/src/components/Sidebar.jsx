// import { Link } from "react-router-dom";

// export default function Sidebar({ role }) {
//   return (
//     <div className="w-64 h-screen bg-white/10 backdrop-blur-lg p-6 text-white">

//       <h2 className="text-2xl font-bold mb-10">SkillSphere</h2>

//       <nav className="flex flex-col gap-4">

//         {role === "client" && (
//           <>
//             <Link to="/client">Dashboard</Link>
//             <Link to="#">Post Job</Link>
//             <Link to="#">Applicants</Link>
//           </>
//         )}

//         {role === "freelancer" && (
//           <>
//             <Link to="/freelancer">Dashboard</Link>
//             <Link to="#">Browse Jobs</Link>
//             <Link to="#">My Proposals</Link>
//           </>
//         )}

//         {role === "admin" && (
//           <>
//             <Link to="/admin">Dashboard</Link>
//             <Link to="#">Manage Users</Link>
//             <Link to="#">Analytics</Link>
//           </>
//         )}

//       </nav>
//     </div>
//   );
// }

// import { NavLink } from "react-router-dom";

// export default function Sidebar({ role }) {
//   const linkStyle =
//     "block px-4 py-2 rounded-lg hover:bg-white/20 transition";

//   const activeStyle = "bg-white/30";

//   return (
//     <div className="w-64 min-h-screen bg-linear-to-b from-purple-700 to-blue-600 text-white p-6">

//       <h1 className="text-2xl font-bold mb-10">SkillSphere</h1>

//       <div className="flex flex-col gap-4">

//         <NavLink to="#" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : ""}`}>
//           Dashboard
//         </NavLink>

//         {role === "client" && (
//           <>
//             <NavLink to="#post" className={linkStyle}>Post Job</NavLink>
//             <NavLink to="#applicants" className={linkStyle}>Applicants</NavLink>
//             <NavLink to="#payments" className={linkStyle}>Payments</NavLink>
//           </>
//         )}

//         {role === "freelancer" && (
//           <>
//             <NavLink to="#jobs" className={linkStyle}>Browse Jobs</NavLink>
//             <NavLink to="#proposals" className={linkStyle}>My Proposals</NavLink>
//           </>
//         )}

//         {role === "admin" && (
//           <>
//             <NavLink to="#analytics" className={linkStyle}>Analytics</NavLink>
//             <NavLink to="#users" className={linkStyle}>Users</NavLink>
//           </>
//         )}

//       </div>
//     </div>
//   );
// }

// export default function Sidebar({ setActive, active }) {
//   const menu = [
//     { name: "Dashboard", key: "dashboard" },
//     { name: "Post Job", key: "post" },
//     { name: "Applicants", key: "applicants" },
//     { name: "Payments", key: "payments" },
//   ];

//   return (
//     <div className="w-64 min-h-screen bg-linear-to-b from-purple-700 to-blue-600 text-white p-6">

//       <h1 className="text-2xl font-bold mb-10">SkillSphere</h1>

//       {menu.map((item) => (
//         <div
//           key={item.key}
//           onClick={() => setActive(item.key)}
//           className={`px-4 py-2 rounded-lg mb-3 cursor-pointer 
//             ${active === item.key ? "bg-white/30" : "hover:bg-white/20"}`}
//         >
//           {item.name}
//         </div>
//       ))}
//     </div>
//   );
// }

export default function Sidebar({ setActive, active }) {
  const menu = [
    { name: "dashboard", label: "Dashboard" },
    { name: "post", label: "Post Job" },
    { name: "jobs", label: "Jobs" },
    { name: "applicants", label: "Applicants" },
    { name: "payments", label: "Payments" },
  ];

  return (
    <div className="w-64 bg-purple-800 p-6 text-white">
      <h1 className="text-2xl font-bold mb-10">SkillSphere</h1>

      {menu.map((item) => (
        <div
          key={item.name}
          onClick={() => setActive(item.name)}
          className={`p-3 rounded-lg mb-3 cursor-pointer ${
            active === item.name
              ? "bg-white text-purple-700"
              : "hover:bg-purple-600"
          }`}
        >
          {item.label}
        </div>
      ))}
      <li onClick={() => setActive("chat")}>💬 Chat</li>
    </div>
  );
}