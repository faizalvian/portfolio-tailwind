module.exports = {
  content: ['index.html'],
  // menimpa css tailwind
  theme: { 
    container:{
      center: true,
      padding: '16px',
    },
  // menambah css tailwind
    extend: {
      colors:{
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        'lg': '1240px'
      }
    },
  },
  plugins: [],
}
