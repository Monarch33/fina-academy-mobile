import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Switch } from 'react-native';
import { theme } from '../../src/constants/theme';
import { useSettingsStore } from '../../src/store/useSettingsStore';

export default function PreferencesScreen() {
  const settings = useSettingsStore();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.content}>
        <Text style={styles.title}>Préférences</Text>

        <View style={styles.card}>
          {[
            {
              label: 'Sons',
              value: settings.soundEnabled,
              onToggle: settings.setSound,
            },
            {
              label: 'Vibrations',
              value: settings.hapticsEnabled,
              onToggle: settings.setHaptics,
            },
            {
              label: 'Notifications',
              value: settings.notificationsEnabled,
              onToggle: settings.setNotifications,
            },
          ].map((item, i) => (
            <View
              key={item.label}
              style={[styles.row, i > 0 && styles.rowBorder]}
            >
              <Text style={styles.rowLabel}>{item.label}</Text>
              <Switch
                value={item.value}
                onValueChange={item.onToggle}
                trackColor={{
                  true: theme.colors.accent,
                  false: theme.colors.border,
                }}
              />
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: theme.colors.bg },
  content: { paddingHorizontal: 20, paddingTop: 16 },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: 20,
  },
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: theme.colors.border,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  rowBorder: {
    borderTopWidth: 1,
    borderTopColor: theme.colors.borderLight,
  },
  rowLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.colors.text,
  },
});
