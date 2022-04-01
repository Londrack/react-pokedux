module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'pixellari': 'Pixellari',
        'classic': 'Pokemon Classic',
        'pixelade': 'Pixelade',
      },
      colors: {
        'poke-purple': {
          100: '#C6BCDE',
          200: '#674D9A'
        },
        'poke-blue': {
          100: '#5FC4E4',
          200: '#60A7DC'
        },
        'poke-grey': '#33363A',
      },
    },
  },
  plugins: [],
}
