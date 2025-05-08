import React, { useEffect, useState } from 'react';

interface SimpleCatMascotProps {
  size?: number;
  eyeDirection?: { x: number; y: number }; // -1 to 1 for both
}

export default function SimpleCatMascot({ size = 200, eyeDirection = { x: 0, y: 0 } }: SimpleCatMascotProps) {
  const [isBlinking, setIsBlinking] = useState(false);
  const [isEarTwitching, setIsEarTwitching] = useState(false);
  const [tailAngle, setTailAngle] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Eye movement range
  const eyeOffsetX = eyeDirection.x * 10;
  const eyeOffsetY = eyeDirection.y * 8;

  // Blinking animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 3000);
    return () => clearInterval(blinkInterval);
  }, []);

  // Ear twitching animation
  useEffect(() => {
    const twitchInterval = setInterval(() => {
      setIsEarTwitching(true);
      setTimeout(() => setIsEarTwitching(false), 200);
    }, 5000);
    return () => clearInterval(twitchInterval);
  }, []);

  // Tail wagging animation
  useEffect(() => {
    const tailInterval = setInterval(() => {
      setTailAngle(prev => (prev + 5) % 360);
    }, 100);
    return () => clearInterval(tailInterval);
  }, []);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background shadow with animation */}
      <ellipse 
        cx="100" 
        cy="175" 
        rx={isHovered ? "45" : "40"} 
        ry={isHovered ? "12" : "10"} 
        fill="#000" 
        opacity="0.12"
        style={{ transition: 'all 0.3s ease' }}
      />

      {/* Body with hover effect */}
      <ellipse 
        cx="100" 
        cy="135" 
        rx={isHovered ? "42" : "40"} 
        ry={isHovered ? "47" : "45"} 
        fill="#181818"
        style={{ transition: 'all 0.3s ease' }}
      />

      {/* Animated Tail */}
      <path 
        d={`M140 160 Q${170 + Math.sin(tailAngle * Math.PI / 180) * 20} ${150 + Math.cos(tailAngle * Math.PI / 180) * 10} 130 120`}
        stroke="#181818" 
        strokeWidth="12" 
        fill="none" 
        strokeLinecap="round"
      />

      {/* Head with hover effect */}
      <circle 
        cx="100" 
        cy={isHovered ? "78" : "80"} 
        r={isHovered ? "62" : "60"} 
        fill="#181818"
        style={{ transition: 'all 0.3s ease' }}
      />

      {/* Animated Left Ear */}
      <ellipse 
        cx="60" 
        cy={isEarTwitching ? "28" : "30"} 
        rx="18" 
        ry="28" 
        fill="#181818" 
        transform={`rotate(${isEarTwitching ? "-20" : "-15"} 60 30)`}
        style={{ transition: 'all 0.2s ease' }}
      />

      {/* Animated Right Ear */}
      <ellipse 
        cx="140" 
        cy={isEarTwitching ? "28" : "30"} 
        rx="18" 
        ry="28" 
        fill="#181818" 
        transform={`rotate(${isEarTwitching ? "20" : "15"} 140 30)`}
        style={{ transition: 'all 0.2s ease' }}
      />

      {/* Eyes with blinking animation */}
      <g>
        <ellipse 
          cx={75 + eyeOffsetX} 
          cy={80 + eyeOffsetY} 
          rx="22" 
          ry={isBlinking ? "2" : "26"} 
          fill="#fff"
          style={{ transition: 'all 0.1s ease' }}
        />
        <ellipse 
          cx={125 + eyeOffsetX} 
          cy={80 + eyeOffsetY} 
          rx="22" 
          ry={isBlinking ? "2" : "26"} 
          fill="#fff"
          style={{ transition: 'all 0.1s ease' }}
        />
      </g>

      {/* Pupils with blinking animation */}
      <g>
        <ellipse 
          cx={75 + eyeOffsetX * 1.5} 
          cy={isBlinking ? 80 : 90 + eyeOffsetY * 1.5} 
          rx="8" 
          ry={isBlinking ? "1" : "10"} 
          fill="#181818"
          style={{ transition: 'all 0.1s ease' }}
        />
        <ellipse 
          cx={125 + eyeOffsetX * 1.5} 
          cy={isBlinking ? 80 : 90 + eyeOffsetY * 1.5} 
          rx="8" 
          ry={isBlinking ? "1" : "10"} 
          fill="#181818"
          style={{ transition: 'all 0.1s ease' }}
        />
      </g>

      {/* Nose with hover effect */}
      <ellipse 
        cx="100" 
        cy={isHovered ? "108" : "110"} 
        rx={isHovered ? "9" : "8"} 
        ry={isHovered ? "7" : "6"} 
        fill="#FFC94D"
        style={{ transition: 'all 0.3s ease' }}
      />

      {/* Whiskers with hover effect */}
      {/* Left */}
      <g style={{ transition: 'all 0.3s ease', transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}>
        <rect x="18" y="95" width="40" height="5" rx="2.5" fill="#181818" transform="rotate(-10 18 95)" />
        <rect x="18" y="110" width="40" height="5" rx="2.5" fill="#181818" transform="rotate(0 18 110)" />
        <rect x="18" y="125" width="40" height="5" rx="2.5" fill="#181818" transform="rotate(10 18 125)" />
      </g>
      {/* Right */}
      <g style={{ transition: 'all 0.3s ease', transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}>
        <rect x="142" y="95" width="40" height="5" rx="2.5" fill="#181818" transform="rotate(10 142 95)" />
        <rect x="142" y="110" width="40" height="5" rx="2.5" fill="#181818" transform="rotate(0 142 110)" />
        <rect x="142" y="125" width="40" height="5" rx="2.5" fill="#181818" transform="rotate(-10 142 125)" />
      </g>

      {/* Added details: Inner ear color */}
      <ellipse cx="60" cy="30" rx="10" ry="15" fill="#2a2a2a" transform="rotate(-15 60 30)" />
      <ellipse cx="140" cy="30" rx="10" ry="15" fill="#2a2a2a" transform="rotate(15 140 30)" />

      {/* Added details: Cheeks */}
      <ellipse cx="70" cy="100" rx="15" ry="10" fill="#FF6B6B" opacity="0.3" />
      <ellipse cx="130" cy="100" rx="15" ry="10" fill="#FF6B6B" opacity="0.3" />
    </svg>
  );
} 