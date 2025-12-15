import React, { useState, useMemo } from 'react';
import ChatListItem from './ChatListItem';
import Loading from './Loading';
import Error from './Error';

interface ChatUser {
  id: number;
  name: string;
  message?: string;
  initial: string;
  color: string;
}

interface ChatListProps {
  users: ChatUser[];
  selectedChatId: number | null;
  onChatSelect: (chatId: number) => void;
  loading: boolean;
  error: string | null;
}

/**
 * Chat list component displaying all available conversations
 * Includes search functionality to filter chats by name or message preview
 * Shows loading state and error handling
 */
const ChatList: React.FC<ChatListProps> = ({
  users,
  selectedChatId,
  onChatSelect,
  loading,
  error,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Generate preview messages and times
  const getPreviewMessage = (userId: number) => {
    const previewMessages = [
      "Oh my god! I'll try it ASAP, thank...",
      "Good Evening, Emily! Hope you are...",
      "Thank you for signing up! If t...",
      "I am sending you the report right a...",
      "Thank you for filling out our survey!",
    ];
    return previewMessages[userId % previewMessages.length];
  };

  const getRandomTime = (userId: number) => {
    const hour = 23 - (userId % 3);
    const minute = 19 + (userId % 3);
    return `${hour}:${String(minute).padStart(2, '0')}`;
  };

  // Filter users based on search query
  const filteredUsers = useMemo(() => {
    if (!searchQuery.trim()) {
      return users;
    }

    const query = searchQuery.toLowerCase().trim();
    return users.filter((user) => {
      const name = user.name.toLowerCase();
      const message = getPreviewMessage(user.id).toLowerCase();
      return name.includes(query) || message.includes(query);
    });
  }, [users, searchQuery]);

  return (
    <div className="w-full lg:w-80 bg-white lg:rounded-lg lg:shadow-sm overflow-y-auto flex-shrink-0 h-full">
      <div className="p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold text-gray-900">Michael Johnson</h3>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="relative mb-3">
          <input
            type="text"
            placeholder="Search Chat"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          <svg className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div className="flex items-center justify-between">
          <select className="text-sm text-gray-600 border-0 bg-transparent focus:outline-none cursor-pointer">
            <option>Open</option>
          </select>
          <div className="flex items-center space-x-1">
            <span className="text-sm text-gray-600">Newest</span>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="p-8 space-y-4">
          <Loading />
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center space-x-3 animate-pulse">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                  <div className="h-3 bg-gray-100 rounded w-32"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : error ? (
        <div className="p-4">
          <Error message={error} />
        </div>
      ) : (
        <div className="divide-y divide-gray-100">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <ChatListItem
                key={user.id}
                name={user.name}
                message={getPreviewMessage(user.id)}
                time={getRandomTime(user.id)}
                initial={user.initial}
                color={user.color}
                isSelected={selectedChatId === user.id}
                onClick={() => onChatSelect(user.id)}
              />
            ))
          ) : searchQuery ? (
            <div className="p-8 text-center text-gray-500">
              <p className="text-sm">No chats found matching "{searchQuery}"</p>
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500">
              <p className="text-sm">No chats available</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatList;

