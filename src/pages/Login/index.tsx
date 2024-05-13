import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Gap, TextInput } from '../../components'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {showMessage} from 'react-native-flash-message';
import { Mail } from '../../assets';

const Login = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

  const onSubmit = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        navigation.navigate('Home', {uid: user.uid});
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
      <ScrollView>
        <Text style={styles.title}>Login</Text>
        <Gap height={100} />
        <TextInput placeholder="Your Email"/>
        <Gap height={25} />
        <TextInput placeholder="Your Password" type="password"/>
        <Gap height={50} />
        <Button label="Log In" backgroundColor='#530303' textColor={'#ffffff'} borderRadius={25} onPress={onSubmit}/>
      </ScrollView>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 200,
        padding: 50,
    },
    title: {
        fontSize: 16,
        color: '#000000',
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
    }
})