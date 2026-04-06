export default function Services() {
  const services = [
    "Web Development",
    "Graphic Design",
    "Content Writing",
    "App Development",
  ];

  return (
    <div className="px-10 py-16">

      <h2 className="text-3xl font-bold text-center mb-10">
        Popular Services
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white/20 p-6 rounded-xl shadow-xl hover:scale-105 transition"
          >
            <h3 className="font-semibold">{s}</h3>
          </div>
        ))}

      </div>
    </div>
  );
}