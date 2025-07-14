/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#A68184', // 👈 now you can use `bg-primary`
          100: '#EEDDDD',
          500: '#A68184', // main brand color
          900: '#5C3A3A',
        },
        secondary: {
          DEFAULT: '#4F5873',
          100: '#D9DEE9',
          500: '#4F5873',
          900: '#2B3140',
        },
        accent: {
          DEFAULT: '#8C697C',
          100: '#E3D8E1',
          500: '#8C697C',
          900: '#503E4C',
        },
        background: {
          DEFAULT: '#232226',
          light: '#2F2F33',
          dark: '#1B1A1E',
        },
        surface: {
          DEFAULT: '#293040',
        },
        text: {
          light: '#FFFFFF',
          dark: '#1A1A1A',
          muted: '#CCCCCC',
        },
      },
    },
  },
  plugins: [],
};
