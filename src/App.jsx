import React from "react";
import { gsap, ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./components/NAvbar";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return <main>
    <Navbar />
  </main>;
};

export default App;
