import React, { useState } from 'react';
import { Text, View} from 'react-native';

import {
	Container,
	ProductContainer,
	ProductImage,
	ProductList,
	Product,
	ProductTitle,
	PriceContainer,
	ProductPrice,
	ProductButton,
	ProductButtonText
} from './styles';


export default function App() {

	const [products, setProducts] = useState([
		{
			"id": "1",
			"title": "Assinatura Trimestral",
			"image_url":
			  "https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png",
			"price": 150
		},
		{
			"id": "2",
			"title": "Assinatura Trimestral",
			"image_url":
			  "https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png",
			"price": 150
		},
		{
			"id": "3",
			"title": "Assinatura Trimestral",
			"image_url":
			  "https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png",
			"price": 150
		}
	]);

	return (

		<Container>
			<ProductContainer>
		 		<ProductList
					data={products}
					keyExtractor={(item) => item.id}
					ListFooterComponentStyle={{
                        height:100
                    }}
					renderItem={({item}) => 
					<Product>
                            <ProductImage source={{ uri: item.image_url}}/>
                            <ProductTitle>{item.title}</ProductTitle>
                            <PriceContainer>
                                <ProductPrice>{item.price}</ProductPrice>
                                <ProductButton onPress={()=>{}}>
                                    <ProductButtonText>Adicionar</ProductButtonText>
                                </ProductButton>
                            </PriceContainer>
                        </Product>
					}
				/>
			</ProductContainer>
		</Container>
	)
};

