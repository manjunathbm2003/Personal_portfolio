# Manjunath B M - Portfolio Website

A modern, responsive portfolio website built with React and Express showcasing electronics engineering expertise and embedded systems projects.

## Features

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations and hover effects
- **Interactive Sections**: 
  - Hero section with professional introduction
  - About section with personal background
  - Experience timeline with professional history
  - Skills section with animated progress bars
  - Certifications showcase
  - Project portfolio with detailed descriptions
  - Contact form with validation
- **Performance Optimized**: Fast loading with optimized images and code splitting

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Wouter** for routing
- **React Query** for state management
- **React Hook Form** for form handling
- **Lucide React** for icons
- **Shadcn/ui** components

### Backend
- **Express.js** with TypeScript
- **Drizzle ORM** for database management
- **Zod** for validation
- **Vite** for development and building

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions
│   └── index.html
├── server/                # Backend Express application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Data storage layer
│   └── vite.ts           # Vite integration
├── shared/               # Shared types and schemas
│   └── schema.ts         # Database schemas and types
├── components.json       # Shadcn/ui configuration
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd manjunath-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Customization

### Personal Information
Update the following files with your information:

1. **client/index.html** - Update title and meta tags
2. **client/src/components/hero-section.tsx** - Update name, title, and description
3. **client/src/components/about-section.tsx** - Update personal background
4. **client/src/components/experience-section.tsx** - Update work experience
5. **client/src/components/skills-section.tsx** - Update skills and technologies
6. **client/src/components/certifications-section.tsx** - Update certifications
7. **client/src/components/portfolio-section.tsx** - Update projects
8. **client/src/components/contact-section.tsx** - Update contact information

### Styling
- Colors can be customized in `client/src/index.css`
- Component styles use Tailwind CSS classes
- Custom animations and effects are defined in the CSS file

### Images
Replace placeholder images with your own:
- Professional headshot in hero section
- Workspace/setup image in about section
- Project screenshots in portfolio section

## Deployment

### Replit Deployment
1. Click the "Deploy" button in Replit
2. Configure environment variables if needed
3. Your site will be available at `https://your-repl-name.username.replit.app`

### Other Platforms
The application can be deployed to:
- Vercel
- Netlify
- Railway
- Heroku
- AWS/Google Cloud/Azure

## Contact Information

**Manjunath B M**
- Email: bmm0798@gmail.com
- Phone: +91 9945761637
- Location: Kollegal, Chamarajnagar
- LinkedIn: [linkedin.com/in/manjunath-b-m](https://linkedin.com/in/manjunath-b-m)

## License

This project is open source and available under the [MIT License](LICENSE).