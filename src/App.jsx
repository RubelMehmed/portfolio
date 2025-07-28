import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experiences, Footer, Hero, Navbar, Projects, StarsCanvas, Tech, Training } from "./components";

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
        <Projects />
       
        <div className='relative z-0'>
          <Tech />    
          <Training />
          <StarsCanvas />
          <Contact />
          
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
