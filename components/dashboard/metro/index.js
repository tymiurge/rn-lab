import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Slider, ButtonGroup, Card, PricingCard } from 'react-native-elements'
//import Slider from 'react-native-slider'
//var Slider = require('react-native-slider');

class MetroDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
          value: 20,
        };
    }

    change(value) {
        this.setState(() => {
          return {
            value: parseFloat(value),
          };
        });
    }

    render() {
        return (
            <View style={styles.container}>
            

               
            <Card title='your rating'
                containerStyle={{
                    backgroundColor: lightDark
                }}
            >
          
          <Slider
            trackStyle={customStyles6.track}
            thumbStyle={customStyles6.thumb}
            minimumValue={1}
            maximumValue={100}
            value={25}
            minimumTrackTintColor='#e6a954'
          />

          <ButtonGroup
      onPress={() => {}}
      selectedIndex={1}
      buttons={['Home', 'Country', 'City']}
      //containerStyle={{height: 100}}
    />
            </Card>

            <Card
                title={'Last week rating change'}
                containerStyle={{
                    backgroundColor: mainDark
                }}
            >
                <View 
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <TouchableOpacity style={{
                    backgroundColor: lightDark,
                    height: 50,
                    width: 50,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text
                        style={{
                            fontSize: 18,
                            color: 'white'
                        }}
                    >
                        50
                    </Text>
                    
                </TouchableOpacity>

                <TouchableOpacity style={{
                    backgroundColor: lightDark,
                    height: 50,
                    width: 50,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text
                    >
                        AAAA
                    </Text>
                    
                </TouchableOpacity>
            </View>
            </Card>

            <View style={{flexDirection: 'row'}} >
              <PricingCard
                color='#4f9deb'
                title='Free'
                price='$0'
                info={['1 User']}
                button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
                />

                          <PricingCard
                color='#4f9deb'
                title='Free'
                price='$0'
                info={['1 User']}
                button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
                />
            </View>

            
                
            </View>
        );
    }
}

const lightDark = '#2D3338'
const mainDark = '#1C2426'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        //alignItems: 'center',
        alignItems: 'stretch',
        backgroundColor: mainDark,
        paddingTop: 80 + (( Platform.OS === 'ios' ) ? 40 : 0),
        //paddingLeft: 40,
        //paddingRight: 40
    },
    card: {
        backgroundColor: lightDark,
        width: '100%',
        //flex: 1,
        flexDirection: 'row'
        
    },
    cardItem: {
        //padding: 40
    }
});

const iosStyles = StyleSheet.create({
    track: {
      height: 2,
      borderRadius: 1,
    },
    thumb: {
      width: 20,
      height: 20,
      borderRadius: 30 / 2,
      backgroundColor: '#31a4db',
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 2},
      shadowRadius: 2,
      shadowOpacity: 0.35,
    }
  });

  const customStyles7 = StyleSheet.create({
    track: {
      height: 1,
      backgroundColor: '#FFF',
    },
    thumb: {
      width: 30,
      height: 30,
      backgroundColor: '#FFF',
      borderColor: 'rgba(150, 150, 150, 0.6)',
      borderWidth: 14,
      borderRadius: 15,
    }
  });

  var customStyles8 = StyleSheet.create({
    container: {
      height: 30,
    },
    track: {
      backgroundColor: '#303030',
    },
    thumb: {
      width: 20,
      height: 20,
      backgroundColor: '#31a4db',
      borderRadius: 10 / 2,
      shadowColor: '#31a4db',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 1,
    }
  });

  var customStyles6 = StyleSheet.create({
    track: {
      height: 14,
      borderRadius: 2,
      backgroundColor: 'white',
      borderColor: 'black',
      borderWidth: 1,
    },
    thumb: {
      width: 24,
      height: 24,
      borderRadius: 2,
      backgroundColor: 'orange',
      borderColor: 'black',
      borderWidth: 1,
    }
  });

export default MetroDashboard;
