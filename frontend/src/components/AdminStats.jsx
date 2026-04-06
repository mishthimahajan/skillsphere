import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function AdminStats({ users, jobs }) {
  const data = [
    { name: "Users", value: users.length },
    { name: "Jobs", value: jobs.length },
  ];

  return (
    <div className="bg-white/10 p-6 rounded-xl">

      <h2 className="mb-4">Analytics 📊</h2>

      <BarChart width={400} height={250} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" />
      </BarChart>

    </div>
  );
}