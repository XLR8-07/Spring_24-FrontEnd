import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NewComponent from './src/components/mycomponents';
import AnotherComp from './src/components/anotherComp';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is MAD</Text>
      <NewComponent/>
      <AnotherComp/>
    </View>
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
