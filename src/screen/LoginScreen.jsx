import { Image, ImageBackground, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate('Signup');
  }

  return (
    <View style={styles.container}>
       <View style={styles.topImageContainer}>
        <Image source={require('../assets/topVector.png')} style={styles.topImage} />
       </View>
       <View style={styles.helloContainer}>
        <Text style={styles.helloText}>Hello</Text>
       </View>
       <View>
        <Text style={styles.signInText}>Sign in to your account</Text>
       </View>
       <View style={styles.inputContainer}>
          <FontAwesome name={"envelope-o"} size={24} style={styles.inputIcon} />
          <TextInput 
            style={styles.textInput}
            placeholder="Email"
           />
       </View>
       <View style={styles.inputContainer}>
          <FontAwesome name={"lock"} size={24} style={styles.inputIcon} />
          <TextInput 
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry
           />
       </View>
       <Text style={styles.forgetPasswordText}>Forget your password?</Text>
       <View style={styles.signInButtonContainer}>
          <Text style={styles.signIn}>Sign In</Text>
          <LinearGradient colors={['#F97794', '#623AA2']} style={styles.linearGradient}>
             <FontAwesome name={"chevron-right"} size={24} color={"white"} />
          </LinearGradient>
       </View>
      <TouchableOpacity onPress={handleRegister}> 
         <Text style={styles.footerText}>Don't have an account?<Text style={{textDecorationLine: 'underline'}}>Create</Text></Text>
      </TouchableOpacity>
       <View style={styles.leftVectorContainer}>
          <ImageBackground source={require('../assets/leftVector.png')} style={styles.leftVectorImage} />
       </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor:'#F5F5F5',
    position: 'relative',
  },
  topImageContainer:{

  },
  topImage:{
    width: '100%',
    height: 130
  },
  helloContainer:{},
  helloText:{
    fontSize: 30,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center'
  },
  signInText:{
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
    textAlign: 'center',
    marginBottom: 30
  },
  inputContainer:{
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 50,
    marginHorizontal: 20,
    elevation: 10,
    marginVertical: 20,  
    alignItems: 'center',
    height: 50
  },
  inputIcon:{
    marginLeft: 15,
    marginRight: 5
  },
  textInput:{
    flex: 1,    
  },
  forgetPasswordText:{
    color:"#BEBEBE",
    textAlign: "right",
    width: "90%",
    fontSize: 15,
  },
  signInButtonContainer:{
    flexDirection: 'row',
    marginTop: 120,
    justifyContent: 'flex-end',
    width: '90%'
  },
  signIn:{
    color: "#262626",
    fontSize: 20,
    fontWeight: "bold"
  },
  linearGradient:{
    height: 34,
    width: 56,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  footerText:{
    color: '#000000',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 120,
  },
  leftVectorContainer:{
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  leftVectorImage:{
    height: 450,
    width: 250,
  }
  
})