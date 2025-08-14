// Arquivo: LoginScreen.js
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

export default function LoginScreen() {
  const navigation = useNavigation();

// Para o ícone do Google, a melhor prática é usar uma biblioteca como react-native-vector-icons
// Por simplicidade, aqui usaremos um Text, mas abaixo explico como usar um ícone real.

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        
        {/* Títulos de boas-vindas */}
        <Text style={styles.title}>Ótimo dia!</Text>
        <Text style={styles.subtitle}>Como deseja acessar?</Text>

        {/* Botão de Login com Google */}
        <TouchableOpacity style={[styles.button, styles.googleButton]}>
          <View style={styles.buttonContent}>
            {/* Placeholder para o ícone do Google */}
            <Text style={styles.googleIcon}>G</Text>
            <Text style={styles.googleButtonText}>Acessar com Google</Text>
          </View>
        </TouchableOpacity>

        {/* Botão de Outras Opções */}
        <TouchableOpacity style={[styles.button, styles.otherOptionsButton]}>
          <Text style={styles.otherOptionsButtonText}>Outras opções</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

// Estilos para os componentes da tela
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f7f8fa', // Um cinza bem claro para o fundo
  },
  container: {
    flex: 1,
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center',     // Centraliza o conteúdo horizontalmente
    paddingHorizontal: 30,     // Adiciona um espaçamento nas laterais
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40, // Espaço maior antes dos botões
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 12, // Bordas mais arredondadas
    alignItems: 'center',
    marginBottom: 15,
  },
  googleButton: {
    backgroundColor: '#00c853', // Verde vibrante similar ao da imagem
  },
  buttonContent: {
    flexDirection: 'row', // Alinha o ícone e o texto na horizontal
    alignItems: 'center',
  },
  googleIcon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 15, // Espaço entre o ícone e o texto
  },
  googleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  otherOptionsButton: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: '#00c853', // Borda com a mesma cor do botão principal
  },
  otherOptionsButtonText: {
    color: '#00c853', // Texto com a mesma cor da borda
    fontSize: 16,
    fontWeight: '500',
  },
});