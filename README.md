# 🚀 AI-Powered React Dashboard

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, production-ready AI-driven analytics dashboard built with Next.js 15, featuring real-time data visualization, predictive insights, and a beautiful UI powered by shadcn/ui.

![Dashboard Preview](https://via.placeholder.com/1200x600/1e293b/ffffff?text=AI-Powered+Analytics+Dashboard)

## ✨ Features

- 🎨 **Modern UI/UX** - Beautiful, responsive design with dark mode support
- 📊 **Real-time Analytics** - Live data updates with animated KPI cards
- 🤖 **AI-Powered Insights** - Generate predictions and insights using AI
- 📈 **Advanced Charts** - Multiple chart types (line, bar, pie, area) using Recharts
- 🔍 **Data Filtering** - Advanced filters, search, and sorting capabilities
- ⚡ **Performance Optimized** - Built with Next.js 15 App Router and React Server Components
- 🎯 **Type Safe** - Full TypeScript support with strict mode
- ♿ **Accessible** - ARIA labels and keyboard navigation support
- 📱 **Responsive** - Mobile-first design with collapsible sidebar

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (strict mode)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Data Fetching**: [TanStack Query](https://tanstack.com/query)
- **Charts**: [Recharts](https://recharts.org/)
- **AI SDK**: [Vercel AI SDK](https://sdk.vercel.ai/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Date Handling**: [date-fns](https://date-fns.org/)

## 📦 Installation

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd ai-powered-react-dashboard-1
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# Optional: OpenAI API Key for real AI predictions
# If not provided, the app will use mock AI responses
OPENAI_API_KEY=your_openai_api_key_here

# Next.js
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the dashboard.

## 🚀 Deployment

### Deploy to Vercel

The easiest way to deploy this dashboard is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables (if using OpenAI API)
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Manual Deployment

```bash
# Build the production bundle
npm run build

# Start the production server
npm start
```

## 📁 Project Structure

```
ai-powered-react-dashboard-1/
├── app/                    # Next.js App Router pages
│   ├── overview/          # Overview dashboard page
│   ├── analytics/         # Analytics page with charts
│   ├── predictions/       # AI predictions page
│   ├── settings/          # Settings page
│   ├── layout.tsx         # Root layout
│   ├── providers.tsx      # React Query & Theme providers
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # shadcn/ui components
│   └── dashboard/         # Dashboard-specific components
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities, types, mock data
├── stores/                # Zustand stores
└── public/               # Static assets
```

## 📞 Support

- Telegram: https://t.me/qahtan_n
- Twitter: https://x.com/qahtann_
