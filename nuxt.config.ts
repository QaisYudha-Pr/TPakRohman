import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
   app: {
    head: {
      title: 'Projects',
      link: [
        { rel: 'icon', type: 'image/png/jpg', href: '/Zesty.jpg' }
      ]
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});