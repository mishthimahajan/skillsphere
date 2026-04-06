import API from "../services/api";

export default function Jobs({ jobs, refresh }) {

  // 💳 PAYMENT FUNCTION
  const handlePayment = async (job) => {
    try {
      console.log("PAYING FOR:", job);

      const { data } = await API.post("/payments/create-order", {
        amount: Number(job.salary || 500),
        jobId: job._id,
      });

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: data.amount,
        currency: "INR",
        name: "SkillSphere",
        description: "Job Payment",
        order_id: data.id,

        handler: async function (response) {
          await API.post("/payments/verify", {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            jobId: job._id,
          });

          alert("Payment Successful 🎉");
          refresh(); // update UI
        },

        theme: { color: "#6366f1" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (err) {
      console.log(err.response?.data || err.message);
      alert("Payment Failed ❌");
    }
  };

  if (!jobs.length) {
    return <p>No jobs posted yet 🚀</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-6">

      {jobs.map((job) => (
        <div
          key={job._id}
          className="bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:scale-105 transition"
        >

          <h2 className="text-xl font-bold">{job.title}</h2>
          <p className="mt-2 text-gray-200">{job.description}</p>

          <p className="mt-3 text-green-300 font-semibold">
            ₹ {job.salary}
          </p>

          <div className="flex gap-3 mt-4">

            {/* ✏ EDIT */}
            <button className="bg-yellow-400 px-3 py-1 rounded">
              Edit
            </button>

            {/* ❌ DELETE */}
            <button
              onClick={() => deleteJob(job._id)}
              className="bg-red-500 px-3 py-1 rounded"
            >
              Delete
            </button>

            {/* 💳 PAY NOW (NEW) */}
            <button
  onClick={() => handlePayment(job)}
  disabled={job.isPaid}
  className={`px-3 py-1 rounded ${
    job.isPaid ? "bg-gray-400 cursor-not-allowed" : "bg-green-500"
  }`}
>
  {job.isPaid ? "Paid ✅" : "Pay Now"}
</button>

{/* {job.isPaid && (
  <span className="text-xs bg-green-600 px-2 py-1 rounded ml-2">
    Paid
  </span>
)} */}

          </div>

        </div>
      ))}

    </div>
  );
}