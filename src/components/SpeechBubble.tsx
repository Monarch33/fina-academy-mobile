import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SpeechBubbleProps {
  children: React.ReactNode;
}

export default function SpeechBubble({ children }: SpeechBubbleProps) {
  return (
    <View style={styles.bubble}>
      {typeof children === 'string' ? (
        <Text style={styles.text}>{children}</Text>
      ) : (
        children
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    borderRadius: 16,
    borderBottomLeftRadius: 4,
    paddingHorizontal: 14,
    paddingVertical: 11,
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.6)',
  },
  text: {
    fontSize: 13,
    color: '#1C1917',
    fontWeight: '500',
    lineHeight: 20,
  },
});
