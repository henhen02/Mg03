import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menuView}>
        <View style={styles.iconView}>
          <Icon name='menu' size={35} color='#f2f2f2'/>
          <Icon name='user' size={35} color='#f2f2f2'/>
        </View>
        <View style={styles.textLogoView}>
          <Text style={
            {
              fontSize: 35,
              color: '#f2f2f2',
              fontWeight: 'bold'
            }
          }>Hiling.Id</Text>
        </View>
      </View>
      <View style={styles.footer}>
        
      </View>
      <View style={styles.floatView}>

      </View>
      <StatusBar style='dark'/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuView: {
    backgroundColor: '#86b257',
    width: '100%',
    height: '65%',
    marginTop: '5%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15
  },
  textLogoView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '2%'
  },
  footer: {
    width: '100%',
    height: '26.6%',
    margin: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2'
  },  
  floatView: {
    width: '90%',
    height: '55%',
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    position: 'absolute'
  }
});