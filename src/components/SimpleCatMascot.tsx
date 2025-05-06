import React from 'react';

interface SimpleCatMascotProps {
  size?: number;
  eyeDirection?: { x: number; y: number }; // -1 to 1 for both
}

export default function SimpleCatMascot({ size = 200, eyeDirection = { x: 0, y: 0 } }: SimpleCatMascotProps) {
  // Eye movement range
  const eyeOffsetX = eyeDirection.x * 10;
  const eyeOffsetY = eyeDirection.y * 8;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      {/* Background shadow */}
      <ellipse cx="100" cy="175" rx="40" ry="10" fill="#000" opacity="0.12" />
      {/* Body */}
      <ellipse cx="100" cy="135" rx="40" ry="45" fill="#181818" />
      {/* Tail */}
      <path d="M140 160 Q170 150 130 120" stroke="#181818" strokeWidth="12" fill="none" strokeLinecap="round" />
      {/* Head */}
      <circle cx="100" cy="80" r="60" fill="#181818" />
      {/* Left Ear */}
      <ellipse cx="60" cy="30" rx="18" ry="28" fill="#181818" transform="rotate(-15 60 30)" />
      {/* Right Ear */}
      <ellipse cx="140" cy="30" rx="18" ry="28" fill="#181818" transform="rotate(15 140 30)" />
      {/* Eyes */}
      <ellipse cx={75 + eyeOffsetX} cy={80 + eyeOffsetY} rx="22" ry="26" fill="#fff" />
      <ellipse cx={125 + eyeOffsetX} cy={80 + eyeOffsetY} rx="22" ry="26" fill="#fff" />
      {/* Pupils */}
      <ellipse cx={75 + eyeOffsetX * 1.5} cy={90 + eyeOffsetY * 1.5} rx="8" ry="10" fill="#181818" />
      <ellipse cx={125 + eyeOffsetX * 1.5} cy={90 + eyeOffsetY * 1.5} rx="8" ry="10" fill="#181818" />
      {/* Nose */}
      <ellipse cx="100" cy="110" rx="8" ry="6" fill="#FFC94D" />
      {/* Whiskers */}
      {/* Left */}
      <rect x="18" y="95" width="40" height="5" rx="2.5" fill="#181818" transform="rotate(-10 18 95)" />
      <rect x="18" y="110" width="40" height="5" rx="2.5" fill="#181818" transform="rotate(0 18 110)" />
      <rect x="18" y="125" width="40" height="5" rx="2.5" fill="#181818" transform="rotate(10 18 125)" />
      {/* Right */}
      <rect x="142" y="95" width="40" height="5" rx="2.5" fill="#181818" transform="rotate(10 142 95)" />
      <rect x="142" y="110" width="40" height="5" rx="2.5" fill="#181818" transform="rotate(0 142 110)" />
      <rect x="142" y="125" width="40" height="5" rx="2.5" fill="#181818" transform="rotate(-10 142 125)" />
    </svg>
  );
} 