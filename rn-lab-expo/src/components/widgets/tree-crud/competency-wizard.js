import React, { Component } from 'react';
import { 
    Container, Content, Header, Left, Body, Right, Button, Icon, Title, 
    Text, List, ListItem, Switch, Footer, FooterTab,
    Card, CardItem, Item, Input, Separator
} from 'native-base'

class CompetencyWizard extends Component {
    render() {
        return (
            <Container>
                <Header>
                <Left>
                    <Button transparent>
                    <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body style={{flex: 3}}>
                    <Title>New Competency</Title>
                </Body>
                <Right />
                    
                </Header>
        <Content>
            <Item>
                <Input placeholder='Start Typing'/>
            </Item>
            

            <List>
            <Separator bordered>
                <Text>Competencies:</Text>
            </Separator>
            <ListItem>
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
          </List>
        
        </Content>
        <Footer>
        <FooterTab>
        <Button vertical>
              <Icon name="ios-close-circle" style={{color:'red', fontSize: 30}}/>
              <Text>Cancel</Text>
            </Button>

            <Button vertical>
              <Icon name="ios-checkmark-circle" style={{color:'green', fontSize: 30}}/>
              <Text>Add</Text>
            </Button>
            
            </FooterTab>
        </Footer>
      </Container>
        );
    }
}

export default CompetencyWizard;
