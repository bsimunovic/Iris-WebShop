module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('images/')",
      }
    },
  },
  plugins: [],
}