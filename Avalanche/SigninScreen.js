import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, BackHandler } from 'react-native'
import * as Google from "expo-google-app-auth"
import config from './config/config'

export default class SigninScreen extends Component {
    constructor(props) {
        super(props)
        this.state = { signedIn: false, name: "", id: 0 }
    }
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', function() { return true })

    }
    async createNewUser(id) {
        let response = await fetch('dasda');
        let responseJson = await response.json()
        if (Objects.keys(responseJson).length==0)
		{
			fetch('',{
				method:'POST',
				body:JSON.stringify({
					id:this.state.id
				})

			});
		}
    }
    signIn = async () => {
        try {
            const result = await Google.logInAsync({
                androidClientId: "70054762554-qigq39s5dqp4joqc1hlopepaum77i5mv.apps.googleusercontent.com",
                //iosClientId: YOUR_CLIENT_ID_HERE,  <-- if you use iOS
                scopes: ["profile", "email"]
            })

            if (result.type === "success") {
                this.setState({
                    signedIn: true,
                    name: result.user.name,
                    id: result.user.id
                })
                config.user.id = this.state.id;
                config.user.name = this.state.name;
               // this.createNewUser(this.state.id)
                this.props.navigation.push('Debts', { name: this.state.name, id: this.state.id })

            } else {
                console.log("cancelled")
            }
        } catch (e) {
            console.log("error", e)
        }
    }


    render() {
        return (
            <View style={styles.container}>
        {this.state.signedIn ? (
          <LoggedInPage name={this.state.name} id={this.state.id}  />
        ) : (
          <LoginPage signIn={this.signIn} />
        )}
      </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    header: {
        fontSize: 25
    },
    image: {
        marginTop: 15,
        width: 150,
        height: 150,
        borderColor: "rgba(0,0,0,0.2)",
        borderWidth: 3,
        borderRadius: 150
    }
})
const LoginPage = props => {
    return (
        <View>
      <Text style={styles.header}>Sign In With Google</Text>
      <Button title="Sign in with Google" 
       onPress={() => props.signIn()} />
    </View>
    )
}
const LoggedInPage = props => {
    return (
        <View style={styles.container}>
      <Text style={styles.header}>Welcome:{props.name}</Text>
       <Text style={styles.header}>Welcome:{props.id}</Text>

    </View>
    )
}