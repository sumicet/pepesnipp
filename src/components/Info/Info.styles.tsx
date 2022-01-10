import styled from 'styled-components';

type InfoProps = {
    margin?: string;
};

export const Info = styled.div<InfoProps>`
    padding: 20px;
    background: linear-gradient(
        160deg,
        ${props => props.theme.color.accentSecondary},
        ${props => props.theme.color.accentTertiary}
    );
    border-radius: 8px;
    margin: ${props => props.margin || '0px'};
`;
