import API from "../services/api";
import { useEffect, useState } from "react";

export default function JobsTable() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const res = await API.get("/jobs");
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const approveJob = async (id) => {
    await API.put(`/admin/job/approve/${id}`);
    fetchJobs();
  };

  return (
    <div className="grid grid-cols-2 gap-6">

      {jobs.map(job => (
        <div key={job._id} className="bg-white/10 p-5 rounded-xl">

          <h2 className="text-lg font-bold">{job.title}</h2>
          <p className="text-gray-300">{job.description}</p>

          <p className="text-green-400 mt-2">₹ {job.salary}</p>

          {!job.isApproved && (
            <button
              onClick={() => approveJob(job._id)}
              className="bg-green-500 px-3 py-1 mt-3 rounded"
            >
              Approve
            </button>
          )}

        </div>
      ))}

    </div>
  );
}