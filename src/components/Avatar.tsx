import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

interface AvatarProps {
  source: string | { uri: string };
  size?: 'sm' | 'md' | 'lg' | 'xl';
  verified?: boolean;
  style?: any;
}

export const Avatar: React.FC<AvatarProps> = ({
  source,
  size = 'md',
  verified = false,
  style,
}) => {
  const getSizeStyle = () => {
    switch (size) {
      case 'sm':
        return { width: 32, height: 32, borderRadius: 16 };
      case 'lg':
        return { width: 80, height: 80, borderRadius: 40 };
      case 'xl':
        return { width: 120, height: 120, borderRadius: 60 };
      default:
        return { width: 48, height: 48, borderRadius: 24 };
    }
  };

  const imageSource = typeof source === 'string' ? { uri: source } : source;

  return (
    <View style={[getSizeStyle(), style]}>
      <Image
        source={imageSource}
        style={[getSizeStyle(), styles.image]}
      />
      {verified && (
        <View style={styles.verifiedBadge}>
          <View style={styles.verifiedCheckmark} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#00d4ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#0a0a0a',
  },
  verifiedCheckmark: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#0a0a0a',
  },
});
