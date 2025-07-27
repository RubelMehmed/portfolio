import { BrowserRouter } from "react-router-dom";

import { About, Certifications, Contact, Experiences, Footer, Hero, Navbar, Overview, Projects, StarsCanvas, Tech, Training } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Overview />
        <Experiences />
        <Tech />
        <Projects />
        <Certifications />
        <Training />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
