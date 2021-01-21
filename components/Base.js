import React, { Component } from 'react';
import { Container, Header, Footer, FooterTab, Body, Right, Button, Icon, Title, Segment, Content, Text } from 'native-base';
export default class SegmentOutsideHeaderExample extends Component {

  state = {
    active: 1
  }

  selectComponent = (active) => () => this.setState({active})

  // write a function to change content
  // changeContent () {}

  _renderComponent = () => {
    if(this.state.active === 1)
      return <Text>test1</Text>
    else if(this.state.active === 2)
      return <Text>test2</Text>
    else
      return <Text>test3</Text>
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

        {/*FOOTER*/}

        <Footer>
          <FooterTab>
            <Button>
              <Icon name="paper" />
            </Button>
            <Button active>
              <Icon active name="glasses" />
            </Button>
            <Button>
              <Icon name="settings" />
            </Button>
          </FooterTab>
        </Footer>

        {/*END OF FOOTER*/}
      </Container>
    );
  }
}