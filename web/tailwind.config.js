/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        16: '1.6rem',
        10: '1rem'
      },
      fontFamily: {
        SourceNormal: 'SourceHanSans-Normal',
        SourceRegular: 'SourceHanSans-Regular',
        SourceMedium: 'SourceHanSans-Medium',
        SourceHeavy: 'SourceHanSans-Heavy',
        SourceBold: 'SourceHanSans-Bold',
        TiroDevanagariMarathi: 'TiroDevanagariMarathi'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        333: '#333',
        premikey: '#F5F5F5',
        seconds: '#F3B80A',
        thirt: '#1473E6',
        for:"#2ABA51",
        five: '#CBD2D9',
        gray1: '#D1D1D1',
        green1: '#22A52B',
        radio: '#004BB1',
        border:'#98A6B5',
        error: '#D60808',
        placeholder: "#CDD6DD",
        url: "#0975C9",
        star: '#F3B80C',
        cancel: '#E4E4E4',
        red: "#FF0000",
        yelloww:"#FFB400",
        grey2: '#707070',
        red2: '#EC2C2C',
        grey3: '#F0F0F0',
        red3: '#ED4141',
        blue1:'#1F73E6',
        orange1: '#FF9655',
        green2: '#4EB577'
      },
      boxShadow: {
        search: '0rem .3rem .6rem #00000029;',
        premikey: '.1rem .2rem .8rem #00000029',
        md_seconds: '0rem .3rem .3rem #00000016'
      }
    },
    animation: {
      sniper: ' animloader 0.3s 0.3s linear infinite alternate',
      sniper1: ' animloader 0.3s 0.45s linear infinite alternate',
      sniper2: ' animloader 0.3s 0s linear infinite alternate',
    },
    keyframes: {
      animloader: {
        '0%': { height: '48px' },
        '100%': { height: '4px' },
      },
    }
  },
  plugins: [],
};
