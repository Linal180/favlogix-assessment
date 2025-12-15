// API utility functions

const API_BASE_URLS = {
  jsonplaceholder: 'https://jsonplaceholder.typicode.com',
  dummyjson: 'https://dummyjson.com',
  reqres: 'https://reqres.in/api',
};

// Users API - Using JSONPlaceholder
export const fetchUsers = async (): Promise<any[]> => {
  try {
    const response = await fetch(`${API_BASE_URLS.jsonplaceholder}/users`);
    if (!response.ok) throw new Error('Failed to fetch users');
    return await response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const fetchUserById = async (id: number): Promise<any> => {
  try {
    const response = await fetch(`${API_BASE_URLS.jsonplaceholder}/users/${id}`);
    if (!response.ok) throw new Error('Failed to fetch user');
    return await response.json();
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

/**
 * Fetches all posts from JSONPlaceholder API
 * Can be used as message content or conversation topics
 */
export const fetchPosts = async (): Promise<any[]> => {
  try {
    const response = await fetch(`${API_BASE_URLS.jsonplaceholder}/posts`);
    if (!response.ok) throw new Error('Failed to fetch posts');
    return await response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

/**
 * Fetches all comments from JSONPlaceholder API
 * Used as chat messages in conversations
 */
export const fetchComments = async (): Promise<any[]> => {
  try {
    const response = await fetch(`${API_BASE_URLS.jsonplaceholder}/comments`);
    if (!response.ok) throw new Error('Failed to fetch comments');
    return await response.json();
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};

/**
 * Fetches comments for a specific post ID
 * Used to load messages for individual conversations
 */
export const fetchCommentsByPostId = async (postId: number): Promise<any[]> => {
  try {
    const response = await fetch(`${API_BASE_URLS.jsonplaceholder}/posts/${postId}/comments`);
    if (!response.ok) throw new Error('Failed to fetch comments');
    return await response.json();
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};

// DummyJSON - Get users with more details
export const fetchDummyUsers = async (): Promise<any> => {
  try {
    const response = await fetch(`${API_BASE_URLS.dummyjson}/users?limit=10`);
    if (!response.ok) throw new Error('Failed to fetch users');
    const data = await response.json();
    return data.users || [];
  } catch (error) {
    console.error('Error fetching dummy users:', error);
    throw error;
  }
};

// ReqRes - Get users
export const fetchReqResUsers = async (page: number = 1): Promise<any> => {
  try {
    const response = await fetch(`${API_BASE_URLS.reqres}/users?page=${page}`);
    if (!response.ok) throw new Error('Failed to fetch users');
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching reqres users:', error);
    throw error;
  }
};

/**
 * Transforms user data from API into chat list format
 * Generates initials and assigns color based on index
 */
export const transformUserToChat = (user: any, index: number) => {
  const colors = ['bg-purple-500', 'bg-yellow-500', 'bg-blue-500', 'bg-orange-500', 'bg-green-500'];
  const initials = user.name
    ? user.name
        .split(' ')
        .map((n: string) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : 'U';

  return {
    id: user.id || index,
    name: user.name || `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'Unknown User',
    email: user.email || '',
    phone: user.phone || user.phoneNumber || '',
    initial: initials[0] || 'U',
    color: colors[index % colors.length],
    avatar: user.image || user.avatar || null,
  };
};

/**
 * Transforms comment/post data into message format
 * Used for displaying messages in chat window
 */
export const transformToMessage = (item: any, isFromUser: boolean = false) => {
  return {
    id: item.id,
    text: item.body || item.content || '',
    timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
    fromUser: isFromUser,
    author: item.name || item.email || 'User',
  };
};
