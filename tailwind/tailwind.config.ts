import type { Config } from 'tailwindcss'
import { colors } from './tailwind.colors'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      ...colors
    },
    fontFamily: {
      main: ['Inter', 'San', 'Poppins', 'sans-serif']
    },
    extend: {
      spacing: {
        7: '26px',
        18: '72px',
        36: '136px',
        40: '144px'
      },
      maxWidth: {
        xl: '1440px'
      },
      lineHeight: {
        '3xl': '86px'
      },
      borderRadius: {
        '3xl': '28px'
      },
      fontSize: {
        '8xl': '84px'
      }
    }
  },
  plugins: []
} satisfies Config
