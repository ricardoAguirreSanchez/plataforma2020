import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, Platform ,  TextInput} from 'react-native';

export default function App() {

  const [saludo, setSaludo] = useState('Reactivo');
  const [cod, setCod] = useState(255);

  return (
    <ImageBackground source={require('./assets/fondo.png')} resizeMode='cover' style={styles.container}>

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={require('./assets/plataforma.png')} style={styles.logo} />
        </View>

        <View style={styles.headerRight}>
          <Button style={styles.button} title='Login' onPress={() => {
            setSaludo('No te logeo una mierda')
            setCod(1111111)
          }}></Button>
        </View>
      </View>

      <View style={styles.body}>
        <TextInput placeholder="Ingresa el nombre:" onChangeText={(nuevoNombre) => setSaludo(nuevoNombre)} 
          style={styles.textinput} placeholderTextColor="white" maxLength={10}> 
        </TextInput>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerLeft}><Text style={styles.text}>Hola {saludo} Nº:{cod}</Text></View>
        <View style={styles.footerCenter}><Text style={styles.text}>ESTADO</Text></View>
        <View style={styles.footerRight}><Text style={styles.text}>CONTACTO</Text></View>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'green',
  },

  
  textinput:{
    borderWidth:1,
    borderColor:"white",
    padding:5,
    fontSize:25,
  },


  text:{
    color:'white',
    fontSize:25,
  },

  header: {
    flexDirection: 'row',
  },
  headerLeft: {
    marginTop: 30,
    flex: 1,
    // backgroundColor:'yellow',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 10,
  },

  headerRight: {
    marginTop: 30,
    marginRight: 10,
    // backgroundColor:'red',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  footer: {
    flex: 0.1,
    flexDirection: 'row',
  },

  footerLeft: {
    flex: 1,
    alignItems: 'center',
  },

  footerCenter: {
    flex: 1,
    alignItems: 'center',
  },

  footerRight: {
    flex: 1,
    alignItems: 'center',
  },
});
