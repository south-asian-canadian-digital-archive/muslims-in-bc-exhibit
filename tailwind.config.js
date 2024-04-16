/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'martel': ['Martel', 'serif'],
        'source-serif-4': ['"Source Serif 4"', 'serif'],
      },
      colors: {
        "primary-blue": "#05668D",
        "secondar-teal": "#028090",
        "secondary-yellow": "#E3E7AF",
        "tertiary-green": "#00A896",
        "primary-black": "#222222"
      },
    },
  },
  plugins: [],
}

