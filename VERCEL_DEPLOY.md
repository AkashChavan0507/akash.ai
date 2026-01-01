# Deploy to Vercel - Step by Step Guide

## 🚀 Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push Your Code to GitHub

1. **Initialize Git (if not already done):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio website"
   ```

2. **Create a GitHub repository:**
   - Go to https://github.com/new
   - Create a new repository (e.g., `akash-portfolio`)
   - **Don't** initialize with README, .gitignore, or license

3. **Push your code:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/akash-portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy on Vercel

1. **Go to Vercel:**
   - Visit https://vercel.com
   - Sign up or log in (you can use your GitHub account)

2. **Import Project:**
   - Click **"Add New..."** → **"Project"**
   - Click **"Import Git Repository"**
   - Select your GitHub repository (`akash-portfolio`)
   - Click **"Import"**

3. **Configure Project:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `.next` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)

4. **Environment Variables (if needed):**
   - Usually not required for this project
   - Click **"Deploy"**

5. **Wait for Deployment:**
   - Vercel will build and deploy your site
   - Takes about 1-2 minutes

6. **Access Your Site:**
   - Once deployed, you'll get a URL like: `https://akash-portfolio.vercel.app`
   - You can also add a custom domain later

---

## 🖥️ Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

This will open a browser window for authentication.

### Step 3: Deploy

From your project directory:

```bash
vercel
```

Or for production deployment:

```bash
vercel --prod
```

### Step 4: Follow the Prompts

- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No (for first time)
- **Project name?** → `akash-portfolio` (or your choice)
- **Directory?** → `./` (press Enter)
- **Override settings?** → No (press Enter)

### Step 5: Access Your Site

After deployment, you'll get a URL like:
```
https://akash-portfolio-xxxxx.vercel.app
```

---

## 📝 Important Notes

### Build Settings (Auto-detected by Vercel)

Vercel automatically detects Next.js and uses:
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`
- **Node Version:** 20.x (automatically selected)

### Custom Domain (Optional)

1. Go to your project on Vercel dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain (e.g., `akashchavan.com`)
4. Follow DNS configuration instructions

### Environment Variables

If you need environment variables later:
1. Go to **Settings** → **Environment Variables**
2. Add your variables
3. Redeploy

### Automatic Deployments

- **Every push to `main` branch** → Production deployment
- **Pull requests** → Preview deployments
- **Automatic HTTPS** → Enabled by default

---

## ✅ Pre-Deployment Checklist

- [x] Code is pushed to GitHub
- [x] `package.json` has correct scripts
- [x] `next.config.js` is configured
- [x] Resume PDF is in `public/` folder
- [x] Build works locally (`npm run build`)
- [x] No environment variables needed (for this project)

---

## 🔄 Updating Your Site

After making changes:

1. **Commit and push:**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```

2. **Vercel automatically deploys:**
   - New commits trigger automatic deployments
   - Preview URLs for pull requests
   - Production URL updates automatically

---

## 🐛 Troubleshooting

### Build Fails

1. **Check build logs in Vercel dashboard**
2. **Test locally first:**
   ```bash
   npm run build
   ```

2. **Common issues:**
   - Missing dependencies → Check `package.json`
   - TypeScript errors → Fix in local environment
   - Missing files → Ensure all files are committed

### Resume PDF Not Loading

- Ensure `Akash_Resume.pdf` is in `public/` folder
- Check the path in `data/contact.json` matches

### 404 Errors

- Check that all routes are properly configured
- Ensure `app/` directory structure is correct

---

## 📊 Deployment Status

After deployment, you can:
- View deployment history
- See build logs
- Rollback to previous versions
- Set up custom domains
- Configure environment variables

---

## 🎉 Success!

Once deployed, your portfolio will be live at:
```
https://your-project-name.vercel.app
```

Share this URL with potential employers and clients!

