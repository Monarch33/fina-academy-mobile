import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, {
  Path,
  Ellipse,
  Circle,
  Rect,
  Line,
} from 'react-native-svg';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
  withSpring,
} from 'react-native-reanimated';

type FinnEyes = 'happy' | 'dot' | 'star' | 'wink' | 'spark';
type FinnMouth = 'smile' | 'open' | 'grin' | 'line' | 'ooh';
type FinnAccessory =
  | 'glasses'
  | 'crown'
  | 'band'
  | 'tie'
  | 'hat'
  | null;

interface FinnProps {
  size?: number;
  eyes?: FinnEyes;
  mouth?: FinnMouth;
  blush?: boolean;
  accessory?: FinnAccessory;
  animate?: boolean;
}

export default function Finn({
  size = 60,
  eyes = 'happy',
  mouth = 'smile',
  blush = true,
  accessory = null,
  animate = false,
}: FinnProps) {
  const translateY = useSharedValue(0);

  React.useEffect(() => {
    if (animate) {
      translateY.value = withRepeat(
        withSequence(
          withTiming(-7, { duration: 1300 }),
          withTiming(-3, { duration: 800 }),
          withTiming(0, { duration: 900 })
        ),
        -1,
        true
      );
    }
  }, [animate, translateY]);

  const animStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const content = (
    <Svg width={size} height={size} viewBox="0 0 120 100" fill="none">
      {/* Ears */}
      <Path d="M28 38L18 6l34 26z" fill="#F97316" />
      <Path d="M92 38l10-32-34 26z" fill="#F97316" />
      <Path d="M31 36L23 12l26 21z" fill="#FEF3C7" />
      <Path d="M89 36l8-24-26 21z" fill="#FEF3C7" />

      {/* Head */}
      <Ellipse cx={60} cy={50} rx={34} ry={30} fill="#F97316" />
      <Ellipse cx={60} cy={56} rx={23} ry={20} fill="#FEF3C7" />

      {/* Eyes */}
      {eyes === 'happy' && (
        <>
          <Path
            d="M42 43Q47 48 52 43"
            stroke="#292524"
            strokeWidth={2.5}
            strokeLinecap="round"
            fill="none"
          />
          <Path
            d="M68 43Q73 48 78 43"
            stroke="#292524"
            strokeWidth={2.5}
            strokeLinecap="round"
            fill="none"
          />
        </>
      )}
      {eyes === 'dot' && (
        <>
          <Circle cx={47} cy={43} r={4} fill="#292524" />
          <Circle cx={48.5} cy={41.5} r={1.5} fill="#fff" />
          <Circle cx={73} cy={43} r={4} fill="#292524" />
          <Circle cx={74.5} cy={41.5} r={1.5} fill="#fff" />
        </>
      )}
      {eyes === 'star' && (
        <>
          <Path
            d="M47 39l1.5 3 3.3.5-2.4 2.3.6 3.2-3-1.5-3 1.5.6-3.2-2.4-2.3 3.3-.5z"
            fill="#F59E0B"
          />
          <Path
            d="M73 39l1.5 3 3.3.5-2.4 2.3.6 3.2-3-1.5-3 1.5.6-3.2-2.4-2.3 3.3-.5z"
            fill="#F59E0B"
          />
        </>
      )}
      {eyes === 'wink' && (
        <>
          <Circle cx={47} cy={43} r={4} fill="#292524" />
          <Circle cx={48.5} cy={41.5} r={1.5} fill="#fff" />
          <Path
            d="M69 43Q73 40 77 43"
            stroke="#292524"
            strokeWidth={2.5}
            strokeLinecap="round"
            fill="none"
          />
        </>
      )}
      {eyes === 'spark' && (
        <>
          <Circle cx={47} cy={43} r={4.5} fill="#292524" />
          <Circle cx={48} cy={41} r={2} fill="#fff" />
          <Circle cx={46} cy={44} r={0.8} fill="#fff" />
          <Circle cx={73} cy={43} r={4.5} fill="#292524" />
          <Circle cx={74} cy={41} r={2} fill="#fff" />
          <Circle cx={72} cy={44} r={0.8} fill="#fff" />
        </>
      )}

      {/* Blush */}
      {blush && (
        <>
          <Ellipse cx={36} cy={54} rx={5} ry={3} fill="#FDBA74" opacity={0.4} />
          <Ellipse cx={84} cy={54} rx={5} ry={3} fill="#FDBA74" opacity={0.4} />
        </>
      )}

      {/* Nose */}
      <Ellipse cx={60} cy={53} rx={3.5} ry={2.5} fill="#292524" />

      {/* Mouth */}
      {mouth === 'smile' && (
        <Path
          d="M52 61Q60 68 68 61"
          stroke="#292524"
          strokeWidth={2}
          strokeLinecap="round"
          fill="none"
        />
      )}
      {mouth === 'open' && (
        <Ellipse cx={60} cy={63} rx={6} ry={5} fill="#292524" />
      )}
      {mouth === 'grin' && (
        <>
          <Path d="M50 60Q60 70 70 60" fill="#292524" opacity={0.12} />
          <Path
            d="M50 60Q60 70 70 60"
            stroke="#292524"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
          />
        </>
      )}
      {mouth === 'line' && (
        <Line
          x1={54}
          y1={62}
          x2={66}
          y2={62}
          stroke="#292524"
          strokeWidth={2}
          strokeLinecap="round"
        />
      )}
      {mouth === 'ooh' && (
        <Ellipse cx={60} cy={63} rx={4} ry={4} fill="#292524" />
      )}

      {/* Accessories */}
      {accessory === 'glasses' && (
        <>
          <Rect
            x={36}
            y={39}
            width={16}
            height={12}
            rx={3}
            fill="none"
            stroke="#292524"
            strokeWidth={1.8}
          />
          <Rect
            x={68}
            y={39}
            width={16}
            height={12}
            rx={3}
            fill="none"
            stroke="#292524"
            strokeWidth={1.8}
          />
          <Line
            x1={52}
            y1={45}
            x2={68}
            y2={45}
            stroke="#292524"
            strokeWidth={1.5}
          />
        </>
      )}
      {accessory === 'crown' && (
        <Path
          d="M38 26L45 32l7-10 8 10 7-10 7 6V32H38z"
          fill="#F59E0B"
          stroke="#CA8A04"
          strokeWidth={0.8}
        />
      )}
      {accessory === 'band' && (
        <Rect
          x={34}
          y={30}
          width={52}
          height={6}
          rx={3}
          fill="#EF4444"
          opacity={0.85}
        />
      )}
      {accessory === 'tie' && (
        <>
          <Path d="M57 68L60 84l3-16z" fill="#2563EB" />
          <Path d="M55 68l5 4 5-4z" fill="#3B82F6" />
        </>
      )}
      {accessory === 'hat' && (
        <>
          <Ellipse cx={60} cy={24} rx={22} ry={6} fill="#44403C" />
          <Rect x={48} y={8} width={24} height={16} rx={2} fill="#44403C" />
          <Rect x={50} y={12} width={20} height={3} fill="#F59E0B" />
        </>
      )}
    </Svg>
  );

  if (animate) {
    return (
      <Animated.View style={[{ width: size, height: size }, animStyle]}>
        {content}
      </Animated.View>
    );
  }

  return <View style={{ width: size, height: size }}>{content}</View>;
}

const styles = StyleSheet.create({});
