# Harinatha Reddy - Professional Portfolio Website

A modern, responsive portfolio website for Harinatha Reddy showcasing professional expertise in mechanical engineering, IT solutions, and engineering consulting.

## 🌟 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Professional Profile** - Showcase your skills, experience, and projects
- **Interactive Sections**:
  - Hero section with profile image
  - Services showcase
  - About with expertise listing
  - Portfolio/Recent Projects
  - Contact form with social links
- **Modern UI** - Clean, professional design with smooth animations
- **Fast Loading** - Optimized HTML, CSS, and JavaScript

## 📁 Project Structure

```
website/
├── index.html          # Main HTML file
├── styles.css          # Styling and layout
├── script.js           # Interactive features
├── README.md           # This file
└── IMG-20210822-WA0033.jpg  # Profile image
```

---

## 🚀 GitHub Pages Deployment

### Complete Step-by-Step Guide

#### Step 1: Configure Git (First Time Only)

```powershell
git config --global user.name "Harinatha Reddy"
git config --global user.email "harinath.me18@gmail.com"
```

#### Step 2: Navigate to Your Website Folder

```powershell
cd f:\website
```

#### Step 3: Initialize Git Repository

```powershell
git init
```

#### Step 4: Add All Files

```powershell
git add .
```

#### Step 5: Create First Commit

```powershell
git commit -m "Initial commit: Professional portfolio website"
```

#### Step 6: Add Remote Repository

```powershell
git remote add origin https://github.com/harinathme18-wq/JNVSH.github.io.git
```

#### Step 7: Rename Branch to Main

```powershell
git branch -M main
```

#### Step 8: Push to GitHub

```powershell
git push -u origin main
```

**When prompted for password:**
- Use your **GitHub Personal Access Token** instead of your password
- Get it from: GitHub Settings → Developer settings → Personal access tokens
- Create a new token with `repo` scope
- Copy and paste it when prompted

---

### 📋 Quick Command Copy (All at Once)

Copy and paste all commands together in PowerShell:

```powershell
cd f:\website
git init
git add .
git commit -m "Initial commit: Professional portfolio website"
git remote add origin https://github.com/harinathme18-wq/JNVSH.github.io.git
git branch -M main
git push -u origin main
```

---

## ✅ After Push Completes

1. **Wait 2-3 minutes** for GitHub Pages to deploy
2. **Visit your live website**: https://harinathme18-wq.github.io
3. **Your website is now live!** 🎉

---

## 🔄 Future Updates (After Initial Setup)

To push changes to your live website after making edits:

```powershell
cd f:\website
git add .
git commit -m "Update: Describe your changes here"
git push
```

**Example messages:**
```powershell
git commit -m "Update: Add new project to portfolio"
git commit -m "Fix: Update contact information"
git commit -m "Enhance: Improve mobile responsiveness"
```

---

## ✏️ Customization Guide

### Update Your Information

**1. Change Page Title (index.html, line 6)**
```html
<title>Your Name - IT Solutions</title>
```

**2. Update Navigation Brand (index.html, line 14)**
```html
<h1>⚙️ Your Name - MechPro</h1>
```

**3. Update Hero Section (index.html, lines 30-35)**
- Change name
- Update headline
- Modify description

**4. Update About Section (index.html, lines 85-95)**
- Change background info
- Update expertise list
- Modify experience years and project count

**5. Update Contact Info (index.html, lines 148-161)**
- Email: `harinath.me18@gmail.com`
- Phone: `(+91) 7013713419`
- Location: Your location
- Add social media links

**6. Change Profile Image**
- Replace `IMG-20210822-WA0033.jpg` with your image
- Update all `<img src="IMG-20210822-WA0033.jpg">` references

### Customize Styling

Edit `styles.css` to modify:
- **Colors**: Update CSS variables in `:root` section (lines 10-15)
- **Fonts**: Change font-family in `body` section
- **Spacing**: Adjust padding/margin values
- **Hover effects**: Modify transition properties

---

## 📧 Contact Form Setup

The contact form currently displays a confirmation message. To make it fully functional:

### Option 1: Using Netlify Forms (If Using Netlify)
```html
<form name="contact" method="POST" netlify>
```

### Option 2: Using FormSubmit.co (Free)
```html
<form action="https://formsubmit.co/your-email@gmail.com" method="POST">
```

### Option 3: Using Getform
1. Visit [getform.io](https://getform.io)
2. Create a form endpoint
3. Update form action

---

## 🔗 Update Social Media Links

Update these in the Contact section (index.html, lines 161-165):

```html
<div class="social-links">
    <a href="https://www.linkedin.com/in/harinatha-reddy-352b5a248" target="_blank">LinkedIn</a>
    <a href="https://twitter.com/your-handle" target="_blank">Twitter</a>
    <a href="https://github.com/your-username" target="_blank">GitHub</a>
</div>
```

---

## 🛠️ Local Development

### View Locally (Using Python)
```powershell
cd f:\website
python -m http.server 8000
```
Then open: `http://localhost:8000`

### View Locally (Using Node.js)
```powershell
cd f:\website
npx http-server
```

---

## 📱 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- Optimized HTML structure
- Minified CSS and JavaScript
- Lazy-loaded images
- Fast loading times
- Mobile-first responsive design

---

## 🔧 Troubleshooting

### Git Issues

**Error: "Permission denied"**
- Use GitHub Personal Access Token instead of password
- Go to: GitHub Settings → Developer settings → Personal access tokens
- Create new token with `repo` scope
- Use token when prompted for password

**Error: "fatal: remote origin already exists"**
```powershell
git remote remove origin
git remote add origin https://github.com/harinathme18-wq/JNVSH.github.io.git
```

**Error: "branch rename failed"**
```powershell
git branch -m main
```

### Website Issues

**Images not showing:**
- Verify image file exists in the same folder as index.html
- Check image filename spelling (case-sensitive on some servers)

**Styles not updating:**
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+F5)
- Wait 5 minutes for GitHub Pages to rebuild

**Check current config:**
```powershell
git config --global --list
```

---

## 📄 License

This portfolio website template is free to use and customize for personal or professional purposes.

---

## 🎯 Quick Checklist

- [ ] Git installed and configured
- [ ] Repository created on GitHub
- [ ] Local git repo initialized
- [ ] Files committed and pushed to GitHub
- [ ] GitHub Pages enabled in settings
- [ ] Custom domain removed (or DNS configured)
- [ ] Website live at: https://harinathme18-wq.github.io
- [ ] Information updated with personal details
- [ ] Social links configured
- [ ] Contact form setup (optional)

---

## 📞 Next Steps

1. **Push to GitHub** using commands above
2. **Wait 2-3 minutes** for deployment
3. **Visit** https://harinathme18-wq.github.io
4. **Share** your portfolio URL
5. **Add to** resume/LinkedIn
6. **Keep updated** with fresh projects and skills

---

**Created**: February 2026  
**Author**: Harinatha Reddy  
**GitHub**: https://github.com/harinathme18-wq  
**Website**: https://harinathme18-wq.github.io
