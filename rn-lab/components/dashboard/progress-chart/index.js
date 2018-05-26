import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import {   
    ProgressChart,
    LineChart
} from 'react-native-chart-kit'


class ProgressDashboard extends Component {
    
    render() {
        const screenWidth = Dimensions.get('window').width
        const chartConfig = {
            backgroundGradientFrom: '#1E2923',
            backgroundGradientTo: '#08130D',
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            style: {
                borderRadius: 16
            }
          }
        return (
            <View style={styles.container}>
            <LineChart
    data={{
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100
        ]
      }]
    }}
    width={Dimensions.get('window').width} // from react-native
    height={220}
    chartConfig={{
      backgroundColor: '#e26a00',
      backgroundGradientFrom: '#fb8c00',
      backgroundGradientTo: '#ffa726',
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
  {/*
                <ProgressChart
                    data={[0.4, 0.6, 0.8]}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                    style={{
                        borderRadius: 16
                    }}
                />
                */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});


export default ProgressDashboard
