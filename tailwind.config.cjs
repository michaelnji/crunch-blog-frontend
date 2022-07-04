/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.svelte', './src/**/*.css'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cabin', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],

  daisyui: {
    themes: [
      {
        light: {
          primary: '#6366f1',

          secondary: '#818cf8',

          accent: '#37CDBE',

          neutral: '#3D4451',

          'base-100': '#FFFFFF',

          info: '#3ABFF8',

          success: '#36D399',

          warning: '#FBBD23',

          error: '#F87272'
        },
        dark: {
          primary: '#6366f1',

          secondary: '#818cf8',

          accent: '#37CDBE',

          neutral: '#e5e7eb',

          'base-100': '#374151',

          info: '#3ABFF8',

          success: '#36D399',

          warning: '#FBBD23',

          error: '#F87272'
        }
      }
    ]
  }
};
