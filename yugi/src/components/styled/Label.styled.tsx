import styled from "styled-components";
import { layout, space, color, ColorProps, LayoutProps, SpaceProps } from 'styled-system'

interface Props extends ColorProps, LayoutProps, SpaceProps {
    children: React.ReactNode;
  }

export const StyledLabel = styled.label<Props>`
    box-sizing: border-box;
    font-size: ${props => props.theme.fontSize.meduim};
    font-family: ${props => props.theme.fonts[0]};
    font-weight: ${props => props.theme.fontWeights.bold};
    align-items: center;
    position: relative;

    ${color}
    ${space}
    ${layout}
`