import { Octicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import COLORS from './constants/colors';
import FindFriends from './src/pages/FindFriends/FindFriends';
import Home from './src/pages/Home/Home';
import Login from './src/pages/Login/Login';
import Notification from './src/pages/Notification/Notification';
import Profile from './src/pages/Profile/Profile';
import Registration from './src/pages/Registration/Registration';
import Search from './src/pages/Search/Search';

const Tab = createMaterialTopTabNavigator();
// const Tab = createNativeTabNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(true)
  }, [])
  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={ {
          tabBarStyle:{
            backgroundColor:COLORS.primaryDark,
            position:'fixed',
            width:'100%'
          }
        }}
      initialRouteName='Home' 
      tabBarPosition='top' 
      style={{ 
        paddingTop: StatusBar.currentHeight,
        
       }}>
        {
          !isLoggedIn ? (
            <>
              <Tab.Screen name="Registration" component={Registration} />
              <Tab.Screen name="Login" component={Login} />
            </>

          ) : (
            <>
              <Tab.Screen
              style={{
                backgroundColor:COLORS.primaryDark
              }}
                options={{
                  title: (props) => <Octicons name="home" size={25} color="black" />,
                }}
                name="Home"
                component={Home} />
              <Tab.Screen
                options={{
                  title: (props) => <Octicons name="person-add" size={25} color="black" />,
                }}
                name="FindFriends"
                component={FindFriends} />
              <Tab.Screen
                options={{
                  title: (props) => <Octicons name="bell" size={24} color="black" />,
                }}
                name="Notification"
                component={Notification} />
              <Tab.Screen
                options={{
                  title: (props) => <Octicons name="search" size={24} color="black" />,
                }}
                name="Search"
                component={Search} />
              <Tab.Screen
                options={{
                  title: (props) => <Octicons name="person" size={25} color="black" />,
                }}
                name="Profile"
                component={Profile} />
            </>

          )
        }


      </ Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({

});
