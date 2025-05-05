import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CatMascot() {
  const catRef = useRef<HTMLDivElement>(null);
  const earLeftRef = useRef<HTMLDivElement>(null);
  const earRightRef = useRef<HTMLDivElement>(null);
  const eyeLeftRef = useRef<HTMLDivElement>(null);
  const eyeRightRef = useRef<HTMLDivElement>(null);
  const whiskerLeftRef = useRef<HTMLDivElement>(null);
  const whiskerRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cat = catRef.current;
    const earLeft = earLeftRef.current;
    const earRight = earRightRef.current;
    const eyeLeft = eyeLeftRef.current;
    const eyeRight = eyeRightRef.current;
    const whiskerLeft = whiskerLeftRef.current;
    const whiskerRight = whiskerRightRef.current;

    if (!cat) return;

    // Main cat floating animation
    gsap.to(cat, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Ear twitching
    gsap.to([earLeft, earRight], {
      rotate: -5,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.2
    });

    // Eye blinking
    gsap.to([eyeLeft, eyeRight], {
      scaleY: 0.1,
      duration: 0.2,
      repeat: -1,
      repeatDelay: 3,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Whisker movement
    gsap.to([whiskerLeft, whiskerRight], {
      rotate: 5,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.2
    });

    return () => {
      gsap.killTweensOf(cat);
      gsap.killTweensOf([earLeft, earRight]);
      gsap.killTweensOf([eyeLeft, eyeRight]);
      gsap.killTweensOf([whiskerLeft, whiskerRight]);
    };
  }, []);

  return (
    <div className="relative w-48 h-48 mx-auto" ref={catRef}>
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full blur-2xl opacity-20" style={{
        background: 'radial-gradient(circle, var(--color-cat-primary) 0%, transparent 70%)'
      }} />
      
      {/* Cat face */}
      <div className="absolute w-full h-full bg-cat-surface rounded-full shadow-lg" style={{
        boxShadow: '0 0 30px rgba(255, 107, 107, 0.3)'
      }}>
        {/* Ears */}
        <div className="absolute -top-4 -left-2 w-12 h-12 bg-cat-surface transform -rotate-45" ref={earLeftRef} />
        <div className="absolute -top-4 -right-2 w-12 h-12 bg-cat-surface transform rotate-45" ref={earRightRef} />
        
        {/* Eyes */}
        <div className="absolute top-12 left-8 w-6 h-6 bg-cat-text rounded-full" ref={eyeLeftRef} />
        <div className="absolute top-12 right-8 w-6 h-6 bg-cat-text rounded-full" ref={eyeRightRef} />
        
        {/* Nose */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-cat-primary rounded-full" />
        
        {/* Whiskers */}
        <div className="absolute top-18 left-0 w-16 h-0.5 bg-cat-text transform -rotate-45" ref={whiskerLeftRef} />
        <div className="absolute top-18 right-0 w-16 h-0.5 bg-cat-text transform rotate-45" ref={whiskerRightRef} />
      </div>
    </div>
  );
} 