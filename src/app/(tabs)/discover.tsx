import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { Card, Avatar } from '@/components';
import { Search, Zap, TrendingUp, Fire } from '@/utils/icons';

const { width } = Dimensions.get('window');

const CreatorCard = ({ creator }: any) => (
  <TouchableOpacity>
    <Card variant="glass" style={styles.creatorCard}>
      <ImageBackground
        source={{ uri: creator.image }}
        style={styles.creatorImage}
        imageStyle={{ borderRadius: 16 }}
      >
        <View style={styles.creatorImageOverlay} />
        <View style={styles.creatorImageContent}>
          <Avatar source={creator.avatar} size="lg" verified={creator.verified} />
          <Text style={styles.creatorCardName}>{creator.name}</Text>
          <Text style={styles.creatorCardCategory}>{creator.category}</Text>
        </View>
      </ImageBackground>
    </Card>
  </TouchableOpacity>
);

export default function DiscoverScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const trendingCreators = [
    {
      id: '1',
      name: 'Sophia Chen',
      category: 'Premium',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600',
      verified: true,
      followers: 125000,
    },
    {
      id: '2',
      name: 'Luna AI',
      category: 'AI Model',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600',
      verified: true,
      followers: 98000,
    },
    {
      id: '3',
      name: 'Jessica Lee',
      category: 'Photography',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      image: 'https://images.unsplash.com/photo-1535557595424-6a74e16b92b0?w=600',
      verified: false,
      followers: 75000,
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>发现</Text>
        <Text style={styles.subtitle}>探索更多精彩内容</Text>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Search size={20} color="#808080" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="搜索创作者或内容"
          placeholderTextColor="#666"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Featured Sections */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filtersContainer}
        contentContainerStyle={styles.filtersContent}
      >
        <TouchableOpacity style={[styles.filterChip, styles.filterChipActive]}>
          <TrendingUp size={16} color="#ff006e" />
          <Text style={[styles.filterText, styles.filterTextActive]}>热门</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterChip}>
          <Fire size={16} color="#808080" />
          <Text style={styles.filterText}>最新</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterChip}>
          <Zap size={16} color="#808080" />
          <Text style={styles.filterText}>推荐</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Trending Creators */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>热门创作者</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>查看全部</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={trendingCreators}
          renderItem={({ item }) => <CreatorCard creator={item} />}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          numColumns={2}
          columnWrapperStyle={{ gap: 12 }}
        />
      </View>

      {/* Categories Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>分类浏览</Text>

        {[
          { name: '素人原创', count: '2.5K' },
          { name: '留学生', count: '1.8K' },
          { name: 'Cosplay', count: '3.2K' },
          { name: 'AI数字人', count: '5.1K' },
          { name: '高端写真', count: '2.1K' },
          { name: '情感陪伴', count: '1.5K' },
        ].map((cat, idx) => (
          <TouchableOpacity key={idx} style={styles.categoryRow}>
            <Text style={styles.categoryName}>{cat.name}</Text>
            <Text style={styles.categoryCount}>{cat.count}内容</Text>
          </TouchableOpacity>
        ))}
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    color: '#ffffff',
    fontSize: 16,
  },
  filtersContainer: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  filtersContent: {
    paddingRight: 16,
    gap: 8,
  },
  filterChip: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 20,
    alignItems: 'center',
    gap: 6,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  filterChipActive: {
    backgroundColor: 'rgba(255, 0, 110, 0.15)',
    borderColor: 'rgba(255, 0, 110, 0.3)',
  },
  filterText: {
    color: '#808080',
    fontSize: 12,
    fontWeight: '600',
  },
  filterTextActive: {
    color: '#ff006e',
  },
  sectionContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  seeAll: {
    color: '#ff006e',
    fontSize: 12,
    fontWeight: '600',
  },
  creatorCard: {
    overflow: 'hidden',
    flex: 1,
    height: 250,
  },
  creatorImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  creatorImageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  creatorImageContent: {
    alignItems: 'center',
    paddingBottom: 16,
    zIndex: 1,
  },
  creatorCardName: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 12,
  },
  creatorCardCategory: {
    color: '#b0b0b0',
    fontSize: 12,
    marginTop: 4,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  categoryName: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  categoryCount: {
    color: '#ff006e',
    fontSize: 12,
    fontWeight: '700',
  },
});
