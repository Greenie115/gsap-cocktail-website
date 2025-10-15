import React from "react";
import { gsap, ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./components/NAvbar";
import Hero from "./components/HEro";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return(
  <main>
    <Navbar />
    <Hero />
    <div className='h-dvh bg-black'></div>
  </main>
)};

export default App;
