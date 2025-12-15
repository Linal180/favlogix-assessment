import React from 'react';

interface AppHeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs: string[];
  onMenuClick?: () => void;
  showBackButton?: boolean;
  onBackClick?: () => void;
}

/**
 * Application header component with navigation tabs
 * Responsive: Shows hamburger menu on mobile, full tabs on desktop
 */
const AppHeader: React.FC<AppHeaderProps> = ({ 
  activeTab, 
  onTabChange, 
  tabs,
  onMenuClick,
  showBackButton = false,
  onBackClick
}) => {
  return (
    <div className="border-b border-gray-200 px-4 md:px-6 py-3 md:py-4 bg-white sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Left: Logo and Back Button (Mobile) */}
        <div className="flex items-center space-x-3">
          {/* Hamburger Menu (Mobile) */}
          <button 
            onClick={onMenuClick}
            className="lg:hidden text-gray-600 hover:text-gray-900"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Back Button (Mobile) */}
          {showBackButton && onBackClick && (
            <button 
              onClick={onBackClick}
              className="lg:hidden text-gray-600 hover:text-gray-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          <h2 className="text-xl md:text-2xl font-bold text-gray-900">BOXpad</h2>
        </div>

        {/* Center: Navigation Tabs (Desktop) */}
        <div className="hidden lg:flex items-center space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors relative ${
                activeTab === tab
                  ? 'text-gray-900 font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Right: User Profile */}
        <div className="flex items-center space-x-2 md:space-x-3">
          {/* Settings (Desktop) */}
          <button className="hidden lg:block text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
          
          {/* User Profile */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white text-sm font-semibold">
              M
            </div>
            <span className="hidden md:inline text-sm font-medium text-gray-700">Michael Johnson</span>
          </div>
        </div>
      </div>

      {/* Mobile Tabs (Scrollable) */}
      <div className="lg:hidden mt-3 overflow-x-auto scrollbar-hide">
        <div className="flex items-center space-x-1 min-w-max pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
