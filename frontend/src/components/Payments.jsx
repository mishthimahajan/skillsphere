
export default function Payments({ payments }) {

  // ✅ hide pending payments
  const visiblePayments = payments.filter(
    (p) => p.status !== "pending"
  );

  return (
    <div className="grid grid-cols-2 gap-6">

      {visiblePayments.length === 0 ? (
        <p>No payments yet 💸</p>
      ) : (
        visiblePayments.map((p) => (
          <div
            key={p._id}
            className="bg-white/20 backdrop-blur-lg p-5 rounded-xl shadow-lg hover:scale-105 transition"
          >

            <p className="text-sm text-gray-300">
              Job ID: {p.jobId}
            </p>

            <p className="text-xl font-bold text-green-300 mt-2">
              ₹ {p.amount}
            </p>

            <p className="mt-2 text-sm">
              {p.status === "escrow" && "In Escrow 🔒"}
              {p.status === "released" && "Completed ✅"}
            </p>

          </div>
        ))
      )}

    </div>
  );
}