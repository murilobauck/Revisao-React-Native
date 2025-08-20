import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Image } from 'react-native';
import arrow from '../assets/images/arrow.png';
import iconGoogle from '../assets/images/Google.png';
import iconFacebook from '../assets/images/Facebook.png';

export default function OtherOptions({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>

        <TouchableOpacity style={styles.touchablearrow} onPress={() => navigation.navigate('Login')}>
          <Image
            source={arrow}
            style={styles.imgarrow}
          />
        </TouchableOpacity>

        <Text style={styles.title}>Acesse</Text>
        <Text style={styles.subtitle}>Insira seus dados!</Text>

        <Text style={styles.inputtitle}>Email:</Text>
        <TextInput style={styles.input} placeholder="email" keyboardType="default" />

        <Text style={styles.inputtitle}>Senha:</Text>
        <TextInput style={styles.input} placeholder="senha" keyboardType="default" />

        <View style={styles.viewbutton}>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttontxt1}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttontxt2}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.outros}>Outras maneiras de entrar:</Text>

        <View style={styles.viewimg}>
          <Image
            source={iconGoogle}
          />
          <Image
            source={iconFacebook}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    paddingLeft: 30,
    paddingTop: 60,
    paddingRight: 30,
    paddingBottom: 50,
  },

  touchablearrow: {
    position: 'absolute',
    paddingLeft: 30,
    paddingTop: 20,
    paddingRight: 30,
    paddingBottom: 50,
  },

  imgarrow: {
    height: '30',
    width: '30',
  },

  viewbutton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '40',
    paddingTop: '30',
    gap: 10,
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    color: '#888',
    marginBottom: 20,
  },

  inputtitle: {
    paddingBottom: 5,
    paddingTop: 10,
  },

  input: {
    height: 55,
    width: 350,
    backgroundColor: '#f0f0f0ff',
    borderRadius: 5,
    paddingLeft: 5,
  },

  button1: {
    backgroundColor: '#14C871',
    borderRadius: 5,
    width: 170,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttontxt1: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
  },

  button2: {
    backgroundColor: '#f0f0f0ff',
    borderRadius: 5,
    width: 170,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttontxt2: {
    fontWeight: 'bold',
    fontSize: 14,
  },

  viewimg: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    paddingTop: 40,
  },

  outros: {
    fontSize: 15,
    alignSelf: 'center',
  },
});