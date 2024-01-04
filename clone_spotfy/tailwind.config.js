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
        'btn-planos': '#191414',
        'purple-main': '#9C2FEC',
        'green-main': '#1ED760',
        'highlight': '#8313D5',
        'gray-main': '#efefef',
        'blue-main': '#0D72EA',
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
        'lt': '0.6875rem',
      },
    },
  },
  plugins: [],
}

