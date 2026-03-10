import React, { useEffect } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  Easing,
  runOnJS,
} from 'react-native-reanimated';

const COLORS = [
  '#F97316',
  '#3B82F6',
  '#10B981',
  '#F59E0B',
  '#8B5CF6',
  '#EC4899',
  '#EF4444',
];
const CONFETTI_COUNT = 30;
const { width } = Dimensions.get('window');

interface ConfettiPieceProps {
  index: number;
}

function ConfettiPiece({ index }: ConfettiPieceProps) {
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(1);
  const rotate = useSharedValue(0);

  const startX = (5 + Math.random() * 90) * width / 100;
  const startY = 20 + Math.random() * 30;
  const delay = Math.random() * 600;
  const duration = 800 + Math.random() * 1500;

  useEffect(() => {
    translateY.value = withDelay(
      delay,
      withTiming(-90, { duration, easing: Easing.out(Easing.cubic) })
    );
    opacity.value = withDelay(
      delay,
      withTiming(0, { duration })
    );
    rotate.value = withDelay(
      delay,
      withTiming(720, { duration })
    );
  }, []);

  const style = useAnimatedStyle(() => ({
    transform: [
      { translateY: translateY.value },
      { rotate: `${rotate.value}deg` },
    ],
    opacity: opacity.value,
  }));

  const pieceWidth = index % 3 === 0 ? 4 : index % 3 === 1 ? 6 : 3;
  const pieceHeight = index % 3 === 0 ? 12 : index % 3 === 1 ? 6 : 8;
  const borderRadius = index % 3 === 1 ? 3 : 2;

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          left: startX,
          top: `${startY}%`,
          width: pieceWidth,
          height: pieceHeight,
          borderRadius,
          backgroundColor: COLORS[index % COLORS.length],
        },
        style,
      ]}
    />
  );
}

export default function Confetti() {
  return (
    <Animated.View style={styles.container} pointerEvents="none">
      {Array.from({ length: CONFETTI_COUNT }, (_, i) => (
        <ConfettiPiece key={i} index={i} />
      ))}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
    zIndex: 10,
  },
});
