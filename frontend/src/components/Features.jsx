// export default function FreelancerSidebar({ active, setActive }) {
//   const menu = [
//     { name: "dashboard", label: "Dashboard 🏠" },
//     { name: "jobs", label: "Find Work 💼" },
//     { name: "applied", label: "Applied Jobs 📄" },
//     { name: "payments", label: "Earnings 💰" },
//     { name: "chat", label: "Chat 💬" },
//   ];

//   return (
//     <div className="w-64 min-h-screen bg-purple-900 text-white p-6">

//       <h1 className="text-2xl font-bold mb-8">SkillSphere</h1>

//       {menu.map(item => (
//         <div
//           key={item.name}
//           onClick={() => setActive(item.name)}
//           className={`p-3 mb-3 rounded cursor-pointer ${
//             active === item.name ? "bg-white/20" : "hover:bg-white/10"
//           }`}
//         >
//           {item.label}
//         </div>
//       ))}
//     </div>
//   );
// }