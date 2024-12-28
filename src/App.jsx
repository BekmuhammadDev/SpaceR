import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero.jsx";
import HeroCard from "./components/HeroCard/HeroCard.jsx";
import BgVideo from "./assets/earth-bg.mp4";
import Rapidscat from "./components/Rapidscat/Rapidscat.jsx";
import Satelite from "./components/Satelite/Satelite.jsx";
import Cosmonavt from "./components/Cosmonavt/Cosmonavt.jsx";
import Rocket from "./components/Rockets/Rockets.jsx";
import Footer5 from "./components/Footer/Footer5.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { RingLoader } from "react-spinners";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });

    // 2 soniya ichida loaderni o'chirish
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen bg-black">
          <RingLoader color="#219ef1" size={150} className="" />
        </div>
      ) : (
        <div>
          <div className="h-[700px] relative">
            <video
              autoPlay
              loop
              muted
              className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
            >
              <source src={BgVideo} type="video/mp4" />
            </video>
            <Navbar />
            <Hero className="bg-black" />
          </div>
          <HeroCard />
          <Rapidscat />
          <Satelite />
          <Cosmonavt />
          <Rocket />
          <Footer5 />
        </div>
      )}
    </div>
  );
};

export default App;
