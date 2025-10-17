import React from "react";
import { gsap, ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./components/NAvbar";
import Hero from "./components/HEro";
import Cocktails from "./components/Cocktails";
import About from "./components/About";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
    </main>
  );
};

export default App;
