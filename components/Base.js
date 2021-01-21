import { Container, Header, Footer, FooterTab, Body, Right, Button, Icon, Title, Segment, Content, Text } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import News from './News';
import Checker from './Checker';
export default class Base extends Component {

  state = {
    active: 2
  }

  selectComponent = (active) => () => this.setState({active})

  // write a function to change content
  // changeContent () {}

  _renderComponent = () => {
    if(this.state.active === 1)
      return <Checker />
    else if(this.state.active === 2)
      return <News />
    else
      return <Image source={require('./favicon.png')} />
  }

  render() {
    return (
      <Container>

        {this._renderComponent()}

        {/*FOOTER*/}

        <Footer>
          <FooterTab>
            <Button
                active = {this.state.active === 1}
                onPress = {this.selectComponent(1)}
            >
              <Icon name="eye" />
            </Button>
            <Button 
                active = {this.state.active === 2}
                onPress = {this.selectComponent(2)}
            >
              <Icon active name="barcode" />
            </Button>
            <Button
                active = {this.state.active === 3}
                onPress = {this.selectComponent(3)}
            >
              <Icon name="settings" />
            </Button>
          </FooterTab>
        </Footer>

        {/*END OF FOOTER*/}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    red: {
        color: 'red',
    },
    
    blue: {
        color: 'blue',
    },
});