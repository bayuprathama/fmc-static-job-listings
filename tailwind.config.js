/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark-cyan': 'hsl(var(--primary-desaturated-dark-cyan))',
        'light-cyan-bg': 'hsl(var(--light-grayish-cyan-bg))',
        'light-cyan-filter': 'hsl(var(--light-grayish-cyan-filter))',
        'dark-gray-cyan': 'hsl(var( --dark-grayish-cyan))',
        'very-dark-gray-cyan': 'hsl(var(--very-dark-grayish-cyan))',
      },
      backgroundImage: {
        'dekstop-header-bg': "url('/images/bg-header-desktop.svg')",
        'mobile-header-bg': "url('/images/bg-header-mobile.svg')",
      },
      boxShadow: {
        cyan: '0px 10px 15px -2px hsla(180, 29%, 50%, 0.15)',
        filter: '0 20px 25px -5px hsla(180, 29%, 50%, 0.15)',
      },
      fontFamily: {
        leagueSpartan: 'var(--leagueSpartan)',
      },
    },
  },
  plugins: [],
}
