export function Earnings({ data }) {

  const total = data.reduce((sum, p) =>
    p.status === "released" ? sum + p.amount : sum
  , 0);

  return (
    <div>

      
      <div className="bg-green-600 p-6 rounded-xl mb-6">
        <h2 className="text-xl">Total Earnings 💰</h2>
        <p className="text-3xl font-bold mt-2">₹ {total}</p>
      </div>

      
      {data.map((p) => (
        <div key={p._id} className="bg-white/10 p-4 rounded-xl mb-3">

          <p>Job: {p.jobId}</p>
          <p>Amount: ₹ {p.amount}</p>

          <span className={`px-2 py-1 rounded text-xs ${
            p.status === "released" ? "bg-green-500" :
            p.status === "escrow" ? "bg-yellow-500" :
            "bg-gray-500"
          }`}>
            {p.status}
          </span>

        </div>
      ))}

    </div>
  );
}