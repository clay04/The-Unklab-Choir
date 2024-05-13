import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  import LinearGradient from 'react-native-linear-gradient';
  import {Mail, Password} from '../../assets';
  import {Button, Gap} from '../../components';
  import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
  import {showMessage} from 'react-native-flash-message';
  
  const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const onSubmit = () => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          const user = userCredential.user;
          navigation.navigate('Menu', {uid: user.uid});
        })
        .catch(error => {
          const errorMessage = error.message;
          showMessage({
            message: errorMessage,
            type: 'danger',
          });
        });
    };
  
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#ffffff', '#ffffff']}
          style={styles.lineargradient}>
          <Text style={styles.text}>Log In</Text>
          <View style={styles.input}>
            <Mail style={styles.icon} />
            <TextInput
              placeholder="Your Email"
              placeholderTextColor={'#000000'}
              keyboardType="email-address"
              value={email}
              onChangeText={value => setEmail(value)}
              style={styles.inputIn}
            />
          </View>
          <View style={styles.input}>
            <Password style={styles.icon} />
            <TextInput
              placeholder="Password"
              placeholderTextColor={'#000000'}
              secureTextEntry={true}
              value={password}
              onChangeText={value => setPassword(value)}
              style={styles.inputIn}
            />
          </View>
          <Gap height={40} />
          <Button label="Log In" onPress={onSubmit} borderRadius={25} backgroundColor='#530303' textColor='#ffffff'/>
          <Text style={{color: '#000', fontFamily: 'Poppins-Medium', marginVertical: 10,}}>Or</Text>
          <Button label="Continue As Guest" type="google" onPress={() => navigation.navigate('Menu')} borderRadius={25} backgroundColor='#C1C1C1'/>
          <Gap height={10} />
        </LinearGradient>
      </View>
    );
  };
  
  export default Login;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    lineargradient: {
      flex: 1,
      alignItems: 'center',
    },
    text: {
      paddingTop: 172,
      color: '#000000',
      fontSize: 22,
      fontWeight: '500',
      paddingBottom: 60,
      fontFamily: 'Poppins-Medium'
    },
    input: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 300,
      borderWidth: 1,
      borderColor: '#5E2590',
      borderRadius: 30,
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      paddingHorizontal: 15,
      marginVertical: 14,
      fontFamily: 'Poppins-Medium',
    },
    icon: {
      marginRight: 10,
    },
    inputIn: {
        color: '#000',
        fontFamily: 'Poppins-Medium',
        width: 300,
    }
  });