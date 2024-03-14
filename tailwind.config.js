/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '6xl': ['60px', '80px'],

      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#00B4DB",
        'coral-red': "#b05adb",
        'slate-gray': "#6D6D6D",
        'pale-blue': "#F5F6FF",
        'white-400': "#00B4DB",
        'robotic-blue': "#4E6AFF", // Robotics bluish color
        'robotic-light-blue': "#A9BCFF", // Lighter shade of robotics blue
        'robotic-dark-blue': "#324D7E", // Darker shade of robotics blue
        'gradient1': 'bg-gradient-to-br from-robotic-blue to-robotic-light-blue', // Example gradient 1
        'gradient2': 'bg-gradient-to-r from-coral-red to-pale-blue' // Example gradient 2
    },
    
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('../src/assets/images/bgg.png')",
        'card': "url('../src/assets/images/bgg1')",
        'bg1':"url('/src/assets/images/electbg.jpeg')",
        'bg2':"url('/src/assets/images/wavebg.jpeg')",
        'bg3':"url('/src/assets/images/electbg.png')",
        'bg4':"url('/src/assets/images/bgl.jpg')",



      },
      screens: {
        "wide": "1440px"
      },
      gradientColors: theme => ({
        'robotic-blue': theme('colors.robotic-blue'),
        'robotic-light-blue': theme('colors.robotic-light-blue'),
        // Add more gradient colors as needed
      }),
      gradientVariants: ['responsive', 'hover'],
    },
  },
  plugins: [
   
  ],
}