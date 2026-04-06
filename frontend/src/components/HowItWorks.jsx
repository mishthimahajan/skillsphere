export default function HowItWorks() {
  return (
    <div className="px-10 py-16 text-center">

      <h2 className="text-3xl font-bold mb-10">
        How It Works
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white/20 p-6 rounded-xl shadow-xl hover:scale-105 transition">
          <h3 className="text-xl font-bold">1. Post a Job</h3>
        </div>

        <div className="bg-white/20 p-6 rounded-xl shadow-xl hover:scale-105 transition">
          <h3 className="text-xl font-bold">2. Get Proposals</h3>
        </div>

        <div className="bg-white/20 p-6 rounded-xl shadow-xl hover:scale-105 transition">
          <h3 className="text-xl font-bold">3. Hire & Pay</h3>
        </div>

      </div>
    </div>
  );
}