import React, { useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useContentStore } from '@/store/contentStore';
import { useAuthStore } from '@/store/authStore';
import { Card, Avatar, Loader } from '@/components';
import { Heart, MessageCircle, Share2, Lock } from '@/utils/icons';
import { formatNumber } from '@/utils/format';

const { width } = Dimensions.get('window');

const ContentCard = ({ content, onLike }: any) => (
  <Card variant="glass" style={styles.contentCard}>
    <ImageBackground
      source={{ uri: content.image }}
      style={styles.contentImage}
      imageStyle={styles.contentImageStyle}
    >
      <View style={styles.contentOverlay} />
      {content.isPremium && (
        <View style={styles.premiumBadge}>
          <Lock size={12} color="#ffffff" />
          <Text style={styles.premiumText}>VIP</Text>
        </View>
      )}
    </ImageBackground>

    <View style={styles.contentInfo}>
      <View style={styles.creatorInfo}>
        <Avatar source={content.creatorAvatar} size="sm" />
        <View style={styles.creatorDetails}>
          <Text style={styles.creatorName}>{content.creatorName}</Text>
          <Text style={styles.category}>{content.category}</Text>
        </View>
      </View>

      <Text style={styles.contentTitle}>{content.title}</Text>
      <Text style={styles.contentDescription} numberOfLines={2}>
        {content.description}
      </Text>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.action} onPress={() => onLike(content.id)}>
          <Heart
            size={18}
            color={content.isLiked ? '#ff006e' : '#808080'}
            fill={content.isLiked ? '#ff006e' : 'none'}
          />
          <Text style={styles.actionText}>{formatNumber(content.likes)}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.action}>
          <MessageCircle size={18} color="#808080" />
          <Text style={styles.actionText}>{formatNumber(content.comments)}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.action}>
          <Share2 size={18} color="#808080" />
          <Text style={styles.actionText}>{formatNumber(content.shares)}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Card>
);

export default function HomeScreen() {
  const { contents, isLoading, fetchTrendingContents, likeContent } = useContentStore();
  const { user } = useAuthStore();

  useEffect(() => {
    fetchTrendingContents();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>欢迎回来</Text>
          <Text style={styles.username}>{user?.username}</Text>
        </View>
        <Avatar source={user?.avatar || ''} size="md" verified={user?.verified} />
      </View>

      {/* Banner */}
      <Card variant="premium" style={styles.bannerCard}>
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600',
          }}
          style={styles.banner}
          imageStyle={styles.bannerImage}
        >
          <View style={styles.bannerOverlay} />
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>专属推荐</Text>
            <Text style={styles.bannerSubtitle}>探索高端创作者内容</Text>
          </View>
        </ImageBackground>
      </Card>

      {/* Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
        contentContainerStyle={styles.categoriesContent}
      >
        {['热门', '素人', '留学生', 'AI数字人', 'Cosplay', '写真', 'VIP'].map((cat, idx) => (
          <TouchableOpacity key={idx} style={styles.categoryChip}>
            <Text style={styles.categoryText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Content Feed */}
      <View style={styles.feedContainer}>
        <Text style={styles.feedTitle}>热门推荐</Text>
        <FlatList
          data={contents}
          renderItem={({ item }) => (
            <ContentCard
              content={item}
              onLike={likeContent}
            />
          )}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  greeting: {
    color: '#808080',
    fontSize: 14,
    fontWeight: '400',
  },
  username: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 4,
  },
  bannerCard: {
    marginHorizontal: 16,
    marginBottom: 24,
    height: 200,
  },
  banner: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bannerImage: {
    borderRadius: 16,
  },
  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 16,
  },
  bannerContent: {
    padding: 20,
    zIndex: 1,
  },
  bannerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },
  bannerSubtitle: {
    fontSize: 14,
    color: '#b0b0b0',
  },
  categoriesContainer: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  categoriesContent: {
    paddingRight: 16,
    gap: 8,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'rgba(255, 0, 110, 0.1)',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 0, 110, 0.3)',
  },
  categoryText: {
    color: '#ff006e',
    fontSize: 12,
    fontWeight: '600',
  },
  feedContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  feedTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
  },
  contentCard: {
    overflow: 'hidden',
  },
  contentImage: {
    width: '100%',
    height: 300,
    backgroundColor: '#1a1a1a',
  },
  contentImageStyle: {
    borderRadius: 16,
  },
  contentOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  premiumBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(255, 0, 110, 0.8)',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 4,
    alignItems: 'center',
    zIndex: 1,
  },
  premiumText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '700',
  },
  contentInfo: {
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  creatorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  creatorDetails: {
    flex: 1,
  },
  creatorName: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  category: {
    color: '#808080',
    fontSize: 12,
    marginTop: 2,
  },
  contentTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  contentDescription: {
    color: '#b0b0b0',
    fontSize: 13,
    marginBottom: 12,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  actionText: {
    color: '#b0b0b0',
    fontSize: 12,
    fontWeight: '600',
  },
});
