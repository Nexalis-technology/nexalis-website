# Nexalis - Next.js

A high-performance digital agency website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 15** with App Router for optimal SEO and performance
- **TypeScript** for type safety
- **Tailwind CSS v4** with custom theme
- **Framer Motion** for smooth animations
- **Custom Cursor** with interactive states
- **AI Chat Demo** powered by Google Gemini
- **Fully Responsive** design
- **Server-Side Rendering** for better SEO

## 📦 Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React Icons
- Google Gemini AI

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Set up environment variables**:

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
```

> Get your Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

3. **Run the development server**:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors

Custom colors are defined in `app/globals.css`:

- `lumina-dark`: #030712
- `lumina-light`: #f9fafb
- `lumina-accent`: #6366f1
- `lumina-accent-glow`: #818cf8

### Fonts

- **Sans**: Outfit (Google Fonts)
- **Display**: Space Grotesk (Google Fonts)

## 📁 Project Structure

```
nexalis-next/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles & Tailwind config
├── components/
│   ├── CustomCursor.tsx    # Custom cursor component
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services section
│   ├── Portfolio.tsx       # Portfolio section
│   ├── AiDemo.tsx          # AI chat demo
│   ├── Testimonials.tsx    # Testimonials section
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
├── contexts/
│   └── CursorContext.tsx   # Cursor state management
├── types.ts                # TypeScript type definitions
└── next.config.ts          # Next.js configuration
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Render
- Any platform supporting Node.js

## 📄 License

All rights reserved © 2025 Nexalis Digital

## 🤝 Support

For support, email hello@nexalis.digital

---

Built with ❤️ by Nexalis Team
