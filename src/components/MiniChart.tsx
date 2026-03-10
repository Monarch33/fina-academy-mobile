import React from 'react';
import Svg, { Rect, Path, Circle, Line } from 'react-native-svg';

type ChartType = 'bars' | 'line' | 'candle' | 'pie' | 'curve';

interface MiniChartProps {
  type: ChartType;
  color: string;
  width?: number;
  height?: number;
}

export default function MiniChart({
  type,
  color,
  width = 32,
  height = 24,
}: MiniChartProps) {
  switch (type) {
    case 'bars':
      return (
        <Svg width={width} height={height} viewBox="0 0 32 24" fill="none">
          <Rect x={2} y={12} width={5} height={12} rx={1} fill={color} opacity={0.3} />
          <Rect x={10} y={6} width={5} height={18} rx={1} fill={color} opacity={0.5} />
          <Rect x={18} y={2} width={5} height={22} rx={1} fill={color} opacity={0.7} />
          <Rect x={26} y={8} width={5} height={16} rx={1} fill={color} opacity={0.4} />
        </Svg>
      );
    case 'line':
      return (
        <Svg width={width} height={height} viewBox="0 0 32 24" fill="none">
          <Path
            d="M2 18 L10 10 L18 14 L26 4 L32 8"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
            fill="none"
          />
          <Path
            d="M2 18 L10 10 L18 14 L26 4 L32 8 V24 H2z"
            fill={color}
            opacity={0.08}
          />
        </Svg>
      );
    case 'candle':
      return (
        <Svg width={width} height={height} viewBox="0 0 32 24" fill="none">
          <Line x1={6} y1={2} x2={6} y2={22} stroke={color} opacity={0.3} strokeWidth={1} />
          <Rect x={3} y={6} width={6} height={10} rx={1} fill={color} opacity={0.4} />
          <Line x1={16} y1={4} x2={16} y2={20} stroke={color} opacity={0.3} strokeWidth={1} />
          <Rect x={13} y={8} width={6} height={8} rx={1} fill="#16A34A" opacity={0.5} />
          <Line x1={26} y1={0} x2={26} y2={24} stroke={color} opacity={0.3} strokeWidth={1} />
          <Rect x={23} y={4} width={6} height={14} rx={1} fill={color} opacity={0.5} />
        </Svg>
      );
    case 'pie':
      return (
        <Svg width={28} height={28} viewBox="0 0 28 28" fill="none">
          <Circle cx={14} cy={14} r={12} fill={color} opacity={0.1} stroke={color} strokeWidth={1} />
          <Path d="M14 2 A12 12 0 0 1 26 14 L14 14z" fill={color} opacity={0.4} />
          <Path d="M14 14 L26 14 A12 12 0 0 1 14 26z" fill={color} opacity={0.25} />
        </Svg>
      );
    case 'curve':
      return (
        <Svg width={width} height={height} viewBox="0 0 32 24" fill="none">
          <Path
            d="M2 22 C8 22 10 4 16 4 S24 18 32 2"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
            fill="none"
          />
        </Svg>
      );
    default:
      return null;
  }
}
