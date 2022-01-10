import { Color, FontSize, FontWeight } from '../../../theme/default';
import * as Styled from './Text.styles';

export interface TextProps {
    children: any;
    size?: FontSize;
    weight?: FontWeight;
    color?: Color;
    className?: string;
    margin?: string;
}

const Text: React.FC<TextProps> = props => {
    return <Styled.Text {...props} />;
};

export default Text;
