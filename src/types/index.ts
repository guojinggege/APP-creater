export interface Creator {
  id: string;
  name: string;
  avatar: string;
  category: string;
  followers: number;
  isSubscribed: boolean;
  subscriptionPrice: number;
  verified: boolean;
  bio: string;
  rating: number;
}

export interface Content {
  id: string;
  creatorId: string;
  creatorName: string;
  creatorAvatar: string;
  title: string;
  description: string;
  image?: string;
  video?: string;
  thumbnail?: string;
  isPremium: boolean;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  isSaved: boolean;
  timestamp: Date;
  category: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  avatar: string;
  bio: string;
  followers: number;
  following: number;
  isCreator: boolean;
  subscription: Subscription | null;
  wallet: Wallet;
  level: number;
  verified: boolean;
}

export interface Subscription {
  id: string;
  creatorId: string;
  creatorName: string;
  status: 'active' | 'expired' | 'cancelled';
  startDate: Date;
  endDate: Date;
  price: number;
  tier: 'basic' | 'premium' | 'vip';
}

export interface Wallet {
  balance: number;
  currency: string;
  transactions: Transaction[];
}

export interface Transaction {
  id: string;
  type: 'subscription' | 'tip' | 'purchase' | 'withdrawal';
  amount: number;
  date: Date;
  description: string;
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  content: string;
  timestamp: Date;
  isRead: boolean;
}

export interface Notification {
  id: string;
  type: 'follow' | 'like' | 'comment' | 'message' | 'subscription';
  title: string;
  description: string;
  timestamp: Date;
  isRead: boolean;
  actionUrl?: string;
}

export enum ContentCategory {
  Original = 'original',
  Student = 'student',
  Celebrity = 'celebrity',
  AIModel = 'ai-model',
  Cosplay = 'cosplay',
  Companion = 'companion',
  Photos = 'photos',
  Trending = 'trending',
  Latest = 'latest',
  VIP = 'vip',
}
