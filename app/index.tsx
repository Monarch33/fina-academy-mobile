import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { useUserStore } from '../src/store/useUserStore';

export default function Index() {
  const router = useRouter();
  const hasCompletedOnboarding = useUserStore(
    (s) => s.hasCompletedOnboarding
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (hasCompletedOnboarding) {
        router.replace('/(tabs)/home');
      } else {
        router.replace('/(auth)/welcome');
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [hasCompletedOnboarding, router]);

  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F5F0',
  },
});
