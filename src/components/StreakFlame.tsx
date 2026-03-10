import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { getFlameSize, type FlameSize } from '../utils/streak';

interface StreakFlameProps {
  streak: number;
  size?: number;
}

export default function StreakFlame({ streak, size = 40 }: StreakFlameProps) {
  const flameSize = getFlameSize(streak);

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
      >
        {flameSize === 'small' && (
          <Path
            d="M20 32C14 32 10 27 10 22c0-5 4-8 6-12 1 3 3 4 4 3-.5-3-1-6-1-8 3 4 11 8 11 17 0 5-4 10-10 10z"
            fill="#F97316"
            opacity={0.9}
          />
        )}
        {flameSize === 'medium' && (
          <>
            <Path
              d="M20 34C12 34 7 28 7 21c0-7 5-10 8-16 1 4 4 5 5 4-.5-4-1-8-1-10 4 5 14 10 14 22 0 7-5 13-13 13z"
              fill="#EF4444"
              opacity={0.9}
            />
            <Path
              d="M20 34c-4 0-7-3-7-7 0-4 3-6 5-9 .5 2 2 3 3 2 0-2-.5-4-.5-6 2 3 7 6 7 13 0 4-3 7-7.5 7z"
              fill="#FBBF24"
              opacity={0.7}
            />
          </>
        )}
        {flameSize === 'large' && (
          <>
            <Path
              d="M20 36C10 36 4 29 4 20c0-8 6-12 9-18 2 5 5 6 6 5-1-5-1-9-1-12 5 6 18 12 18 25 0 8-6 16-16 16z"
              fill="#DC2626"
              opacity={0.9}
            />
            <Path
              d="M20 36c-5 0-9-4-9-9s4-7 6-11c1 3 2 4 3 3 0-3-.5-5-.5-7 3 4 9 7 9 15s-3 9-8.5 9z"
              fill="#F97316"
              opacity={0.8}
            />
            <Path
              d="M20 36c-3 0-5-2-5-5s2-4 3-6c.5 1 1 2 2 1 0-1 0-3 0-4 1 2 5 4 5 9s-2 5-5 5z"
              fill="#FBBF24"
              opacity={0.9}
            />
          </>
        )}
      </Svg>
      <Text
        style={[
          styles.number,
          {
            fontSize: size * 0.32,
            paddingTop: size * 0.12,
          },
        ]}
      >
        {streak}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    position: 'absolute',
    fontWeight: '900',
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
});
