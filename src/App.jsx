import { BrowserRouter } from "react-router-dom";

import { About, Cirtifications, Contact, Experiences, Footer, Hero, Navbar, Projects, StarsCanvas, Tech } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experiences />
        <Tech />
        <Projects />
        <Cirtifications />
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
