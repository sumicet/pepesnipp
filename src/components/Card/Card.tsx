import Text from '../text/Text/Text';
import * as Styled from './Card.styles';

interface CardProps {
    title: string;
    text: string;
    key?: any;
}

const Card: React.FC<CardProps> = ({ title, text, key }) => {
    return (
        <Styled.Card key={key}>
            <Text weight='semiBold' margin='0 0 10px 0'>
                {title}
            </Text>
            <Text className='card-text'>{text}</Text>
        </Styled.Card>
    );
};

export default Card;
