import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import Finn from './Finn';
import MiniChart from './MiniChart';
import ProgressRing from './ProgressRing';
import XPBar from './XPBar';
import Badge from './Badge';
import SocialProof from './SocialProof';
import { hapticLight } from '../services/haptics';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

interface CourseCardProps {
  title: string;
  subtitle: string;
  color: string;
  level: string;
  lessonCount: number;
  duration: string;
  learners: number;
  progress: number;
  chartType: 'bars' | 'line' | 'candle' | 'pie' | 'curve';
  finnEyes?: 'happy' | 'dot' | 'star' | 'wink' | 'spark';
  finnMouth?: 'smile' | 'open' | 'grin' | 'line' | 'ooh';
  finnAccessory?: 'glasses' | 'crown' | 'band' | 'tie' | 'hat' | null;
  index: number;
  onPress: () => void;
}

export default function CourseCard({
  title,
  subtitle,
  color,
  level,
  lessonCount,
  duration,
  learners,
  progress,
  chartType,
  finnEyes = 'dot',
  finnMouth = 'smile',
  finnAccessory = null,
  index,
  onPress,
}: CourseCardProps) {
  return (
    <AnimatedTouchable
      entering={FadeInDown.delay(index * 40)
        .duration(300)
        .springify()
        .damping(15)}
      onPress={() => {
        hapticLight();
        onPress();
      }}
      activeOpacity={0.7}
      style={styles.card}
    >
      <View style={[styles.glow, { backgroundColor: `${color}06` }]} />
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <View
            style={[
              styles.iconBg,
              {
                backgroundColor: `${color}08`,
                borderColor: `${color}12`,
              },
            ]}
          >
            <Finn
              size={36}
              eyes={finnEyes}
              mouth={finnMouth}
              accessory={finnAccessory}
            />
          </View>
        </View>
        <View style={styles.info}>
          <View style={styles.titleRow}>
            <View style={styles.titleLeft}>
              <View style={styles.titleWithChart}>
                <Text style={styles.title} numberOfLines={1}>
                  {title}
                </Text>
                <MiniChart type={chartType} color={color} />
              </View>
              <Text style={styles.subtitle} numberOfLines={1}>
                {subtitle}
              </Text>
            </View>
            <ProgressRing progress={progress} size={40} strokeWidth={3} color={color}>
              <Text style={[styles.percent, { color }]}>{progress}%</Text>
            </ProgressRing>
          </View>
          <View style={styles.tags}>
            <Badge text={level} color={color} />
            <Text style={styles.meta}>
              {lessonCount} leçons · {duration}
            </Text>
            <Text style={styles.meta}>·</Text>
            <SocialProof count={learners} />
          </View>
          <XPBar progress={progress} color={color} height={5} />
        </View>
      </View>
    </AnimatedTouchable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFEFB',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#E4DFD3',
    padding: 16,
    marginBottom: 10,
    overflow: 'hidden',
  },
  glow: {
    position: 'absolute',
    top: -20,
    right: -20,
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  content: {
    flexDirection: 'row',
    gap: 12,
  },
  iconContainer: {
    flexShrink: 0,
  },
  iconBg: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  info: {
    flex: 1,
    minWidth: 0,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 6,
  },
  titleLeft: {
    flex: 1,
    minWidth: 0,
  },
  titleWithChart: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  title: {
    fontSize: 14.5,
    fontWeight: '700',
    color: '#1C1917',
    lineHeight: 19,
  },
  subtitle: {
    fontSize: 11.5,
    color: '#57534E',
    marginTop: 2,
  },
  percent: {
    fontSize: 9.5,
    fontWeight: '800',
  },
  tags: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 8,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  meta: {
    fontSize: 10.5,
    color: '#A8A29E',
  },
});
