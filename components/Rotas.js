import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import Home from './Home';
import Conta from './Conta';
import Pedidos from './Pedidos';
import Cardapio from './Cardapio';

const Tab = createBottomTabNavigator();

export default function Rotas() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTinColor: '#88aaee' }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cardápio"
        component={Cardapio}
        options={{
          tabBarLabel: 'Cardápio',
          title: 'Cardápio',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="restaurant-menu" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Conta"
        component={Conta}
        options={{
          tabBarLabel: 'Conta',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pedidos"
        component={Pedidos}
        options={{
          tabBarLabel: 'Pedidos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
