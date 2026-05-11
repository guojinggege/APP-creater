import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import { useAuthStore } from '@/store/authStore';

export default function RootLayout() {
  const { isLoggedIn } = useAuthStore();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" />
      <Stack
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#0a0a0a' },
          animationEnabled: true,
        }}
      >
        {isLoggedIn ? (
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="auth" options={{ headerShown: false }} />
        )}
      </Stack>
    </>
  );
}
