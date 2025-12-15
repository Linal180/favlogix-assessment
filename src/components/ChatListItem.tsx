import React from 'react';

interface ChatListItemProps {
  name: string;
  message: string;
  time: string;
  initial: string;
  color: string;
  isSelected: boolean;
  onClick: () => void;
}

/**
 * Reusable chat list item component
 * Displays user avatar, name, message preview, and timestamp
 */
const ChatListItem: React.FC<ChatListItemProps> = ({
  name,
  message,
  time,
  initial,
  color,
  isSelected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full p-4 text-left hover:bg-gray-50 transition-colors ${
        isSelected ? 'bg-blue-50 border-l-4 border-blue-600' : ''
      }`}
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white font-semibold text-sm`}>
            {initial}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <p className="text-sm font-medium text-gray-900 truncate">{name}</p>
            <span className="text-xs text-gray-500 flex-shrink-0 ml-2">{time}</span>
          </div>
          <p className="text-sm text-gray-600 truncate">{message}</p>
        </div>
      </div>
    </button>
  );
};

export default ChatListItem;

