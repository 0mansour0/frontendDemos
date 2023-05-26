import { clearFix } from "polished";
import styled from "styled-components";
import { layout, space, color, ColorProps, LayoutProps, SpaceProps } from 'styled-system'

interface Props extends ColorProps, LayoutProps, SpaceProps {
    children: React.ReactNode;
  }

export const StyledHeader = styled.header<Props>`
    box-sizing: border-box;
    width: 100%;
    height: min(10%,250px);
    border: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    ${clearFix()}
    ${color}
    ${space}
    ${layout}
`