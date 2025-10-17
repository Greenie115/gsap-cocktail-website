import React from "react";
import { gsap, ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./components/NAvbar";
import Hero from "./components/HEro";
import Cocktails from "./components/Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
    </main>
  );
};

export default App;
