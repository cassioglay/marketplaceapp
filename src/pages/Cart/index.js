import React, { useState } from 'react';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import formatValue from '../../utils/formatValue';

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

    const [products, setProducts] = useState([
        {
            "id": "1",
            "title": "Assinatura Trimestral",
            "image_url":
                "https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png",
            "quantity": 3,
            "price": 150
        },
        {
            "id": "2",
            "title": "Assinatura Trimestral",
            "image_url":
                "https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png",
            "quantity": 1,
            "price": 150
        }
    ]);

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
                                        <ProductQuantity>{item.quantity} x </ProductQuantity>

                                        <ProductPrice>
                                            {formatValue(item.price * item.quantity)}
                                        </ProductPrice>

                                    </TotalContainer>
                                </ProductPriceContainer>        
                            </ProductTitleContainer>
                            <ActionContainer>
                                <ActionButton>
                                    <FeatherIcon name="plus" color="#E83F5B" size={16}/>
                                </ActionButton>
                                <ActionButton>
                                    <FeatherIcon name="minus" color="#E83F5B" size={16}/>
                                </ActionButton>
                            </ActionContainer>
                        </Product>
                    )}
                />

            </ProductContainer>
        </Container>
    )
}
