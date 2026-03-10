import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  type ViewStyle,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { theme } from '../constants/theme';
import { hapticLight } from '../services/haptics';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'success';
  disabled?: boolean;
  style?: ViewStyle;
}

export default function Button({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  style,
}: ButtonProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.96, { damping: 15, stiffness: 300 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 15, stiffness: 150 });
  };

  const handlePress = () => {
    hapticLight();
    onPress();
  };

  const bgColor =
    variant === 'success'
      ? theme.colors.green
      : variant === 'secondary'
        ? '#fff'
        : theme.colors.accent;

  const textColor =
    variant === 'secondary' ? theme.colors.accent : '#fff';

  const borderStyle =
    variant === 'secondary'
      ? { borderWidth: 2.5, borderColor: theme.colors.accent }
      : {};

  const shadowColor =
    variant === 'success' ? theme.colors.green : theme.colors.accent;

  return (
    <AnimatedTouchable
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={0.9}
      disabled={disabled}
      style={[
        styles.button,
        {
          backgroundColor: bgColor,
          opacity: disabled ? 0.3 : 1,
          shadowColor,
          ...borderStyle,
        },
        animatedStyle,
        style,
      ]}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </AnimatedTouchable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 4,
  },
  text: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.1,
  },
});
