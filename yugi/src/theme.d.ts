import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            base:string,
            bg: string
            hover: string
            layer: string
            primary: string
            text: string
            secondary: string
        },
        fonts: string[],
        fontSize: {
            small: string
            meduim: string
            large: string
        },
        fontWeights: {
            light: string
            normal: string
            bold: string
        }
    }
}