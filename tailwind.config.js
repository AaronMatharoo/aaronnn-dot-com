// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'arrow-ping': 'ping 3s ease-in-out infinite',
      },
   
  },
  plugins: [],
}
}

