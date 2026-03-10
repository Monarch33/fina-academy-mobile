// Auth service - Google OAuth via expo-auth-session
// For now uses mock auth. To enable real Google OAuth:
// 1. Install expo-auth-session expo-crypto
// 2. Configure Google Cloud Console OAuth credentials
// 3. Replace mockLogin with real implementation

import * as SecureStore from 'expo-secure-store';

const TOKEN_KEY = 'fina_auth_token';
const USER_KEY = 'fina_auth_user';

interface AuthUser {
  name: string;
  email: string;
  avatarUrl?: string;
}

export async function saveAuthToken(token: string): Promise<void> {
  await SecureStore.setItemAsync(TOKEN_KEY, token);
}

export async function getAuthToken(): Promise<string | null> {
  return SecureStore.getItemAsync(TOKEN_KEY);
}

export async function removeAuthToken(): Promise<void> {
  await SecureStore.deleteItemAsync(TOKEN_KEY);
}

export async function saveAuthUser(user: AuthUser): Promise<void> {
  await SecureStore.setItemAsync(USER_KEY, JSON.stringify(user));
}

export async function getAuthUser(): Promise<AuthUser | null> {
  const data = await SecureStore.getItemAsync(USER_KEY);
  if (!data) return null;
  return JSON.parse(data);
}

// Mock login for development
export async function mockLogin(): Promise<AuthUser> {
  const user: AuthUser = {
    name: 'Camil',
    email: 'camil@fina.app',
  };
  await saveAuthToken('mock_token_' + Date.now());
  await saveAuthUser(user);
  return user;
}

export async function logout(): Promise<void> {
  await removeAuthToken();
  await SecureStore.deleteItemAsync(USER_KEY);
}
