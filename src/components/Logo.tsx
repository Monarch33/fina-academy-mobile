import React from 'react';
import Svg, { Path, Rect, Circle } from 'react-native-svg';

interface LogoProps {
  size?: number;
  color?: string;
}

export default function Logo({ size = 28, color = '#E8580C' }: LogoProps) {
  const width = size * 2.8;
  return (
    <Svg width={width} height={size} viewBox="0 0 112 40" fill="none">
      <Path
        d="M0 8h18v4.5H5.5V18H16v4.5H5.5V32H0V8z"
        fill={color}
      />
      <Rect x={24} y={8} width={5.5} height={24} rx={0.5} fill={color} />
      <Circle cx={26.75} cy={3.5} r={3.5} fill={color} opacity={0.6} />
      <Path
        d="M36 32V8h5l12 16.5V8h5.2v24h-4.8L41.2 15.8V32H36z"
        fill={color}
      />
      <Path
        d="M72 8h5.8l10.2 24h-5.8l-2-5H70l-2 5h-5.6L72 8zm.8 14.5h7.4L76.5 13 72.8 22.5z"
        fill={color}
      />
      <Path
        d="M97 31a2 2 0 110 4 2 2 0 010-4z"
        fill={color}
        opacity={0.35}
      />
    </Svg>
  );
}
