// import Sidebar from "../components/Sidebar";

// export default function AdminDashboard() {
//   return (
//     <div className="flex bg-linear-to-br from-gray-900 to-gray-700 min-h-screen">

//       <Sidebar role="admin" />

//       <div className="flex-1 p-10 text-white">

//         <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

//         <div className="grid md:grid-cols-3 gap-6">

//           <div className="bg-red-500 p-6 rounded-xl shadow-xl">
//             <h2 className="text-xl font-bold">Total Users</h2>
//             <p>1200+</p>
//           </div>

//           <div className="bg-blue-500 p-6 rounded-xl shadow-xl">
//             <h2 className="text-xl font-bold">Total Jobs</h2>
//             <p>800+</p>
//           </div>

//           <div className="bg-green-500 p-6 rounded-xl shadow-xl">
//             <h2 className="text-xl font-bold">Revenue</h2>
//             <p>₹15L+</p>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import Sidebar from "../components/Sidebar";
// import API from "../services/api";

// export default function AdminDashboard() {
//   const [stats, setStats] = useState({});

//   useEffect(() => {
//     API.get("/admin/stats").then((res) => setStats(res.data));
//   }, []);

//   return (
//     <div className="flex w-screen h-screen bg-linear-to-br from-gray-800 to-gray-900">

//       <Sidebar role="admin" />

//       <div className="flex-1 p-10 text-white">

//         <h1 className="text-3xl mb-6">Admin Dashboard</h1>

//         <div className="grid grid-cols-2 gap-6">

//           <div className="bg-white/10 p-6 rounded-xl">
//             <h2>Total Users</h2>
//             <p className="text-3xl">{stats.users}</p>
//           </div>

//           <div className="bg-white/10 p-6 rounded-xl">
//             <h2>Total Jobs</h2>
//             <p className="text-3xl">{stats.jobs}</p>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }

// import AdminSidebar from "../components/AdminSidebar";
// import AdminStats from "../components/AdminStats";
// import UsersTable from "../components/UsersTable";
// import JobsTable from "../components/JobsTable";

// export default function AdminDashboard() {
//   return (
//     <div className="flex min-h-screen bg-linear-to-br from-gray-900 to-gray-800">

//       <Sidebar role="admin" />

//       <div className="flex-1 p-10 text-white">

//         <h1 className="text-3xl font-bold mb-8">
//           Admin Dashboard 🛠️
//         </h1>

//         <AdminStats />

//         <div className="grid grid-cols-2 gap-6 mt-8">
//           <UsersTable />
//           <JobsTable />
//         </div>

//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import AdminSidebar from "../components/AdminSidebar";
// import AdminStats from "../components/AdminStats";
// import UsersTable from "../components/UsersTable";
// import JobsTable from "../components/JobsTable";
// import Payments from "../components/Payments";

// export default function AdminDashboard() {
//   const [active, setActive] = useState("dashboard");

//   return (
//     <div className="flex min-h-screen bg-linear-to-br from-gray-900 to-gray-800">

//       <AdminSidebar active={active} setActive={setActive} />

//       <div className="flex-1 p-10 text-white">

//         <h1 className="text-3xl font-bold mb-8 capitalize">
//           {active}
//         </h1>

//         {/* DASHBOARD */}
//         {active === "dashboard" && <AdminStats />}

//         {/* USERS */}
//         {active === "users" && <UsersTable />}

//         {/* JOBS */}
//         {active === "jobs" && <JobsTable />}

//         {/* PAYMENTS */}
//         {active === "payments" && <Payments payments={[]} />}

//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import AdminSidebar from "../components/AdminSidebar";
// import AdminPayments from "../components/AdminPayment";
// import API from "../services/api";
// import AdminJobs from "../components/AdminJobs";
// import AdminUsers from "../components/AdminUsers";
// import RevenueChart from "../components/RevenueChart";
// export default function AdminDashboard() {
//   const [active, setActive] = useState("dashboard");

//   const [users, setUsers] = useState([]);
//   const [jobs, setJobs] = useState([]);
//   const [payments, setPayments] = useState([]);

//   // 🔥 Fetch data
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const usersRes = await API.get("/admin/users");
//       const jobsRes = await API.get("/admin/gigs");
//       const paymentsRes = await API.get("/admin/payments");

//       setUsers(usersRes.data);
//       setJobs(jobsRes.data);
//       setPayments(paymentsRes.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   const releasePayment = async (id) => {
//   try {
//     await API.post("/payments/release", { paymentId: id });
//     alert("Payment Released 💸");

//     // refresh data
//     fetchData();

//   } catch (err) {
//     console.log(err);
//     alert("Error releasing payment");
//   }
// };

//   return (
//     <div className="flex min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black">

//       {/* SIDEBAR */}
//       <AdminSidebar active={active} setActive={setActive} />

//       {/* MAIN CONTENT */}
//       <div className="flex-1 p-10 text-white">

//         {/* HEADER */}
//         <h1 className="text-3xl font-bold mb-8 capitalize">
//           {active}
//         </h1>

//         {/* DASHBOARD */}
//         {/* {active === "dashboard" && (
//           <div className="grid grid-cols-3 gap-6">

//             <Card title="Total Users 👥" value={users.length} />
//             <Card title="Total Jobs 💼" value={jobs.length} />
//             <Card title="Revenue 💰" value={`₹${payments.length * 100}`} />

//           </div>
//         )} */}

//         {active === "dashboard" && (
//   <>
//     <div className="grid grid-cols-3 gap-6">
//       <Card title="Users" value={users.length} />
//       <Card title="Jobs" value={jobs.length} />
//       <Card title="Revenue" value={`₹${payments.reduce((a,b)=>a+b.amount,0)}`} />
//     </div>

//     <RevenueChart payments={payments} />
//   </>
// )}

//         {/* USERS */}
//         {active === "users" && (
//           <div className="bg-white/10 p-6 rounded-xl">

//             <h2 className="text-xl mb-4">All Users</h2>

//             {users.map((u) => (
//               <div
//                 key={u._id}
//                 className="flex justify-between border-b py-2"
//               >
//                 <span>{u.name}</span>
//                 <span className="text-gray-300">{u.email}</span>
//               </div>
//             ))}

//           </div>
//         )}

//         {/* JOBS */}
//         {active === "jobs" && (
//           <div className="grid grid-cols-2 gap-6">

//             {jobs.map((job) => (
//               <div
//                 key={job._id}
//                 className="bg-white/10 p-5 rounded-xl"
//               >
//                 <h2 className="text-lg font-bold">{job.title}</h2>
//                 <p className="text-gray-300">{job.description}</p>
//                 <p className="text-green-400 mt-2">₹ {job.budget}</p>
//               </div>
//             ))}

//           </div>
//         )}

//         {/* PAYMENTS */}
//         {/* {active === "payments" && (
//           <div className="bg-white/10 p-6 rounded-xl">

//             <h2 className="text-xl mb-4">Payments</h2>

//             {payments.length === 0 ? (
//               <p>No payments yet 💸</p>
//             ) : (
//               payments.map((p) => (
//                 <div
//                   key={p._id}
//                   className="flex justify-between border-b py-2"
//                 >
//                   <span>{p.user}</span>
//                   <span className="text-green-400">₹ {p.amount}</span>
//                 </div>
//               ))
//             )}

//           </div>
//         )} */}

//         {active === "payments" && (
//   <div className="bg-white/10 p-6 rounded-xl">

//     <h2 className="text-xl mb-4">Payments</h2>

//     {payments.length === 0 ? (
//       <p>No payments yet 💸</p>
//     ) : (
//       payments.map((p) => (
//         <div
//           key={p._id}
//           className="flex justify-between items-center border-b py-3"
//         >
//           <div>
//             <p>{p.jobId}</p>
//             <p className="text-sm text-gray-400">
//               Status: {p.status}
//             </p>
//           </div>

//           <div className="flex gap-2 items-center">
//             <span className="text-green-400">₹ {p.amount}</span>

//             {/* 🔥 ADD BUTTON HERE */}
//             {p.status !== "released" && (
//               <button
//                 onClick={() => releasePayment(p._id)}
//                 className="bg-blue-500 px-3 py-1 rounded"
//               >
//                 Release
//               </button>
//             )}

//             {p.status === "released" && (
//               <span className="text-xs bg-green-600 px-2 py-1 rounded">
//                 Released
//               </span>
//             )}
//           </div>

//         </div>
//       ))
//     )}

//   </div>
// )}

//       </div>
//     </div>
//   );
// }

// function Card({ title, value }) {
//   return (
//     <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:scale-105 transition">
//       <h2 className="text-lg">{title}</h2>
//       <p className="text-3xl font-bold mt-2">{value}</p>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import AdminSidebar from "../components/AdminSidebar";
import API from "../services/api";
import RevenueChart from "../components/RevenueChart";

export default function AdminDashboard() {

  const [active, setActive] = useState("dashboard");

  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [payments, setPayments] = useState([]);

  // 🔥 FETCH DATA
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const usersRes = await API.get("/admin/users");
      const jobsRes = await API.get("/admin/gigs"); // ✅ FIXED
      const paymentsRes = await API.get("/admin/payments");

      setUsers(usersRes.data || []);
      setJobs(jobsRes.data || []);
      setPayments(paymentsRes.data || []);

    } catch (err) {
      console.log(err);
    }
  };

  // 💰 RELEASE PAYMENT
  const releasePayment = async (id) => {
    try {
      await API.post("/payments/release", { paymentId: id });
      alert("Payment Released 💸");
      fetchData();
    } catch (err) {
      console.log(err);
      alert("Error releasing payment");
    }
  };

  // ✅ APPROVE GIG
  const approveGig = async (id) => {
    try {
      await API.put(`/admin/gig/${id}`);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black">

      {/* SIDEBAR */}
      <AdminSidebar active={active} setActive={setActive} />

      {/* MAIN */}
      <div className="flex-1 p-10 text-white">

        <h1 className="text-3xl font-bold mb-8 capitalize">
          {active}
        </h1>

        {/* DASHBOARD */}
        {active === "dashboard" && (
          <>
            <div className="grid grid-cols-3 gap-6">

              <Card title="Users 👥" value={users.length} />
              <Card title="Gigs 💼" value={jobs.length} />
              <Card
                title="Revenue 💰"
                value={`₹${payments.reduce((a, b) => a + b.amount, 0)}`}
              />

            </div>

            <div className="mt-10">
              <RevenueChart payments={payments} />
            </div>
          </>
        )}

        {/* USERS */}
        {active === "users" && (
          <div className="bg-white/10 p-6 rounded-xl">

            <h2 className="text-xl mb-4">All Users</h2>

            {users.length === 0 ? (
              <p>No users found</p>
            ) : (
              users.map((u) => (
                <div
                  key={u._id}
                  className="flex justify-between border-b py-2"
                >
                  <span>{u.name}</span>
                  <span className="text-gray-300">{u.email}</span>
                </div>
              ))
            )}

          </div>
        )}

        {/* GIG APPROVAL */}
        {active === "jobs" && (
          <div className="grid grid-cols-2 gap-6">

            {jobs.length === 0 ? (
              <p>No gigs found ❌</p>
            ) : (
              jobs.map((job) => (
                <div
                  key={job._id}
                  className="bg-white/10 p-5 rounded-xl shadow-lg"
                >

                  <h2 className="text-lg font-bold">
                    {job.title}
                  </h2>

                  <p className="text-gray-300 mt-2">
                    {job.description}
                  </p>

                  <p className="text-green-400 mt-2">
                    ₹ {job.budget}
                  </p>

                  <p className="text-sm mt-2">
                    Status:
                    <span className={`ml-2 px-2 py-1 rounded ${
                      job.isApproved ? "bg-green-500" : "bg-yellow-500"
                    }`}>
                      {job.isApproved ? "Approved ✅" : "Pending ⏳"}
                    </span>
                  </p>

                  {!job.isApproved && (
                    <button
                      onClick={() => approveGig(job._id)}
                      className="bg-green-500 mt-3 px-3 py-1 rounded"
                    >
                      Approve ✅
                    </button>
                  )}

                </div>
              ))
            )}

          </div>
        )}

        {/* PAYMENTS */}
        {active === "payments" && (
          <div className="bg-white/10 p-6 rounded-xl">

            <h2 className="text-xl mb-4">Payments</h2>

            {payments.length === 0 ? (
              <p>No payments yet 💸</p>
            ) : (
              payments.map((p) => (
                <div
                  key={p._id}
                  className="flex justify-between items-center border-b py-3"
                >

                  <div>
                    <p>Job: {p.jobId}</p>
                    <p className="text-sm text-gray-400">
                      Status: {p.status}
                    </p>
                  </div>

                  <div className="flex gap-2 items-center">

                    <span className="text-green-400">
                      ₹ {p.amount}
                    </span>

                    {p.status !== "released" ? (
                      <button
                        onClick={() => releasePayment(p._id)}
                        className="bg-blue-500 px-3 py-1 rounded"
                      >
                        Release 💸
                      </button>
                    ) : (
                      <span className="bg-green-600 px-2 py-1 rounded text-xs">
                        Released
                      </span>
                    )}

                  </div>

                </div>
              ))
            )}

          </div>
        )}

      </div>
    </div>
  );
}

// 📊 CARD
function Card({ title, value }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:scale-105 transition">
      <h2 className="text-lg">{title}</h2>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}