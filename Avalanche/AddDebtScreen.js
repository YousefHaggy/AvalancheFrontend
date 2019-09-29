import React, { Component } from 'react'
import { StyleSheet, View, Text, BackHandler, TextInput, Button} from 'react-native'
import config from './config/config'

export default class AddDebtScreen extends Component{
	 constructor(props){
        super(props);
        const { navigation }= props
        this.state={
        	name:'',
        	amount:'',
        	minimum:'',
        }
    }

	render(){
	return(
		            <View style={styles.container}>
		            <Text style={{ color:'#7b1fa2',fontSize:20, fontWeight:'bold' }}>Debt Name</Text>
		             <TextInput
      style={{ height: 40, borderColor: 'gray', padding:5, borderWidth: 1 }}
      onChangeText={text =>this.setState({'name':text})}
      placeholder={"Enter debt name"}
    />
		            <Text style={{color:'#7b1fa2',fontSize:20, fontWeight:'bold' }}>Debt Amount</Text>
		            <TextInput
      style={{ height: 40, borderColor: 'gray', padding:5, borderWidth: 1 }}
      onChangeText={text =>this.setState({'amount':text})}
      placeholder={"Enter debt amount"}
    />
		            <Text style={{ color:'#7b1fa2',fontSize:20, fontWeight:'bold' }}>Minimum Payment</Text>
		<TextInput
      style={{ height: 40, borderColor: 'gray', padding:5,  borderWidth: 1 }}
      onChangeText={text =>this.setState({'minimum':text})}
      placeholder={"Enter minimum payment"}
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
