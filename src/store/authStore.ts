import { create } from 'zustand';
import { User } from '../types';

interface AuthStore {
  user: User | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (email: string, password: string, username: string) => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoggedIn: false,
  isLoading: false,

  setUser: (user) => set({ user, isLoggedIn: !!user }),

  login: async (email, password) => {
    set({ isLoading: true });
    try {
      // TODO: Implement actual login
      const mockUser: User = {
        id: '1',
        username: 'user',
        email,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
        bio: 'AI Creator Platform User',
        followers: 100,
        following: 50,
        isCreator: false,
        subscription: null,
        wallet: { balance: 0, currency: 'USD', transactions: [] },
        level: 1,
        verified: false,
      };
      set({ user: mockUser, isLoggedIn: true });
    } finally {
      set({ isLoading: false });
    }
  },

  logout: () => set({ user: null, isLoggedIn: false }),

  signup: async (email, password, username) => {
    set({ isLoading: true });
    try {
      // TODO: Implement actual signup
      const mockUser: User = {
        id: '1',
        username,
        email,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
        bio: 'Welcome to AI Creator Platform',
        followers: 0,
        following: 0,
        isCreator: false,
        subscription: null,
        wallet: { balance: 0, currency: 'USD', transactions: [] },
        level: 1,
        verified: false,
      };
      set({ user: mockUser, isLoggedIn: true });
    } finally {
      set({ isLoading: false });
    }
  },
}));
