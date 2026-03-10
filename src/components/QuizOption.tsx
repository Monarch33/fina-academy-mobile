import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  FadeInDown,
} from 'react-native-reanimated';
import { hapticLight } from '../services/haptics';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

type OptionState = 'default' | 'selected' | 'correct' | 'wrong';

interface QuizOptionProps {
  label: string;
  text: string;
  state: OptionState;
  onPress: () => void;
  index: number;
  disabled?: boolean;
}

export default function QuizOption({
  label,
  text,
  state,
  onPress,
  index,
  disabled = false,
}: QuizOptionProps) {
  const scale = useSharedValue(1);

  const handlePress = () => {
    if (disabled) return;
    scale.value = withSpring(0.96, { damping: 15, stiffness: 300 });
    setTimeout(() => {
      scale.value = withSpring(1, { damping: 15, stiffness: 150 });
    }, 100);
    hapticLight();
    onPress();
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const borderColor =
    state === 'correct'
      ? '#16A34A'
      : state === 'wrong'
        ? '#DC2626'
        : state === 'selected'
          ? '#E8580C'
          : '#E4DFD3';

  const bgColor =
    state === 'correct'
      ? '#F0FDF4'
      : state === 'wrong'
        ? '#FEF2F2'
        : state === 'selected'
          ? '#FFF4ED'
          : '#FFFEFB';

  const labelBg =
    state === 'correct'
      ? '#16A34A'
      : state === 'wrong'
        ? '#DC2626'
        : state === 'selected'
          ? '#E8580C'
          : '#F0EBE1';

  const labelColor =
    state === 'correct' || state === 'wrong' || state === 'selected'
      ? '#fff'
      : '#57534E';

  const labelText =
    state === 'correct'
      ? '\u2713'
      : state === 'wrong'
        ? '\u2715'
        : label;

  return (
    <AnimatedTouchable
      entering={FadeInDown.delay(index * 50)
        .duration(300)
        .springify()
        .damping(15)}
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={disabled}
      style={[
        styles.option,
        {
          borderColor,
          backgroundColor: bgColor,
          shadowColor:
            state === 'selected'
              ? 'rgba(232,88,12,0.1)'
              : 'transparent',
        },
        animatedStyle,
      ]}
    >
      <View
        style={[
          styles.label,
          { backgroundColor: labelBg },
        ]}
      >
        <Text style={[styles.labelText, { color: labelColor }]}>
          {labelText}
        </Text>
      </View>
      <Text style={styles.text}>{text}</Text>
    </AnimatedTouchable>
  );
}

const styles = StyleSheet.create({
  option: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 2.5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  label: {
    width: 26,
    height: 26,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText: {
    fontSize: 11,
    fontWeight: '700',
  },
  text: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: '#1C1917',
  },
});
