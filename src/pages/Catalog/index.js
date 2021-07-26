import React, { useState, useEffect } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FloatingCart from '../../components/FloatingCart';

import formatValue from '../../utils/formatValue';
import api from '../../services/api';

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


export default function Catalog() {

	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function loadProducts() {
			const { data } = await api.get('/products');

			setProducts(data);
		}
		loadProducts();

	}, []);

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

