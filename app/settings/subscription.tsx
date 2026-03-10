import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import Finn from '../../src/components/Finn';
import Button from '../../src/components/Button';
import { theme } from '../../src/constants/theme';
import { PLANS } from '../../src/services/stripe';

export default function SubscriptionScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Abonnement</Text>
          <Finn size={60} eyes="star" mouth="grin" accessory="crown" animate />
          <Text style={styles.subtitle}>
            Débloquez tout le potentiel de FINA
          </Text>

          {PLANS.map((plan) => (
            <View key={plan.id} style={styles.planCard}>
              <Text style={styles.planName}>{plan.name}</Text>
              <Text style={styles.planPrice}>{plan.price}</Text>
              {plan.features.map((f, i) => (
                <Text key={i} style={styles.feature}>
                  · {f}
                </Text>
              ))}
              <Button
                title={plan.id === 'free' ? 'Plan actuel' : 'Choisir'}
                variant={plan.id === 'pro' ? 'primary' : 'secondary'}
                onPress={() => {}}
                disabled={plan.id === 'free'}
                style={{ marginTop: 12 }}
              />
            </View>
          ))}

          <View style={{ height: 20 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: theme.colors.bg },
  scroll: { flex: 1 },
  content: {
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginTop: 8,
    marginBottom: 20,
  },
  planCard: {
    width: '100%',
    backgroundColor: theme.colors.card,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 20,
    marginBottom: 12,
  },
  planName: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.text,
  },
  planPrice: {
    fontSize: 24,
    fontWeight: '800',
    color: theme.colors.accent,
    marginVertical: 8,
  },
  feature: {
    fontSize: 13,
    color: theme.colors.textSecondary,
    lineHeight: 22,
  },
});
