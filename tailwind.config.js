/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
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
        headerBg: '#ADAEAE',      // Light mode header background
        headerSecondaryBg: '#7A8A8A', // Light mode secondary heading color => theme bg
        // Dark mode colors
        darkSecondary: '#1F405B', // Dark mode secondary background
        darkHeading: '#ffffff',   // Dark mode heading color
        darkText: '#e0e0e0',      // Dark mode text color
        darkBorder: '#005866',    // Dark mode border color
        darkHeading: '#EDAE49',    // Dark mode heading color
        darkComponent: '#D1495B', // Dark mode secondary heading color
        darkHeaderBg: '#2A567A',  // Dark mode header background
        bioDark: '#F1E5FF',       // Dark mode bio font color
        timelineColor: "#00798C", // Dark mode timeline color
        ConnectBg: "#EAE4FF",

        iconColor: '#EDAE49', // Icon color
        borderColor: '#D1495B', // Border color
        textColor: '#B3B3B3', // Text color

        iconBorder: '#3b413d', // Icon border color in about me
      },

      backgroundImage: {
        'gradient-secondary-light': 'linear-gradient(to bottom, #e3f5fa, #FFFFFF)', // Light mode secondary background
        'gradient-primary-dark': 'linear-gradient(360deg, #023751 0%, #01283B 22%, #011F2D 40%, #011925 62%, #010E15 84%, #010A0E 100%)', // Dark mode background
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.animated-border': {
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '12px',
        },
        '.animated-border::before': {
          content: '""',
          position: 'absolute',
          inset: '0',
          padding: '1.2px',
          borderRadius: 'inherit',
          pointerEvents: 'none',
          background: 'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)',
          backgroundSize: '200% 200%',
          animation: 'shine-move 5s linear infinite',
          mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
        }
      })
    }
  ]
}