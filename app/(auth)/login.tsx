import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import Finn from '../../src/components/Finn';
import Logo from '../../src/components/Logo';
import Button from '../../src/components/Button';
import { theme } from '../../src/constants/theme';
import { useUserStore } from '../../src/store/useUserStore';
import { mockLogin } from '../../src/services/auth';

export default function LoginScreen() {
  const router = useRouter();
  const setAuth = useUserStore((s) => s.setAuth);
  const completeOnboarding = useUserStore((s) => s.completeOnboarding);

  const handleLogin = async () => {
    const user = await mockLogin();
    setAuth(user.name, user.email, user.avatarUrl);
    completeOnboarding();
    router.replace('/(tabs)/home');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Logo size={28} />
        <Finn size={80} eyes="wink" mouth="smile" animate />
        <Text style={styles.title}>Connecte-toi</Text>
        <Text style={styles.subtitle}>
          Sauvegarde ta progression et retrouve tes cours sur tous tes appareils.
        </Text>
        <Button title="Continuer avec Google" onPress={handleLogin} />
        <Button
          title="Continuer sans compte"
          onPress={() => {
            completeOnboarding();
            router.replace('/(tabs)/home');
          }}
          variant="secondary"
          style={{ marginTop: 10 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.bg,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: theme.colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    maxWidth: 280,
  },
});
