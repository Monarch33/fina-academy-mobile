import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Polyline } from 'react-native-svg';
import GlassCard from './GlassCard';

const DAYS = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

interface WeekStreakProps {
  activity: boolean[];
  currentDayIndex: number;
}

function CheckIcon() {
  return (
    <Svg width={13} height={13} viewBox="0 0 24 24" fill="none">
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

export default function WeekStreak({
  activity,
  currentDayIndex,
}: WeekStreakProps) {
  return (
    <GlassCard style={styles.card}>
      <View style={styles.row}>
        {DAYS.map((day, i) => {
          const isDone = activity[i];
          const isToday = i === currentDayIndex;
          return (
            <View key={`${day}-${i}`} style={styles.dayCol}>
              <View
                style={[
                  styles.circle,
                  isDone && !isToday && styles.circleDone,
                  isToday && isDone && styles.circleToday,
                  !isDone && styles.circleEmpty,
                ]}
              >
                {isDone ? (
                  <CheckIcon />
                ) : (
                  <Text style={styles.dash}>—</Text>
                )}
              </View>
              <Text
                style={[
                  styles.label,
                  isToday && styles.labelToday,
                ]}
              >
                {day}
              </Text>
            </View>
          );
        })}
      </View>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  row: {
    flexDirection: 'row',
    gap: 6,
  },
  dayCol: {
    flex: 1,
    alignItems: 'center',
  },
  circle: {
    width: 34,
    height: 34,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
  },
  circleDone: {
    backgroundColor: '#16A34A',
    shadowColor: '#16A34A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  circleToday: {
    backgroundColor: '#E8580C',
    shadowColor: '#E8580C',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  circleEmpty: {
    backgroundColor: '#F0EBE1',
    borderWidth: 1.5,
    borderColor: '#E4DFD3',
  },
  dash: {
    fontSize: 9,
    color: '#A8A29E',
  },
  label: {
    fontSize: 10,
    fontWeight: '700',
    color: '#A8A29E',
  },
  labelToday: {
    color: '#E8580C',
  },
});
