import styled from 'styled-components';
import { TextProps } from './Text';

export const Text = styled.p<TextProps>`
    font-size: ${props => props.theme.font.size[props.size || 3]};
    font-weight: ${props => props.theme.font.weight[props.weight || 'regular']};
    color: ${props => props.theme.color[props.color || 'textPrimary80']};
    margin: ${props => props.margin || '0px'};
`;
