import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  // Experience,
  // Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Education,
  Internship,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";
// import Education from "./components/sections/Education";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        
        {/* <div className="relative z-0"> */}
          <About />
          {/* <StarsCanvas />
        </div> */}
        
        {/* <div className="relative z-0"> */}
          <Education/>
          {/* <StarsCanvas />
        </div> */}
        
        {/* <div className="relative z-0"> */}
          <Internship/>
          {/* <StarsCanvas />
        </div> */}
        {/* <Experience /> */}
        <div className="relative z-0">
          <Tech />
          <StarsCanvas />
        </div>
        
        {/* <div className="relative z-0"> */}
          <Works />
          {/* <StarsCanvas />
        </div> */}
        
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
