import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Image } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import backArrowIcon from '../assets/images/arrow.png';
import googleIcon from '../assets/images/Google.png';
import facebookIcon from '../assets/images/Facebook.png';

export default function OtherOptions({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={[globalStyles.container, styles.screenContainer]}>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Login')}>
          <Image
            source={backArrowIcon}
            style={styles.backArrowIcon}
          />
        </TouchableOpacity>

        <Text style={styles.title}>Acesse</Text>
        <Text style={styles.subtitle}>Insira seus dados!</Text>

        <Text style={globalStyles.inputLabel}>Email:</Text>
        <TextInput style={globalStyles.input} placeholder="seu.email@exemplo.com" keyboardType="email-address" />

        <Text style={globalStyles.inputLabel}>Senha:</Text>
        <TextInput style={globalStyles.input} placeholder="********" secureTextEntry={true} />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[globalStyles.button, globalStyles.primaryButton, styles.halfWidthButton]}>
            <Text style={[globalStyles.buttonText, globalStyles.primaryButtonText]}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[globalStyles.button, styles.secondaryRegisterButton, styles.halfWidthButton]}>
            <Text style={[globalStyles.buttonText, globalStyles.secondaryButtonText]}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.separatorText}>Outras maneiras de entrar:</Text>

        <View style={styles.socialIconsContainer}>
          <TouchableOpacity>
            <Image source={googleIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={facebookIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 80,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  backArrowIcon: {
    height: 30,
    width: 30,
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 40,
  },
  halfWidthButton: {
    width: '48%',
    height: 55,
    marginBottom: 0,
  },
  secondaryRegisterButton: {
    backgroundColor: '#f0f0f0ff',
  },
  separatorText: {
    fontSize: 15,
    alignSelf: 'center',
    color: '#888',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    marginTop: 20,
  },
});