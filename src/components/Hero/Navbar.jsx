import React, { useContext, useState } from 'react';
import { Mycontext } from '../../App';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const { handleOnClicked } = useContext(Mycontext);
  const [isClicked, setisClicked] = useState(false);

  const handleonClick = () => {
    const newState = !isClicked;
    setisClicked(newState);
    handleOnClicked(newState); // Pass the updated state to the context handler
  };

  useGSAP(()=>{
    gsap.from('.navi',{
        transform:'translateY(-250%)',
        stagger:0.3,
        ease:'bounce.out'
    })
    gsap.to('.logo', {
      y: 10, 
      duration: 0.7, 
      repeat: -1, 
      yoyo: true, 
      ease: "power1.inOut" 
    });
    
  })

  return (
    <div className="text-white flex justify-between px-10 lg:px-32 py-4  items-center">
      <div className="flex gap-5 items-center justify-center">
        <img src="./src/assets/logo.png" alt="logo" className=' logo h-full w-full object-cover' />
        <span className=' font-bold'>FOREX</span>
      </div>
      <div className="flex md:hidden">
        <button onClick={handleonClick}>
          {isClicked ? <RxCross1/> : <FaBars/>}
        </button>
      </div>
        <div className='hidden md:block '>
        <div className='flex gap-10 items-center'>
        {['Home', 'About', 'Roadmap', 'Team', 'Contact'].map((item, indx) => (
              <div key={indx} className="uppercase navi">
                {item}
              </div>
            ))}
            <button className=' rounded-full px-5 py-1 border-2 border-[#4628FF]  '>Login</button>
        </div>
        </div>
      
    </div>
  );
};

export default Navbar;
