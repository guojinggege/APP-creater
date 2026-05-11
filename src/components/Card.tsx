import React from 'react';
import { View, StyleSheet } from 'react-native';

interface CardProps {
  children: React.ReactNode;
  style?: any;
  variant?: 'default' | 'premium' | 'glass';
}

export const Card: React.FC<CardProps> = ({ children, style, variant = 'default' }) => {
  const getVariantStyle = () => {
    switch (variant) {
      case 'premium':
        return styles.premiumCard;
      case 'glass':
        return styles.glassCard;
      default:
        return styles.defaultCard;
    }
  };

  return (
    <View style={[styles.card, getVariantStyle(), style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  defaultCard: {
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  premiumCard: {
    backgroundColor: 'rgba(255, 0, 110, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255, 0, 110, 0.3)',
  },
  glassCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
});
