import React, { Component } from 'react'
import { StyleSheet, View, Text, BackHandler, TextInput, Button} from 'react-native'
import config from './config/config'

export default class AddExpenseScreen extends Component{
	 constructor(props){
        super(props);
        const { navigation }= props
        this.state={
        	category:'',
        	amount:'',
        }
    }

	render(){
	return(
		            <View style={styles.container}>
		            <Text style={{ color:'#7b1fa2',fontSize:20, fontWeight:'bold' }}>Expense Category</Text>
		             <TextInput
      style={{ height: 40, borderColor: 'gray', padding:5, borderWidth: 1 }}
      onChangeText={text =>this.setState({'category':text})}
      placeholder={"Enter category"}
    />
		            <Text style={{color:'#7b1fa2',fontSize:20, fontWeight:'bold' }}>Expense Amount</Text>
		            <TextInput
      style={{ height: 40, borderColor: 'gray', padding:5, borderWidth: 1 }}
      onChangeText={text =>this.setState({'amount':text})}
      placeholder={"Enter expense amount"}
    />
		           
     <Button title="Add debt" onPress={()=>{this.props.navigation.state.params.onGoBack(this.state); this.props.navigation.goBack()}} color="#82b1ff" ></Button>
		            </View>
		);
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
});
