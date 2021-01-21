import { Container, Header, Body, Right, Button, Icon, Title, Segment, Content, Text } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
export default class News extends Component {

  state = {
    active: 1
  }

  selectComponent = (active) => () => this.setState({active})

  // write a function to change content
  // changeContent () {}

  _renderComponent = () => {
    if(this.state.active === 1)
      return <Text style={styles.red}>test1</Text>
    else if(this.state.active === 2)
      return <Text style={styles.blue}>test2</Text>
    else
      return <Image source={require('./favicon.png')} />
  }

  render() {
    return (
      <Container>

        {/*HEADER*/}

        <Header hasSegment>
          <Body>
            <Title>Detectify</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>

        {/*END OF HEADER*/}

        <Segment>
          <Button first 
            active={this.state.active === 1}
            onPress={this.selectComponent(1)}
          >
            <Text>News</Text>
          </Button>
          <Button 
            active={this.state.active === 2}
            onPress={this.selectComponent(2)}
          >
            <Text>Sports</Text>
          </Button>
          <Button last 
            active={this.state.active === 3}
            onPress={this.selectComponent(3)}
          >
            <Text>Entertainment</Text>
          </Button>
        </Segment>

        {/*CONTENT OF EACH SEGMENT*/}

        <Content padder>
          {this._renderComponent()}
        </Content>

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