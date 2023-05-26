import { clearFix } from "polished";
import styled from "styled-components";
import { layout, space, color, ColorProps, LayoutProps, SpaceProps } from 'styled-system'

interface Props extends ColorProps, LayoutProps, SpaceProps {
    children: React.ReactNode;
  }

export const Main = styled.div<Props>`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${clearFix()}
    ${color}
    ${space}
    ${layout}
`