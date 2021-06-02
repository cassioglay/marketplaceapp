import React, { useState } from 'react';
import { View} from 'react-native';

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

	const [products, setProducts] = useState([{
		id:'1',
		title: 'Assinatuira Trimestral',
		image_url: '',
		price:150
	}]);

	return (

		<Container>
			<ProductContainer>
				<ProductList
					data={products}
					keyExtractor={(item) => item.id}
					ListFooterComponent={<View/>}
					ListFooterComponentStyle={{
						height:80
					}}
					renderItem={({item}) => {
						<Product>
							<ProductImage source={{}}/>
							<ProductTitle>{item.title}</ProductTitle>
							<PriceContainer>
								<ProductPrice>{item.price}</ProductPrice>
								<ProductButton onPress={()=>{}}>
									<ProductButtonText>Adicionar</ProductButtonText>
								</ProductButton>
							</PriceContainer>
						</Product>
					}}
				/>
			</ProductContainer>
		</Container>
	)
};

