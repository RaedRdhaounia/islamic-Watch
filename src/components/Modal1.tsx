import React from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { COLORS } from '../constants/light';
import Calender from './Calender';

const Modal1 = ({show, setShow, setStatisticsDay}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setShow(!show)}>
            <Text style={styles.textStyle}>close</Text>
          </Pressable>
          <Calender setStatisticsDay={setStatisticsDay} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    padding: 35,
    alignItems: 'center',
   
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom:10
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: COLORS.dark,
  },
  textStyle: {
    color: "white",
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 150,
    textAlign: 'center',
  },
});
export default Modal1;
