import { create } from 'zustand';
import { Post, User } from '@/types/interfaces';

interface AppState {
  selectedPost: Post | null;
  isCommentModalOpen: boolean;
  currentPage: 'feed' | 'notifications' | 'profile';
  selectedUser: User | null;
  openCommentModal: (post: Post) => void;
  closeCommentModal: () => void;
  navigateTo: (page: 'feed' | 'notifications' | 'profile', user?: User) => void;
}

export const useAppStore = create<AppState>((set) => ({
  selectedPost: null,
  isCommentModalOpen: false,
  currentPage: 'feed',
  selectedUser: null,
  openCommentModal: (post) => set({ selectedPost: post, isCommentModalOpen: true }),
  closeCommentModal: () => set({ isCommentModalOpen: false }),
  navigateTo: (page, user) => set({ currentPage: page, selectedUser: user || null }),
}));