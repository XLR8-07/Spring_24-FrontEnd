import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NewComponent from './src/components/mycomponents';
import AnotherComp from './src/components/anotherComp';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

const welcome_stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <welcome_stack.Navigator>
        <welcome_stack.Screen name="Home" component={AnotherComp} />
        <welcome_stack.Screen name="New" component={NewComponent} />
      </welcome_stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
