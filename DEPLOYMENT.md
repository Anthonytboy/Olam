# Deployment Guide for Olam Project

## 🚀 Quick Start

This project is configured for deployment on **Netlify**, **GitHub Pages**, and **Render**.

---

## 📝 Prerequisites

1. Push code to GitHub:
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

---

## **Option 1: Netlify Deployment** ✅ RECOMMENDED

### Steps:

1. Go to [netlify.com](https://netlify.com)
2. Click **"New site from Git"**
3. Connect your GitHub repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy**

✅ The `netlify.toml` and `public/_redirects` are already configured!

---

## **Option 2: GitHub Pages Deployment**

### Steps:

1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**

✅ The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically deploy on every push to main!

**Note**: If your repo name is NOT your username, the GitHub Actions workflow automatically handles the base path.

---

## **Option 3: Render Deployment**

### Steps:

1. Go to [render.com](https://render.com)
2. Click **New** → **Web Service**
3. Connect your GitHub repository
4. Configure:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run preview`
   - **Publish Directory**: `dist`
5. Click **Deploy**

✅ Your app will auto-deploy on every push!

---

## 🔧 Environment Variables

For different deployment platforms, the base URL is automatically handled:

| Platform                | Base URL        | Notes                       |
| ----------------------- | --------------- | --------------------------- |
| Netlify                 | `/`             | Production domain           |
| GitHub Pages (User/Org) | `/`             | `username.github.io`        |
| GitHub Pages (Repo)     | `/{repo-name}/` | Auto-handled by workflow    |
| Render                  | `/`             | Custom domain or Render URL |

---

## ✅ Security Checklist Before Deploy

- ✅ No hardcoded API keys
- ✅ No credit card details in code
- ✅ Environment variables properly configured
- ✅ All components tested locally
- ✅ Build successful (`npm run build`)

---

## 🧪 Testing Locally

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

Open `http://localhost:4173` to verify everything works.

---

## 📊 Troubleshooting

| Issue                      | Solution                                                                             |
| -------------------------- | ------------------------------------------------------------------------------------ |
| **Blank page**             | Check browser console for errors. Verify assets are loading in DevTools Network tab. |
| **Assets not loading**     | Base URL might be wrong. Check `.env` file and vite.config.js.                       |
| **404 on page reload**     | `_redirects` file might not be deployed. Verify in Netlify Settings.                 |
| **GitHub Pages shows 404** | Ensure GitHub Actions workflow ran successfully. Check Actions tab for errors.       |

---

## 📞 Need Help?

- Check the [Vite docs](https://vitejs.dev/guide/static-deploy.html)
- Review [Netlify docs](https://docs.netlify.com/)
- Check [GitHub Pages docs](https://docs.github.com/en/pages)
