import { Ionicons, Octicons } from '@expo/vector-icons';
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
// const store = configureStore();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect( () => {
    setIsLoggedIn(true)
  }, [])
  return (
    // <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor: COLORS.primaryDark,
            },
            tabBarIndicatorStyle: {
              backgroundColor: COLORS.secondaryYellow
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
                <Tab.Screen
                style={{
                  backgroundColor: COLORS.primaryDark
                }}
                options={{
                  title: (props) => <>
                    {
                      props.focused ? (<Ionicons name="md-person-add" size={25} color={`${COLORS.secondaryYellow}`} />) : (<Ionicons name="md-person-add-outline" size={25} color={`${COLORS.lightGray}`} />)
                    }
                  </>,
                }} 
                name="Registration" 
                component={Registration} />
                <Tab.Screen
                style={{
                  backgroundColor: COLORS.primaryDark
                }}
                options={{
                  title: (props) => <>
                    {
                      props.focused ? (<Ionicons name="log-in" size={25} color={`${COLORS.secondaryYellow}`} />) : (<Ionicons name="log-in-outline" size={25} color={`${COLORS.lightGray}`} />)
                    }
                  </>,
                }}  
                name="Login" 
                component={Login} />
              </>

            ) : (
              <>
                <Tab.Screen
                  style={{
                    backgroundColor: COLORS.primaryDark
                  }}
                  options={{
                    title: (props) => <>
                      {
                        props.focused ? (<Ionicons name="ios-home" size={25} color={`${COLORS.secondaryYellow}`} />) : (<Ionicons name="ios-home-outline" size={25} color={`${COLORS.lightGray}`} />)
                      }
                    </>,
                  }}
                  name="Home"
                  component={Home} />
                <Tab.Screen
                  options={{
                    title: (props) => <>
                      {
                        props.focused ? (<Ionicons name="people" size={25} color={`${COLORS.secondaryYellow}`} />) : (<Ionicons name="people-outline" size={25} color={`${COLORS.lightGray}`} />)
                      }
                    </>,
                  }}
                  name="FindFriends"
                  component={FindFriends} />
                <Tab.Screen
                  options={{
                    title: (props) => <>
                      {
                        props.focused ? (<Ionicons name="notifications" size={25} color={`${COLORS.secondaryYellow}`} />) : (<Ionicons name="notifications-outline" size={25} color={`${COLORS.lightGray}`} />)
                      }
                    </>,
                  }}
                  name="Notification"
                  component={Notification} />
                <Tab.Screen
                  options={{
                    title: (props) => <Octicons name="search" size={24} color={`${props.focused ? COLORS.secondaryYellow : COLORS.lightGray}`} />,
                  }}
                  name="Search"
                  component={Search} />
                <Tab.Screen
                  options={{
                    title: (props) => <>
                      {
                        props.focused ? (<Ionicons name="ios-person-circle" size={24} color={`${COLORS.secondaryYellow}`} />) : (<Ionicons name="ios-person-circle-outline" size={25} color={`${COLORS.lightGray}`} />)
                      }
                    </>,
                  }}
                  name="Profile"
                  component={Profile} />
              </>

            )
          }
        </ Tab.Navigator>
      </NavigationContainer>
    // </Provider>
  );
}

const styles = StyleSheet.create({

});
