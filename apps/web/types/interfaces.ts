// ============================================================================
// DOMAIN MODELS - The Blueprint of our social media city
// ============================================================================

interface User {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  bio?: string;
  website?: string;
  location?: string;
  joinDate: string;
  followersCount: number;
  followingCount: number;
  postsCount: number;
  verified?: boolean;
}

interface Comment {
  id: string;
  postId: string;
  parentId: string | null;
  author: User;
  content: string;
  likes: number;
  timestamp: string;
  children: string[]; // IDs of child comments
}

interface Post {
  id: string;
  author: User;
  content: string;
  image?: string;
  likes: number;
  commentCount: number;
  timestamp: string;
  isLiked: boolean;
  isSaved: boolean;
}

interface Notification {
  id: string;
  type: 'like' | 'comment' | 'follow' | 'mention';
  from: User;
  post?: Post;
  content: string;
  timestamp: string;
  read: boolean;
}

export type {User, Comment, Post, Notification};