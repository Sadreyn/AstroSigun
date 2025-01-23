import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // Tarayıcı veya işletim sistemi tercihlerine göre dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Lato",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        serif: ["Montserrat", "serif"],
        cursive: ["Indie Flower", "cursive"],
      },
      colors: {
        primary: {
          light: '#2a118c', // Koyu ve derin lacivert tonu
          DEFAULT: '#2a118c', // Aynı renk hem light hem dark modda
        },
        secondary: {
          light: '#BEC8D5', // Soğuk gri mavi tonları, daha açık ve yumuşak bir ton
          dark: '#4A6272', // Derin gri-yeşil, geceyi yansıtan tonlar
        },
        accent: {
          light: '#F5F8FF', // Yıldız ışığı gibi, çok açık mavi-beyaz tonları
          dark: '#D1D8E0', // Soğuk gümüşümsü, geceyi ve ışığı çağrıştıran bir ton
        },
        background: {
          light: '#F0F4F8', // Açık mavi, gökyüzü ve hafif bulutları simüle eden bir ton
          dark: '#2a118c', // Derin lacivert, gece gökyüzü rengi
        },
        text: {
          light: '#E3E8F3', // Lacivert, okunabilirlik için derin ton
          dark: '#E3E8F3', // Açık mavi beyaz, gece modunda yumuşak okuma
        },
        highlight: {
          light: '#6B7C9B', // Mavi-gri tonları, gökyüzündeki bulutlar gibi
          dark: '#548dba', // Derin mavi gri tonları, gökyüzünün karanlık yönü
        },

      },
    },
  },
  plugins: [],
} satisfies Config;
