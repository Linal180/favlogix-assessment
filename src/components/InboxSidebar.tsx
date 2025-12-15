import React from 'react';

interface InboxCategory {
  name: string;
  count: number | null;
}

interface Team {
  name: string;
  count: number;
}

interface InboxSidebarProps {
  categories: InboxCategory[];
  teams: Team[];
  onClose?: () => void;
}

/**
 * Sidebar component for inbox navigation
 * Responsive: Overlay on mobile, fixed sidebar on desktop
 */
const InboxSidebar: React.FC<InboxSidebarProps> = ({ categories, teams, onClose }) => {
  return (
    <div className="w-full lg:w-64 bg-gray-50 overflow-y-auto flex-shrink-0 h-full">
      <div className="p-4 space-y-6">
        {/* Mobile Close Button */}
        {onClose && (
          <div className="flex items-center justify-between mb-4 lg:hidden">
            <h2 className="text-lg font-semibold text-gray-900">Navigation</h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
        {/* Inbox Section */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase">Inbox</h3>
          <ul className="space-y-1">
            {categories.map((item) => (
              <li key={item.name}>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-200 text-sm text-gray-700 flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>{item.name} {item.count !== null && `(${item.count})`}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Teams Section */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase flex items-center justify-between">
            Teams
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </h3>
          <ul className="space-y-1">
            {teams.map((team) => (
              <li key={team.name}>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-200 text-sm text-gray-700 flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>{team.name} ({team.count})</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Users Section */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase flex items-center justify-between">
            Users
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default InboxSidebar;

