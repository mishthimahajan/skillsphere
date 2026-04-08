export function Applications({ data }) {
  return (
    <div className="space-y-4">

      {data.map((app) => (
        <div key={app._id} className="bg-white/10 p-4 rounded-xl">

          <h2 className="font-bold">{app.gigId?.title}</h2>

          <p>Status:
            <span className={`ml-2 px-2 py-1 rounded ${
              app.status === "accepted" ? "bg-green-500" :
              app.status === "rejected" ? "bg-red-500" :
              "bg-yellow-500"
            }`}>
              {app.status}
            </span>
          </p>

        </div>
      ))}

    </div>
  );
}