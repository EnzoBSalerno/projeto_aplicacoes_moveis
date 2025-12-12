import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Placeholder screens for other tabs
import { View, Text } from 'react-native';
const PlaceholderScreen = ({ name }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{name}</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          backgroundColor: COLORS.white,
          borderRadius: 15,
          height: 70,
          shadowColor: COLORS.shadow,
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Orders') {
            iconName = focused ? 'receipt' : 'receipt-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // Custom visual for focused tab
          return (
             <Ionicons
                name={iconName}
                size={24}
                color={focused ? COLORS.primary : COLORS.textLight}
             />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarAccessibilityLabel: 'Home Tab' }}
      />
      <Tab.Screen
        name="Search"
        children={() => <PlaceholderScreen name="Busca" />}
        options={{ tabBarAccessibilityLabel: 'Search Tab' }}
      />
      <Tab.Screen
        name="Orders"
        children={() => <PlaceholderScreen name="Pedidos" />}
        options={{ tabBarAccessibilityLabel: 'Orders Tab' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarAccessibilityLabel: 'Profile Tab' }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
