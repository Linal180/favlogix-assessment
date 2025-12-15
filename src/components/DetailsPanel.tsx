import React, { useState } from 'react';

interface User {
  name: string;
  email?: string;
  phone?: string;
}

interface DetailsPanelProps {
  user: User | null;
  onClose?: () => void;
}

/**
 * Details panel component displaying chat and contact information
 * Responsive: Full width on mobile, fixed width on desktop
 */
const DetailsPanel: React.FC<DetailsPanelProps> = ({ user, onClose }) => {
  const [noteText, setNoteText] = useState('');

  if (!user) {
    return (
      <div className="w-full lg:w-80 bg-white lg:rounded-lg lg:shadow-sm overflow-y-auto flex-shrink-0 h-full">
        <div className="p-4 md:p-6">
          <p className="text-sm text-gray-500">Select a chat to view details</p>
        </div>
      </div>
    );
  }

  // Split name into first and last name
  const nameParts = user.name.split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';

  return (
    <div className="w-full lg:w-80 bg-white lg:rounded-lg lg:shadow-sm overflow-y-auto flex-shrink-0 h-full">
      <div className="p-4 md:p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h3 className="text-base md:text-lg font-semibold text-gray-900">Details</h3>
          <div className="flex items-center space-x-2">
            {onClose && (
              <button 
                onClick={onClose}
                className="lg:hidden text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="space-y-6">
          {/* Chat Data Section */}
          <div>
            <h4 className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wide">Chat Data</h4>
            <div className="space-y-3">
              <div>
                <span className="text-xs text-gray-500 block mb-1.5">Assignee</span>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white text-xs">⚽</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">James West</p>
                </div>
              </div>
              <div>
                <span className="text-xs text-gray-500 block mb-1.5">Team</span>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white text-xs">⚽</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">Sales Team</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Data Section */}
          <div>
            <h4 className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wide">Contact Data</h4>
            <div className="space-y-3">
              <div>
                <span className="text-xs text-gray-500 block mb-1.5">First Name</span>
                <p className="text-sm text-gray-900">{firstName}</p>
              </div>
              <div>
                <span className="text-xs text-gray-500 block mb-1.5">Last Name</span>
                <p className="text-sm text-gray-900">{lastName}</p>
              </div>
              {user.phone && (
                <div>
                  <span className="text-xs text-gray-500 block mb-1.5">Phone number</span>
                  <p className="text-sm text-gray-900">{user.phone}</p>
                </div>
              )}
              {user.email && (
                <div>
                  <span className="text-xs text-gray-500 block mb-1.5">Email</span>
                  <p className="text-sm text-gray-900">{user.email}</p>
                </div>
              )}
              <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                See all
              </button>
            </div>
          </div>

          {/* Contact Labels Section */}
          <div>
            <h4 className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wide">Contact Labels</h4>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                Closed Won
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                Chicago
              </span>
              <button className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>

          {/* Notes Section */}
          <div>
            <h4 className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wide">Notes</h4>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Add a note"
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex items-start space-x-2">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                  Strong potential for future upgrades
                </span>
              </div>
            </div>
          </div>

          {/* Other Chats Section */}
          <div>
            <h4 className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wide">Other Chats</h4>
            <div className="space-y-2">
              <div className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.041-.024-2.706-.749a.749.749 0 01-.454-.961l.84-2.853a.748.748 0 01.961-.454l2.706.749.041.024c1.652.9 3.5 1.378 5.437 1.378h.013c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8c0 1.668.516 3.246 1.475 4.577l-.84 2.853a.748.748 0 00.454.961l2.706.749.041.024a9.865 9.865 0 005.031 1.378h.013c5.515 0 10-4.485 10-10S15.515 2.004 10 2.004z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-gray-900">Fit4Life</p>
                    <span className="text-xs text-gray-500">08/08/25</span>
                  </div>
                  <p className="text-xs text-gray-600 truncate">On my way!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPanel;
