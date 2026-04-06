export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-10 py-20">

      <div className="max-w-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Find Work. <br />
          Hire Talent. <br />
          <span className="text-yellow-300">Powered by AI.</span>
        </h1>

        <p className="text-lg mb-6 opacity-90">
          Smart freelance platform for hyperlocal jobs
        </p>

        <div className="space-x-4">
          <button className="bg-blue-500 px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition">
            Get Started
          </button>

          <button className="bg-white text-black px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition">
            Explore Jobs
          </button>
        </div>
      </div>

      <img
        src="https://illustrations.popsy.co/gray/work-from-home.svg"
        className="w-96 mt-10 md:mt-0 drop-shadow-2xl"
      />
    </div>
  );
}