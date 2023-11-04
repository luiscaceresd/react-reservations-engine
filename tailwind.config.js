/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: '#495E57', // primary dark green
        primaryYellow: '#F4CE14', // primary bright yellow
        secondaryOrange: '#EE9972', // secondary warm orange
        secondaryPeach: '#FBDABB', // secondary soft peach
        secondaryGray: '#EDEFEE', // secondary light grey
        secondaryBlack: '#333333' // secondary dark grey/black
      },
      fontFamily: {
        'markazi': ['"Markazi Text"', 'serif'], // Use 'serif' as a fallback
        'karla': ['Karla', 'sans-serif'] // Use 'sans-serif' as a fallback
      },
      fontSize: {
        // Assuming you're using 'rem' units; 1rem = 16px by default
        'display-lg': ['4rem', { lineHeight: '1' }], // 64pt display title, adjust line-height as needed
        'subtitle': ['2.5rem', { lineHeight: '1' }], // 40pt subtitle, adjust line-height as needed
        'lead': ['1.125rem', { lineHeight: '1.5' }], // 18pt lead text
        'section-xl': ['1.25rem', { lineHeight: '1', letterSpacing: 'wider', fontWeight: 'extrabold' }], // 20pt section title
        'section-lg': ['1rem', { lineHeight: '1', fontWeight: 'extrabold' }], // 16pt section categories
        'card-title': ['1.125rem', { lineHeight: '1.5', fontWeight: 'bold' }], // 18pt card title
        'paragraph': ['1rem', { lineHeight: '1.5' }], // 16pt paragraph
        'highlight': ['1rem', { lineHeight: '1.5', fontWeight: 'medium' }] // 16pt highlight text
      }
    },
  },
  plugins: [],
}