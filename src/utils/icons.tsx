import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface IconProps {
  size?: number;
  color?: string;
  fill?: string;
  style?: any;
  strokeWidth?: number;
}

// Simple emoji-based icons as fallback
export const Home: React.FC<IconProps> = ({ size = 24, color = '#ffffff', style }) => (
  <Text style={[styles.icon, { fontSize: size, color }, style]}>🏠</Text>
);

export const Search: React.FC<IconProps> = ({ size = 24, color = '#ffffff', style }) => (
  <Text style={[styles.icon, { fontSize: size, color }, style]}>🔍</Text>
);

export const MessageCircle: React.FC<IconProps> = ({ size = 24, color = '#ffffff', style }) => (
  <Text style={[styles.icon, { fontSize: size, color }, style]}>💬</Text>
);

export const Heart: React.FC<IconProps> = ({ size = 24, color = '#ffffff', fill, style }) => (
  <Text style={[styles.icon, { fontSize: size, color }, style]}>❤️</Text>
);

export const User: React.FC<IconProps> = ({ size = 24, color = '#ffffff', style }) => (
  <Text style={[styles.icon, { fontSize: size, color }, style]}>👤</Text>
);

export const Lock: React.FC<IconProps> = ({ size = 24, color = '#ffffff', style }) => (
  <Text style={[styles.icon, { fontSize: size, color }, style]}>🔒</Text>
);

export const Share2: React.FC<IconProps> = ({ size = 24, color = '#ffffff', style }) => (
  <Text style={[styles.icon, { fontSize: size, color }, style]}>📤</Text>
);

export const ArrowLeft: React.FC<IconProps> = ({ size = 24, color = '#ffffff', style }) => (
  <Text style={[styles.icon, { fontSize: size, color }, style]}>←</Text>
);

export const Plus: React.FC<IconProps> = ({ size = 24, color = '#ffffff', style }) => (
  <Text style={[styles.icon, { fontSize: size, color }, style]}>➕</Text>
);

export const ChevronRight: React.FC<IconProps> = ({ size = 24, color = '#ffffff', style }) => (
  <Text style={[styles.icon, { fontSize: size, color }, style]}>›</Text>
);

export const Fire: React.FC<IconProps> = ({ size = 24, color = '#ffffff', style }) => (
  <Text style={[styles.icon, { fontSize: size, color }, style]}>🔥</Text>
);

export const TrendingUp: React.FC<IconProps> = ({ size = 24, color = '#ffffff', style }) => (
  <Text style={[styles.icon, { fontSize: size, color }, style]}>📈</Text>
);

export const Zap: React.FC<IconProps> = ({ size = 24, color = '#ffffff', style }) => (
  <Text style={[styles.icon, { fontSize: size, color }, style]}>⚡</Text>
);

export const Star: React.FC<IconProps> = ({ size = 24, color = '#ffffff', style }) => (
  <Text style={[styles.icon, { fontSize: size, color }, style]}>⭐</Text>
);

export const Crown: React.FC<IconProps> = ({ size = 24, color = '#ffd700', fill, style }) => (
  <Text style={[styles.icon, { fontSize: size, color }, style]}>👑</Text>
);

export const Wallet: React.FC<IconProps> = ({ size = 24, color = '#ffffff', style }) => (
  <Text style={[styles.icon, { fontSize: size, color }, style]}>💰</Text>
);

export const Bookmark: React.FC<IconProps> = ({ size = 24, color = '#ffffff', style }) => (
  <Text style={[styles.icon, { fontSize: size, color }, style]}>🔖</Text>
);

export const Bell: React.FC<IconProps> = ({ size = 24, color = '#ffffff', style }) => (
  <Text style={[styles.icon, { fontSize: size, color }, style]}>🔔</Text>
);

export const Shield: React.FC<IconProps> = ({ size = 24, color = '#ffffff', style }) => (
  <Text style={[styles.icon, { fontSize: size, color }, style]}>🛡️</Text>
);

export const HelpCircle: React.FC<IconProps> = ({ size = 24, color = '#ffffff', style }) => (
  <Text style={[styles.icon, { fontSize: size, color }, style]}>❓</Text>
);

export const Settings: React.FC<IconProps> = ({ size = 24, color = '#ffffff', style }) => (
  <Text style={[styles.icon, { fontSize: size, color }, style]}>⚙️</Text>
);

export const LogOut: React.FC<IconProps> = ({ size = 24, color = '#ffffff', style }) => (
  <Text style={[styles.icon, { fontSize: size, color }, style]}>🚪</Text>
);

export const Edit3: React.FC<IconProps> = ({ size = 24, color = '#ffffff', style }) => (
  <Text style={[styles.icon, { fontSize: size, color }, style]}>✏️</Text>
);

const styles = StyleSheet.create({
  icon: {
    fontWeight: '700',
  },
});
