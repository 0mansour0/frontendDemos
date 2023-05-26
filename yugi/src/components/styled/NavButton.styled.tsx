import styled from "styled-components";
import { fontSize, layout, space, color, ColorProps, LayoutProps, SpaceProps, FontSizeProps } from 'styled-system'

interface Props extends ColorProps, LayoutProps, SpaceProps, FontSizeProps {
    children: React.ReactNode;
  }

export const StyledNavButton = styled.button<Props & {isActive?: string}>`
    box-sizing: border-box;
    font-size: ${props => props.theme.fontSize.small};
    font-weight: ${props => props.theme.fontWeights.bold};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    /* gap:5%; */
    border: 0;
    padding: 0.5em;
    border-radius: 0.3em 0em 0em 0.3em;
    position: relative;
    width: min(90%, 250px);
    height: min(50%, 60px);

    &:hover {
      color: ${props => props.theme.colors.primary};
      background-color: ${props => props.theme.colors.layer};
    }

    /* &:active {
      color: ${props => props.theme.colors.primary};
      background-color: ${props => props.theme.colors.layer};
    } */

    color: ${props => props.isActive === "true" ? 'red' : 'blue'};
    background-color: ${props => props.isActive === "true" ? 'red' : 'blue'};
    
    ${color}
    ${space}
    ${layout}
    ${fontSize}
`