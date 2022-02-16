import { extendTheme } from '@chakra-ui/react';
export const theme = extendTheme({
  styles:{
    global:{
      'html, body':{
        background:'gray.100',
        fontFamily:'Poppins'
      }
    },
  },
  semanticTokens: {
    colors: {
      error: 'red.500',
      primary: {
        default: 'green.600',
        _dark: 'green.400',
      },
      text: {
        default: 'gray.900',
        _dark: 'gray.50',
      },
    },
  },
  colors: {
    gray: {
      900: '#101724',
      800: '#192431',
      700: '#2C3849',
      600: '#3D4A5B',
      500: '#5A6579',
      400: '#8C98A9',
      300: '#C8CFD8',
      200: '#DFE4E9',
      100: '#F0F2F6',
      50: '#FCFDFC',
    },
    green: {
      900: '#00452D',
      800: '#005534',
      700: '#006E40',
      600: '#008D4E',
      500: '#00AE63',
      400: '#00CE7C',
      300: '#49E69F',
      200: '#92F2BF',
      100: '#C7F9DC',
      50: '#E7FDF2',
    },
    red: {
      900: '#74231C',
      800: '#8C1E1C',
      700: '#B3211E',
      600: '#DE2825',
      500: '#F93C38',
      400: '#FF655F',
      300: '#FF9993',
      200: '#FFC7C4',
      100: '#FFE0DF',
      50: '#FFF1F0',
    },
    yellow: {
      900: '#732915',
      800: '#8E3016',
      700: '#B43E1A',
      600: '#E05C1D',
      500: '#FF8527',
      400: '#FFA733',
      300: '#FFC150',
      200: '#FFD985',
      100: '#FFEDC2',
      50: '#FFFAE9',
    },
  },
});