import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const HomeNavigationBar = () => {
  return (
    <Tab.Navigator>
      <Text>HomeNavigationBar</Text>
    </Tab.Navigator>
  )
}

export default HomeNavigationBar

const styles = StyleSheet.create({})