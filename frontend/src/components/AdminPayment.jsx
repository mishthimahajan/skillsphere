import API from "../services/api";

export default function AdminPayments({ payments, refresh }) {

  const releasePayment = async (id) => {
    await API.put(`/payment/release/${id}`);
    alert("Payment Released 💰");
    refresh();
  };

  return (
    <div className="bg-white/10 p-6 rounded-xl">

      <h2 className="text-xl mb-4">Payments</h2>

      {payments.length === 0 ? (
        <p>No payments yet 💸</p>
      ) : (
        payments.map((p) => (
          <div
            key={p._id}
            className="flex justify-between border-b py-3"
          >

            <div>
              <p>Job: {p.jobId}</p>
              <p>₹ {p.amount}</p>
              <p>Status: {p.status}</p>
            </div>

            {/* ✅ SHOW RELEASE ONLY IF ESCROW */}
            {p.status === "escrow" && (
              <button
                onClick={() => releasePayment(p._id)}
                className="bg-blue-500 px-3 py-1 rounded"
              >
                Release 💰
              </button>
            )}

          </div>
        ))
      )}

    </div>
  );
}