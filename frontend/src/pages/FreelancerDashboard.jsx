// import { useState, useEffect } from "react";
// import FreelancerSidebar from "../components/FreelancerSidebar";
// import API from "../services/api";

// export default function FreelancerDashboard() {

//   const [active, setActive] = useState("jobs");
//   const [jobs, setJobs] = useState([]);
//   const [applications, setApplications] = useState([]);
//   const [earnings, setEarnings] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const jobsRes = await API.get("/gigs"); // ✅ ONLY approved gigs
//       const appRes = await API.get("/my-applications");
//       const payRes = await API.get("/payments");

//       setJobs(jobsRes.data || []);
//       setApplications(appRes.data || []);
//       setEarnings((payRes.data || []).filter(p => p.status === "released"));

//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const applyJob = async (jobId) => {
//     await API.post("/apply", { jobId });
//     alert("Applied 🚀");
//   };

//   return (
//     <div className="flex min-h-screen bg-linear-to-br from-blue-600 to-purple-700">

//       <FreelancerSidebar active={active} setActive={setActive} />

//       <div className="flex-1 p-10 text-white">

//         <h1 className="text-3xl mb-6 capitalize">{active}</h1>

//         {/* JOBS */}
//         {active === "jobs" && (
//           <div className="grid grid-cols-2 gap-6">
//             {jobs.map(job => (
//               <div key={job._id} className="bg-white/20 p-5 rounded-xl">

//                 <h2>{job.title}</h2>
//                 <p>{job.description}</p>
//                 <p>₹ {job.budget}</p>

//                 <button
//                   onClick={() => applyJob(job._id)}
//                   className="bg-green-500 px-3 py-1 mt-2 rounded"
//                 >
//                   Apply
//                 </button>

//               </div>
//             ))}
//           </div>
//         )}

//         {/* APPLICATIONS */}
//         {active === "applications" && (
//           <div className="bg-white/10 p-6 rounded-xl">
//             {applications.map(a => (
//               <div key={a._id}>{a.jobTitle}</div>
//             ))}
//           </div>
//         )}

//         {/* EARNINGS */}
//         {active === "earnings" && (
//           <div className="bg-white/10 p-6 rounded-xl">
//             {earnings.map(e => (
//               <div key={e._id}>
//                 ₹ {e.amount}
//               </div>
//             ))}
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import API from "../services/api";
// import { Jobs } from "../components/FreelancerJobs";
// import { Applications } from "../components/FreelancerApplications";
// import { Earnings } from "../components/FreelancerEarnings";

// export default function FreelancerDashboard() {
//   const [active, setActive] = useState("jobs");

//   const [jobs, setJobs] = useState([]);
//   const [applications, setApplications] = useState([]);
//   const [earnings, setEarnings] = useState([]);

//   useEffect(() => {
//     fetchJobs();
//     fetchApplications();
//     fetchEarnings();
//   }, []);

//   const fetchJobs = async () => {
//     const res = await API.get("/gigs"); 
//     setJobs(res.data);
//   };

//   const fetchApplications = async () => {
//     const res = await API.get("/applicants/my");
//     setApplications(res.data);
//   };

//   const fetchEarnings = async () => {
//     const res = await API.get("/payments/my");
//     setEarnings(res.data);
//   };

//   return (
//     <div className="flex min-h-screen bg-linear-to-br from-gray-900 to-black text-white">

//       {/* SIDEBAR */}
//       <div className="w-64 bg-black/40 p-6 space-y-4">
//         <h1 className="text-2xl font-bold">Freelancer</h1>

//         <button onClick={() => setActive("jobs")}>Jobs</button>
//         <button onClick={() => setActive("applications")}>Applications</button>
//         <button onClick={() => setActive("earnings")}>Earnings</button>
//       </div>

//       {/* MAIN */}
//       <div className="flex-1 p-8">

//         {active === "jobs" && <Jobs jobs={jobs} />}
//         {active === "applications" && <Applications data={applications} />}
//         {active === "earnings" && <Earnings data={earnings} />}

//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import API from "../services/api";
import { Jobs } from "../components/FreelancerJobs";
import { Applications } from "../components/FreelancerApplications";
import { Earnings } from "../components/FreelancerEarnings";

export default function FreelancerDashboard() {
  const [active, setActive] = useState("jobs");
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [earnings, setEarnings] = useState([]);

  useEffect(() => {
    fetchJobs();
    fetchApplications();
    fetchEarnings();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await API.get("/gigs"); 
      setJobs(res.data);
    } catch (err) {
      console.error("Error fetching jobs:", err);
    }
  };

  const fetchApplications = async () => {
    try {
      const res = await API.get("/applicants/my");
      setApplications(res.data);
    } catch (err) {
      console.error("Error fetching applications:", err);
    }
  };

  const fetchEarnings = async () => {
    try {
      const res = await API.get("/payments/my");
      setEarnings(res.data);
    } catch (err) {
      console.error("Error fetching earnings:", err);
    }
  };

  return (
    <div className="flex min-h-screen bg-linear-to-br from-gray-900 to-black text-white">

      {/* SIDEBAR */}
      <aside className="w-64 bg-black/50 p-6 flex flex-col space-y-6 shadow-lg">
        <h1 className="text-3xl font-bold text-blue-400 mb-6">SkillSphere</h1>

        <nav className="flex flex-col space-y-3">
          <button
            className={`px-4 py-2 rounded-lg text-left transition-colors duration-200 
              ${active === "jobs" ? "bg-blue-600 font-bold" : "hover:bg-gray-700"}`}
            onClick={() => setActive("jobs")}
          >
            Jobs
          </button>

          <button
            className={`px-4 py-2 rounded-lg text-left transition-colors duration-200
              ${active === "applications" ? "bg-blue-600 font-bold" : "hover:bg-gray-700"}`}
            onClick={() => setActive("applications")}
          >
            Applications
          </button>

          <button
            className={`px-4 py-2 rounded-lg text-left transition-colors duration-200
              ${active === "earnings" ? "bg-blue-600 font-bold" : "hover:bg-gray-700"}`}
            onClick={() => setActive("earnings")}
          >
            Earnings
          </button>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 capitalize">
          {active}
        </h2>

        <div className="space-y-6">
          {active === "jobs" && <Jobs jobs={jobs} />}
          {active === "applications" && <Applications data={applications} />}
          {active === "earnings" && <Earnings data={earnings} />}
        </div>
      </main>
    </div>
  );
}