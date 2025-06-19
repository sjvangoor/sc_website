import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#001D3D',
        accent: '#FFC300',
      },
    },
  },
  plugins: [],
};
export default config;
