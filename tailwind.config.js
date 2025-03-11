/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,css}'],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      mono: [
        'Monaco',
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace'
      ]
    },
    container: {
      center: true,
      screens: {
        sm: '50rem'
      }
    },
    variants: {
      extend: {
        padding: ['ltr', 'rtl'],
        margin: ['ltr', 'rtl'],
        textAlign: ['ltr', 'rtl']
      }
    },
    extend: {
      colors: {
        slate: {
          850: 'hsl(222deg 47% 16%)'
        },
        primary: '#5fc3e7',
        heading: 'rgb(33, 33, 33)' // Thêm màu heading vào theme
      }
    }
  },
  plugins: []
};
