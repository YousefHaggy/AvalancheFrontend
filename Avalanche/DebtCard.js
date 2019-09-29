import React, { Component } from 'react'
import { FlatList, Platform, StyleSheet, Text, View} from 'react-native'
import { Bar } from 'react-native-progress'
export default class DebtCard extends Component{
    constructor(props){
        super(props);
        const { navigation }= props
    }
	render(){
		return(
			<View style={styles.card}>
			<Text style={{ color:'#7b1fa2',fontSize:20, fontWeight:'bold' }}>
			{this.props.description}
			</Text>
			<Text style={{ margin:5, fontSize:18, fontWeight:'bold' }}>
			Inital Balance: {"$"+this.props.initial}{'\n'}
			Remaining Balance: {this.props.remaining}
			</Text>
			<Bar color={'#82b1ff'} progress={(this.props.initial-this.props.remaining)/this.props.initial} height={10} width={null}></Bar>
			</View>

	);
	}
}
const styles = StyleSheet.create({
    card: {
        height: 'auto',
        justifyContent: 'space-between',
        flexDirection: 'column',
        padding: 5,
        flexWrap: 'wrap',
        borderRadius: 3,
        margin: 5,
        backgroundColor: '#FFF',
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 1,
            },
            android: {
                elevation: 5
            }
        }),

    }
});