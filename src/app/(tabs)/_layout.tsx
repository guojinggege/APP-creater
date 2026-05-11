import React from 'react';
import { Tabs } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { Heart, Search, MessageCircle, User, Home } from '@/utils/icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ff006e',
        tabBarInactiveTintColor: '#666666',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIconStyle: styles.tabBarIcon,
        sceneContainerStyle: { backgroundColor: '#0a0a0a' },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '首页',
          tabBarIcon: ({ color }) => (
            <Home size={24} color={color} strokeWidth={2} />
          ),
        }}
      />

      <Tabs.Screen
        name="discover"
        options={{
          title: '发现',
          tabBarIcon: ({ color }) => (
            <Search size={24} color={color} strokeWidth={2} />
          ),
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          title: '聊天',
          tabBarIcon: ({ color }) => (
            <MessageCircle size={24} color={color} strokeWidth={2} />
          ),
          tabBarBadge: 3,
        }}
      />

      <Tabs.Screen
        name="creator"
        options={{
          title: '创作者',
          tabBarIcon: ({ color }) => (
            <Heart size={24} color={color} strokeWidth={2} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: '我的',
          tabBarIcon: ({ color }) => (
            <User size={24} color={color} strokeWidth={2} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#0a0a0a',
    borderTopWidth: 1,
    borderTopColor: '#2a2a2a',
    height: 64,
    paddingBottom: 8,
    paddingTop: 8,
  },
  tabBarLabel: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: '600',
  },
  tabBarIcon: {
    marginTop: 4,
  },
});
