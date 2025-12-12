import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { COLORS, SIZES, FONTS } from '../constants/theme';
import Input from '../components/Input';
import Button from '../components/Button';
import { useUser } from '../context/UserContext';
import { USER as DEFAULT_USER } from '../data/mock';

const LoginScreen = ({ navigation }) => {
  const { setUser } = useUser();
  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({});

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
    setErrors(prevState => ({ ...prevState, [input]: null })); // Limpa erro ao digitar
  };

  const handleError = (errorMessage, input) => {
    setErrors(prevState => ({ ...prevState, [input]: errorMessage }));
  };

  const validate = () => {
    let isValid = true;
    if (!inputs.email) {
      handleError('Por favor, insira seu e-mail.', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Por favor, insira um e-mail válido.', 'email');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Por favor, insira sua senha.', 'password');
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError('A senha deve ter pelo menos 5 caracteres.', 'password');
      isValid = false;
    }

    if (isValid) {
      login();
    }
  };

  const login = () => {
    // Simulação de login
    console.log('Login realizado com:', inputs);

    // Atualiza o contexto do usuário
    // Usa o email como nome se não tiver nome, ou "Usuário"
    // Mantém o resto do mock (endereços, etc)
    const nameFromEmail = inputs.email.split('@')[0];
    const capitalizedName = nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);

    setUser({
      ...DEFAULT_USER,
      name: capitalizedName,
      email: inputs.email,
    });

    navigation.navigate('Main');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
        <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
        >
            {/* Header: Logo & Title */}
            <View style={styles.header}>
                <View style={styles.logoContainer}>
                    <Ionicons name="gift" size={40} color={COLORS.primary} />
                    <Text style={styles.logoText}>GiftNow</Text>
                </View>
                <Text style={styles.title}>Bem-vindo ao GiftNow</Text>
                <Text style={styles.subtitle}>Entre para enviar presentes incríveis</Text>
            </View>

            {/* Form */}
            <View style={styles.formContainer}>
                <Input
                    label="E-mail"
                    iconName="mail-outline"
                    placeholder="exemplo@email.com"
                    error={errors.email}
                    onFocus={() => handleError(null, 'email')}
                    onChangeText={text => handleOnchange(text, 'email')}
                />

                <Input
                    label="Senha"
                    iconName="lock-closed-outline"
                    placeholder="Sua senha secreta"
                    password
                    error={errors.password}
                    onFocus={() => handleError(null, 'password')}
                    onChangeText={text => handleOnchange(text, 'password')}
                />

                <View style={styles.forgotPasswordContainer}>
                   <Button
                        title="Esqueci minha senha"
                        variant="text"
                        onPress={() => console.log('Esqueci senha')}
                        style={{ alignSelf: 'flex-end', paddingVertical: 0 }}
                   />
                </View>

                <Button title="Entrar" onPress={validate} />

                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>Não tem conta? </Text>
                    <Text
                        style={[styles.signupText, { color: COLORS.primary, fontWeight: 'bold' }]}
                        onPress={() => navigation.navigate('Register')}
                    >
                        Criar conta
                    </Text>
                </View>
            </View>

            {/* Social Login */}
            <View style={styles.socialContainer}>
                <View style={styles.dividerContainer}>
                    <View style={styles.divider} />
                    <Text style={styles.dividerText}>Ou entre com</Text>
                    <View style={styles.divider} />
                </View>

                <View style={styles.socialButtons}>
                    <Button
                        title="Google"
                        variant="social"
                        iconName="logo-google"
                        style={{ flex: 1, marginRight: 10 }}
                        onPress={() => console.log('Google Login')}
                    />
                    <Button
                        title="Facebook"
                        variant="social"
                        iconName="logo-facebook"
                        style={{ flex: 1, marginLeft: 10 }}
                        onPress={() => console.log('Facebook Login')}
                    />
                </View>
            </View>

        </ScrollView>
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollContainer: {
    paddingHorizontal: SIZES.padding,
    paddingTop: 30,
    paddingBottom: 50,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: SIZES.medium,
    color: COLORS.textLight,
    textAlign: 'center',
  },
  formContainer: {
    marginBottom: 20,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
    marginTop: -10,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  signupText: {
    fontSize: SIZES.font,
    color: COLORS.text,
  },
  socialContainer: {
    marginTop: 10,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  dividerText: {
    marginHorizontal: 10,
    color: COLORS.textLight,
    fontSize: SIZES.small,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default LoginScreen;
