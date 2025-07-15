import React, { useState } from 'react';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import TextPlugin from 'gsap/TextPlugin';
import Landing1 from '../Landing/Landing1';

gsap.registerPlugin(TextPlugin);

const Loading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const titleRef = useRef();
  const subtitleRef = useRef();

  useGSAP(() => {
    
    gsap.fromTo(
      titleRef.current,
      { opacity: 0,y:-10, scale: 0.9 },
      { opacity: 1, y:-10, scale: 1.3, duration: 0.9, ease: 'power2.out' }
    );
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.4, delay: 1, ease: 'power2.out', text:'BITS Pilani'}
      
    );
    gsap.fromTo('#loadingCircle',{
      x:-600,
      opacity:0
    
    },{x:0,opacity:1,duration:0.8,ease:'power2.out',delay:0.1,
      
    });



    {/*gsap.to(titleRef.current, {
      opacity:0,
      scale:4,
      duration:1.5,
      delay:3
    });
    gsap.to(subtitleRef.current, {
      opacity:0,
      text:' ',
      delay:3,
      duration:1.5,
    });

    gsap.to('#loadingCircle',{
      x:600,
      opacity:0,
      duration:3,
      delay:3
    });

    gsap.to('#loadingSection',{
      backgroundColor:'white',
      duration:1,
      delay:3,
    })*/}
    
  }, []);

  return (
    <>
    
    <section id='loadingSection'
      className="w-full h-screen flex flex-col justify-center items-center bg-[#302c72] relative"
    >
      {/* SVG Circle as background */}
      <svg width="1000" height="500" style={{ zIndex: 1, position: 'absolute', left: '50%', top: '50%', transform: 'translate(-73%, -50%)' }}>
        <circle id='loadingCircle' cx="50%" cy="50%" r="250" fill="white" />
      </svg>
      {/* Title always above SVG */}
      <h1
        ref={titleRef}
        className="font-[sora] text-9xl text-white font-bold"
        style={{ letterSpacing: '0.05em', position: 'relative', zIndex: 2 }}
      >
        <span style={{ color: '#302c72' }}>IIC</span>hE
      </h1>
      <h3
        ref={subtitleRef}
        className="font-[sora] text-5xl text-white translate-x-40"
        style={{ position: 'relative', zIndex: 2 }}
      >
       
       
      </h3>
    </section>
    
    </>
  );
};

export default Loading;
