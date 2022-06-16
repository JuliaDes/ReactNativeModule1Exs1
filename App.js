import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:"#22b14c",width:400,height:250}}></View>
      <View style={{backgroundColor:"red",width:3500,height:100}}></View>
      <View style={{backgroundColor:"blue",width:3500,height:390}}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
});