# TruthTrack - AI-Powered News Verification Platform

<div align="center">
  <h3>Combat Misinformation with AI-Powered News Verification</h3>
  <p>TruthTrack uses advanced AI to detect fake news and combat misinformation. Stay informed with verified content from credible journalists worldwide.</p>
</div>

## ✨ Features

### Core Features
- 🤖 **AI-Powered Detection** - Advanced machine learning algorithms analyze content in real-time
- ✅ **Credibility Badges** - Clear visual indicators (Verified, Questionable, Fake)
- 💬 **Hate Speech Moderation** - Automatic detection and filtering of harmful content
- 👥 **Community Discussions** - Topic-based communities for informed discussions
- 📺 **Live Streaming** - Interactive sessions with real-time Q&A and polls
- ❤️ **Support Journalism** - Direct donations to credible journalists

### Technical Features
- ⚛️ React 18 with TypeScript
- 🎨 Modern UI with Tailwind CSS & Shadcn/ui
- 🚀 Optimized performance with lazy loading
- ♿ Enhanced accessibility (WCAG compliant)
- 🛡️ Error boundary for graceful error handling
- 📱 Fully responsive design
- 🎭 Smooth animations with Framer Motion

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or Bun runtime
- npm or bun package manager

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>
cd truthstream-hub

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun dev
```

The app will be available at `http://localhost:8080`

## 📁 Project Structure

```
truthstream-hub/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Shadcn/ui components
│   │   └── dashboards/   # Dashboard components
│   ├── pages/            # Page components (routes)
│   ├── contexts/         # React contexts (Auth, etc.)
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions & constants
│   └── assets/           # Images and static files
├── public/               # Public assets
└── tests/                # Test files
```

## 🔐 Test Accounts

For development and testing:

- **Reader**: `reader@test.com` / `reader123`
- **Journalist**: `journalist@test.com` / `journalist123`
- **Organization**: `org@test.com` / `org123`
- **Admin**: `admin@test.com` / `admin123`

## 🛠️ Available Scripts

```sh
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm test             # Run tests
npm run test:watch   # Run tests in watch mode
```

## 🎨 UI Components

Built with [Shadcn/ui](https://ui.shadcn.com/) for consistent, accessible components:
- Buttons, Forms, Dialogs
- Cards, Badges, Avatars
- Tables, Tabs, Accordions
- And many more...

## 📱 Key Pages

- `/` - Landing page with features showcase
- `/feed` - News feed with verified articles
- `/communities` - Community discussions
- `/live` - Live streaming sessions
- `/dashboard` - Role-based user dashboard
- `/login` & `/register` - Authentication

## 🧪 Testing

```sh
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm test -- --coverage
```

## 🚢 Deployment

### Build for Production

```sh
npm run build
```

The optimized build will be in the `dist/` directory.

### Environment Variables

Create a `.env` file for configuration:

```env
VITE_API_URL=your_api_url_here
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Recent Improvements

- ✅ Fixed TypeScript deprecation warnings
- ✅ Enhanced page titles and meta tags for better SEO
- ✅ Added React.StrictMode for better development experience
- ✅ Implemented Error Boundary for graceful error handling
- ✅ Added lazy loading for improved performance
- ✅ Enhanced accessibility with proper ARIA labels
- ✅ Improved 404 page with better UX
- ✅ Added utility functions and custom hooks
- ✅ Updated robots.txt for better SEO
- ✅ Created LoadingSpinner component
- ✅ Added constants file for better code organization

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components from [Shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations with [Framer Motion](https://www.framer.com/motion/)

---

<div align="center">
  <p>Made with ❤️ for a world of truthful journalism</p>
</div>

- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
