# Download Instructions for Manjunath's Portfolio

## Option 1: Download from Replit (Recommended)

1. **In Replit Console, run:**
   ```bash
   zip -r portfolio-code.zip . -x "node_modules/*" ".git/*" "*.log" ".replit" ".env*" "package-lock.json"
   ```

2. **Download the zip file:**
   - The zip file will appear in your Replit file explorer
   - Right-click on `portfolio-code.zip` and select "Download"

## Option 2: Manual File Copy

Copy these files to your local machine in the same directory structure:

### Essential Files:
- `package.json` - Dependencies and scripts
- `vite.config.ts` - Build configuration
- `tailwind.config.ts` - Styling configuration
- `tsconfig.json` - TypeScript configuration
- `components.json` - UI components config
- `drizzle.config.ts` - Database configuration
- `postcss.config.js` - PostCSS configuration

### Client Files (create `client/` folder):
- `client/index.html`
- `client/src/main.tsx`
- `client/src/App.tsx`
- `client/src/index.css`
- `client/src/pages/home.tsx`
- `client/src/pages/not-found.tsx`
- All component files from `client/src/components/`
- All files from `client/src/lib/` and `client/src/hooks/`

### Server Files (create `server/` folder):
- `server/index.ts`
- `server/routes.ts`
- `server/storage.ts`
- `server/vite.ts`

### Shared Files (create `shared/` folder):
- `shared/schema.ts`

## Option 3: Complete File List

Here's what you need to recreate the portfolio:

### Root Directory Files:
1. package.json
2. vite.config.ts
3. tailwind.config.ts
4. tsconfig.json
5. components.json
6. drizzle.config.ts
7. postcss.config.js
8. README.md
9. SETUP_GUIDE.md

### Component Files (29 files):
All files in `client/src/components/` including:
- navigation.tsx
- hero-section.tsx
- about-section.tsx
- experience-section.tsx
- skills-section.tsx
- certifications-section.tsx
- portfolio-section.tsx
- contact-section.tsx
- footer.tsx
- All UI components (24 files)

## Quick Setup After Download:

1. **Extract files** to your desired location
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start development server:**
   ```bash
   npm run dev
   ```
4. **Open browser** to `http://localhost:5000`

## File Size Information:
- Total source files: ~50 files
- Package.json dependencies: ~80 packages
- Estimated download size: ~2-3 MB (excluding node_modules)
- Full project with dependencies: ~200-300 MB

Your portfolio is now ready to download and deploy!