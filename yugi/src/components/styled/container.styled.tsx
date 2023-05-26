import styled from "styled-components";
import { layout, space, color, ColorProps, LayoutProps, SpaceProps } from 'styled-system'
import { clearFix } from 'polished';

interface Props extends ColorProps, LayoutProps, SpaceProps {
    children: React.ReactNode;
  }

export const Container = styled.form<Props>`
    box-sizing: border-box;
    font-size: ${props => props.theme.fontSize.small};
    border: 0;
    border-radius: 1em;
    position: relative;
    box-shadow: 2px 2px 3px 3px #9393932c;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: min(50%, 450px);
    height: min(60vh, 500px);

    ${clearFix()}
    ${color}
    ${space}
    ${layout}
`