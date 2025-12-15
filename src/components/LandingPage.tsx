import React from 'react';

interface LandingPageProps {
  onTransitionComplete: () => void;
}

/**
 * Landing page component displaying extraction animation and BOXpad preview
 * Automatically transitions to main interface after 3 seconds
 */
const LandingPage: React.FC<LandingPageProps> = ({ onTransitionComplete }) => {
  const tabs = ['Inbox', 'Contacts', 'AI Employees'];

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Top Section - Extracting Information */}
      <div className="flex-1 relative overflow-hidden flex items-center justify-center">
        {/* Hexagonal Pattern Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 gap-3 p-8">
            {Array.from({ length: 120 }).map((_, i) => (
              <div key={i} className="aspect-square">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon
                    points="50,5 90,25 90,75 50,95 10,75 10,25"
                    fill="rgba(59, 130, 246, 0.1)"
                    stroke="rgba(59, 130, 246, 0.3)"
                    strokeWidth="0.5"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-8 py-12 w-full">
          <div className="max-w-5xl mx-auto text-center">
            {/* Animated Circle */}
            <div className="mb-8 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <img 
                  src="/assets/9eaef5ff7af981a828019bffae9d1a7cf3daa4a2" 
                  alt="Animated circle" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    console.error('Failed to load animated circle asset');
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            </div>

            {/* Main Text */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 uppercase tracking-tight animate-fade-in">
              Extracting Information...
            </h1>
            <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto animate-fade-in-delay">
              We are extracting information from the above honey combs to your system
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section - Small BOXpad Preview */}
      <div className="bg-white/95 backdrop-blur-md rounded-t-3xl shadow-2xl mx-4 md:mx-8 lg:mx-16 mb-4 h-64 overflow-hidden">
        <div className="border-b border-gray-200 px-6 py-3 bg-white/50">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">BOXpad</h2>
            <div className="flex items-center space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className="px-3 py-1 rounded-lg text-xs font-medium text-gray-600"
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex h-48 bg-white">
          {/* Left Column Preview */}
          <div className="w-32 border-r border-gray-200 bg-gray-50 p-3">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-gray-700 uppercase mb-2">Inbox</p>
              <p className="text-xs text-gray-600">My Inbox</p>
              <p className="text-xs text-gray-600">All (29)</p>
              <p className="text-xs text-gray-600">Unassigned</p>
            </div>
          </div>
          {/* Middle Column Preview */}
          <div className="w-48 border-r border-gray-200 bg-white p-3">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-gray-900 mb-2">Michael Johnson</p>
              <div className="border border-gray-300 rounded px-2 py-1 text-xs text-gray-500 mb-2">Search Chat</div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-semibold">O</div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-gray-900">Olivia Mckinsey</p>
                  <p className="text-xs text-gray-500">23:19</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs font-semibold">S</div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-gray-900">Sora Williams</p>
                  <p className="text-xs text-gray-500">23:20</p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column Preview */}
          <div className="flex-1 bg-gray-50 p-3">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-gray-900 mb-2">Olivia Mckinsey</p>
              <div className="bg-gray-100 rounded px-3 py-2 mb-2">
                <p className="text-xs text-gray-700">Hi, I recently joined PHALife...</p>
              </div>
              <div className="bg-purple-100 rounded px-3 py-2 ml-8">
                <p className="text-xs text-gray-700">Hello Olivia 👋 I'm Michael...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

