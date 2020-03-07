import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';

export default function App() {

  const [name, setName] = useState('Hola Reactivo');

  return (
    <ImageBackground source={require('./assets/fondo.png')} style={styles.container}>

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={require('./assets/plataforma.png')} style={styles.logo} />
        </View>

        <View style={styles.headerRight}>
          <Button style={styles.button} title='Login' onPress={() => {
            setName('No te logeo una mierda')
          }}></Button>
        </View>
      </View>

      <View style={styles.body}>
        <Text >{name}</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerLeft}><Text>MENU</Text></View>
        <View style={styles.footerCenter}><Text>ESTADO</Text></View>
        <View style={styles.footerRight}><Text>CONTACTO</Text></View>
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
