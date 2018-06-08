TreeCrud

import React, { Component } from 'react';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, Text, List, ListItem,  Switch} from 'native-base';
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
        <List>
            <ListItem noIndent icon>
              <Left>
                <GradientProgressArc 
                    progress={75} 
                    style={{lineColor: 'green', viewWidth: 28, padding: 0, lineWidth: 2}}
                />
              </Left>
              <Body>
                <Text>Airplane Mode</Text>
              </Body>
              <Right>
                <Switch value={false} />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="plane" />
              </Left>
              <Body>
                <Text>Airplane Mode</Text>
              </Body>
              <Right>
                <Switch value={false} />
              </Right>
            </ListItem>
        </List>
        </Content>
      </Container>
    );
  }
}
