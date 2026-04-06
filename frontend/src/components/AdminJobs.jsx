// import { useEffect, useState } from "react";
// import API from "../services/api";

// export default function AdminJobs() {
//   const [jobs, setJobs] = useState([]);

//   const fetchJobs = async () => {
//     try {
//       const res = await API.get("/admin/jobs");
//       setJobs(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const approveJob = async (id) => {
//     await API.put(`/admin/job/approve/${id}`);
//     fetchJobs();
//   };

//   const deleteJob = async (id) => {
//     await API.delete(`/jobs/${id}`);
//     fetchJobs();
//   };

//   return (
//   <div className="grid grid-cols-3 gap-6">

//     {jobs.length === 0 ? (
//       <p className="text-gray-400">No jobs available 💼</p>
//     ) : (
//       jobs.map((job) => (
//         <div
//           key={job._id}
//           className="bg-linear-to-br from-green-500 to-teal-500 p-5 rounded-2xl shadow-lg hover:scale-105 transition"
//         >

//           <h2 className="text-xl font-bold">{job.title}</h2>

//           <p className="text-sm mt-2 line-clamp-2">
//             {job.description}
//           </p>

//           <p className="mt-3 font-semibold">
//             ₹ {job.salary}
//           </p>

//           <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs
//             ${job.isApproved ? "bg-black/40" : "bg-yellow-500"}`}>
//             {job.isApproved ? "Approved" : "Pending"}
//           </span>

//           {!job.isApproved && (
//             <button
//               onClick={() => approveJob(job._id)}
//               className="mt-4 w-full bg-black/40 py-2 rounded-lg"
//             >
//               Approve Job
//             </button>
//           )}

//         </div>
//       ))
//     )}

//   </div>
// );  
// }


import { useEffect, useState } from "react";
import API from "../services/api";

export default function AdminJobs() {
  const [jobs, setJobs] = useState([]);

  // 🔥 FETCH ALL JOBS (ADMIN)
  const fetchJobs = async () => {
    try {
      const res = await API.get("/admin/gigs");
      console.log("API RESPONSE:",res.data);
      setJobs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
  console.log("JOBS STATE:", jobs); // ✅ CORRECT PLACE
}, [jobs]);

  // ✅ APPROVE JOB
  const approveJob = async (id) => {
    await API.put(`/admin/gig/${id}`); // ✅ FIXED
    fetchJobs();
  };

  // ✅ DELETE JOB
  const deleteJob = async (id) => {
    await API.delete(`/jobs/${id}`);
    fetchJobs();
  };

  return (
    <div className="grid grid-cols-3 gap-6">

      {jobs.length === 0 ? (
        <p className="text-gray-400">No jobs available 💼</p>
      ) : (
        jobs.map((job) => (
          <div
            key={job._id}
            className="bg-linear-to-br from-green-500 to-teal-500 p-5 rounded-2xl shadow-lg hover:scale-105 transition"
          >

            {/* TITLE */}
            <h2 className="text-xl font-bold">{job.title}</h2>

            {/* DESCRIPTION */}
            <p className="text-sm mt-2 line-clamp-2">
              {job.description}
            </p>

            {/* PRICE */}
            <p className="mt-3 font-semibold">
              ₹ {job.budget} {/* ✅ FIXED */}
            </p>

            {/* STATUS */}
            <span
              className={`inline-block mt-2 px-3 py-1 rounded-full text-xs ${
                job.isApproved ? "bg-black/40" : "bg-yellow-500"
              }`}
            >
              {job.isApproved ? "Approved" : "Pending"}
            </span>

            {/* APPROVE BUTTON */}
            {!job.isApproved && (
              <button
                onClick={() => approveJob(job._id)}
                className="mt-4 w-full bg-black/40 py-2 rounded-lg"
              >
                Approve Job ✅
              </button>
            )}

            {/* DELETE BUTTON */}
            <button
              onClick={() => deleteJob(job._id)}
              className="mt-2 w-full bg-red-500 py-2 rounded-lg"
            >
              Delete ❌
            </button>

          </div>
        ))
      )}

    </div>
  );
}