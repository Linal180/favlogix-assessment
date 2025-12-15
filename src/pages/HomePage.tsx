import React, { useState, useEffect } from 'react';
import { useApi } from '../hooks/useApi';
import { fetchUsers, fetchComments, fetchCommentsByPostId, transformUserToChat, transformToMessage } from '../utils/api';
import LandingPage from '../components/LandingPage';
import AppHeader from '../components/AppHeader';
import InboxSidebar from '../components/InboxSidebar';
import ChatList from '../components/ChatList';
import ChatWindow from '../components/ChatWindow';
import DetailsPanel from '../components/DetailsPanel';

/**
 * Main homepage component for BOXpad application
 * Handles landing page transition and full chat interface
 * Responsive design: Desktop (3-column) and Mobile (stacked/overlay)
 */
const HomePage: React.FC = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [activeTab, setActiveTab] = useState('Inbox');
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  
  // Mobile navigation state
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [mobileView, setMobileView] = useState<'list' | 'chat' | 'details'>('list');

  // Fetch users for chat list
  const { data: users, loading: usersLoading, error: usersError } = useApi(fetchUsers);
  
  // Fetch comments for messages (using user's posts as conversation)
  const { data: comments, loading: commentsLoading } = useApi(
    () => selectedUserId ? fetchCommentsByPostId(selectedUserId) : fetchComments(),
    [selectedUserId]
  );

  // Transform users to chat format
  const chatUsers = users ? users.map((user, index) => transformUserToChat(user, index)) : [];
  
  // Set first user as selected by default
  useEffect(() => {
    if (chatUsers.length > 0 && selectedChat === null) {
      setSelectedChat(chatUsers[0].id);
      setSelectedUserId(chatUsers[0].id);
    }
  }, [chatUsers, selectedChat]);

  // Get selected user
  const selectedUser = chatUsers.find(u => u.id === selectedChat) || chatUsers[0];
  
  // Transform comments to messages
  const messages = comments ? comments.slice(0, 10).map((comment, index) => ({
    ...transformToMessage(comment, index % 2 === 0),
  })) : [];

  // Transition from landing page to chat interface after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Handle chat selection
  const handleChatSelect = (chatId: number) => {
    setSelectedChat(chatId);
    setSelectedUserId(chatId);
    // On mobile, switch to chat view
    if (window.innerWidth < 1024) {
      setMobileView('chat');
      setShowSidebar(false);
    }
  };

  // Handle back navigation on mobile
  const handleBackToList = () => {
    setMobileView('list');
  };

  // Handle details toggle on mobile
  const handleToggleDetails = () => {
    if (window.innerWidth < 1024) {
      setMobileView('details');
    } else {
      setShowDetails(!showDetails);
    }
  };

  // Navigation tabs
  const tabs = ['Inbox', 'Contacts', 'AI Employees', 'Workflows', 'Campaigns'];
  
  // Inbox categories and teams data
  const inboxCategories = [
    { name: 'My Inbox', count: null },
    { name: 'All', count: users?.length || 28 },
    { name: 'Unassigned', count: 5 },
  ];
  
  const teams = [
    { name: 'Sales', count: 7 },
    { name: 'Customer Support', count: 16 },
  ];

  // Landing Page
  if (showLanding) {
    return <LandingPage onTransitionComplete={() => setShowLanding(false)} />;
  }

  // Full Screen Chat Interface
  return (
    <div className="min-h-screen bg-white">
      <AppHeader 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        tabs={tabs}
        onMenuClick={() => setShowSidebar(!showSidebar)}
        showBackButton={mobileView !== 'list'}
        onBackClick={handleBackToList}
      />

      {/* Desktop Layout - Three Column */}
      <div className="hidden lg:flex h-[calc(100vh-73px)] bg-gray-100 p-2 gap-2 overflow-hidden">
        {/* Left Sidebar - Inbox Navigation */}
        <InboxSidebar 
          categories={inboxCategories} 
          teams={teams} 
        />

        {/* Middle Panel - Chat List */}
        <ChatList
          users={chatUsers}
          selectedChatId={selectedChat}
          onChatSelect={handleChatSelect}
          loading={usersLoading}
          error={usersError}
        />

        {/* Right Section - Chat Window + Details Panel */}
        <div className="flex-1 flex gap-2 min-w-0">
          {/* Chat Window */}
          <div className="flex-1 min-w-0">
            <ChatWindow
              userName={selectedUser?.name || 'Select a chat'}
              messages={messages}
              loading={commentsLoading}
              onToggleDetails={handleToggleDetails}
            />
          </div>

          {/* Details Panel */}
          {showDetails && (
            <DetailsPanel user={selectedUser || null} />
          )}
        </div>
      </div>

      {/* Mobile Layout - Stacked/Overlay */}
      <div className="lg:hidden h-[calc(100vh-73px)] bg-gray-100 overflow-hidden relative">
        {/* Mobile Sidebar Overlay */}
        {showSidebar && (
          <>
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setShowSidebar(false)}
            />
            <div className="fixed left-0 top-[73px] bottom-0 w-64 bg-gray-50 z-50 overflow-y-auto shadow-xl">
              <InboxSidebar 
                categories={inboxCategories} 
                teams={teams}
                onClose={() => setShowSidebar(false)}
              />
            </div>
          </>
        )}

        {/* Mobile Chat List View */}
        {mobileView === 'list' && (
          <div className="h-full">
            <ChatList
              users={chatUsers}
              selectedChatId={selectedChat}
              onChatSelect={handleChatSelect}
              loading={usersLoading}
              error={usersError}
            />
          </div>
        )}

        {/* Mobile Chat Window View */}
        {mobileView === 'chat' && (
          <div className="h-full">
            <ChatWindow
              userName={selectedUser?.name || 'Select a chat'}
              messages={messages}
              loading={commentsLoading}
              onToggleDetails={handleToggleDetails}
              isMobile={true}
            />
          </div>
        )}

        {/* Mobile Details View */}
        {mobileView === 'details' && (
          <div className="h-full">
            <DetailsPanel 
              user={selectedUser || null}
              onClose={() => setMobileView('chat')}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
