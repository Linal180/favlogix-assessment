import React from 'react';

interface MessageBubbleProps {
  text: string;
  author: string;
  timestamp: string;
  isFromUser: boolean;
}

/**
 * Reusable message bubble component for chat interface
 * Displays message text, author, timestamp, and tick mark for sent messages
 */
const MessageBubble: React.FC<MessageBubbleProps> = ({
  text,
  author,
  timestamp,
  isFromUser,
}) => {
  return (
    <div className={`flex ${isFromUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-md ${isFromUser ? 'flex flex-col items-end' : 'flex flex-col items-start'}`}>
        {/* Author and Time */}
        <div className={`flex items-center mb-1 ${isFromUser ? 'flex-row-reverse space-x-reverse space-x-2' : 'space-x-2'}`}>
          <span className="text-xs font-medium text-gray-900">{isFromUser ? 'Michael' : author}</span>
          <span className="text-xs text-gray-500 whitespace-nowrap">{timestamp}</span>
        </div>
        
        {/* Message Bubble with Tick */}
        <div className={`relative rounded-lg px-4 py-2.5 ${
          isFromUser 
            ? 'bg-purple-100' 
            : 'bg-gray-100'
        }`}>
          <p className="text-sm text-gray-700 leading-relaxed pr-6">{text}</p>
          
          {/* Tick Mark for sent messages */}
          {isFromUser && (
            <div className="absolute bottom-2 right-2">
              <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;

