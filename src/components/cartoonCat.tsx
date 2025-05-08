import React from 'react';

interface CartoonCat {
  size?: number;
}

export default function CartoonCat({ size = 240 }: CartoonCat) {
  const scale = size / 240;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      {/* Tail */}
      <path
        d="M30 180 Q20 160 40 150"
        stroke="#D6863A"
        strokeWidth="14"
        fill="none"
        strokeLinecap="round"
      />

      {/* Body */}
      <rect x="60" y="120" width="120" height="80" rx="30" fill="#F4A62F" />
      <rect x="90" y="110" width="60" height="80" rx="25" fill="#F9BA3F" />

      {/* Legs */}
      <circle cx="85" cy="200" r="15" fill="#FFFFFF" />
      <circle cx="155" cy="200" r="15" fill="#FFFFFF" />

      {/* Head */}
      <ellipse cx="120" cy="80" rx="80" ry="60" fill="#F4A62F" />

      {/* Ears */}
      <polygon points="60,20 75,10 80,30" fill="#D6863A" />
      <polygon points="180,20 165,10 160,30" fill="#D6863A" />

      {/* Inner ears */}
      <polygon points="65,20 75,15 77,27" fill="#F9BA3F" />
      <polygon points="175,20 165,15 163,27" fill="#F9BA3F" />

      {/* Eyes */}
      <circle cx="90" cy="70" r="25" fill="#FFFFFF" />
      <circle cx="150" cy="70" r="25" fill="#FFFFFF" />
      <circle cx="95" cy="72" r="6" fill="#2D2D2D" />
      <circle cx="145" cy="72" r="6" fill="#2D2D2D" />

      {/* Nose */}
      <ellipse cx="120" cy="95" rx="12" ry="8" fill="#C6452C" />

      {/* Mouth */}
      <path
        d="M120 103 Q118 108 114 110"
        stroke="#C6452C"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M120 103 Q122 108 126 110"
        stroke="#C6452C"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Whiskers */}
      {/* Left */}
      <path d="M65 92 H100" stroke="#C6452C" strokeWidth="3" strokeLinecap="round" />
      <path d="M65 100 H100" stroke="#C6452C" strokeWidth="3" strokeLinecap="round" />
      <path d="M65 108 H100" stroke="#C6452C" strokeWidth="3" strokeLinecap="round" />
      {/* Right */}
      <path d="M140 92 H175" stroke="#C6452C" strokeWidth="3" strokeLinecap="round" />
      <path d="M140 100 H175" stroke="#C6452C" strokeWidth="3" strokeLinecap="round" />
      <path d="M140 108 H175" stroke="#C6452C" strokeWidth="3" strokeLinecap="round" />

      {/* Stripes on face */}
      <rect x="105" y="50" width="5" height="5" rx="2.5" fill="#D6863A" />
      <rect x="70" y="65" width="12" height="6" rx="3" fill="#D6863A" />
      <rect x="158" y="65" width="12" height="6" rx="3" fill="#D6863A" />
      <rect x="80" y="80" width="10" height="5" rx="2.5" fill="#D6863A" />
      <rect x="150" y="80" width="10" height="5" rx="2.5" fill="#D6863A" />

      {/* Chest stripes */}
      <rect x="115" y="140" width="8" height="15" rx="4" fill="#D6863A" />
      <rect x="110" y="160" width="5" height="10" rx="2.5" fill="#D6863A" />
      <rect x="125" y="160" width="5" height="10" rx="2.5" fill="#D6863A" />
    </svg>
  );
}
