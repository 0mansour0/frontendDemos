import styled from "styled-components";
import { fontSize, layout, space, color, ColorProps, LayoutProps, SpaceProps, FontSizeProps } from 'styled-system'

interface Props extends ColorProps, LayoutProps, SpaceProps, FontSizeProps {
    children: React.ReactNode;
  }

export const StyledButton = styled.button<Props>`
    box-sizing: border-box;
    font-size: ${props => props.theme.fontSize.small};
    border: 0;
    padding: 0.5em;
    border-radius: 0.3em;
    position: relative;
    width: min(50%, 130px);

    &:hover {
      opacity: 85%;
    }
    ${color}
    ${space}
    ${layout}
    ${fontSize}
`