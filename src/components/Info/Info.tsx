import Text from '../text/Text/Text';
import * as Styled from './Info.styles';

interface InfoProps {
    children: any;
    margin?: string;
}

const Info: React.FC<InfoProps> = ({ children, margin }) => {
    return (
        <Styled.Info margin={margin}>
            <Text>{children}</Text>
        </Styled.Info>
    );
};

export default Info;
