export default function FreelancerSidebar({ active, setActive }) {
  return (
    <div className="w-60 bg-black/30 p-5 flex flex-col gap-4">

      <button
        onClick={() => setActive("jobs")}
        className={`p-2 rounded ${active === "jobs" && "bg-purple-500"}`}
      >
        Jobs 💼
      </button>

      <button
        onClick={() => setActive("applications")}
        className={`p-2 rounded ${active === "applications" && "bg-purple-500"}`}
      >
        Applications 📄
      </button>

      <button
        onClick={() => setActive("earnings")}
        className={`p-2 rounded ${active === "earnings" && "bg-purple-500"}`}
      >
        Earnings 💰
      </button>

    </div>
  );
}