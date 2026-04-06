import { useState, useEffect } from "react";
import FreelancerSidebar from "../components/FreelancerSidebar";
import API from "../services/api";

export default function FreelancerDashboard() {

  const [active, setActive] = useState("jobs");
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [earnings, setEarnings] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const jobsRes = await API.get("/gigs"); // ✅ ONLY approved gigs
      const appRes = await API.get("/my-applications");
      const payRes = await API.get("/payments");

      setJobs(jobsRes.data || []);
      setApplications(appRes.data || []);
      setEarnings((payRes.data || []).filter(p => p.status === "released"));

    } catch (err) {
      console.log(err);
    }
  };

  const applyJob = async (jobId) => {
    await API.post("/apply", { jobId });
    alert("Applied 🚀");
  };

  return (
    <div className="flex min-h-screen bg-linear-to-br from-blue-600 to-purple-700">

      <FreelancerSidebar active={active} setActive={setActive} />

      <div className="flex-1 p-10 text-white">

        <h1 className="text-3xl mb-6 capitalize">{active}</h1>

        {/* JOBS */}
        {active === "jobs" && (
          <div className="grid grid-cols-2 gap-6">
            {jobs.map(job => (
              <div key={job._id} className="bg-white/20 p-5 rounded-xl">

                <h2>{job.title}</h2>
                <p>{job.description}</p>
                <p>₹ {job.budget}</p>

                <button
                  onClick={() => applyJob(job._id)}
                  className="bg-green-500 px-3 py-1 mt-2 rounded"
                >
                  Apply
                </button>

              </div>
            ))}
          </div>
        )}

        {/* APPLICATIONS */}
        {active === "applications" && (
          <div className="bg-white/10 p-6 rounded-xl">
            {applications.map(a => (
              <div key={a._id}>{a.jobTitle}</div>
            ))}
          </div>
        )}

        {/* EARNINGS */}
        {active === "earnings" && (
          <div className="bg-white/10 p-6 rounded-xl">
            {earnings.map(e => (
              <div key={e._id}>
                ₹ {e.amount}
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}