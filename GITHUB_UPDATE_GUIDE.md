# Update Your GitHub Repository

## Repository: https://github.com/manjunathbm2003/Personal_portfolio

### Method 1: Replace All Files (Recommended)

1. **Go to your repository:**
   - Visit https://github.com/manjunathbm2003/Personal_portfolio
   - Click on "Code" tab

2. **Delete existing files:**
   - Select all current files
   - Click "Delete" for each file
   - Or create a new commit to clear everything

3. **Upload new portfolio files:**
   - Click "uploading an existing file"
   - Upload ALL these files from Replit:

**Essential Files to Upload:**
```
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── components.json
├── drizzle.config.ts
├── postcss.config.js
├── .gitignore
├── README.md
├── client/
│   ├── index.html
│   ├── src/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── index.css
│   │   ├── components/ (9 main + 54 UI components)
│   │   ├── hooks/ (2 files)
│   │   ├── lib/ (2 files)
│   │   └── pages/ (2 files)
├── server/
│   ├── index.ts
│   ├── routes.ts
│   ├── storage.ts
│   └── vite.ts
└── shared/
    └── schema.ts
```

4. **Commit changes:**
   - Message: "Update to modern React/TypeScript portfolio"
   - Click "Commit changes"

### Method 2: Git Commands (Advanced)

```bash
# Clone your repository
git clone https://github.com/manjunathbm2003/Personal_portfolio.git
cd Personal_portfolio

# Remove old files (keep .git folder)
rm -rf * .*
# Don't delete .git folder

# Copy all files from this Replit project
# Then commit
git add .
git commit -m "Complete portfolio update with React/TypeScript"
git push origin main
```

### Method 3: Download and Replace

1. **Download from Replit:**
   - Select all files in file explorer
   - Right-click → Download
   - Extract the zip file

2. **Upload to GitHub:**
   - Go to your repository
   - Delete existing files
   - Drag and drop the new files

## After Upload - Enable Deployment

### Option A: Vercel (Recommended)
1. Go to vercel.com
2. Sign in with GitHub
3. Import your repository
4. Configure:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist/client`
5. Deploy

### Option B: GitHub Pages
1. In your repository settings
2. Go to "Pages" section
3. Select source: "GitHub Actions"
4. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Portfolio
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/client
```

Your portfolio will be live at: `https://manjunathbm2003.github.io/Personal_portfolio`

## What You're Getting

- Modern React/TypeScript application
- Professional electronics engineer branding
- Responsive design for all devices
- Working contact form
- Your complete work experience and projects
- Ready for immediate deployment
- SEO optimized