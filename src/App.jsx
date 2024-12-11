import React, { createContext, useState, useEffect } from 'react';
import Hero from './components/Hero/Hero';
import gsap from 'gsap';

import MinContent from './components/BodyPart/MinContent';
import Footer from './components/Foooter/Footer';

// Create Context
export const Mycontext = createContext();

const App = () => {
  const [isopen, setisopen] = useState(false);

  const handleOnClicked = (data) => {
    console.log('Sidebar State:', data);
    setisopen(data);
  };

  useEffect(() => {
    // Animate sidebar based on `isopen`
    gsap.to('.sidebar', {
      left: isopen ? 0 : -200,
      duration: 0.5,
      ease: 'power2.inOut',
    });
    gsap.to('.links', {
      stagger: 0.3,
      duration: 0.5,
      x: isopen ? 45 : -45,
      opacity: isopen ? 1 : 0,
    });
  }, [isopen]);

  return (
    <Mycontext.Provider value={{ handleOnClicked }}>
      <div className="bg-black">
        <Hero />
        {/* Sidebar */}
        <div className="md:hidden sidebar fixed top-0 bg-[#192A56] z-10 text-white -left-[200px] h-screen w-[30%]">
          <div className="h-screen pt-10 flex flex-col gap-10 pl-4">
            {['Home', 'About', 'Roadmap', 'Team', 'Contact'].map((item, indx) => (
              <div key={indx} className="uppercase links">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="pt-10 mt-10 bg-black h-full">
          <MinContent />
        </div>
      </div>
      <div className='text-white '>
        <Footer/>
      </div>
    </Mycontext.Provider>
  );
};

export default App;
