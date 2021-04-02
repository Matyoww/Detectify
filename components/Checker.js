import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, Item, Title, Input, Body, Left, Right, Button, Icon, Text} from 'native-base';

export default function RoundedTextboxExample(){
	return (
	<Container>

			{/*HEADER*/}

			<Header noLeft>
				<Left>
					<Button transparent>
						<Icon name="arrow-back" />
					</Button>
				</Left>
				<Body>
					<Title>Checker</Title>
				</Body>
				<Right>
					<Button transparent>
						<Text>Cancel</Text>
					</Button>
				</Right>
			</Header>

			{/*END OF HEADER*/}

			<Content>
				<View style={styles.middle}>
					<Text>Enter the article below:</Text>
				</View>
				<Item rounded>
					
					<Input placeholder='Rounded Textbox'/>
				</Item>
			</Content>

		</Container>
	);
}

const styles = StyleSheet.create({
    red: {
        color: 'red',
    },
    
    blue: {
        color: 'blue',
	},
	middle: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'blue',
		borderWidth: 5,
		borderColor: 'black',
		margin: 20,
		padding: 20,
	},
});