
// export default function Applicants({ applicants }) {

//   if (!applicants.length) {
//     return <p>No applicants yet 👀</p>;
//   }

//   return (
//     <div className="grid grid-cols-2 gap-6">
//       {applicants.map((a) => (
//         <div key={a._id} className="bg-white/20 p-6 rounded-xl shadow-lg">

//           <h3 className="text-lg font-bold">{a.name}</h3>
//           <p className="text-sm text-gray-200">{a.email}</p>

//           <p className="mt-2">
//             Applied for: <b>{a.jobTitle}</b>
//           </p>

//           <div className="mt-3 flex gap-2">
//             <button className="bg-green-500 px-3 py-1 rounded">
//               Accept
//             </button>
//             <button className="bg-red-500 px-3 py-1 rounded">
//               Reject
//             </button>
//           </div>

//         </div>
//       ))}
//     </div>
//   );
// }

export default function Applicants({ applicants, refresh }) {

  const handlePayment = async (jobId, amount) => {
    const res = await API.post("/payments/create-order", {
      jobId,
      amount,
    });

    const options = {
      key: "YOUR_RAZORPAY_KEY",
      amount: res.data.amount,
      currency: "INR",
      order_id: res.data.id,

      handler: async function (response) {
        await API.post("/payments/verify", {
          ...response,
          jobId,
        });

        alert("Payment Successful ✅");
        refresh();
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div>

      {applicants.map((a) => (
        <div key={a._id} className="border p-4 mb-3">

          <h3>{a.jobTitle}</h3>
          <p>Status: {a.status}</p>

          {/* ✅ SHOW PAY BUTTON ONLY IF ACCEPTED */}
          {a.status === "accepted" && (
            <button
              onClick={() => handlePayment(a.jobId, 500)}
              className="bg-purple-500 px-3 py-1 mt-2 rounded"
            >
              Pay Now 💳
            </button>
          )}

        </div>
      ))}

    </div>
  );
}
