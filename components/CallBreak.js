import { TouchableOpacity, StyleSheet, Text, View, Alert } from 'react-native';
import React from 'react';

const CallBreak = () => {
  return (
    <View>
      <Text>CallBreak</Text>
      <View>
        <Text></Text>
      </View>

      <View>
        <TouchableOpacity onPress={Calculate}>
          <Text>Calculate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Calculate = () => {
  const { player1, player2, player3, player4 } = body.Text;
  const total = 13;
  if (player1 + player2 + player3 + player4 > total)
    return Alert.alert('The total entered value should not be greater than 13');
};

export default CallBreak;

const styles = StyleSheet.create({});
