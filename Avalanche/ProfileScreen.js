import React, { Component } from 'react'
import { StyleSheet, View, Text} from 'react-native'
import config from './config/config'
import ActionButton from 'react-native-action-button';

export default class ProfileScreen extends Component{
	 constructor(props){
        super(props);
        const { navigation }= props
    }
	render(){
	return(
		            <View style={styles.container}>		            
		            <ActionButton buttonColor="#82b1ff"></ActionButton>
		            <Text style={{ margin:5,color:'#7b1fa2',fontSize:20, fontWeight:'bold' }}>Welcome, {config.user.name}</Text>
		            </View>
		);
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
