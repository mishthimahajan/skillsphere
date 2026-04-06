// import { useState } from "react";
// import API from "../services/api";

// export default function PostGig({ refresh }) {

//   const [data, setData] = useState({
//     title: "",
//     description: "",
//     budget: "",
//   });

//   const handleSubmit = async () => {
//     await API.post("/gigs", data);
//     alert("Gig submitted for approval 🚀");
//     refresh();
//   };

//   return (
//     <div className="bg-white/20 p-6 rounded-xl">

//       <input
//         placeholder="Title"
//         onChange={(e) => setData({ ...data, title: e.target.value })}
//       />

//       <textarea
//         placeholder="Description"
//         onChange={(e) => setData({ ...data, description: e.target.value })}
//       />

//       <input
//         placeholder="Budget"
//         onChange={(e) => setData({ ...data, budget: e.target.value })}
//       />

//       <button onClick={handleSubmit} className="bg-green-500 mt-3 px-3 py-1">
//         Post Gig
//       </button>

//     </div>
//   );
// }

import { useState } from "react";
import API from "../services/api";

export default function PostGig({ refresh }) {

  const [data, setData] = useState({
    title: "",
    description: "",
    budget: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/gigs", data);
      alert("Gig submitted for approval 🚀");

      setData({
        title: "",
        description: "",
        budget: "",
      createdBy: localStorage.getItem("userId")
      });

      refresh && refresh(); // ✅ safe call

    } catch (err) {
      console.log(err);
      alert("Error posting gig ❌");
    }
  };

  return (
    <div className="flex justify-center items-center">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20"
      >

        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          🚀 Post a New Gig
        </h2>

        {/* TITLE */}
        <div className="mb-4">
          <label className="text-gray-300 text-sm">Gig Title</label>
          <input
            value={data.title}
            onChange={(e) =>
              setData({ ...data, title: e.target.value })
            }
            placeholder="e.g. React Developer Needed"
            className="w-full mt-1 p-3 rounded-lg bg-black/30 text-white outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* DESCRIPTION */}
        <div className="mb-4">
          <label className="text-gray-300 text-sm">Description</label>
          <textarea
            value={data.description}
            onChange={(e) =>
              setData({ ...data, description: e.target.value })
            }
            placeholder="Describe your project in detail..."
            rows="4"
            className="w-full mt-1 p-3 rounded-lg bg-black/30 text-white outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* BUDGET */}
        <div className="mb-6">
          <label className="text-gray-300 text-sm">Budget (₹)</label>
          <input
            type="number"
            value={data.budget}
            onChange={(e) =>
              setData({ ...data, budget: e.target.value })
            }
            placeholder="Enter amount"
            className="w-full mt-1 p-3 rounded-lg bg-black/30 text-white outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-linear-to-r from-green-400 to-emerald-500 py-3 rounded-lg font-semibold text-white hover:scale-105 transition shadow-lg"
        >
          Post Gig 🚀
        </button>

      </form>

    </div>
  );
}