// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       
        200: '#101214', 
        500: "#FFC929",
        100: "#272416"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Define Poppins font family
      },
    },
  },
  plugins: [],
}
