import styled from "styled-components";
import { layout, space, color, ColorProps, LayoutProps, SpaceProps } from 'styled-system'

interface Props extends ColorProps, LayoutProps, SpaceProps {
    children: React.ReactNode;
  }

export const StyledInput = styled.input<Props>`
    box-sizing: border-box;
    font-size: ${props => props.theme.fontSize.small};
    border: 0;
    padding: 0.5em;
    border-radius: 0.2em;
    align-items: center;
    position: relative;
    width: min(70%, 450px);
    box-shadow: 2px 2px 3px 3px #9393932c;

    ${color}
    ${space}
    ${layout}
`