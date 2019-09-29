import React, { Component } from 'react'
import { StyleSheet, View} from 'react-native'
import DebtCard from './DebtCard'
export default class DebtScreen extends Component{
	render(){
	return(
		            <View style={styles.container}>
		            <DebtCard></DebtCard>
		            </View>
		);
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
});