import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container, Title } from './styles';

const Header = () => {
    return (
        <Container>
            <Title><Icon size={30} name="shopping-bag" color="#C0392B"/> MarketPlace</Title>
        </Container>
    )
}

export default Header;