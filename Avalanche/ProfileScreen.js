import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList} from 'react-native'
import config from './config/config'
import ActionButton from 'react-native-action-button';
import ExpenseCard from './ExpenseCard'
export default class ProfileScreen extends Component{
	 constructor(props){
        super(props);
        const { navigation }= props
        this.state={
        	expenses:[{category:"blah",amount:123}]
        }
    }
    addToExpenseList(item){
		this.state.expenses.push({category:item["category"],amount:item["amount"]});
	}
	render(){
	return(
		            <View style={styles.container}>	
		            	            
		            <Text style={{ textAlign: 'center', margin:5,color:'#7b1fa2',fontSize:25, fontWeight:'bold' }}>Welcome, {config.user.name}</Text>
		            <Text style={{ margin:5,fontSize:20, fontWeight:'bold' }}>Expenses:</Text>
		             <FlatList
		            data={this.state.expenses}
		            renderItem={({ item }) =>  <ExpenseCard category={item.category} amount={item.amount}></ExpenseCard>}
		            
		            />
		            <ActionButton buttonColor="#82b1ff"  onPress={()=>{ this.props.navigation.push("Add",{
		             	onGoBack:(item)=>this.addToExpenseList(item),
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
