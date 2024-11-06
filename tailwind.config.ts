import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        coffee: {
          DEFAULT: '#BF9D7D',
          120: '#7B6651',
          100: '#BF9D7D',
          80: '#D0B79F',
          60: '#E1D1C2',
          40: '#F1EAE4',
          10: '#F7F2EE',
        },
        success: {
          DEFAULT: '#52DD7E',
          120: '#299F65',
          100: '#52DD7E',
          20: '#BCFBBD',
          10: '#E8FEE7',
        },
        info: {
          DEFAULT: '#3BADEF',
          120: '#1D66AC',
          100: '#3BADEF',
          20: '#B1EFFD',
          10: '#E6FBFE',
        },
        alert: {
          DEFAULT: '#DA3E51',
          120: '#C22538',
          100: '#DA3E51',
          20: '#F5CCD1',
          10: '#FDECEF',
        },
        neutral: {
          bg: '#140F0A',
          80: '#4B4B4B',
          60: '#909090',
          40: '#ECECEC',
          10: '#F9F9F9',
        },
      },
      fontSize: {
        jumbo: '100px',
      },
    },
  },
};
