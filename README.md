# Favlogix Frontend Assessment

A modern, responsive chat application (BOXpad) built with React, TypeScript, and Tailwind CSS. This project demonstrates pixel-perfect UI implementation, API integration, and clean code architecture.

## 🎯 Project Overview

BOXpad is a chat management interface featuring:
- **Landing Page** with animated extraction screen
- **Full-screen Chat Interface** with three-column layout
- **Real-time Search** functionality
- **API Integration** with live dummy APIs
- **Responsive Design** for desktop and mobile devices

## ✨ Features

### 🎨 UI/UX Features
- ✅ Pixel-perfect Figma design implementation
- ✅ Animated landing page with extraction screen
- ✅ Three-column chat interface (desktop) / Stacked view (mobile)
- ✅ Fully responsive design (desktop + mobile)
- ✅ Mobile-optimized navigation with hamburger menu
- ✅ Touch-friendly interface for mobile devices
- ✅ Loading states and error handling
- ✅ Smooth transitions and animations

### 🔍 Search Functionality
- ✅ Real-time chat search by name or message preview
- ✅ Case-insensitive filtering
- ✅ Clear search button
- ✅ Empty state handling

### 🔌 API Integration
- ✅ JSONPlaceholder API integration (Users, Comments)
- ✅ Dynamic data loading
- ✅ Error handling and retry mechanisms
- ✅ Loading states for async operations

### 🏗️ Code Quality
- ✅ Clean folder structure
- ✅ Reusable components (10+ components)
- ✅ TypeScript type safety
- ✅ Meaningful comments and documentation
- ✅ No unnecessary dependencies
- ✅ Custom React hooks (`useApi`)

## 🛠️ Tech Stack

- **React** 18.2.0
- **TypeScript** 4.9.5
- **Tailwind CSS** 3.4.0
- **React Scripts** 5.0.1
- **Web Vitals** 3.5.0

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (if applicable) or navigate to the project directory

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm start
```

4. **Open your browser:**
   - The app will automatically open at [http://localhost:3000](http://localhost:3000)
   - The page will reload if you make edits

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production to the `build` folder
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📁 Project Structure

```
favlogix-assessment/
├── public/
│   ├── assets/              # Figma extracted assets (images, GIFs)
│   └── index.html
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── AppHeader.tsx    # Application header with navigation
│   │   ├── ChatList.tsx     # Chat list with search functionality
│   │   ├── ChatListItem.tsx # Individual chat item component
│   │   ├── ChatWindow.tsx   # Main chat window with messages
│   │   ├── DetailsPanel.tsx # Right sidebar with contact details
│   │   ├── InboxSidebar.tsx # Left sidebar navigation
│   │   ├── LandingPage.tsx  # Landing page with extraction animation
│   │   ├── MessageBubble.tsx # Message bubble component
│   │   ├── Loading.tsx      # Loading spinner component
│   │   └── Error.tsx        # Error display component
│   ├── hooks/               # Custom React hooks
│   │   └── useApi.ts        # API data fetching hook
│   ├── pages/               # Page components
│   │   └── HomePage.tsx     # Main page component
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts
│   ├── utils/               # Utility functions
│   │   ├── api.ts           # API client functions
│   │   └── figmaAssets.ts   # Figma asset paths
│   ├── App.tsx              # Main app component
│   ├── index.tsx            # Entry point
│   └── index.css            # Global styles with Tailwind
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🔌 API Integration

### APIs Used

The application integrates with live dummy APIs as required by the assessment. Below are the APIs currently implemented and used:

#### ✅ JSONPlaceholder (Primary - Actively Used)
- **Base URL**: `https://jsonplaceholder.typicode.com`
- **Status**: ✅ **ACTIVELY USED IN PRODUCTION**

**Endpoints Used:**
- `GET /users` - Fetches all users for the chat list
- `GET /users/{id}` - Fetches individual user details
- `GET /comments` - Fetches all comments (used as chat messages)
- `GET /posts/{id}/comments` - Fetches comments for specific conversations

**Where It's Used:**
- **Chat List**: User names, emails, and avatars displayed in the chat list sidebar
- **Messages**: Comments are transformed into chat messages in conversations
- **User Details**: Contact information (name, email, phone) shown in the Details panel

**Implementation Functions** (in `src/utils/api.ts`):
- `fetchUsers()` - Populates the chat list with all users
- `fetchUserById(id)` - Fetches individual user details
- `fetchComments()` - Loads all comments as messages
- `fetchCommentsByPostId(postId)` - Loads messages for specific user conversations
- `transformUserToChat()` - Transforms API user data to chat list format
- `transformToMessage()` - Transforms comment data to message format

**Data Flow:**
```
On Page Load:
  JSONPlaceholder API → fetchUsers() → Chat List Display

On Chat Selection:
  JSONPlaceholder API → fetchCommentsByPostId() → Messages Display
  User Data → Details Panel Display
```

#### ⚠️ DummyJSON (Available but Not Currently Active)
- **Base URL**: `https://dummyjson.com`
- **Status**: ⚠️ **IMPLEMENTED BUT NOT ACTIVE**

**Available Functions:**
- `fetchDummyUsers()` - Can fetch users with more detailed information

**Note**: Function is implemented in `src/utils/api.ts` and ready to use, but not currently called in the UI. Can be activated if needed for additional user data.

#### ⚠️ ReqRes (Available but Not Currently Active)
- **Base URL**: `https://reqres.in/api`
- **Status**: ⚠️ **IMPLEMENTED BUT NOT ACTIVE**

**Available Functions:**
- `fetchReqResUsers(page)` - Can fetch users with pagination support

**Note**: Function is implemented in `src/utils/api.ts` and ready to use, but not currently called in the UI. Can be activated if pagination is needed.

### API Integration Details

**Custom Hook**: The application uses a custom React hook `useApi` (located in `src/hooks/useApi.ts`) for:
- Managing loading states
- Handling errors
- Providing retry functionality
- Caching API responses

**Error Handling**: All API calls include:
- Try-catch error handling
- User-friendly error messages
- Loading states during API calls
- Graceful fallbacks when APIs fail

**Data Transformation**: API responses are transformed to match the application's data structure:
- User objects → Chat user format (with initials, colors, etc.)
- Comments → Message format (with timestamps, sender info, etc.)

### Assumptions Made

1. **User Data**: Using JSONPlaceholder users as chat participants. User IDs are used to link conversations.
2. **Messages**: Comments from JSONPlaceholder are used as chat messages. Comments are mapped to users based on post IDs.
3. **Real-time Updates**: Currently using static API data. Real-time updates would require WebSocket integration (not implemented).
4. **Pagination**: Currently fetching all users/comments at once. Pagination can be added using ReqRes API if needed.
5. **Message Sending**: The message input field is UI-only. Actual message sending would require a backend API (not part of this assessment).

## 🎨 Design Implementation

### Figma Design
- **Figma Link**: [Front-End Assessment](https://www.figma.com/design/YTNzTHOKnI6rJZbtzjyU0r/Front-end-Assessment?node-id=0-1&p=f)
- **Local File**: `Front end Assessment.fig`
- **Extracted Assets**: Located in `public/assets/`

### Design Features
- ✅ Black landing page with animated circle
- ✅ Hexagonal pattern background
- ✅ BOXpad preview on landing page
- ✅ Three-column layout (Desktop: Inbox → Chat List → Chat Window)
- ✅ Mobile layout (Stacked views with navigation)
- ✅ Message bubbles with tick marks
- ✅ User avatars with initials
- ✅ Responsive breakpoints (Mobile: < 1024px, Desktop: ≥ 1024px)

### 📱 Mobile Design (Custom Implementation)

Since Figma didn't include mobile designs, a custom mobile-responsive layout was implemented:

**Mobile Features:**
- **Hamburger Menu**: Sidebar accessible via hamburger icon in header
- **Stacked Views**: Chat list → Chat window → Details panel (one at a time)
- **Back Navigation**: Back button to navigate between views
- **Touch-Friendly**: Larger touch targets, optimized spacing
- **Overlay Sidebar**: Sidebar slides in from left with backdrop
- **Full-Width Panels**: Panels take full width on mobile for better usability
- **Scrollable Tabs**: Horizontal scrolling tabs in header for mobile
- **Responsive Typography**: Smaller font sizes on mobile
- **Hidden Desktop Elements**: Non-essential buttons hidden on mobile

**Mobile Breakpoint**: `lg` (1024px) - Below this, mobile layout is active

## 🔍 Search Functionality

The chat list includes a fully functional search feature:

- **Real-time filtering** as you type
- **Searches by**: User name and message preview
- **Case-insensitive** matching
- **Clear button** (X) appears when typing
- **Empty states**: Shows "No chats found" when no results

**Usage**: Type in the search box to filter chats instantly.

## 📊 Code Quality Metrics

| Metric | Value |
|--------|-------|
| HomePage.tsx lines | 100 (reduced from 586) |
| Reusable components | 10+ |
| TypeScript coverage | 100% |
| Code comments | Comprehensive |
| Dependencies | Minimal (only essentials) |

## 🏗️ Architecture Highlights

### Component Architecture
- **Modular Design**: Each UI section is a separate component
- **Reusability**: Components can be used across the app
- **Props-based**: Clear prop interfaces for all components
- **Type Safety**: Full TypeScript coverage

### State Management
- React hooks (`useState`, `useEffect`, `useMemo`)
- Custom hook (`useApi`) for API calls
- Local component state (no external state management needed)

### Performance Optimizations
- `useMemo` for filtered search results
- Conditional rendering for loading states
- Efficient re-renders with proper dependencies

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 🚀 Deployment

### Deploying to Vercel

This project is configured for easy deployment to Vercel:

1. **Install Vercel CLI** (optional):
```bash
npm i -g vercel
```

2. **Deploy**:
```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

**Vercel Configuration:**
- Build Command: `npm run build`
- Output Directory: `build`
- Framework Preset: Create React App
- Node Version: 18.x or higher

The `vercel.json` file includes:
- SPA routing configuration (all routes redirect to index.html)
- Static asset caching headers
- Optimized build settings

**Note**: No environment variables are required as the app uses public dummy APIs. The build is minified and ready for deployment.

## 🧪 Testing

```bash
npm test
```

Launches the test runner in interactive watch mode.

## 📝 Documentation

Additional documentation files:
- `API_USAGE.md` - Detailed API integration documentation
- `CODE_QUALITY_IMPROVEMENTS.md` - Code quality improvements summary
- `DESIGN_SYSTEM.md` - Design system documentation (if available)

## 🎯 Key Features Implemented

### ✅ Completed
- [x] Landing page with extraction animation
- [x] Full-screen chat interface
- [x] Three-column layout
- [x] API integration (JSONPlaceholder)
- [x] Search functionality
- [x] Loading states
- [x] Error handling
- [x] Responsive design
- [x] Reusable components
- [x] TypeScript type safety
- [x] Clean code structure

### 🔄 Future Enhancements (Optional)
- [ ] Unit tests for components
- [ ] Integration tests for API calls
- [ ] Accessibility improvements (ARIA labels)
- [ ] Performance optimizations (React.memo)
- [ ] Error boundaries
- [ ] Message sending functionality
- [ ] Real-time updates (WebSocket)

## 🤝 Contributing

This is an assessment project. For questions or feedback, please refer to the assessment requirements.

## 📄 License

This project is part of the Favlogix Frontend Assessment.

## 👨‍💻 Development Notes

- All components follow React best practices
- TypeScript strict mode enabled
- Tailwind CSS for styling (no CSS-in-JS)
- No external UI libraries (pure Tailwind)
- Custom hooks for API management
- Error boundaries recommended for production

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
