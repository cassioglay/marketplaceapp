import React from 'react';
import { useNavigation } from '@react-navigation/native';

import FeatherIcon from 'react-native-vector-icons/Feather';

import {
    Container,
    CartPricing,
    CartdButton,
    CartButtonText,
    CartTotalPrice
} from './style';

export default function FloatingCart() {

    const navigation = useNavigation();

    return (
        <Container>
            <CartdButton onPress={() => navigation.navigate("Cart")}>
                <FeatherIcon name="shopping-cart" size={24} color="#f3f9ff" />
                <CartButtonText> 2 itens</CartButtonText>

                <CartPricing>
                    <CartTotalPrice>R$ 200,00</CartTotalPrice>
                </CartPricing>

                <FeatherIcon name="chevron-right" size={24} color="#f3f9ff" />
            </CartdButton>
        </Container>
    )
}