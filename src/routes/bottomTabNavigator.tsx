/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#000'},
        tabBarActiveTintColor: '#fff',
        headerShown: false,
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="home"
              size={25}
              color={focused ? '#fff' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Search'}
        component={Home}
        listeners={{
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="compass"
              size={25}
              color={focused ? '#fff' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Home}
        listeners={{
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="stopwatch"
              size={25}
              color={focused ? '#fff' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={Home}
        listeners={{
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="md-bookmark-sharp"
              size={25}
              color={focused ? '#fff' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        listeners={{
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="person-circle"
              size={25}
              color={focused ? '#fff' : 'gray'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
