import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface SocialProofProps {
  count: number;
}

export default function SocialProof({ count }: SocialProofProps) {
  return (
    <Text style={styles.text}>
      {count.toLocaleString('fr-FR')} apprenants
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 10.5,
    color: '#A8A29E',
    fontWeight: '500',
  },
});
