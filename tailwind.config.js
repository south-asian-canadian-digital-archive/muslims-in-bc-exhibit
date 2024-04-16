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
      fontSize: {
        "h1": "5.61rem",
        "h2": "4.209rem",
        "h3": "3.157rem",
        "h4": "2.369rem",
        "h5": "1.777rem",
        "h6": "1.333rem",
        "p": "1rem",
        'small': '.75rem',
      },
    },
  },
  plugins: [],
}

