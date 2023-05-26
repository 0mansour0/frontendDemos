import { clearFix } from "polished";
import styled from "styled-components";
import {layout, space, color, ColorProps, LayoutProps, SpaceProps } from 'styled-system'

interface Props extends ColorProps, LayoutProps, SpaceProps {
    children: React.ReactNode;
  }

export const NavBarDiv = styled.div<Props>`
    box-sizing: border-box;
    width: min(15%,250px);
    height: 90%;
    border: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    ${clearFix()}
    ${color}
    ${space}
    ${layout}
`