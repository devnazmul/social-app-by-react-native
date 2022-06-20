import { Ionicons, Octicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
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



export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: COLORS.primaryDark },
          tabBarIndicatorStyle: { backgroundColor: COLORS.secondaryYellow }
        }}
        initialRouteName='Home'
        tabBarPosition='top'
        style={{ paddingTop: StatusBar.currentHeight }}>
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
                      props.focused ? (<Ionicons name="log-in" size={25} color={`${COLORS.secondaryYellow}`} />) : (<Ionicons name="log-in-outline" size={25} color={`${COLORS.lightGray}`} />)
                    }
                  </>,
                }}
                name="Login" >
                {props => <Login {...props} setIsLoggedIn={setIsLoggedIn} />}
              </Tab.Screen>
              {/* <TabTamplate
                Tab={Tab}
                tabName={"Login"}
                TabComponent={Login}
                TabComponentProps={setIsLoggedIn}

                IconComponent={Ionicons}

                activeIconName={"log-in"}
                iconActiveColor={COLORS.secondaryYellow}
                iconName={"log-in-outline"}
                iconColor={COLORS.secondaryYellow}
                iconSize={25}
              /> */}
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
                name="Registration" >
                {props => <Registration {...props} setIsLoggedIn={setIsLoggedIn} />}
              </Tab.Screen>
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
                name="Home">
                {props => <Home {...props} setIsLoggedIn={setIsLoggedIn} />}
              </Tab.Screen>
              <Tab.Screen
                options={{
                  title: (props) => <>
                    {
                      props.focused ? (<Ionicons name="people" size={25} color={`${COLORS.secondaryYellow}`} />) : (<Ionicons name="people-outline" size={25} color={`${COLORS.lightGray}`} />)
                    }
                  </>,
                }}
                name="FindFriends"
              >
                {props => <FindFriends {...props} setIsLoggedIn={setIsLoggedIn} />}
              </Tab.Screen>
              <Tab.Screen
                options={{
                  title: (props) => <>
                    {
                      props.focused ? (<Ionicons name="notifications" size={25} color={`${COLORS.secondaryYellow}`} />) : (<Ionicons name="notifications-outline" size={25} color={`${COLORS.lightGray}`} />)
                    }
                  </>,
                }}
                name="Notification"
              >
                {props => <Notification {...props} setIsLoggedIn={setIsLoggedIn} />}
              </Tab.Screen>
              <Tab.Screen
                options={{
                  title: (props) => <Octicons name="search" size={24} color={`${props.focused ? COLORS.secondaryYellow : COLORS.lightGray}`} />,
                }}
                name="Search"
              >
                {props => <Search {...props} setIsLoggedIn={setIsLoggedIn} />}
              </Tab.Screen>
              <Tab.Screen
                options={{
                  title: (props) => <>
                    {
                      props.focused ? (<Ionicons name="ios-person-circle" size={24} color={`${COLORS.secondaryYellow}`} />) : (<Ionicons name="ios-person-circle-outline" size={25} color={`${COLORS.lightGray}`} />)
                    }
                  </>,
                }}
                name="Profile"
              >
                {props => <Profile {...props} setIsLoggedIn={setIsLoggedIn} />}
              </Tab.Screen>
            </>

          )
        }
      </ Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
