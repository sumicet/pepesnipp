import styled from 'styled-components';

type AppContainerProps = {};

export const AppContainer = styled.div<AppContainerProps>`
    background: linear-gradient(
        160deg,
        ${props => props.theme.color.backgroundPrimary},
        ${props => props.theme.color.backgroundSecondary}
    );
    display: flex;
    flex: 1;
    justify-content: center;

    /* default font settings */
    font-family: 'Red Hat Display', sans-serif;
    color: ${props => props.theme.color.textPrimary80};

    .app {
        max-width: 1400px;
        width: 100%;

        .menu {
            padding: 40px 0;
            .menu-logo {
                font-weight: 900;
            }
        }
    }
`;
