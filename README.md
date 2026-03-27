# Muqeet Khan — Portfolio (Next.js)

Premium personal portfolio website built with **Next.js + Tailwind + Framer Motion**.

## 1) Requirements
- Install **Node.js LTS (18+ recommended)**  
- Install **VS Code**

## 2) Setup (copy/paste)
```bash
# 1) go into the folder
cd muqeet-portfolio

# 2) install dependencies
npm install

# 3) run locally
npm run dev
```

Open: http://localhost:3000

## 3) Main commands
- **Start local dev server:** `npm run dev`
- **Build production:** `npm run build`
- **Run production locally:** `npm run start`

## 4) Where to edit things
- Your name, title, contact: `src/data/site.ts`
- Your projects list: `src/data/projects.ts`
- Homepage layout: `src/app/page.tsx`
- Global styling: `src/app/globals.css`
- Sections/components: `src/components/*`
- Profile image: `public/profile.jpg`

## 5) Replace your profile image
Replace `public/profile.jpg` with your own image (same filename).

## 6) Deploy (Beginner options)

### Option A: Vercel (recommended)
1. Create a GitHub account (if you don’t have one)
2. Push this project to GitHub
3. Sign in to **Vercel** and click **New Project**
4. Import your GitHub repo
5. Click **Deploy**

Vercel auto-detects Next.js. No config needed.

### Option B: Netlify
Netlify supports Next.js too:
- Build command: `npm run build`
- Publish directory: `.next`

### Option C: Shared hosting / cPanel
Next.js needs a Node server. If your hosting supports Node apps:
1. Upload project
2. `npm install`
3. `npm run build`
4. Run `npm run start` as the Node app

## 7) Domain connection (simple)
- Buy a domain from any registrar.
- In Vercel/Netlify: add your domain in project settings.
- Update DNS records (they provide exact values).
- Wait for DNS propagation (usually minutes to hours).

---

If you want: I can add **real backend form submission** (so the contact form doesn't rely on mailto).
