import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface SettingsState {
  darkMode: boolean;
  language: 'fr' | 'en';
  notificationsEnabled: boolean;
  soundEnabled: boolean;
  hapticsEnabled: boolean;

  setDarkMode: (enabled: boolean) => void;
  setLanguage: (lang: 'fr' | 'en') => void;
  setNotifications: (enabled: boolean) => void;
  setSound: (enabled: boolean) => void;
  setHaptics: (enabled: boolean) => void;
  loadFromStorage: () => Promise<void>;
  saveToStorage: () => Promise<void>;
}

const STORAGE_KEY = '@fina_settings';

export const useSettingsStore = create<SettingsState>((set, get) => ({
  darkMode: false,
  language: 'fr',
  notificationsEnabled: true,
  soundEnabled: true,
  hapticsEnabled: true,

  setDarkMode: (enabled) => {
    set({ darkMode: enabled });
    get().saveToStorage();
  },

  setLanguage: (lang) => {
    set({ language: lang });
    get().saveToStorage();
  },

  setNotifications: (enabled) => {
    set({ notificationsEnabled: enabled });
    get().saveToStorage();
  },

  setSound: (enabled) => {
    set({ soundEnabled: enabled });
    get().saveToStorage();
  },

  setHaptics: (enabled) => {
    set({ hapticsEnabled: enabled });
    get().saveToStorage();
  },

  loadFromStorage: async () => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      if (data) {
        set(JSON.parse(data));
      }
    } catch {
      // Ignore
    }
  },

  saveToStorage: async () => {
    try {
      const state = get();
      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          darkMode: state.darkMode,
          language: state.language,
          notificationsEnabled: state.notificationsEnabled,
          soundEnabled: state.soundEnabled,
          hapticsEnabled: state.hapticsEnabled,
        })
      );
    } catch {
      // Ignore
    }
  },
}));
