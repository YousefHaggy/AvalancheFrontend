import React, { Component } from 'react'
import { FlatList, Platform, StyleSheet, Text, View} from 'react-native'
import { Bar } from 'react-native-progress'
export default class DebtCard extends Component{
	render(){
		return(
			<View style={styles.card}>
			<Text style={{ color:'#7b1fa2',fontSize:20, fontWeight:'bold' }}>
			Test Debt Header
			</Text>
			<Text style={{ margin:5, fontSize:18, fontWeight:'bold' }}>
			Inital Balance: $1,000.00{'\n'}
			Remaining Balance: $796.00{''}
			</Text>
			<Bar color={'#82b1ff'} progress={.3} height={10} width={null}></Bar>
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