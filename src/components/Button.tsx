import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return styles.secondaryBg;
      case 'outline':
        return styles.outlineBg;
      default:
        return styles.primaryBg;
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return styles.smSize;
      case 'lg':
        return styles.lgSize;
      default:
        return styles.mdSize;
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        getVariantStyles(),
        getSizeStyles(),
        fullWidth && styles.fullWidth,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, variant === 'outline' && styles.outlineText]}>
        {loading ? 'Loading...' : title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryBg: {
    backgroundColor: '#ff006e',
  },
  secondaryBg: {
    backgroundColor: '#1a1a1a',
  },
  outlineBg: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#00d4ff',
  },
  smSize: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  mdSize: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  lgSize: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  fullWidth: {
    alignSelf: 'stretch',
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  outlineText: {
    color: '#00d4ff',
  },
  disabled: {
    opacity: 0.5,
  },
});
