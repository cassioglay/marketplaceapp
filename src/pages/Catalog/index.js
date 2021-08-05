import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FloatingCart from '../../components/FloatingCart';

import formatValue from '../../utils/formatValue';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

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

	const dispatch = useDispatch();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function loadProducts() {
			const { data } = await api.get('/products');

			setProducts(data);
		}
		loadProducts();

	}, []);

	function handleAddToCart(id){
		dispatch(CartActions.addToCartRequest(id));
	}

	return (

		<Container>
			<ProductContainer>
				<ProductList
					data={products}
					keyExtractor={(item) => item.id}
					ListFooterComponentStyle={{
						height: 100
					}}
					ListFooterComponent={<View />}
					renderItem={({ item }) =>
						<Product>
							<ProductImage source={{ uri: item.image_url }} />
							<ProductTitle>{item.title}</ProductTitle>
							<PriceContainer>
								<ProductPrice>{formatValue(item.price)}</ProductPrice>
								<ProductButton onPress={() => handleAddToCart(item.id)}>
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

