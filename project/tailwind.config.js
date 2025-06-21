/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'h1': ['3.5rem', {
          lineHeight: '1.1',
          letterSpacing: '0.02em',
          fontWeight: '200',
        }],
        'h2': ['2.5rem', {
          lineHeight: '1.2',
          letterSpacing: '0.01em',
          fontWeight: '300',
        }],
      },
      colors: {
        'primary-bg': '#2a2a2a',
        'primary-bg-alt': '#1a1a1a',
        'surface': '#3a3a3a',
        'text-primary': '#ffffff',
        'text-secondary': '#cccccc',
        'text-muted': '#999999',
        'accent-warm': '#d4a574',
        'accent-copper': '#c67e3b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
      },
      boxShadow: {
        'subtle': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.15)',
      },
      spacing: {
        'section-sm': '3rem',
        'section-md': '6rem',
        'section-lg': '8rem',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '700': '700ms',
      },
      animation: {
        'bounce': 'bounce 2s infinite',
        'scroll': 'scroll 20s linear infinite',
      },
      keyframes: {
        scroll: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    // Disable unused features for better performance
    preflight: true,
  }
};
