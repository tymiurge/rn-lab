import React, { Component } from 'react';
import { 
    Container, Content, Header, Left, Body, Right, Button, Icon, Title, 
    Text, List, ListItem, Switch, Footer, FooterTab,
    Card, CardItem
} from 'native-base';
import GradientProgressArc from './../../arc/GradientProcessArc'

export default class TreeCrud extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button hasText transparent>
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button hasText transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
        <Content>
        <Card style={{flex: 0}}>
            <CardItem>
              <Left>
              <GradientProgressArc 
                    progress={75} 
                    style={{lineColor: 'green', viewWidth: 40, padding: 0, lineWidth: 2}}
                />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            
        </Card>
        <Card style={{flex: 0}}>
            <CardItem>
              <Left>
              <GradientProgressArc 
                    progress={75} 
                    style={{lineColor: 'green', viewWidth: 40, padding: 0, lineWidth: 2}}
                />
                <Body>
                  <Text style={{fontSize: 16, width: 300}}>Nodejs full stack developer</Text>
                  <Text note style={{width: 300}}>You're in the 25% top</Text>
                </Body>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            
        </Card>
        
        </Content>
        <Footer>
        <FooterTab>
        <Button vertical active>
              <Icon active name="add-circle" />
              <Text>Add competency</Text>
            </Button>
            </FooterTab>
        </Footer>
      </Container>
    );
  }
}
