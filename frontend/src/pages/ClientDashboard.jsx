// import Sidebar from "../components/Sidebar";

// export default function ClientDashboard() {
//   return (
//     <div className="flex bg-linear-to-br from-purple-600 to-blue-500 min-h-screen">

//       <Sidebar role="client" />

//       <div className="flex-1 p-10 text-white">

//         <h1 className="text-4xl font-bold mb-8">Client Dashboard</h1>

//         <div className="grid md:grid-cols-3 gap-6">

//           <div className="bg-white/20 p-6 rounded-2xl shadow-xl hover:scale-105 transition">
//             <h2 className="text-xl font-bold">Post a Job</h2>
//             <p>Create new opportunities</p>
//           </div>

//           <div className="bg-white/20 p-6 rounded-2xl shadow-xl hover:scale-105 transition">
//             <h2 className="text-xl font-bold">View Applicants</h2>
//             <p>Check freelancer proposals</p>
//           </div>

//           <div className="bg-white/20 p-6 rounded-2xl shadow-xl hover:scale-105 transition">
//             <h2 className="text-xl font-bold">Payments</h2>
//             <p>Manage transactions</p>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import Sidebar from "../components/Sidebar";
// import API from "../services/api";
// import PostJob from "../components/PostJob"; 
// import Applicants from "../components/Applicants";

// export default function ClientDashboard() {
//   const [active, setActive] = useState("dashboard");
//   const [jobs, setJobs] = useState([]);
//   const [applicants, setApplicants] = useState([]);
//   const [payments, setPayments] = useState([]);

//   // Fetch Data
//   useEffect(() => {
//     API.get("/jobs").then(res => setJobs(res.data));
//     API.get("/applicants").then(res => setApplicants(res.data));
//     API.get("/payments").then(res => setPayments(res.data));
//   }, []);

//   return (
//     <div className="flex min-h-screen bg-linear-to-br from-purple-600 to-blue-500">

//       <Sidebar setActive={setActive} active={active} />

//       <div className="flex-1 p-10 text-white">

//         <h1 className="text-3xl font-bold mb-8 capitalize">
//           {active}
//         </h1>

//         {/* DASHBOARD */}
//         {active === "dashboard" && (
//           <div className="grid grid-cols-3 gap-6">

//             <div className="bg-white/20 p-6 rounded-xl">
//               <h2>Total Jobs</h2>
//               <p className="text-2xl">{jobs.length}</p>
//             </div>

//             <div className="bg-white/20 p-6 rounded-xl">
//               <h2>Applicants</h2>
//               <p className="text-2xl">{applicants.length}</p>
//             </div>

//             <div className="bg-white/20 p-6 rounded-xl">
//               <h2>Payments</h2>
//               <p className="text-2xl">{payments.length}</p>
//             </div>

//           </div>
//         )}

//         {/* POST JOB */}
//         {active === "post" && <PostJob />}

//         {/* APPLICANTS */}
//         {active === "applicants" && (
//           <div className="grid gap-4">
//             {applicants.map((a) => (
//               <div key={a._id} className="bg-white/20 p-4 rounded-xl">
//                 <h3>{a.name}</h3>
//                 <p>{a.jobTitle}</p>
//                 <button className="bg-green-500 px-3 py-1 rounded mt-2">
//                   Accept
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* PAYMENTS */}
//         {active === "payments" && (
//           <div className="grid gap-4">
//             {payments.map((p) => (
//               <div key={p._id} className="bg-white/20 p-4 rounded-xl">
//                 <h3>{p.freelancer}</h3>
//                 <p>₹ {p.amount}</p>
//                 <p>Status: {p.status}</p>
//               </div>
//             ))}
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import Sidebar from "../components/Sidebar";
// import API from "../services/api";
// import PostJob from "../components/PostJob";

// export default function ClientDashboard() {
//   const [active, setActive] = useState("dashboard");
//   const [jobs, setJobs] = useState([]);
//   const [applicants, setApplicants] = useState([]);
//   const [payments, setPayments] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // ✅ FETCH ALL DATA
//   const fetchData = async () => {
//     try {
//       setLoading(true);

//       const [jobsRes, applicantsRes, paymentsRes] = await Promise.all([
//         API.get("/jobs"),
//         API.get("/applicants"),
//         API.get("/payments"),
//       ]);

//       setJobs(jobsRes.data);
//       setApplicants(applicantsRes.data);
//       setPayments(paymentsRes.data);

//     } catch (err) {
//       console.log("Dashboard Error:", err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // ✅ DELETE JOB
//   const deleteJob = async (id) => {
//     try {
//       await API.delete(`/jobs/${id}`);
//       fetchData();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-linear-to-br from-purple-700 to-blue-600">

//       {/* SIDEBAR */}
//       <Sidebar setActive={setActive} active={active} />

//       {/* MAIN */}
//       <div className="flex-1 p-10 text-white">

//         <h1 className="text-3xl font-bold mb-8 capitalize">
//           {active}
//         </h1>

//         {/* LOADING */}
//         {loading && <p>Loading...</p>}

//         {/* DASHBOARD */}
//         {active === "dashboard" && !loading && (
//           <div className="grid grid-cols-3 gap-6">

//             <div className="bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:scale-105 transition">
//               <h2 className="text-lg">Total Jobs</h2>
//               <p className="text-3xl font-bold">{jobs.length}</p>
//             </div>

//             <div className="bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:scale-105 transition">
//               <h2 className="text-lg">Applicants</h2>
//               <p className="text-3xl font-bold">{applicants.length}</p>
//             </div>

//             <div className="bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:scale-105 transition">
//               <h2 className="text-lg">Payments</h2>
//               <p className="text-3xl font-bold">{payments.length}</p>
//             </div>

//           </div>
//         )}

//         {/* POST JOB */}
//         {active === "post" && (
//           <PostJob refreshJobs={fetchData} />
//         )}

//         {/* JOB LIST */}
//         {active === "jobs" && (
//           <div className="grid gap-4">
//             {jobs.length === 0 ? (
//               <p>No jobs posted yet 😢</p>
//             ) : (
//               jobs.map((job) => (
//                 <div
//                   key={job._id}
//                   className="bg-white/20 p-5 rounded-xl backdrop-blur-lg shadow-lg"
//                 >
//                   <h3 className="text-xl font-bold">{job.title}</h3>
//                   <p>{job.description}</p>
//                   <p className="mt-2">💰 ₹ {job.budget}</p>

//                   <button
//                     onClick={() => deleteJob(job._id)}
//                     className="bg-red-500 px-4 py-1 mt-3 rounded"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               ))
//             )}
//           </div>
//         )}

//         {/* APPLICANTS */}
//         {active === "applicants" && (
//           <div className="grid gap-4">
//             {applicants.length === 0 ? (
//               <p>No applicants yet 😢</p>
//             ) : (
//               applicants.map((a) => (
//                 <div
//                   key={a._id}
//                   className="bg-white/20 p-5 rounded-xl backdrop-blur-lg shadow-lg"
//                 >
//                   <h3 className="text-lg font-bold">{a.name}</h3>
//                   <p>Applied for: {a.jobId}</p>

//                   <button className="bg-green-500 px-3 py-1 rounded mt-2">
//                     Accept
//                   </button>
//                 </div>
//               ))
//             )}
//           </div>
//         )}

//         {/* PAYMENTS */}
//         {active === "payments" && (
//           <div className="grid gap-4">
//             {payments.length === 0 ? (
//               <p>No payments yet 💸</p>
//             ) : (
//               payments.map((p) => (
//                 <div
//                   key={p._id}
//                   className="bg-white/20 p-5 rounded-xl backdrop-blur-lg shadow-lg"
//                 >
//                   <h3 className="text-lg font-bold">{p.freelancer}</h3>
//                   <p>₹ {p.amount}</p>

//                   <span
//                     className={`px-3 py-1 rounded text-sm ${
//                       p.status === "Paid"
//                         ? "bg-green-500"
//                         : "bg-yellow-500"
//                     }`}
//                   >
//                     {p.status}
//                   </span>
//                 </div>
//               ))
//             )}
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import Sidebar from "../components/Sidebar";
// import API from "../services/api";
// import PostJob from "../components/PostJob";
// import Applicants from "../components/Applicants";
// import Jobs from "../components/Jobs";
// import Payments from "../components/Payments";

// export default function ClientDashboard() {
//   const [active, setActive] = useState("dashboard");
//   const [jobs, setJobs] = useState([]);
//   const [applicants, setApplicants] = useState([]);
//   const [payments, setPayments] = useState([]);

//   useEffect(() => {
//     API.get("/jobs").then(res => setJobs(res.data)).catch(console.log);
//     API.get("/applicants").then(res => setApplicants(res.data)).catch(console.log);
//     API.get("/payments").then(res => setPayments(res.data)).catch(console.log);
//   }, []);

//   return (
//     <div className="flex min-h-screen bg-linear-to-br from-purple-600 to-blue-500">

//       <Sidebar setActive={setActive} active={active} />

//       <div className="flex-1 p-10 text-white">

//         <h1 className="text-3xl font-bold mb-8 capitalize">
//           {active}
//         </h1>
//         <div className="mt-6">

//         {/* DASHBOARD */}
//         {active === "dashboard" && (
//           <div className="grid grid-cols-3 gap-6">
//             <Card title="Total Jobs" value={jobs.length} />
//             <Card title="Applicants" value={applicants.length} />
//             <Card title="Payments" value={payments.length} />
//           </div>
//         )}

//         {/* POST JOB */}
//         {active === "post" && <PostJob />}

//         {/* JOBS */}
//         {active === "jobs" && <Jobs jobs={jobs} />}

//         {/* APPLICANTS */}
//         {active === "applicants" && <Applicants applicants={applicants} />}

//         {/* PAYMENTS */}
//         {active === "payments" && <Payments payments={payments} />}
//         </div>

//       </div>
//     </div>
//   );
// }

// function Card({ title, value }) {
//   return (
//     <div className="bg-white/20 p-6 rounded-xl backdrop-blur-lg shadow-lg">
//       <h2>{title}</h2>
//       <p className="text-3xl font-bold">{value}</p>
//     </div>
//   );
// }


// import { useState, useEffect } from "react";
// import Sidebar from "../components/Sidebar";
// import API from "../services/api";
// import PostJob from "../components/PostJob";
// import Applicants from "../components/Applicants";
// import Jobs from "../components/Jobs";
// import Payments from "../components/Payments";
// import Chat from "../components/Chat";

// export default function ClientDashboard() {
//   const [active, setActive] = useState("dashboard");
//   const [jobs, setJobs] = useState([]);
//   const [applicants, setApplicants] = useState([]);
//   const [payments, setPayments] = useState([]);

//  const fetchJobs = async () => {
//   try {
//     const res = await API.get("/jobs");
//     setJobs(res.data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const fetchApplicants = async () => {
//   try {
//     const res = await API.get("/applicants");
//     setApplicants(res.data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const fetchPayments = async () => {
//   try {
//     const res = await API.get("/payments");
//     setPayments(res.data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// useEffect(() => {
//   fetchJobs();
//   fetchApplicants();
//   fetchPayments();
// }, []);

//   return (
//     <div className="flex min-h-screen bg-linear-to-br from-purple-600 via-pink-500 to-blue-600">

//       {/* SIDEBAR */}
//       <Sidebar setActive={setActive} active={active} />

//       {/* MAIN CONTENT */}
//       <div className="flex-1 p-10 text-white">

//         {/* HEADER */}
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-bold capitalize">
//             {active}
//           </h1>

//           <button
//             onClick={() => setActive("post")}
//             className="bg-green-500 px-5 py-2 rounded-lg hover:scale-105 transition shadow-lg"
//           >
//             + Post Job
//           </button>
//         </div>

//         {/* DASHBOARD */}
//         {active === "dashboard" && (
//           <div className="grid grid-cols-3 gap-6">

//             <Card title="Total Jobs" value={jobs.length} />
//             <Card title="Applicants" value={applicants.length} />
//             <Card title="Payments" value={payments.length} />

//           </div>
//         )}
//         {active === "post" && <PostJob refreshJobs={fetchJobs} />}

       

//         {/* JOB LIST */}
//         {active === "jobs" && (
//           <Jobs jobs={jobs} refresh={fetchData} />
//         )}

//         {/* APPLICANTS */}
//         {active === "applicants" && (
//           <Applicants applicants={applicants} />
//         )}

//         {/* PAYMENTS */}
//         {active === "payments" && (
//           <Payments payments={payments} />
//         )}
//         {active === "chat" && <Chat />}

//       </div>
//     </div>
//   );
// }

// function Card({ title, value }) {
//   return (
//     <div className="bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-xl hover:scale-105 transition">
//       <h2 className="text-lg">{title}</h2>
//       <p className="text-3xl font-bold mt-2">{value}</p>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import Sidebar from "../components/Sidebar";
// import API from "../services/api";
// import PostJob from "../components/PostJob";
// import Applicants from "../components/Applicants";
// import Jobs from "../components/Jobs";
// import Payments from "../components/Payments";
// import Chat from "../components/Chat";

// export default function ClientDashboard() {
//   const [active, setActive] = useState("dashboard");
//   const [jobs, setJobs] = useState([]);
//   const [applicants, setApplicants] = useState([]);
//   const [payments, setPayments] = useState([]);

//   // ✅ FETCH FUNCTIONS
//   const fetchJobs = async () => {
//     try {
//       const res = await API.get("/jobs");
//       setJobs(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const fetchApplicants = async () => {
//     try {
//       const res = await API.get("/applicants");
//       setApplicants(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const fetchPayments = async () => {
//     try {
//       const res = await API.get("/admin/payments");
//       setPayments(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchJobs();
//     fetchApplicants();
//     fetchPayments();
//   }, []);

//   return (
//     <div className="flex min-h-screen bg-linear-to-br from-purple-600 via-pink-500 to-blue-600">

//       {/* SIDEBAR */}
//       <Sidebar setActive={setActive} active={active} />

//       {/* MAIN */}
//       <div className="flex-1 p-10 text-white">

//         {/* HEADER */}
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-bold capitalize">{active}</h1>

//           <button
//             onClick={() => setActive("post")}
//             className="bg-green-500 px-5 py-2 rounded-lg hover:scale-105 transition shadow-lg"
//           >
//             + Post Job
//           </button>
//         </div>

//         {/* DASHBOARD */}
//         {active === "dashboard" && (
//           <div className="grid grid-cols-3 gap-6">
//             <Card title="Total Jobs" value={jobs.length} />
//             <Card title="Applicants" value={applicants.length} />
//             <Card title="Payments" value={payments.length} />
//           </div>
//         )}

//         {/* POST JOB */}
//         {active === "post" && <PostJob refreshJobs={fetchJobs} />}

//         {/* JOBS */}
//         {active === "jobs" && (
//           <Jobs jobs={jobs} refresh={fetchJobs} />
//         )}

//         {/* APPLICANTS */}
//         {active === "applicants" && (
//           <Applicants applicants={applicants} />
//         )}

//         {/* PAYMENTS */}
//         {/* {active === "payments" && (
//           <Payments payments={payments} />
//         )} */}

        
// <Payments payments={payments} refreshPayments={fetchPayments} />

//         {/* CHAT */}
//         {active === "chat" && <Chat />}

//       </div>
//     </div>
//   );
// }

// function Card({ title, value }) {
//   return (
//     <div className="bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-xl hover:scale-105 transition">
//       <h2 className="text-lg">{title}</h2>
//       <p className="text-3xl font-bold mt-2">{value}</p>
//     </div>
//   );
// }


// import { useState, useEffect } from "react";
// import Sidebar from "../components/Sidebar";
// import API from "../services/api";
// import PostGig from "../components/PostGig";
// import Applicants from "../components/Applicants";
// import Jobs from "../components/Jobs";
// import Payments from "../components/Payments";
// import Chat from "../components/Chat";
// import MyGigs from "../components/MyGigs";

// export default function ClientDashboard() {

//   const [active, setActive] = useState("dashboard");
//   const [jobs, setJobs] = useState([]);
//   const [applicants, setApplicants] = useState([]);
//   const [payments, setPayments] = useState([]);

//   // ✅ FETCH JOBS
//   const fetchJobs = async () => {
//     try {
//       const res = await API.get("/jobs");
//       setJobs(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // ✅ FETCH APPLICANTS
//   const fetchApplicants = async () => {
//     try {
//       const res = await API.get("/applicants");
//       setApplicants(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // ✅ FETCH PAYMENTS (FIXED API)
//   const fetchPayments = async () => {
//     try {
//       const res = await API.get("/payments"); // ✅ FIXED
//       setPayments(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchJobs();
//     fetchApplicants();
//     fetchPayments();
//   }, []);

//   // ✅ FILTER VALID PAYMENTS
//   const validPayments = payments.filter(
//     (p) => p.status !== "pending"
//   );

//   return (
//     <div className="flex min-h-screen bg-linear-to-br from-purple-600 via-pink-500 to-blue-600">

//       {/* SIDEBAR */}
//       <Sidebar setActive={setActive} active={active} />

//       {/* MAIN */}
//       <div className="flex-1 p-10 text-white">

//         {/* HEADER */}
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-bold capitalize">
//             {active}
//           </h1>

//           <button
//             onClick={() => setActive("post")}
//             className="bg-green-500 px-5 py-2 rounded-lg hover:scale-105 transition shadow-lg"
//           >
//             + Post Gig
//           </button>
//         </div>

//         {/* DASHBOARD */}
//         {active === "dashboard" && (
//           <div className="grid grid-cols-3 gap-6">

//             <Card title="Total Jobs" value={jobs.length} />
//             <Card title="Applicants" value={applicants.length} />

//             {/* ✅ only real payments */}
//             <Card title="Payments" value={validPayments.length} />

//           </div>
//         )}

//         {/* POST JOB */}
//         {active === "post" && (
//           <PostGig refreshJobs={fetchJobs} />
//         )}

//         {/* JOBS */}
//         {active === "jobs" && (
//           <Jobs jobs={jobs} refresh={fetchJobs} />
//         )}

//         {/* APPLICANTS */}
//         {active === "applicants" && (
//           <Applicants applicants={applicants} />
//         )}

//         {/* ✅ PAYMENTS (FIXED CONDITION) */}
//         {active === "payments" && (
//           <Payments payments={payments} />
//         )}

//         {/* CHAT */}
//         {active === "chat" && <Chat />}

//       </div>
//     </div>
//   );
// }

// function Card({ title, value }) {
//   return (
//     <div className="bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-xl hover:scale-105 transition">
//       <h2 className="text-lg">{title}</h2>
//       <p className="text-3xl font-bold mt-2">{value}</p>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import API from "../services/api";
import PostGig from "../components/PostGig";
import Applicants from "../components/Applicants";
import Jobs from "../components/Jobs";
import Payments from "../components/Payments";
import Chat from "../components/Chat";

export default function ClientDashboard() {

  const [active, setActive] = useState("dashboard");
  const [jobs, setJobs] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const [payments, setPayments] = useState([]);

  const userId = localStorage.getItem("userId"); // ✅ IMPORTANT

  // ✅ FETCH MY GIGS (FIXED)
  const fetchJobs = async () => {
    try {
      const res = await API.get(`/my-gigs/${userId}`); // ✅ FIXED
      setJobs(res.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  // ✅ FETCH APPLICANTS
  const fetchApplicants = async () => {
    try {
      const res = await API.get("/applicants");
      setApplicants(res.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  // ✅ FETCH PAYMENTS
  const fetchPayments = async () => {
    try {
      const res = await API.get("/payments");
      setPayments(res.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchJobs();
      fetchApplicants();
      fetchPayments();
    }
  }, [userId]);

  // ✅ ONLY SHOW REAL PAYMENTS
  const validPayments = payments.filter(
    (p) => p.status !== "pending"
  );

  return (
    <div className="flex min-h-screen bg-linear-to-br from-purple-600 via-pink-500 to-blue-600">

      {/* SIDEBAR */}
      <Sidebar setActive={setActive} active={active} />

      {/* MAIN */}
      <div className="flex-1 p-10 text-white">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold capitalize">
            {active}
          </h1>

          <button
            onClick={() => setActive("post")}
            className="bg-green-500 px-5 py-2 rounded-lg hover:scale-105 transition shadow-lg"
          >
            + Post Gig
          </button>
        </div>

        {/* DASHBOARD */}
        {active === "dashboard" && (
          <div className="grid grid-cols-3 gap-6">

            <Card title="My Gigs 💼" value={jobs.length} />
            <Card title="Applicants 📄" value={applicants.length} />
            <Card title="Payments 💰" value={validPayments.length} />

          </div>
        )}

        {/* POST GIG */}
        {active === "post" && (
          <PostGig refresh={fetchJobs} />
        )}

        {/* MY GIGS (UPDATED UI) */}
        {active === "jobs" && (
          <div className="grid grid-cols-2 gap-6">

            {jobs.length === 0 ? (
              <p>No gigs posted yet 🚀</p>
            ) : (
              jobs.map((job) => (
                <div
                  key={job._id}
                  className="bg-white/20 p-5 rounded-xl shadow-lg"
                >

                  <h2 className="text-xl font-bold">
                    {job.title}
                  </h2>

                  <p className="text-gray-200 mt-2">
                    {job.description}
                  </p>

                  <p className="text-green-300 mt-2">
                    ₹ {job.budget}
                  </p>

                  {/* ✅ STATUS */}
                  <p className="mt-2 text-sm">
                    Status:
                    <span className={`ml-2 px-2 py-1 rounded ${
                      job.isApproved ? "bg-green-500" : "bg-yellow-500"
                    }`}>
                      {job.isApproved ? "Approved ✅" : "Pending ⏳"}
                    </span>
                  </p>

                </div>
              ))
            )}

          </div>
        )}

        {/* APPLICANTS */}
        {active === "applicants" && (
          <Applicants applicants={applicants} />
        )}

        {/* PAYMENTS */}
        {active === "payments" && (
          <Payments payments={validPayments} />
        )}

        {/* CHAT */}
        {active === "chat" && <Chat />}

      </div>
    </div>
  );
}

// 📊 CARD UI
function Card({ title, value }) {
  return (
    <div className="bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-xl hover:scale-105 transition">
      <h2 className="text-lg">{title}</h2>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}