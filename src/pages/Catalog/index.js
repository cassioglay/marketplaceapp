import React from 'react';

import {
	StyleSheet,
	Text,
	View
} from 'react-native';

const App = () => {

	return (

		<>
			<View style={styles.container}>
				<Text style={styles.text}>Catalog</Text>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontSize: 30,
		fontWeight: 'bold',
	}
});

export default App;