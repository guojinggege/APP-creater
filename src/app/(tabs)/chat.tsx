import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import { Card, Avatar } from '@/components';
import { MessageCircle, Plus, Search } from '@/utils/icons';

const ChatListItem = ({ chat }: any) => (
  <TouchableOpacity>
    <Card style={styles.chatItem}>
      <View style={styles.chatContent}>
        <Avatar source={chat.avatar} size="md" />
        <View style={styles.chatInfo}>
          <View style={styles.chatHeader}>
            <Text style={styles.chatName}>{chat.name}</Text>
            <Text style={styles.chatTime}>{chat.time}</Text>
          </View>
          <Text style={styles.chatMessage} numberOfLines={1}>
            {chat.lastMessage}
          </Text>
        </View>
        {chat.unread > 0 && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>{chat.unread}</Text>
          </View>
        )}
      </View>
    </Card>
  </TouchableOpacity>
);

export default function ChatScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const chats = [
    {
      id: '1',
      name: 'Sophia Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      lastMessage: '谢谢你的支持！ 🎉',
      time: '2分钟',
      unread: 2,
    },
    {
      id: '2',
      name: 'Luna AI',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      lastMessage: '你好，有什么问题吗?',
      time: '30分钟',
      unread: 0,
    },
    {
      id: '3',
      name: 'Jessica Lee',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      lastMessage: '下周见！',
      time: '1小时',
      unread: 1,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>消息</Text>
          <Text style={styles.subtitle}>与创作者互动</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Plus size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Search size={20} color="#808080" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="搜索聊天"
          placeholderTextColor="#666"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Chat Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabsContainer}
        contentContainerStyle={styles.tabsContent}
      >
        <TouchableOpacity style={[styles.tab, styles.tabActive]}>
          <MessageCircle size={16} color="#ff006e" />
          <Text style={[styles.tabText, styles.tabTextActive]}>私信</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <MessageCircle size={16} color="#808080" />
          <Text style={styles.tabText}>官方消息</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Chat List */}
      <FlatList
        data={chats}
        renderItem={({ item }) => <ChatListItem chat={item} />}
        keyExtractor={(item) => item.id}
        style={styles.chatList}
        contentContainerStyle={styles.chatListContent}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        scrollEnabled={true}
      />
    </View>
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
    alignItems: 'flex-start',
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
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 0, 110, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
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
    paddingVertical: 10,
    color: '#ffffff',
    fontSize: 16,
  },
  tabsContainer: {
    marginHorizontal: 16,
    marginBottom: 12,
  },
  tabsContent: {
    paddingRight: 16,
    gap: 8,
  },
  tab: {
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
  tabActive: {
    backgroundColor: 'rgba(255, 0, 110, 0.15)',
    borderColor: 'rgba(255, 0, 110, 0.3)',
  },
  tabText: {
    color: '#808080',
    fontSize: 12,
    fontWeight: '600',
  },
  tabTextActive: {
    color: '#ff006e',
  },
  chatList: {
    flex: 1,
  },
  chatListContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  chatItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    padding: 12,
  },
  chatContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  chatInfo: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  chatName: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  chatTime: {
    color: '#808080',
    fontSize: 12,
  },
  chatMessage: {
    color: '#b0b0b0',
    fontSize: 13,
  },
  unreadBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#ff006e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
  },
});
