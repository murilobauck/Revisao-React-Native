import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import loginIllustration from '../assets/images/casual_dog.png';
import googleIcon from '../assets/images/Google.png';

export default function LoginScreen({ navigation }) {

  return (
    <View style={globalStyles.container}>
      <Image
        source={loginIllustration}
        style={styles.illustration}
      />
      <Text style={globalStyles.title}>Ótimo dia!</Text>
      <Text style={globalStyles.subtitle}>Como deseja acessar?</Text>

      <TouchableOpacity style={[globalStyles.button, globalStyles.primaryButton]}>
        <View style={styles.buttonContent}>
          <Image
            source={googleIcon}
            style={styles.googleIcon}
          />
          <Text style={[globalStyles.buttonText, globalStyles.primaryButtonText]}>
            Acessar com Google
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[globalStyles.button, globalStyles.secondaryButton]}
        onPress={() => navigation.navigate('OtherOptions')}
      >
        <Text style={[globalStyles.buttonText, globalStyles.secondaryButtonText]}>
          Outras opções
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  illustration: {
    marginBottom: 20,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
});