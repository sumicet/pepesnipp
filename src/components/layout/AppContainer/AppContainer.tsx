/* eslint-disable jsx-a11y/iframe-has-title */
import { ReactElement } from 'react';
import Text from '../../text/Text/Text';
import * as Styled from './AppContainer.styles';

interface AppContainerProps {
    children: ReactElement;
}

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
    return (
        <Styled.AppContainer>
            <div className='appContainer'>
                <div className='app'>
                    <div className='menu'>
                        <Text className='menu-logo' size={7} color='accentPrimary'>
                            pepesnipp
                        </Text>
                    </div>
                    <div className='content'>{children}</div>
                </div>
            </div>
        </Styled.AppContainer>
    );
};

export default AppContainer;
