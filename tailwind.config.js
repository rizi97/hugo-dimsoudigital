module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'light-gray': 'rgba(255, 255, 255, 0.7)',
      },
      margin: {
        '-5px': '-5px',
      },
      width: {
        '66%': '66.6%',
      },
      fontSize: {
        sm: ["14px", "18px"],
        base: ["16px", "24px"],
        lg: ["18px", "28px"],
        xl: ["24px", "32px"],
      },
      container: {
        padding: {
          DEFAULT: '20px',
        },

        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1368px', // Set maxWidth for xl breakpoint
        },
      },
      lineHeight: {
        '120': '120px',
        '91px': '91px',
        '62px': '62.4px',
        '50px': '50px',
        '41px': '41px',
        '30px': '30px',
        '28px': '28.8px',
        '23px': '23.8px',
        '21px': '21.6px',
        '19px': '19px',
      },
    },
  },
  plugins: [],
}
