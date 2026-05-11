import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Button } from '@/components';
import { useRouter } from 'expo-router';
import { ArrowLeft } from '@/utils/icons';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleReset = async () => {
    if (!email) {
      Alert.alert('错误', '请输入邮箱地址');
      return;
    }

    setIsLoading(true);
    try {
      // TODO: Implement actual password reset
      await new Promise((resolve) => setTimeout(resolve, 1000));
      Alert.alert('成功', '密码重置链接已发送到您的邮箱');
      router.back();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        onPress={() => router.back()}
        style={styles.backButton}
      >
        <ArrowLeft size={24} color="#ffffff" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>忘记密码</Text>
        <Text style={styles.subtitle}>输入您的邮箱地址，我们将向您发送密码重置链接</Text>

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

          <Button
            title="发送重置链接"
            onPress={handleReset}
            fullWidth
            loading={isLoading}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#0a0a0a',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 10,
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#ff006e',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: '#b0b0b0',
    marginBottom: 32,
    lineHeight: 20,
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
});
