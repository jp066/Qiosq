/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        ink: '#111827',
        graphite: '#0B0B4F',
        qiosq: '#6D28FF',
        qiosqDark: '#4C1DDB',
        qiosqHot: '#8B3DFF',
        frost: 'rgba(255,255,255,0.08)',
        line: 'rgba(255,255,255,0.13)',
        surface: '#F5F5F7',
        border: '#E7E7EC'
      },
      boxShadow: {
        glow: '0 0 60px rgba(196, 122, 50, 0.14)',
        panel: '0 28px 90px rgba(0,0,0,0.38)'
      },
      backgroundImage: {
        'premium-radial': 'radial-gradient(circle at 12% 0%, rgba(196, 122, 50, 0.16), transparent 30rem), radial-gradient(circle at 88% 12%, rgba(97, 132, 152, 0.14), transparent 28rem), linear-gradient(180deg, #090a0a 0%, #111315 46%, #090a0a 100%)'
      }
    }
  },
  plugins: []
};
