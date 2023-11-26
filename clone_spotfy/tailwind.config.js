/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '14': '3.5rem',
        '125px': '125px' //quando tem px no nome, é pq é um valor fixo
      },
      colors: {
        'hoverspt': '#18D760',
        'purple-main': '#bd27bc',
        'green-main': '#1ED760',
        'purple-secundary': '#e032ad',
        'gradient-primary': '#b023c2',
        'gradient-secundary': '#921ad0',
        'gradient-terciary': '#620ce6'
      },
      backgroundImage: theme => ({
        'spotfy-theme': "url('https://www.scdn.co/i/free/bubbles-dktp.svg'), linear-gradient(-45deg, rgb(108, 14, 224) -5%, rgb(240, 55, 166))",
      }),
      backgroundSize: {
        '175%': '175%',
        '195%': '195%',
      },
      backgroundPosition: {
        'banner': '46% 4%',
        'banner-mobile': 'top 25% center',
      },
      fontSize: {
        '9xl': '9rem',
      },
    },
  },
  plugins: [],
}

