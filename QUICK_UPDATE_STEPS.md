# Update Your Repository in 5 Minutes

## Repository: https://github.com/manjunathbm2003/Personal_portfolio

### Step 1: Download Files from Replit
1. In Replit file explorer, press Ctrl+A to select all files
2. Right-click and select "Download"
3. Extract the downloaded zip file

### Step 2: Update GitHub Repository
1. Go to https://github.com/manjunathbm2003/Personal_portfolio
2. Click "Add file" → "Upload files"
3. Drag ALL files from the extracted folder
4. Write commit message: "Update to modern React portfolio"
5. Click "Commit changes"

### Step 3: Deploy on Vercel (Free)
1. Go to vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Select "Personal_portfolio" repository
5. Framework: "Vite"
6. Build Command: `npm run build`
7. Output Directory: `dist/client`
8. Click "Deploy"

Your portfolio will be live at: `yourname.vercel.app`

### Alternative: GitHub Pages
Add this file to your repository as `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/client
```

Your site will be live at: `manjunathbm2003.github.io/Personal_portfolio`