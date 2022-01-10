import styled from 'styled-components';

type CardProps = {};

export const Card = styled.div<CardProps>`
    background: linear-gradient(
        160deg,
        ${props => props.theme.color.cardPrimary},
        ${props => props.theme.color.cardSecondary}
    );
    border-radius: 8px;
    padding: 20px;
    height: 100%;

    .card-text {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
    }
`;
