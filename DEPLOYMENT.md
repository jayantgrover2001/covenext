# Deploy Covenext Website via GitHub.com (No Terminal Required)

This guide shows you how to deploy your website using only GitHub.com's web interface - no command line needed!

---

## Step 1: Create a New Repository on GitHub

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **+** icon in the top right corner
3. Click **New repository**
4. Fill in the details:
   - **Repository name**: `covenext`
   - **Description**: "Covenext agency website"
   - **Public** (so GitHub Pages works for free)
   - ❌ **Don't** check "Add a README file"
   - ❌ **Don't** add .gitignore or license (we have our own)
5. Click **Create repository**

---

## Step 2: Upload Your Website Files

You'll see an empty repository. Click **uploading an existing file**.

### Upload These Files and Folders:

**Root Files:**
- `index.html`
- `about.html`
- `work.html`
- `project.html`
- `services.html`
- `service.html`
- `contact.html`
- `blog.html`
- `blog-post.html`
- `faqs.html`
- `privacy.html`
- `terms.html`
- `package.json`
- `vite.config.js`
- `.gitignore`

**Folders (drag entire folders):**
- `styles/` folder (contains main.css)
- `scripts/` folder (contains main.js and data.js)
- `.github/` folder (contains workflows/deploy.yml)

### How to Upload:

1. **Drag and drop** all files from your project folder into the upload area
2. Or click **choose your files** and select multiple files
3. Scroll down and click **Commit changes**
4. In the commit message, write: "Initial commit - Covenext website"
5. Click **Commit changes**

> **Note:** You may need to upload in batches if there are too many files. Upload root HTML files first, then folders.

---

## Step 3: Enable GitHub Pages

1. In your repository, click **Settings** (top menu)
2. Click **Pages** in the left sidebar
3. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions**
4. The page will update - that's it!

---

## Step 4: Wait for Deployment

1. Click the **Actions** tab at the top of your repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 1-2 minutes)
4. When it shows a green checkmark ✅, your site is live!

**Your website URL will be:**
```
https://YOUR-GITHUB-USERNAME.github.io/covenext/
```

Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username.

---

## Step 5: Connect Your Custom Domain (Optional)

If you own a domain like `covenext.com`:

### On GitHub:

1. Go to **Settings** → **Pages**
2. Under **Custom domain**, type your domain: `covenext.com` or `www.covenext.com`
3. Click **Save**
4. ✅ Check **Enforce HTTPS** (after DNS is configured)

### On Your Domain Registrar:

Go to your domain provider (GoDaddy, Namecheap, Hostinger, etc.) and add these DNS records:

#### For Root Domain (covenext.com):

Add **4 A Records**:
```
Type: A
Name: @ (or leave blank)
Value: 185.199.108.153

Type: A
Name: @ (or leave blank)
Value: 185.199.109.153

Type: A
Name: @ (or leave blank)
Value: 185.199.110.153

Type: A
Name: @ (or leave blank)
Value: 185.199.111.153
```

Add **1 CNAME Record** for www:
```
Type: CNAME
Name: www
Value: YOUR-GITHUB-USERNAME.github.io
```

#### For Subdomain Only (www.covenext.com):

Add **1 CNAME Record**:
```
Type: CNAME
Name: www
Value: YOUR-GITHUB-USERNAME.github.io
```

### Add CNAME File to Repository:

1. In your GitHub repository, click **Add file** → **Create new file**
2. Name it: `public/CNAME` (this creates a folder called public with a file called CNAME)
3. In the file content, type your domain: `covenext.com` (or whatever your domain is)
4. Click **Commit changes**

**Wait 24-48 hours** for DNS to propagate worldwide. You can check at [whatsmydns.net](https://www.whatsmydns.net/)

---

## Step 6: Update Your Website in the Future

When you want to make changes:

### Option 1: Edit Files Directly on GitHub

1. Navigate to the file (e.g., `index.html`)
2. Click the **pencil icon** (✏️) to edit
3. Make your changes
4. Click **Commit changes**
5. GitHub will automatically rebuild and deploy!

### Option 2: Upload New Files

1. Click **Add file** → **Upload files**
2. Drag updated files
3. Click **Commit changes**
4. Site will auto-update in 1-2 minutes

---

## Troubleshooting

### ❌ "Deploy to GitHub Pages" workflow failed?

1. Go to **Actions** tab
2. Click the failed workflow
3. Check error messages
4. Usually it's a missing file - make sure all files are uploaded

### ❌ Site not loading at github.io URL?

1. Check **Settings** → **Pages** - make sure it says "Your site is live at..."
2. Wait a few more minutes
3. Try clearing browser cache or use incognito mode

### ❌ Custom domain not working?

1. Check DNS records are correct in your domain registrar
2. Wait 24-48 hours for DNS propagation
3. In GitHub Settings → Pages, remove and re-add the custom domain
4. Make sure CNAME file exists in your repository

### ❌ CSS/Images not loading?

1. Check that `vite.config.js` is uploaded correctly
2. Make sure all folders (`styles/` and `scripts/`) are uploaded
3. Clear browser cache

---

## Quick Checklist

- [ ] Created GitHub repository
- [ ] Uploaded all HTML files
- [ ] Uploaded `vite.config.js`, `package.json`, `.gitignore`
- [ ] Uploaded `styles/` folder
- [ ] Uploaded `scripts/` folder  
- [ ] Uploaded `.github/workflows/` folder
- [ ] Enabled GitHub Pages (GitHub Actions)
- [ ] Waited for deployment to complete
- [ ] Tested site at `username.github.io/covenext`
- [ ] (Optional) Added custom domain in Settings
- [ ] (Optional) Configured DNS records
- [ ] (Optional) Created `public/CNAME` file

---

## 🎉 That's It!

Your website is now live and will automatically update whenever you make changes through GitHub's web interface!

**No terminal, no Git commands needed!**
