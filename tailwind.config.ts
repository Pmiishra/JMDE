import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        jmde: {
          blue: '#153E75',
          orange: '#F97316',
          bg: '#FFFFFF',
          sectionLight: '#F8FAFC',
          text: '#1E293B',
          border: '#E2E8F0',
          success: '#16A34A',
        }
      },
      borderRadius: {
        'premium': '14px', // Standardized between 12px and 16px
      },
      boxShadow: {
        'premium': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'premium-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
export default config