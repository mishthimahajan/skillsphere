import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";

export default function Home() {
  return (
    <div className="bg-linear-to-br from-indigo-600 via-purple-600 to-blue-500 text-white">
      <Navbar />
      <Hero />
      
      <HowItWorks />
      <Services />
      <Testimonials />
      <Stats />
    </div>
  );
}