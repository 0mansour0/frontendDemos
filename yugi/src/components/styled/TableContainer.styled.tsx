import styled from "styled-components";
import { layout, space, color, ColorProps, LayoutProps, SpaceProps } from 'styled-system'
import { clearFix } from 'polished';

interface Props extends ColorProps, LayoutProps, SpaceProps {
    children: React.ReactNode;
  }

export const TableContainer = styled.form<Props>`
    box-sizing: border-box;
    border: 0;
    border-radius: 0.3em 0em 0em 0.3em;
    position: relative;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 98%;
    height: 85%;
    ${clearFix()}
    ${color}
    ${space}
    ${layout}
`