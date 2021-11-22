import { createStitches, ScaleValue } from '@stitches/react'

const pixelToRem = (value: number) => `${value / 16}rem`

const space = {
  4: pixelToRem(4),
  8: pixelToRem(8),
  12: pixelToRem(12),
  13: pixelToRem(13),
  14: pixelToRem(14),
  16: pixelToRem(16),
  18: pixelToRem(18),
  20: pixelToRem(20),
  24: pixelToRem(24),
  28: pixelToRem(28),
  32: pixelToRem(32),
  36: pixelToRem(36),
  40: pixelToRem(40),
  44: pixelToRem(44),
  48: pixelToRem(48),
  54: pixelToRem(54),
  64: pixelToRem(64),
  72: pixelToRem(72),
  84: pixelToRem(84),
  96: pixelToRem(96),
  100: pixelToRem(100),
  112: pixelToRem(112),
}

export const { styled, globalCss, createTheme, getCssText } = createStitches({
  prefix: 'default',
  theme: {
    colors: {
      white: '#FFFFFF',
      gray100: '#F9F9F9',
      gray200: '#EAEAEA',
      gray600: '#616161',
      gray900: '#2C2C2C',
      orange: '#FF6F01',
      orangeLight: '#FB9247',

      background: '$white',
      text: '$gray500',
    },
    fontWeights: {
      light: 300,
      normal: 400,
      bold: 700,
    },
    space,
    sizes: space,
    fontSizes: space,
    lineHeights: {
      normal: 1,
      spaced: 1.7,
    },
    radii: {
      xs: '2px',
      sm: '4px',
      md: '8px',
    },
  },
  media: {
    tablet: '(min-width: 480px)',
    desktop: '(min-width: 1200px)',
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },
  utils: {
    px: (value: ScaleValue<'space'> | string) => ({
      paddingRight: value,
      paddingLeft: value,
    }),
    py: (value: ScaleValue<'space'> | string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    mx: (value: ScaleValue<'space'> | string) => ({
      marginRight: value,
      marginLeft: value,
    }),
    my: (value: ScaleValue<'space'> | string) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
})

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$background',
    color: '$text',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '$normal',
  },

  button: {
    color: '$text',
    fontFamily: 'Roboto, sans-serif',
  },

  'input, textarea, button, select, a': {
    '-webkit-tap-highlight-color': 'transparent',
  },

  a: {
    color: '$text',
    textDecoration: 'none',
  },

  ul: {
    listStyle: 'none',
  },
})
