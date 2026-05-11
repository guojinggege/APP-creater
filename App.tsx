import React from 'react';
import { AlertNotificationRoot } from 'react-native-alert-notification';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { StatusBar } from 'react-native';
import RootLayout from './src/app/_layout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AlertNotificationRoot>
        <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" />
        <RootLayout />
      </AlertNotificationRoot>
    </QueryClientProvider>
  );
}
