import { create } from 'zustand';
import { Content } from '../types';

interface ContentStore {
  contents: Content[];
  trendingContents: Content[];
  isLoading: boolean;
  setContents: (contents: Content[]) => void;
  addContent: (content: Content) => void;
  removeContent: (id: string) => void;
  likeContent: (id: string) => void;
  saveContent: (id: string) => void;
  fetchTrendingContents: () => Promise<void>;
}

const mockContents: Content[] = [
  {
    id: '1',
    creatorId: 'c1',
    creatorName: 'Sophia Chen',
    creatorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    title: 'Exclusive Behind The Scenes',
    description: 'Premium exclusive content for subscribers only',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600',
    isPremium: true,
    likes: 1250,
    comments: 145,
    shares: 89,
    isLiked: false,
    isSaved: false,
    timestamp: new Date(),
    category: 'photos',
  },
  {
    id: '2',
    creatorId: 'c2',
    creatorName: 'Luna AI',
    creatorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    title: 'AI Digital Companion Collection',
    description: 'Advanced AI model with perfect aesthetic',
    image: 'https://images.unsplash.com/photo-1535557595424-6a74e16b92b0?w=600',
    isPremium: false,
    likes: 2150,
    comments: 312,
    shares: 178,
    isLiked: false,
    isSaved: false,
    timestamp: new Date(),
    category: 'ai-model',
  },
  {
    id: '3',
    creatorId: 'c3',
    creatorName: 'Jessica Lee',
    creatorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    title: 'Professional Photography Showcase',
    description: 'High-end portrait and fashion photography',
    video: 'https://videos.pexels.com/video-files/3571468/3571468-sd_640_360_30fps.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1517692712202-14dd9538aa97?w=600',
    isPremium: true,
    likes: 1875,
    comments: 210,
    shares: 145,
    isLiked: false,
    isSaved: false,
    timestamp: new Date(),
    category: 'photos',
  },
];

export const useContentStore = create<ContentStore>((set) => ({
  contents: mockContents,
  trendingContents: mockContents,
  isLoading: false,

  setContents: (contents) => set({ contents }),

  addContent: (content) =>
    set((state) => ({
      contents: [content, ...state.contents],
    })),

  removeContent: (id) =>
    set((state) => ({
      contents: state.contents.filter((c) => c.id !== id),
    })),

  likeContent: (id) =>
    set((state) => ({
      contents: state.contents.map((c) =>
        c.id === id ? { ...c, isLiked: !c.isLiked, likes: c.isLiked ? c.likes - 1 : c.likes + 1 } : c
      ),
    })),

  saveContent: (id) =>
    set((state) => ({
      contents: state.contents.map((c) =>
        c.id === id ? { ...c, isSaved: !c.isSaved } : c
      ),
    })),

  fetchTrendingContents: async () => {
    set({ isLoading: true });
    try {
      // TODO: Implement actual API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      set({ trendingContents: mockContents });
    } finally {
      set({ isLoading: false });
    }
  },
}));
