import React from 'react';
import { Tabs } from 'expo-router';
import TabBar from '../../src/components/TabBar';
import { theme } from '../../src/constants/theme';

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <TabBar state={props.state} navigation={props.navigation} />}
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: 'none' },
      }}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="academy" />
      <Tabs.Screen name="arena" />
      <Tabs.Screen name="leaderboard" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
