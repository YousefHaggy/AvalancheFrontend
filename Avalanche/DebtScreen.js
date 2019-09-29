import React, { Component } from 'react'
import { StyleSheet, View, FlatList} from 'react-native'
import DebtCard from './DebtCard'
import config from './config/config'
const debts=[{debtId:12,debtDescription:"im sleepy",debtInitAmount:1000,debtRemaining:500}];
export default class DebtScreen extends Component{
	render(){
	return(
		            <View style={styles.container}>
		            <FlatList
		            data={debts}
		            renderItem={({ item }) =>  <DebtCard id={item.debtId} description={item.debtDescription} initial={item.debtInitAmount} remaining={item.debtRemaining}></DebtCard>}
		            keyExtractor={item => item.debtId}
		            />
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
