# Frontend_eschool

## 1. Create React Project with Vite

```bash
npm create vite@latest
```

## 2. Choose best config

React with JavaScript + SWC (maybe we need SWC in next days)

## 3. Install Tailwindcss with postcss

```bash
> npm install -D tailwindcss postcss autoprefixer
> npx tailwindcss init -p 
```

## 4. ****Configure your template paths****

<<<<<<< HEAD
Add the paths to all of your template files in your **`tailwind.config.js`** file.
=======
Add the paths to all of your template files in your **`tailwind.config.js`** file.
>>>>>>> BadisBranch

```jsx
content: ["./index.html", "./src/**/*.{js,jsx}"],
```

## 5. ****Add the Tailwind directives to your CSS (index.css)****

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
