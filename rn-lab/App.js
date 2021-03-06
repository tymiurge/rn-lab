import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
// import Login from './components/login/simple/Login'
// import EntryScreen from './components/login/entry'
// import CardsList from './components/list/cards-list-rb'
// import CardsList from './components/list/cards-list'
import MetroDashboard from './components/dashboard/metro'
import SkillsList from './components/list/add-skills'
import InputsScreen from './components/inputs/Inputs'
import App1 from './components/navigation'
import ProgressDashboard from './components/dashboard/progress-chart'

export default class App extends React.Component {
  render() {
    return (
      // <Login />
      // <CardsList />
      // <MetroDashboard />
      //<SkillsList />
      //<InputsScreen />
      // <App1 />
      <ProgressDashboard />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
