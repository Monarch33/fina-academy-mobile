import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface BadgeProps {
  text: string;
  color?: string;
  backgroundColor?: string;
}

export default function Badge({
  text,
  color = '#E8580C',
  backgroundColor,
}: BadgeProps) {
  return (
    <Text
      style={[
        styles.badge,
        {
          color,
          backgroundColor: backgroundColor || `${color}10`,
        },
      ]}
    >
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderRadius: 7,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    overflow: 'hidden',
  },
});
