import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Svg, { Path, Circle, Rect } from 'react-native-svg';
import { hapticSelection } from '../services/haptics';
import { theme } from '../constants/theme';

interface TabBarProps {
  state: { index: number; routeNames: string[] };
  navigation: {
    emit: (opts: { type: string; target: string; canPreventDefault: boolean }) => { defaultPrevented: boolean };
    navigate: (name: string) => void;
  };
}

const TAB_CONFIG = [
  { name: 'home', label: 'Accueil' },
  { name: 'academy', label: 'Academy' },
  { name: 'arena', label: 'Arena' },
  { name: 'leaderboard', label: 'Classement' },
  { name: 'profile', label: 'Profil' },
];

function TabIcon({ name, color, size = 22 }: { name: string; color: string; size?: number }) {
  switch (name) {
    case 'home':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M4 12l8-7 8 7" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          <Path d="M6 11v8a1 1 0 001 1h3v-5h4v5h3a1 1 0 001-1v-8" stroke={color} strokeWidth={2} />
        </Svg>
      );
    case 'academy':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15zM4 19.5A2.5 2.5 0 016.5 17H20" stroke={color} strokeWidth={1.8} />
        </Svg>
      );
    case 'arena':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M13 2L4.5 13H12l-1 9 8.5-11H12l1-9z" stroke={color} strokeWidth={2} strokeLinejoin="round" />
        </Svg>
      );
    case 'leaderboard':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M8 4h8v7a4 4 0 01-8 0V4zM8 7H5a2 2 0 00-2 2 2 2 0 002 2h3M16 7h3a2 2 0 012 2 2 2 0 01-2 2h-3M9 21h6m-3-7v7" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
        </Svg>
      );
    case 'profile':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Circle cx={12} cy={8} r={4} stroke={color} strokeWidth={1.8} />
          <Path d="M4 21v-1a6 6 0 0112 0v1" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
        </Svg>
      );
    default:
      return null;
  }
}

export default function TabBar({ state, navigation }: TabBarProps) {
  return (
    <View style={styles.container}>
      {TAB_CONFIG.map((tab, index) => {
        const isFocused = state.index === index;
        const color = isFocused ? theme.colors.accent : '#A8A29E';

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: state.routeNames[index],
            canPreventDefault: true,
          });
          if (!event.defaultPrevented && !isFocused) {
            hapticSelection();
            navigation.navigate(state.routeNames[index]);
          }
        };

        return (
          <TouchableOpacity
            key={tab.name}
            onPress={onPress}
            activeOpacity={0.6}
            style={[styles.tab, { opacity: isFocused ? 1 : 0.3 }]}
          >
            <TabIcon name={tab.name} color={color} size={24} />
            <Text style={[styles.label, { color }]}>{tab.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 10,
    paddingBottom: 28,
    backgroundColor: theme.colors.bg,
    borderTopWidth: 0,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    gap: 2,
    paddingHorizontal: 14,
  },
  label: {
    fontSize: 9.5,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
