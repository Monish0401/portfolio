# 🌐 Portfolio Website

This is my personal **Portfolio Website**, built with:

- ⚛️ [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)  
- ⚡ [Vite](https://vitejs.dev/) (with React SWC plugin)  
- 🎨 [TailwindCSS](https://tailwindcss.com/)  
- 🎭 [Radix UI](https://www.radix-ui.com/), [Lucide Icons](https://lucide.dev/), and other UI libraries  

Deployed automatically to **GitHub Pages** via **GitHub Actions** 🚀  

---

## 📂 Project Structure

```
├── public/              # Static assets
├── src/                 # Main source code
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page-level components
│   ├── styles/          # Global styles
│   └── main.tsx         # App entry point
├── index.html           # Root HTML
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # TailwindCSS config
├── package.json         # Dependencies & scripts
└── README.md
```

---

## ⚙️ Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run the development server
```bash
npm run dev
```
Now open [http://localhost:3000](http://localhost:3000) in your browser.

### 4️⃣ Build for production
```bash
npm run build
```
The optimized production build will be inside the `build/` folder.

### 5️⃣ Preview production build locally
```bash
npm run preview
```

---

## 🚀 Deployment

This project uses **GitHub Actions** for CI/CD.  
On every push to the `main` branch:

1. Install dependencies (`npm ci`)  
2. Build the project (`npm run build`)  
3. Upload the `build/` folder as an artifact  
4. Deploy to **GitHub Pages**  

The workflow file is located at:  
```
.github/workflows/deploy.yml
```

🔗 Live site: [https://monish0401.github.io/portfolio/](https://monish0401.github.io/portfolio/)

---

## 🛠️ Available Scripts

- `npm run dev` → Start local dev server  
- `npm run build` → Build for production  
- `npm run preview` → Preview production build  

---

## 👨‍💻 Author

Built with ❤️ by **[Monish C](https://github.com/monish0401)**
