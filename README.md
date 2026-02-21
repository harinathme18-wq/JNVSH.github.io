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
├── netlify.toml        # Netlify configuration
├── README.md           # This file
└── IMG-20210822-WA0033.jpg  # Profile image
```

## 🚀 Deployment Instructions

### Option 1: Deploy on Netlify (Recommended - Easiest)

**Step 1: Prepare Files**
- You have a `netlify.toml` file already configured
- All files are ready to deploy

**Step 2: Deploy to Netlify**
1. Visit [netlify.com](https://netlify.com)
2. Sign up or log in with your email/GitHub account
3. Click **"Add new site"** → **"Deploy manually"**
4. **Drag and drop** the website folder (containing all files) into the Netlify area
5. Your site will be published immediately!

**Step 3: Get Your URL**
- Netlify will assign you a free URL like: `your-site-name.netlify.app`
- You can customize the subdomain in Site Settings
- Your site is now live and shareable!

### Option 2: Deploy on GitHub Pages

**Prerequisites**: Git must be installed on your system

**Step 1: Create GitHub Repository**
1. Go to [github.com](https://github.com)
2. Create a new repository named `yourusername.github.io`
3. Initialize Git and push your files

**Step 2: Enable GitHub Pages**
1. Go to your repository Settings
2. Scroll to "Pages" section
3. Select `main` branch as source
4. Your site will be live at `yourusername.github.io`

### Option 3: Deploy on Vercel

1. Visit [vercel.com](https://vercel.com)
2. Sign up and create a new project
3. Import the project folder
4. Deploy automatically
5. Get your live URL

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

## ✏️ Customization Guide

### Update Your Information

**1. Change Title (index.html, line 6)**
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

## 📧 Contact Form

The contact form currently displays a confirmation message. To make it functional:

1. **Using Netlify Forms** (Recommended):
   - Add `netlify` attribute to form tag
   - Submissions will appear in your Netlify dashboard

2. **Using FormSubmit.co** (Free service):
   ```html
   <form action="https://formsubmit.co/your-email@gmail.com" method="POST">
   ```

3. **Using Getform**:
   - Visit [getform.io](https://getform.io)
   - Create a form endpoint
   - Update form action

## 🔗 Social Media Links

Update these in the Contact section (index.html, lines 161-165):

```html
<a href="https://www.linkedin.com/in/your-profile" target="_blank">LinkedIn</a>
<a href="https://twitter.com/your-handle" target="_blank">Twitter</a>
<a href="https://github.com/your-username" target="_blank">GitHub</a>
```

## 📱 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## ⚡ Performance

- Optimized HTML structure
- Minified CSS and JavaScript
- Lazy-loaded images
- Fast loading times
- Mobile-first responsive design

## 📄 License

This portfolio website template is free to use and customize for personal or professional purposes.

## 📞 Support

For issues or questions:
1. Check file permissions
2. Ensure all files are in the same directory
3. Clear browser cache if styles don't update
4. Test in different browsers

## 🎯 Next Steps

1. **Deploy Now**:
   - Visit [netlify.com](https://netlify.com)
   - Drag and drop your website folder
   - Get your live URL

2. **Customize**:
   - Update your information
   - Add your actual social links
   - Replace images

3. **Share**:
   - Share your portfolio URL
   - Add to resume/CV
   - Post on social media

---

**Created**: February 2026
**Author**: Harinatha Reddy
**Website**: Portfolio Website for Professional Services
