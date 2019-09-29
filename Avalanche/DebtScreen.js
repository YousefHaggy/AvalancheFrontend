import React, { Component } from 'react'
import { StyleSheet, View, FlatList, BackHandler} from 'react-native'
import DebtCard from './DebtCard'
import config from './config/config'
import ActionButton from 'react-native-action-button';

export default class DebtScreen extends Component{
	constructor(props) {
        super(props)
        this.state={
        	debt:[{debtId:12,debtDescription:"im sleepy",debtInitAmount:1000,debtRemaining:500}]
        }
    }
	addToDebtList(item){
		this.state.debt.push({debtId:1212,debtDescription:item['name'],debtInitAmount:item["amount"],debtRemaining:item["amount"]});
	}
	render(){
	return(
		            <View style={styles.container}>

		            <FlatList
		            data={this.state.debt}
		            renderItem={({ item }) =>  <DebtCard id={item.debtId} description={item.debtDescription} initial={item.debtInitAmount} remaining={item.debtRemaining}></DebtCard>}
		            keyExtractor={item => item.debtId}
		            />
		             <ActionButton buttonColor="#82b1ff" onPress={()=>{ console.log("test"); this.props.navigation.push("Add",{
		             	onGoBack:(item)=>this.addToDebtList(item),
		             })}}></ActionButton>
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
