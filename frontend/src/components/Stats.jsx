export default function Stats() {
  return (
    <div className="px-10 py-16 grid md:grid-cols-3 gap-6 text-center">

      <div className="bg-white/20 p-6 rounded-xl shadow-xl hover:scale-105 transition">
        <h2 className="text-3xl font-bold">10,000+</h2>
        <p>Users</p>
      </div>

      <div className="bg-white/20 p-6 rounded-xl shadow-xl hover:scale-105 transition">
        <h2 className="text-3xl font-bold">5,000+</h2>
        <p>Jobs Posted</p>
      </div>

      <div className="bg-white/20 p-6 rounded-xl shadow-xl hover:scale-105 transition">
        <h2 className="text-3xl font-bold">₹1 Cr+</h2>
        <p>Payments</p>
      </div>

    </div>
  );
}