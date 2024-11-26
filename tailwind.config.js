module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'marquee': 'marquee 15s linear infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'vertical-marquee-continuous': 'vertical-marquee-continuous 10s linear infinite',
        'letter-reveal': 'letter-reveal 0.5s forwards',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
        'slide-in-left': 'slide-in-left 0.5s ease-out',
        // Modified continuous sliding animations
        'slide-right': 'slideRight 8s linear infinite',
        'slide-left': 'slideLeft 8s linear infinite',
        'gradient-shift': 'gradient-shift 15s ease infinite',
        'particle-float': 'particle-float 10s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'gradient-shift': {
          '0%, 100%': { 
            backgroundPosition: '0% 50%' 
          },
          '50%': { 
            backgroundPosition: '100% 50%' 
          }
        },
        'particle-float': {
          '0%, 100%': { 
            transform: 'translateY(0) rotate(0deg)',
            opacity: '0.7'
          },
          '50%': { 
            transform: 'translateY(-20px) rotate(180deg)',
            opacity: '0.5'
          }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'vertical-marquee-continuous': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        'letter-reveal': {
          '0%': { 
            opacity: 0,
            transform: 'translateY(20px)'
          },
          '50%': {
            opacity: 1,
            transform: 'translateY(0)'
          },
          '100%': { 
            opacity: 1,
            transform: 'translateY(0)'
          }
        },
        slideRight: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'slide-in-right': {
          '0%': {
            transform: 'translateX(100%)',
            opacity: 0
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1
          }
        },
        'slide-in-left': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: 0
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1
          }
        }
      }
    }
  },
  plugins: [],
};