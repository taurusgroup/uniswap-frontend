import React from 'react'
import { ThemeProvider as StyledComponentsThemeProvider, createGlobalStyle, css } from 'styled-components'

export * from './components'

const MEDIA_WIDTHS = {
  upToSmall: 600,
  upToMedium: 960,
  upToLarge: 1280
}

const mediaWidthTemplates = Object.keys(MEDIA_WIDTHS).reduce((accumulator, size) => {
  accumulator[size] = (...args) => css`
    @media (max-width: ${MEDIA_WIDTHS[size]}px) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

const mediaHeightTemplates = Object.keys(MEDIA_WIDTHS).reduce((accumulator, size) => {
  accumulator[size] = (...args) => css`
    @media (max-height: ${MEDIA_WIDTHS[size] / (16 / 9)}px) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

const flexColumnNoWrap = css`
  display: flex;
  flex-flow: column nowrap;
`

const flexRowNoWrap = css`
  display: flex;
  flex-flow: row nowrap;
`

const theme = {
  white: '#FFFFFF',
  black: '#000000',
  // grays
  concreteGray: '#FAFAFA',
  mercuryGray: '#31333F',
  silverGray: '#C4C4C4',
  chaliceGray: '#AEAEAE',
  doveGray: '#31333F', // '#737373',
  mineshaftGray: '#2B2B2B',
  // blues
  zumthorBlue: '#EBF4FF',
  malibuBlue: '#5CA2FF',
  royalBlue: '#2F80ED',
  // purples
  wisteriaPurple: '#DC6BE5',
  // reds
  salmonRed: '#FF6871',
  // orange
  pizazzOrange: '#FF8F05',
  // yellows
  warningYellow: '#FFE270',
  // pink
  uniswapPink: '#DC6BE5',
  connectedGreen: '#27AE60',
  // media queries
  mediaWidth: mediaWidthTemplates,
  mediaHeight: mediaHeightTemplates,
  // css snippets
  flexColumnNoWrap,
  flexRowNoWrap,
  // taurus colors
  taurusMain: '#08B3CA',
  taurusGrey: '#31333F'
}

export default function ThemeProvider({ children }) {
  return <StyledComponentsThemeProvider theme={theme}>{children}</StyledComponentsThemeProvider>
}

export const GlobalStyle = createGlobalStyle`
  @import url('https://rsms.me/inter/inter.css');
  html { font-family: 'Inter', sans-serif; }
  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter var', sans-serif; }
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-variant: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-family: Work Sans,sans-serif;
    font-size: 14px;
    font-weight: 300;
  }

  #root {
    ${({ theme }) => theme.flexColumnNoWrap}
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
  }
`
