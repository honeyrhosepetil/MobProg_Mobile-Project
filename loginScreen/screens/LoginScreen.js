import React from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importing icons

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../Images/logo.png')} style={styles.logo} />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#951A1D" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholderTextColor="#951A1D"
          keyboardType="email-address"
        />
      </View>

      {/* Password Input with Icon */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#951A1D" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholderTextColor="#951A1D" 
          secureTextEntry={true} 
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signupContainer} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupText}>No account? <Text style={styles.signupLink}>Sign up now!</Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#FFF4F0',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#EAEAEA',
    borderWidth: 1,
    borderRadius: 14,
    marginBottom: 20,
    paddingHorizontal: 20,
    width: '85%',
    height: 43,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  icon: {
    marginRight: 10, // Spacing between icon and text input
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#951A1D', // Text color
  },
  button: {
    backgroundColor: '#951A1D',
    paddingVertical: 14,
    borderRadius: 15,
    marginBottom: 20,
    alignItems: 'center',
    width: '85%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupContainer: {
    position: 'absolute', 
    bottom: 60,
    alignItems: 'center',
  },
  signupText: {
    textAlign: 'center',
    color: '#951A1D',
    fontSize: 14,
    fontWeight: '500',
  },
  signupLink: {
    color: '#F15B2B',
    textDecorationLine: 'underline',
  },
});
