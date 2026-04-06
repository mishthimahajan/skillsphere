export default function AdminSidebar({ active, setActive }) {
  const menu = [
    { name: "dashboard", label: "Dashboard 📊" },
    { name: "users", label: "Users 👥" },
    { name: "jobs", label: "Jobs 💼" },
    { name: "payments", label: "Payments 💳" },
  ];

  return (
    <div className="w-64 min-h-screen bg-linear-to-b from-purple-800 to-indigo-900 text-white p-6">

      <h1 className="text-2xl font-bold mb-8">SkillSphere ⚙️</h1>

      {menu.map((item) => (
        <div
          key={item.name}
          onClick={() => setActive(item.name)}
          className={`p-3 mb-3 rounded-lg cursor-pointer transition ${
            active === item.name
              ? "bg-white/20"
              : "hover:bg-white/10"
          }`}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}