import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import DebtScreen from './DebtScreen'
import ProfileScreen from './ProfileScreen'
import SigninScreen from './SigninScreen'


const DebtStack = createStackNavigator({
    Signin:  {screen :SigninScreen,navigationOptions: () => ({
      title: `Sign in`,
     
    })} ,
    Debts: {screen:DebtScreen} 
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#7b1fa2'
        },
        headerTintColor: '#FFFFFF',
        headerLeft:null,
        gesturesEnabled:false,
        title: 'Debts',
    }
});
DebtStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.routes.routeName == "Signin") {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};
const ProfileStack = createStackNavigator({
    Profile: { screen: ProfileScreen }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#7b1fa2'
        },
        headerTintColor: '#FFFFFF',
        title: 'Profile',
    }
});

const App = createBottomTabNavigator({
    Debts: { screen: DebtStack },
    Profile: { screen: ProfileStack }
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        
        tabBarIcon: ({ focused, horizontal, tintColor }) => {

            const { routeName } = navigation.state;
            let IconComponent = Ionicons;
            let iconName;
            if (routeName == "Debts") {
                iconName = `md-card`;
            } else if (routeName == "Profile") {
                iconName = 'md-person'
            }
            if (routeName == 'Signin')
                return null
            return <IconComponent name={iconName} size={25} color={tintColor} />;
        },

    }),
    tabBarOptions: {
        activeTintColor: '#82b1ff',
        inactiveTintColor: 'white',
        style: {
            backgroundColor: '#7b1fa2'
        },
    },
});
export default createAppContainer(App);