import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet } from 'react-native'
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Container, Content } from 'native-base'

class CardsList extends Component {
    render() {
        return (
            <Container style={styles.container} >
                <Content>
                <Card transparent={true} style={styles.card}>
                    <CardItem style={styles.cardSummary} bordered={false}>
                        <Left>
                            <Thumbnail source={require('./assets/shrek.png')} />
                            <Body>
                                <Text style={{fontWeight: '700'}}>Card Title</Text>
                            </Body>
                        </Left>
                        <Right style={{justifyContent: 'center'}}>
                            <Body style={{justifyContent: 'center'}}>
                                <Text>Right text</Text>
                            {/*
                            <AirbnbRating
                                count={5}
                                showRating={false}
                                defaultRating={this.state.currentRating}
                                size={20}
                                style={{ paddingVertical: 2 }}
                                onFinishRating={value => this.onRatingChange(value)}
                            />
                            */}
                            </Body>
                        </Right>
                    </CardItem>
                </Card>
                <Card transparent={true} style={styles.card}>
                    <CardItem style={styles.cardSummary} bordered={false}>
                        <Left>
                            <Thumbnail source={require('./assets/shrek.png')} />
                            <Body>
                                <Text style={{fontWeight: '700'}}>Card Title</Text>
                            </Body>
                        </Left>
                        <Right style={{justifyContent: 'center'}}>
                            <Body style={{justifyContent: 'center'}}>
                                <Text>Right text</Text>
                            {/*
                            <AirbnbRating
                                count={5}
                                showRating={false}
                                defaultRating={this.state.currentRating}
                                size={20}
                                style={{ paddingVertical: 2 }}
                                onFinishRating={value => this.onRatingChange(value)}
                            />
                            */}
                            </Body>
                        </Right>
                    </CardItem>
                </Card>
                </Content>
            </Container>
        );
    }
}

const lightDark = '#2D3338'
const mainDark = '#1C2426'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80 + (( Platform.OS === 'ios' ) ? 40 : 0),
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: mainDark,
    },
    card: {
        borderColor: lightDark
    },
    cardSummary: {
        backgroundColor: lightDark,
        
    }
});


export default CardsList;
