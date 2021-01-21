import React, { Component } from 'react';
import { Container, Header, Content, Item, Title, Input, Body, Left, Right, Button, Icon, Text} from 'native-base';
export default class RoundedTextboxExample extends Component {
  render() {
    return (
      <Container>
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
        <Content>
          <Item rounded>
            <Input placeholder='Rounded Textbox'/>
          </Item>
        </Content>
      </Container>
    );
  }
}