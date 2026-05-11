import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  FlatList,
} from 'react-native';
import { Card, Avatar, Button } from '@/components';
import { Heart, MessageCircle, Share2, Star, Zap, TrendingUp } from '@/utils/icons';
import { formatNumber } from '@/utils/format';

const { width } = Dimensions.get('window');

const CreatorHighlight = ({ creator }: any) => (
  <TouchableOpacity style={styles.highlightCard}>
    <ImageBackground
      source={{ uri: creator.image }}
      style={styles.highlightImage}
      imageStyle={{ borderRadius: 12 }}
    >
      <View style={styles.highlightOverlay} />
      <View style={styles.highlightContent}>
        <Avatar source={creator.avatar} size="md" verified={creator.verified} />
        <Text style={styles.highlightName}>{creator.name}</Text>
        <Text style={styles.highlightCategory}>{creator.category}</Text>
      </View>
    </ImageBackground>
  </TouchableOpacity>
);

export default function CreatorScreen() {
  const topCreators = [
    {
      id: '1',
      name: 'Sophia Chen',
      category: 'Premium Exclusive',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600',
      verified: true,
      followers: 125000,
      likes: 95000,
      price: 9.99,
    },
    {
      id: '2',
      name: 'Luna AI',
      category: 'AI Digital Model',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600',
      verified: true,
      followers: 98000,
      likes: 87000,
      price: 7.99,
    },
    {
      id: '3',
      name: 'Jessica Lee',
      category: 'Professional Photography',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      image: 'https://images.unsplash.com/photo-1535557595424-6a74e16b92b0?w=600',
      verified: false,
      followers: 75000,
      likes: 62000,
      price: 4.99,
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>创作者</Text>
        <Text style={styles.subtitle}>支持你喜爱的创作者</Text>
      </View>

      {/* Featured Creators */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Star size={16} color="#ffd700" />
          <Text style={styles.sectionTitle}>精选推荐</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.highlightsContent}
        >
          {topCreators.map((creator) => (
            <CreatorHighlight key={creator.id} creator={creator} />
          ))}
        </ScrollView>
      </View>

      {/* Creator List */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <TrendingUp size={16} color="#ff006e" />
          <Text style={styles.sectionTitle}>热门创作者</Text>
        </View>

        {topCreators.map((creator, idx) => (
          <TouchableOpacity key={idx}>
            <Card variant="glass" style={styles.creatorListItem}>
              <View style={styles.creatorListContent}>
                <Avatar source={creator.avatar} size="md" verified={creator.verified} />
                <View style={styles.creatorListInfo}>
                  <Text style={styles.creatorName}>{creator.name}</Text>
                  <Text style={styles.creatorCategory}>{creator.category}</Text>
                  <View style={styles.creatorStats}>
                    <View style={styles.stat}>
                      <Heart size={12} color="#ff006e" fill="#ff006e" />
                      <Text style={styles.statText}>{formatNumber(creator.followers)}</Text>
                    </View>
                    <View style={styles.stat}>
                      <MessageCircle size={12} color="#00d4ff" />
                      <Text style={styles.statText}>{formatNumber(creator.likes)}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.creatorAction}>
                  <Text style={styles.subscriptionPrice}>${creator.price}</Text>
                  <Button
                    title="订阅"
                    onPress={() => {}}
                    size="sm"
                  />
                </View>
              </View>
            </Card>
          </TouchableOpacity>
        ))}
      </View>

      {/* Categories Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>浏览分类</Text>

        <View style={styles.categoryGrid}>
          {[
            { name: '素人原创', count: '2.5K', icon: '👩' },
            { name: '留学生', count: '1.8K', icon: '🎓' },
            { name: 'Cosplay', count: '3.2K', icon: '👗' },
            { name: 'AI数字人', count: '5.1K', icon: '🤖' },
            { name: '高端写真', count: '2.1K', icon: '📸' },
            { name: '情感陪伴', count: '1.5K', icon: '💕' },
          ].map((cat, idx) => (
            <TouchableOpacity key={idx} style={styles.categoryBox}>
              <Text style={styles.categoryIcon}>{cat.icon}</Text>
              <Text style={styles.categoryBoxName}>{cat.name}</Text>
              <Text style={styles.categoryBoxCount}>{cat.count}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* VIP Section */}
      <Card variant="premium" style={styles.vipCard}>
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600',
          }}
          style={styles.vipBackground}
          imageStyle={{ borderRadius: 16 }}
        >
          <View style={styles.vipOverlay} />
          <View style={styles.vipContent}>
            <Zap size={32} color="#ffd700" />
            <Text style={styles.vipTitle}>成为VIP会员</Text>
            <Text style={styles.vipDescription}>解锁所有独家内容</Text>
            <Button
              title="了解详情"
              onPress={() => {}}
              size="sm"
              fullWidth
              variant="secondary"
            />
          </View>
        </ImageBackground>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 14,
    color: '#808080',
    marginTop: 4,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  highlightsContent: {
    paddingRight: 16,
    gap: 12,
  },
  highlightCard: {
    width: (width - 48) / 2,
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
  },
  highlightImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  highlightOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  highlightContent: {
    alignItems: 'center',
    paddingBottom: 12,
    zIndex: 1,
  },
  highlightName: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
    marginTop: 8,
  },
  highlightCategory: {
    color: '#b0b0b0',
    fontSize: 10,
    marginTop: 2,
  },
  creatorListItem: {
    marginBottom: 12,
    padding: 12,
  },
  creatorListContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  creatorListInfo: {
    flex: 1,
  },
  creatorName: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  creatorCategory: {
    color: '#808080',
    fontSize: 12,
    marginTop: 2,
  },
  creatorStats: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 6,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    color: '#b0b0b0',
    fontSize: 11,
  },
  creatorAction: {
    alignItems: 'flex-end',
    gap: 8,
  },
  subscriptionPrice: {
    color: '#ff006e',
    fontSize: 14,
    fontWeight: '700',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 12,
  },
  categoryBox: {
    flex: 1,
    minWidth: (width - 56) / 2,
    backgroundColor: 'rgba(255, 0, 110, 0.08)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 0, 110, 0.2)',
    padding: 12,
    alignItems: 'center',
  },
  categoryIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  categoryBoxName: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  categoryBoxCount: {
    color: '#ff006e',
    fontSize: 10,
    marginTop: 4,
  },
  vipCard: {
    marginHorizontal: 0,
    marginBottom: 24,
    height: 220,
  },
  vipBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vipOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  vipContent: {
    alignItems: 'center',
    zIndex: 1,
  },
  vipTitle: {
    color: '#ffd700',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 12,
  },
  vipDescription: {
    color: '#b0b0b0',
    fontSize: 14,
    marginTop: 8,
    marginBottom: 16,
  },
});
