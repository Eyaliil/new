import React from 'react';
import { useRive } from '@rive-app/react-canvas';
import catRiv from './cat.riv';

interface RiveCatMascotProps {
  width?: number;
  height?: number;
}

export default function RiveCatMascot({ width = 300, height = 300 }: RiveCatMascotProps) {
  const { RiveComponent } = useRive({
    src: catRiv,
    autoplay: true,
  });

  return (
    <div style={{ width, height }}>
      <RiveComponent />
    </div>
  );
} 