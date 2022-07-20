import { StyleSheet, Text, View, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';

const image = { uri: 'https://mfiles.alphacoders.com/245/245630.jpg' };

const IntroScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.imageStyles} blurRadius={20}>
        <View>
          <Text style={styles.textStylesMenu}>Choose a Card Game</Text>
          <View style={styles.viewStyles}>
            <TouchableOpacity
              style={styles.buttonStyles}
              onPress={() => {
                navigation.navigate('CallBreak Calculator');
              }}>
              <Text style={styles.buttonTextStyles}>Call Break</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyles}
              onPress={() => {
                navigation.navigate('Marriage Calculator');
              }}>
              <Text style={styles.buttonTextStyles}>Marriage</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyles}
              onPress={() => {
                navigation.navigate('Larra Calculator');
              }}>
              <Text style={styles.buttonTextStyles}>Larra</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyles: {
    flex: 1,
  },
  viewStyles: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  textStylesHeader: {
    marginVertical: StatusBar.currentHeight,
    backgroundColor: 'gold',
    fontSize: 20,
    color: 'black',
    textDecorationColor: 'white',
    textAlign: 'center',
    margin: 0,
    fontWeight: 'bold',
  },
  textStylesMenu: {
    color: 'gold',
    marginVertical: 20,
  },
  buttonStyles: {
    flex: 1,
    width: '25%',
    backgroundColor: 'gold',
    paddingVertical: 20,
    margin: 2,
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 10,
  },
  buttonTextStyles: {
    flex: 1,
    textAlign: 'center',
  },
});
