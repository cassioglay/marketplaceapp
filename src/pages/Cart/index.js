import React, { useState, useMemo } from 'react';
import { View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import FeatherIcon from 'react-native-vector-icons/Feather';

import formatValue from '../../utils/formatValue';

import EmptyCart from '../../components/EmptyCart';

import {
    Container,
    ProductContainer,
    ProductList,
    Product,
    ProductImage,
    ProductTitleContainer,
    ProductTitle,
    ProductPriceContainer,
    TotalContainer,
    ProductPrice,
    ProductQuantity,
    ActionContainer,
    ActionButton,
    TotalProducsContainer,
    TotalProductText,
    SubTotalValue,
    ProductSinglePrice
} from './style';

export default function Cart() {

    const dispatch = useDispatch();

    const products = useSelector(({cart}) => cart);

    const cartSize = useMemo(() => {

        return products.length || 0;

    }, [products]);

    const cartTotal = useMemo(() => {

        const cartAmount = products.reduce((accumulate, product) => {
            const totalPrice = accumulate + (product.price * product.amount);

            return totalPrice;

        }, 0);

        return formatValue(cartAmount);
    }, [products])

    return (
        <Container>
            <ProductContainer>
                <ProductList
                    data={products}
                    keyExtractor={(item) => item.id}
                    ListFooterComponent={<View />}
                    ListFooterComponentStyle={{
                        height: 80
                    }}
                    ListEmptyComponent={<EmptyCart/>}
                    renderItem={({ item }) => (
                        <Product>
                            <ProductImage source={{ uri: item.image_url }} />
                            <ProductTitleContainer>
                                <ProductTitle>{item.title}</ProductTitle>
                                <ProductPriceContainer>
                                    <ProductSinglePrice>
                                        {formatValue(item.price)}
                                    </ProductSinglePrice>

                                    <TotalContainer>
                                        <ProductQuantity>{item.amount} x </ProductQuantity>

                                        <ProductPrice>
                                            {formatValue(item.price * item.amount)}
                                        </ProductPrice>

                                    </TotalContainer>
                                </ProductPriceContainer>
                            </ProductTitleContainer>
                            <ActionContainer>
                                <ActionButton>
                                    <FeatherIcon name="plus" color="#E83F5B" size={16} />
                                </ActionButton>
                                <ActionButton>
                                    <FeatherIcon name="minus" color="#E83F5B" size={16} />
                                </ActionButton>
                            </ActionContainer>
                        </Product>
                    )}
                />
            </ProductContainer>
            <TotalProducsContainer>
                <FeatherIcon name="shopping-cart" color="#fff" size={24} />
                <TotalProductText> {cartSize} {cartSize === 1 ? 'item' : 'itens'} </TotalProductText>
                <SubTotalValue> {cartTotal} </SubTotalValue>
            </TotalProducsContainer>
        </Container>
    )
}
