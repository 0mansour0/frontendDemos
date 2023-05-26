import { ThemeProvider } from 'styled-components'

const mainTheme = {
    colors: {
        base: '#fff',
        bg: '#F5F6F1',
        hover: '#BCDFD3',
        layer: '#F2F3EE',
        primary: '#EB6250',
        text: '#7C8391',
        secondary: '#2B3E63'
    },
    fonts: ['Arial'],
    fontSize: {
        small: '1rem',
        meduim: '1.5rem',
        large: '3rem',
    },
    fontWeights: {
        light: 100,
        normal: 300,
        bold: 700,
    }
}

export default function Theme({ children }) {
  return <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
}
