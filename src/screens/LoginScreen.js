import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import LoginScreen_img from '../assets/images/casual_dog.png';
import iconGoogle from '../assets/images/Google.png';

export default function LoginScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Image
        source={LoginScreen_img}
        style={styles.LoginScreen_img}
      />
      <Text style={styles.title}>Ótimo dia!</Text>
      <Text style={styles.subtitle}>Como deseja acessar?</Text>

      <TouchableOpacity style={styles.buttonAcessar}>
        <View style={styles.viewAcessar}>
          <Image
            source={iconGoogle}
            style={styles.iconGoogle}
          />
          <Text style={styles.txtAcessar}>Como deseja acessar?</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonOpcoes} onPress={() => navigation.navigate('OtherOptions')}>
        <Text style={styles.txtOpcoes}>Outras opções</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoginScreen_img: {
    marginBottom: 20,
  },
  iconGoogle: {
    width: 25,
    height: 25,
  },
  viewAcessar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    position: 'relative',
    paddingLeft: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 13,
    color: '#888',
    marginBottom: 20,
  },
  buttonAcessar: {
    backgroundColor: '#14C871',
    borderRadius: 5,
    width: 350,
    height: 50,
    marginBottom: 20,
  },
  buttonOpcoes: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#14C871',
    width: 350,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtAcessar: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
  txtOpcoes: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
});