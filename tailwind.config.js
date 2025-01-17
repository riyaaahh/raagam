/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        capriola: ['Capriola', 'sans-serif'], // Fallback to sans-serif if Capriola is unavailable
      },
      colors: {
        'shark': {
          '50': '#F5F5F5',
          '100': '#E8E8E8',
          '200': '#C9C9C9',
          '300': '#A8A8A8',
          '400': '#666666',
          '500': '#242424',
          '600': '#211E1E',
          '700': '#1A1313',
          '800': '#140C0C',
          '900': '#0F0707',
          '950': '#0A0303',
        },
        'woodsmoke': {
    '50': '#F5F5F5', 
    '100': '#E8E8E8', 
    '200': '#C7C7C7', 
    '300': '#A3A3A3', 
    '400': '#5E5E5E', 
    '500': '#1a1a1a', 
    '600': '#171515', 
    '700': '#120D0D', 
    '800': '#0F0909', 
    '900': '#0A0505', 
    '950': '#080202'
},
'scarlet': {
    '50': '#FFF9F2', 
    '100': '#FCEFE3', 
    '200': '#FCD8BD', 
    '300': '#FAB996', 
    '400': '#F56C49', 
    '500': '#f00f00', 
    '600': '#D90E00', 
    '700': '#B30C00', 
    '800': '#8F0700', 
    '900': '#6B0500', 
    '950': '#450300'
},
'old-brick': {
    '50': '#FAF0F5', 
    '100': '#F5E1EA', 
    '200': '#E3B6C7', 
    '300': '#D48EA4', 
    '400': '#B34D5E', 
    '500': '#921b1d', 
    '600': '#821517', 
    '700': '#6E0E10', 
    '800': '#570A0B', 
    '900': '#420506', 
    '950': '#2B0203'
},
'thunder': {
    '50': '#F5F2F4', 
    '100': '#EBE6E9', 
    '200': '#CCC0C7', 
    '300': '#AD9CA5', 
    '400': '#6E5B63', 
    '500': '#312529', 
    '600': '#2B1D22', 
    '700': '#241419', 
    '800': '#1C0D11', 
    '900': '#17080B', 
    '950': '#0F0306'
},
'bunker': {
    '50': '#F2F4F5', 
    '100': '#E3E6E8', 
    '200': '#BDC2C7', 
    '300': '#979EA6', 
    '400': '#555A63', 
    '500': '#191b20', 
    '600': '#15181F', 
    '700': '#0F111A', 
    '800': '#0A0C14', 
    '900': '#05070F', 
    '950': '#02040A'
},
'bunker2': {
    '50': '#EDF0F2', 
    '100': '#DFE4E8', 
    '200': '#AFBAC4', 
    '300': '#8693A3', 
    '400': '#3F485C', 
    '500': '#0c0e16', 
    '600': '#0A0C14', 
    '700': '#070912', 
    '800': '#04060D', 
    '900': '#03040A', 
    '950': '#010208'
},
'mine-shaft': {
    '50': '#F2F4F5', 
    '100': '#E8EAEB', 
    '200': '#C6C9CC', 
    '300': '#A6AAAD', 
    '400': '#6A6E73', 
    '500': '#303236', 
    '600': '#272A30', 
    '700': '#1B1F29', 
    '800': '#121621', 
    '900': '#090C17', 
    '950': '#04060F'
},
'teak': {
    '50': '#FCFBF7', 
    '100': '#F7F5ED', 
    '200': '#F0EAD5', 
    '300': '#E6DABC', 
    '400': '#D1BB90', 
    '500': '#bc9d6a', 
    '600': '#AB8755', 
    '700': '#8C663B', 
    '800': '#704B26', 
    '900': '#543115', 
    '950': '#361B09'
},
'cape-palliser': {
    '50': '#FAF8F2', 
    '100': '#F5F1E6', 
    '200': '#E6DAC1', 
    '300': '#D6C3A1', 
    '400': '#B89667', 
    '500': '#996938', 
    '600': '#8A5A2D', 
    '700': '#734420', 
    '800': '#5C3114', 
    '900': '#45210C', 
    '950': '#2B1105'
},
'perfume': {
    '50': '#FEFCFF', 
    '100': '#FEFAFF', 
    '200': '#F8EDFC', 
    '300': '#F1E1FA', 
    '400': '#E6CDF7', 
    '500': '#d4b6f2', 
    '600': '#B795DB', 
    '700': '#8865B5', 
    '800': '#614191', 
    '900': '#40256E', 
    '950': '#211047'
},
'pomegranate': {
    '50': '#FFFBF5', 
    '100': '#FFF5E8', 
    '200': '#FFE4C7', 
    '300': '#FCCDA4', 
    '400': '#FC9862', 
    '500': '#fb5421', 
    '600': '#E0461B', 
    '700': '#BA3413', 
    '800': '#96250C', 
    '900': '#701807', 
    '950': '#470D03'
},
'shark': {
    '50': '#F2F4F5', 
    '100': '#E6E9EB', 
    '200': '#C2C7CC', 
    '300': '#9BA2AB', 
    '400': '#5D626E', 
    '500': '#24262e', 
    '600': '#1D1F29', 
    '700': '#131621', 
    '800': '#0D101C', 
    '900': '#070914', 
    '950': '#03040D'
},
'laser-lemon': {
    '50': '#FFFFF7', 
    '100': '#FFFFF0', 
    '200': '#FEFFD9', 
    '300': '#FEFFBF', 
    '400': '#FBFF91', 
    '500': '#faff60', 
    '600': '#D9E64E', 
    '700': '#ABBF36', 
    '800': '#7E9923', 
    '900': '#567314', 
    '950': '#314A08'
},
      },
    },
  },

  
  plugins: [],
}