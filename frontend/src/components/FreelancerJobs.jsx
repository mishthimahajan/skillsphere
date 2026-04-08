export function Jobs({ jobs }) {
  const apply = async (gigId) => {
    await API.post("/applicants", { gigId });
    alert("Applied ✅");
  };

  return (
    <div className="grid grid-cols-3 gap-6">

      {jobs.map((job) => (
        <div key={job._id} className="bg-white/10 p-5 rounded-xl">

          <h2 className="text-lg font-bold">{job.title}</h2>
          <p className="text-gray-300">{job.description}</p>
          <p className="text-green-400 mt-2">₹ {job.budget}</p>

          <button
            onClick={() => apply(job._id)}
            className="bg-blue-500 px-3 py-1 mt-3 rounded"
          >
            Apply 🚀
          </button>

        </div>
      ))}

    </div>
  );
}