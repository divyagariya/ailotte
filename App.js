import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './src/screen/home';
import * as Typography from './src/utility/typography'
import { backgroundColor } from './src/utility/colors';


function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      
    </View>
  );
}



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      tabBarOptions={{
        showLabel: true,
        activeTintColor: '#50c878',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor:'black',
        borderTopWidth:0.1,
    },
        labelStyle: {
          fontSize: Typography.FONT_SIZE_12,
          fontWeight: 'bold',
        },
      }}
      >
        <Tab.Screen 
          name="Home" component={Home} 
          options={{
            tabBarIcon: ({color, size}) => (
             <Icon 
              name='ios-home'
              size={25}
              color={color}
              />
            ),
            
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{
            tabBarIcon: ({color, size}) => (
             <Icon 
              name='ios-person-circle-outline'
              size={25}
              color={color}
              />
            ),
            
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}