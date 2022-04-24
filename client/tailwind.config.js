module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    minWidth: {
      '1/2': '50%',
    },
    extend: {
      animation: {
        fadein: 'fadein ease-in 200ms 1',
        fadeout: 'fadeout ease-out 200ms 1',
        'gradient-x':'gradient-x 2s ease infinite',
        'gradient-y':'gradient-y 2s ease infinite',
        'gradient-xy':'gradient-xy 2s ease infinite',
      },
      'keyframes': {
        fadein: {
          '0%, 50%': {
            transform: 'scale(0)'
          },
          '100%': {
            transform: 'scaleY(1)'
          }
        },
        fadeout: {
          '0%, 50%': {
            transform: 'scaleY(1)'
          },
          '100%': {
            transform: 'scaleY(0)'
          }
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size':'400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size':'200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size':'200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size':'200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size':'400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size':'200% 200%',
            'background-position': 'right center'
          }
        }
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        sadBlue: '#262637',
        textWhite: '#f3f3fb',
        blueyGrey: '#f3f3fb',
        blandGrey: '#9494a3',
        grey: '#8a94a4',
        airbnbRed: '#ff5a5f',
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
      },
      spacing: {
        px: '1px',
        '0': '0',
        '1/5': '0.2rem',
        '2/5': '0.4rem',
        '3/5': '0.6rem',
        '4/5': '0.8rem',
        '0.5': '0.125rem',
        '1': '0.25rem',
        '1.5': '0.375rem',
        '2': '0.5rem',
        '2.5': '0.625rem',
        '3': '0.75rem',
        '3.5': '0.875rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '11': '2.75rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '52': '13rem',
        '56': '14rem',
        '60': '15rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
