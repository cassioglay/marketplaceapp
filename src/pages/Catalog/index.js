import React, { useState } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FloatingCart from '../../components/FloatingCart';

import formatValue from '../../utils/formatValue';

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
			"price": 15.00
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
						height: 100
					}}
					renderItem={({ item }) =>
						<Product>
							<ProductImage source={{ uri: item.image_url }} />
							<ProductTitle>{item.title}</ProductTitle>
							<PriceContainer>
								<ProductPrice>{formatValue(item.price)}</ProductPrice>
								<ProductButton onPress={() => { }}>
									<ProductButtonText>Adicionar</ProductButtonText>
									<FeatherIcon size={30} name="plus-circle" color="#d1d7e9" />
								</ProductButton>
							</PriceContainer>
						</Product>
					}
				/>
			</ProductContainer>
			<FloatingCart />
		</Container>
	)
};

