# Upload Your Portfolio to GitHub

## Step 1: Create GitHub Account
1. Go to [github.com](https://github.com)
2. Click "Sign up" (free)
3. Choose username (e.g., manjunathbm, manjunath-engineer)
4. Complete verification

## Step 2: Create New Repository
1. Click "+" icon → "New repository"
2. Repository name: `portfolio` or `manjunath-portfolio`
3. Description: "Professional Electronics Engineer Portfolio"
4. Set to "Public" (required for free deployment)
5. Check "Add a README file"
6. Click "Create repository"

## Step 3: Upload Files

### Method A: Web Interface (Easiest)
1. In your new repository, click "uploading an existing file"
2. Drag and drop ALL these files from Replit:
   - `package.json`
   - `vite.config.ts`
   - `tailwind.config.ts`
   - `tsconfig.json`
   - `components.json`
   - `drizzle.config.ts`
   - `postcss.config.js`
   - `.gitignore`
   - `README.md`
   - Entire `client/` folder
   - Entire `server/` folder
   - Entire `shared/` folder

3. Write commit message: "Initial portfolio upload"
4. Click "Commit changes"

### Method B: Git Commands (Advanced)
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
# Copy all your files here
git add .
git commit -m "Initial portfolio upload"
git push origin main
```

## Step 4: Verify Upload
Check that your repository contains:
- All source files
- Folder structure: client/, server/, shared/
- Configuration files
- README.md

## Ready for Deployment!
Once uploaded, you can deploy to:
- **Vercel**: Connect GitHub → Auto-deploy
- **Netlify**: Connect GitHub → Auto-deploy
- **GitHub Pages**: Enable in repository settings

Your portfolio code will be publicly available and ready for deployment to any platform.