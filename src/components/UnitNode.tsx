import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Svg, { Polyline, Rect, Path } from 'react-native-svg';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
  FadeInDown,
} from 'react-native-reanimated';
import { hapticLight } from '../services/haptics';

type NodeStatus = 'done' | 'current' | 'locked';

interface UnitNodeProps {
  status: NodeStatus;
  title: string;
  index: number;
  color?: string;
  onPress?: () => void;
}

function CheckIcon() {
  return (
    <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <Polyline
        points="20 6 9 17 4 12"
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function StarIcon() {
  return (
    <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 16.4l-5.5 2.8 1-6.2L3 8.6l6.2-.9z"
        fill="#fff"
      />
    </Svg>
  );
}

function LockIcon() {
  return (
    <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
      <Rect
        x={5}
        y={11}
        width={14}
        height={10}
        rx={2}
        stroke="#A8A29E"
        strokeWidth={2}
      />
      <Path d="M8 11V7a4 4 0 018 0v4" stroke="#A8A29E" strokeWidth={2} />
    </Svg>
  );
}

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export default function UnitNode({
  status,
  title,
  index,
  color = '#E8580C',
  onPress,
}: UnitNodeProps) {
  const pulseScale = useSharedValue(1);

  React.useEffect(() => {
    if (status === 'current') {
      pulseScale.value = withRepeat(
        withSequence(
          withTiming(1.05, { duration: 1250 }),
          withTiming(1, { duration: 1250 })
        ),
        -1,
        true
      );
    }
  }, [status, pulseScale]);

  const pulseStyle = useAnimatedStyle(() => ({
    transform: [{ scale: pulseScale.value }],
  }));

  const offsets = [0, 26, 40, 26, 0, -26, -40, -26];
  const offset = offsets[index % 8];

  return (
    <Animated.View
      entering={FadeInDown.delay(index * 25)
        .duration(300)
        .springify()
        .damping(15)}
      style={[styles.wrapper, { transform: [{ translateX: offset }] }]}
    >
      <Animated.View style={status === 'current' ? pulseStyle : undefined}>
        <TouchableOpacity
          onPress={() => {
            if (status !== 'locked') {
              hapticLight();
              onPress?.();
            }
          }}
          activeOpacity={status === 'locked' ? 1 : 0.7}
          style={[
            styles.node,
            status === 'done' && {
              backgroundColor: '#16A34A',
              borderColor: '#0A7D42',
            },
            status === 'current' && {
              backgroundColor: color,
              borderColor: color,
              shadowColor: color,
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.25,
              shadowRadius: 12,
            },
            status === 'locked' && {
              backgroundColor: '#F0EBE1',
              borderColor: '#E4DFD3',
            },
          ]}
        >
          {status === 'done' && <CheckIcon />}
          {status === 'current' && <StarIcon />}
          {status === 'locked' && <LockIcon />}
        </TouchableOpacity>
      </Animated.View>
      {status === 'current' && (
        <View style={[styles.startBadge, { backgroundColor: color }]}>
          <Text style={styles.startText}>START</Text>
        </View>
      )}
      <Text
        style={[
          styles.title,
          status === 'locked' && styles.titleLocked,
          status === 'current' && { marginTop: 26 },
        ]}
        numberOfLines={2}
      >
        {title}
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  node: {
    width: 58,
    height: 58,
    borderRadius: 29,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3.5,
  },
  startBadge: {
    position: 'absolute',
    bottom: -22,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    shadowColor: '#E8580C',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  startText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#fff',
  },
  title: {
    fontSize: 10.5,
    fontWeight: '600',
    color: '#1C1917',
    marginTop: 5,
    textAlign: 'center',
    maxWidth: 120,
    lineHeight: 13,
  },
  titleLocked: {
    color: '#A8A29E',
  },
});
