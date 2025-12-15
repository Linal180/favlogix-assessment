/**
 * Type definitions for the BOXpad application
 */

export interface User {
  id: number;
  name: string;
  username?: string;
  email: string;
  phone?: string;
  website?: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export interface ChatUser {
  id: number;
  name: string;
  email: string;
  phone?: string;
  initial: string;
  color: string;
  avatar?: string | null;
}

export interface Message {
  id: number;
  text: string;
  timestamp: string;
  fromUser: boolean;
  author: string;
}

export interface ApiResponse<T> {
  data: T;
  loading: boolean;
  error: string | null;
}
