# Portfolio Setup Guide

## Quick Start

1. **Download and Extract**
   - Download the portfolio files
   - Extract to your desired directory

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development**
   ```bash
   npm run dev
   ```

## File Structure Overview

```
portfolio/
├── client/src/components/
│   ├── navigation.tsx         # Top navigation bar
│   ├── hero-section.tsx       # Main intro section
│   ├── about-section.tsx      # About me section
│   ├── experience-section.tsx # Work experience
│   ├── skills-section.tsx     # Technical skills
│   ├── certifications-section.tsx # Certifications
│   ├── portfolio-section.tsx  # Projects showcase
│   ├── contact-section.tsx    # Contact form
│   └── footer.tsx            # Footer
├── client/src/pages/
│   ├── home.tsx              # Main page layout
│   └── not-found.tsx         # 404 page
├── server/
│   ├── index.ts              # Server entry
│   ├── routes.ts             # API endpoints
│   └── storage.ts            # Data management
└── shared/
    └── schema.ts             # Type definitions
```

## Customization Checklist

### 1. Personal Information
- [ ] Update name in `hero-section.tsx`
- [ ] Update title/role in `hero-section.tsx`
- [ ] Update about text in `about-section.tsx`
- [ ] Update contact info in `contact-section.tsx`
- [ ] Update footer copyright

### 2. Professional Experience
- [ ] Update work history in `experience-section.tsx`
- [ ] Update skills list in `skills-section.tsx`
- [ ] Update certifications in `certifications-section.tsx`

### 3. Projects
- [ ] Update project details in `portfolio-section.tsx`
- [ ] Replace project images with your own
- [ ] Update technology tags

### 4. Images
- [ ] Replace hero section photo
- [ ] Replace about section workspace image
- [ ] Add project screenshots

### 5. Styling (Optional)
- [ ] Update colors in `index.css`
- [ ] Modify animations/effects
- [ ] Adjust responsive breakpoints

### 6. SEO
- [ ] Update meta tags in `index.html`
- [ ] Update page title
- [ ] Update description

## Important Files to Customize

### `client/src/components/hero-section.tsx`
```typescript
// Update these lines:
<h1>Your Name</h1>
<p>Your Professional Title</p>
<p>Your description...</p>
```

### `client/src/components/about-section.tsx`
```typescript
// Update personal info:
<h3>Hello! I'm [Your Name]</h3>
<p>Your background story...</p>
// Update details grid:
Location, Experience, Education, etc.
```

### `client/src/components/contact-section.tsx`
```typescript
// Update contact information:
const contactInfo = [
  { label: "Email", value: "your@email.com" },
  { label: "Phone", value: "+1234567890" },
  { label: "Location", value: "Your City" },
];
```

## Deployment Options

### Replit (Recommended)
1. Upload files to Replit
2. Run `npm install`
3. Click "Deploy" button

### Vercel
1. Connect GitHub repository
2. Auto-deploys on push
3. Custom domain support

### Netlify
1. Drag and drop build folder
2. Or connect GitHub
3. Built-in form handling

## Common Issues

### Port Already in Use
```bash
# Kill process on port 5000
sudo lsof -i :5000
sudo kill -9 [PID]
```

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Check TypeScript errors
npm run type-check
```

## Support

For technical issues or customization help:
- Check console for error messages
- Verify all personal information is updated
- Ensure images are accessible
- Test on different screen sizes

## Performance Tips

1. **Optimize Images**
   - Use WebP format when possible
   - Compress images before uploading
   - Consider lazy loading

2. **SEO**
   - Update all meta tags
   - Add alt text to images
   - Use descriptive headings

3. **Mobile**
   - Test on mobile devices
   - Check touch interactions
   - Verify form usability