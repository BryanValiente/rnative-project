import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 35, backgroundColor: "gold",}}>My Personal Profile</Text>
      <View>
        <Text style={styles.text}> My passion is computer science and coding. Coding makes me feel alive.</Text>
        <Image
        style={styles.image}
        source={{
          uri: 'https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg',
        }}/>
      </View>
      <View>
        <Text style={styles.text}> I chose to be scrum master because I want to improve myself in agile development and leading a team</Text>
        <Image
        style={styles.image}
        source={{
          uri: 'https://miro.medium.com/v2/resize:fit:470/0*65DbU_Hc5fBMIrbO.png',
        }}/>
      </View>
      <View>
        <Text style={styles.text}> My Dream Career is being a ceo because then I can own a company and make passive income</Text>
        <Image
        style={styles.image}
        source={{
          uri: 'https://www.investopedia.com/thmb/Wj7ePn6GDF7ruwMCb-_WIwm58Vk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/CEO-81387466341c465aa8017e70939db730.jpg',
        }}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a0d2eb',
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: "center",
  },
  text: {
    fontSize: 15,
    backgroundColor: '#fff685'
  }
});
