/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D4D6D7',       // Light mode background
        heading: '#333333',       // Light mode heading color
        border: '#cccccc',        // Light mode border color
        text: '#111111',          // Light mode text color
        accent: '#ff6347',        // Light mode accent color
        HeaderBg: '#ADAEAE',      // Light mode header background
        HeaderSecondaryBg: '#7A8A8A', // Light mode secondary heading color => theme bg
        // Dark mode colors
        darkSecondary: '#1F405B', // Dark mode secondary background
        darkHeading: '#ffffff',   // Dark mode heading color
        darkText: '#e0e0e0',      // Dark mode text color
        darkBorder: '#005866',    // Dark mode border color
        darkHeading: '#EDAE49',    // Dark mode heading color
        darkComponent: '#D1495B', // Dark mode secondary heading color
        darkHeaderBg: '#2A567A',  // Dark mode header background
        bioDark: '#F1E5FF',       // Dark mode bio font color

        iconColor:'#EDAE49', // Icon color
        borderColor: '#D1495B', // Border color

        backgroundImage: {
          'gradient-secondary-light': 'linear-gradient(to bottom, #A9ADAE, #FFFFFF)', // Light mode secondary background
          'gradient-primary-dark': 'linear-gradient(90deg, #023751 0%, #01283B 22%, #011F2D 40%, #011925 62%, #010E15 84%, #010A0E 100%)', // Dark mode background

          'frontendTag': 'linear-gradient(to right, #87632A, #EDAE49)', // Frontend tag color
        },
      }
    },
  },
  plugins: [],
}