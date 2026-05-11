import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, ImageBackground, Alert } from 'react-native';
import { useAuthStore } from '@/store/authStore';
import { Button } from '@/components';
import { Link } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuthStore();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('错误', '请填写所有字段');
      return;
    }

    setIsLoading(true);
    try {
      await login(email, password);
    } catch (error) {
      Alert.alert('登录失败', '请检查您的凭据');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800' }}
      style={styles.background}
      blurRadius={10}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.overlay} />
        
        <View style={styles.content}>
          <Text style={styles.title}>AI Creator</Text>
          <Text style={styles.subtitle}>高端创作者社区</Text>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="邮箱地址"
              placeholderTextColor="#808080"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              editable={!isLoading}
            />

            <TextInput
              style={styles.input}
              placeholder="密码"
              placeholderTextColor="#808080"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              editable={!isLoading}
            />

            <Button
              title="登 录"
              onPress={handleLogin}
              fullWidth
              loading={isLoading}
            />

            <View style={styles.divider}>
              <View style={styles.line} />
              <Text style={styles.dividerText}>或</Text>
              <View style={styles.line} />
            </View>

            <Button
              title="注 册"
              onPress={() => {}}
              variant="outline"
              fullWidth
            />

            <Link href="/auth/forgot-password" asChild>
              <Text style={styles.link}>忘记密码?</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(10, 10, 10, 0.85)',
  },
  content: {
    padding: 24,
    zIndex: 1,
  },
  title: {
    fontSize: 48,
    fontWeight: '900',
    color: '#ff006e',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#b0b0b0',
    textAlign: 'center',
    marginBottom: 48,
    fontWeight: '300',
  },
  form: {
    marginTop: 24,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 16,
    color: '#ffffff',
    fontSize: 16,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  dividerText: {
    marginHorizontal: 12,
    color: '#808080',
    fontSize: 14,
  },
  link: {
    color: '#00d4ff',
    textAlign: 'center',
    marginTop: 16,
    fontSize: 14,
    fontWeight: '500',
  },
});
