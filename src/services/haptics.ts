import * as Haptics from 'expo-haptics';
import { useSettingsStore } from '../store/useSettingsStore';

export async function hapticSuccess(): Promise<void> {
  if (!useSettingsStore.getState().hapticsEnabled) return;
  await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
}

export async function hapticError(): Promise<void> {
  if (!useSettingsStore.getState().hapticsEnabled) return;
  await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
}

export async function hapticLight(): Promise<void> {
  if (!useSettingsStore.getState().hapticsEnabled) return;
  await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
}

export async function hapticMedium(): Promise<void> {
  if (!useSettingsStore.getState().hapticsEnabled) return;
  await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
}

export async function hapticHeavy(): Promise<void> {
  if (!useSettingsStore.getState().hapticsEnabled) return;
  await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
}

export async function hapticSelection(): Promise<void> {
  if (!useSettingsStore.getState().hapticsEnabled) return;
  await Haptics.selectionAsync();
}
