import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

interface XPBarProps {
  progress: number;
  color?: string;
  height?: number;
}

export default function XPBar({
  progress,
  color = '#E8580C',
  height = 6,
}: XPBarProps) {
  const animatedWidth = useSharedValue(0);

  React.useEffect(() => {
    animatedWidth.value = withSpring(Math.min(progress, 100), {
      damping: 15,
      stiffness: 150,
    });
  }, [progress, animatedWidth]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${animatedWidth.value}%` as `${number}%`,
  }));

  return (
    <View
      style={[
        styles.track,
        {
          height,
          borderRadius: height,
          backgroundColor: `${color}12`,
        },
      ]}
    >
      <Animated.View
        style={[
          styles.fill,
          {
            height,
            borderRadius: height,
            backgroundColor: color,
          },
          animatedStyle,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    width: '100%',
    overflow: 'hidden',
  },
  fill: {},
});
