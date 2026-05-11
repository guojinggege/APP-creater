import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Alert,
  ImageBackground,
} from 'react-native';
import { useAuthStore } from '@/store/authStore';
import { Card, Avatar, Button } from '@/components';
import {
  LogOut,
  Settings,
  Heart,
  Bookmark,
  Wallet,
  Bell,
  Shield,
  HelpCircle,
  ChevronRight,
  Edit3,
  Crown,
} from '@/utils/icons';
import { formatNumber } from '@/utils/format';

interface MenuItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  onPress: () => void;
  rightElement?: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, title, subtitle, onPress, rightElement }) => (
  <TouchableOpacity onPress={onPress}>
    <Card style={styles.menuItem}>
      <View style={styles.menuContent}>
        <View style={styles.menuIcon}>{icon}</View>
        <View style={styles.menuText}>
          <Text style={styles.menuTitle}>{title}</Text>
          {subtitle && <Text style={styles.menuSubtitle}>{subtitle}</Text>}
        </View>
        {rightElement || <ChevronRight size={20} color="#666" />}
      </View>
    </Card>
  </TouchableOpacity>
);

export default function ProfileScreen() {
  const { user, logout } = useAuthStore();
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

  const handleLogout = () => {
    Alert.alert('登出', '确定要退出登录吗?', [
      {
        text: '取消',
        onPress: () => {},
      },
      {
        text: '确定',
        onPress: () => {
          logout();
        },
      },
    ]);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Profile Header */}
      <Card variant="glass" style={styles.profileCard}>
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600',
          }}
          style={styles.profileBackground}
          imageStyle={{ borderRadius: 16 }}
        >
          <View style={styles.profileOverlay} />
          <View style={styles.profileContent}>
            <Avatar source={user?.avatar || ''} size="xl" verified={user?.verified} />
            <View style={styles.profileInfo}>
              <View style={styles.nameRow}>
                <Text style={styles.username}>{user?.username}</Text>
                {user?.verified && <Crown size={20} color="#ffd700" fill="#ffd700" />}
              </View>
              <Text style={styles.bio}>{user?.bio}</Text>
              <View style={styles.stats}>
                <View style={styles.stat}>
                  <Text style={styles.statNumber}>{formatNumber(user?.followers || 0)}</Text>
                  <Text style={styles.statLabel}>粉丝</Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statNumber}>{formatNumber(user?.following || 0)}</Text>
                  <Text style={styles.statLabel}>关注</Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statNumber}>Lv.{user?.level}</Text>
                  <Text style={styles.statLabel}>等级</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </Card>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <Button title="编 辑 资 料" onPress={() => {}} variant="secondary" size="sm" />
        <Button title="成 为 创 作 者" onPress={() => {}} size="sm" />
      </View>

      {/* Account Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>账户</Text>

        <MenuItem
          icon={<Wallet size={20} color="#00d4ff" />}
          title="钱包"
          subtitle={`余额: ¥${user?.wallet.balance || 0}`}
          onPress={() => {}}
        />

        <MenuItem
          icon={<Heart size={20} color="#ff006e" />}
          title="我的订阅"
          subtitle="管理您的订阅"
          onPress={() => {}}
        />

        <MenuItem
          icon={<Bookmark size={20} color="#ffd700" />}
          title="收藏"
          subtitle="查看已保存的内容"
          onPress={() => {}}
        />
      </View>

      {/* Preferences Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>设置</Text>

        <MenuItem
          icon={<Bell size={20} color="#ff006e" />}
          title="通知"
          subtitle="管理通知偏好"
          onPress={() => {}}
          rightElement={
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: '#1a1a1a', true: 'rgba(255, 0, 110, 0.3)' }}
              thumbColor={notificationsEnabled ? '#ff006e' : '#666'}
            />
          }
        />

        <MenuItem
          icon={<Shield size={20} color="#00d4ff" />}
          title="隐私与安全"
          subtitle="管理您的隐私设置"
          onPress={() => {}}
        />

        <MenuItem
          icon={<Settings size={20} color="#808080" />}
          title="偏好设置"
          subtitle="自定义应用设置"
          onPress={() => {}}
        />
      </View>

      {/* Support Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>支持</Text>

        <MenuItem
          icon={<HelpCircle size={20} color="#b0b0b0" />}
          title="帮助中心"
          subtitle="查看常见问题"
          onPress={() => {}}
        />

        <MenuItem
          icon={<Shield size={20} color="#b0b0b0" />}
          title="服务条款"
          subtitle="阅读我们的政策"
          onPress={() => {}}
        />
      </View>

      {/* Logout Button */}
      <View style={styles.logoutSection}>
        <Button
          title="登 出"
          onPress={handleLogout}
          variant="outline"
          fullWidth
        />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.versionText}>AI Creator Platform v1.0.0</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  profileCard: {
    marginHorizontal: 0,
    height: 400,
    overflow: 'hidden',
  },
  profileBackground: {
    flex: 1,
  },
  profileOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  profileContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 24,
    zIndex: 1,
  },
  profileInfo: {
    alignItems: 'center',
    marginTop: 16,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  username: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
  },
  bio: {
    fontSize: 12,
    color: '#b0b0b0',
    marginBottom: 16,
  },
  stats: {
    flexDirection: 'row',
    gap: 32,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ff006e',
  },
  statLabel: {
    fontSize: 12,
    color: '#808080',
    marginTop: 4,
  },
  quickActions: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  menuItem: {
    paddingVertical: 12,
    marginBottom: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
  },
  menuContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    gap: 12,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 0, 110, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    flex: 1,
  },
  menuTitle: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  menuSubtitle: {
    color: '#808080',
    fontSize: 12,
    marginTop: 2,
  },
  logoutSection: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  versionText: {
    color: '#666',
    fontSize: 12,
  },
});
