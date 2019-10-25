import React, {useState} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';

export default function ModalCreateItem() {
  const [modalVisible, setModal] = useState(false)

  const setModalVisible=(visible)=> {
    setModal(visible);
  }


    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
               <TouchableHighlight
                    style={{backgroundColor:'#000'}}>
                    <Text style={{color:'#fff',fontSize:30}}>AGREGAR</Text>
                </TouchableHighlight>
            </View>
            <View>
                <TouchableHighlight
                    style={{backgroundColor:'#000'}}
                    onPress={() => {
                    setModalVisible(!modalVisible);
                    }}>
                    <Text style={{color:'#fff',fontSize:30}}>CERRAR</Text>
                </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          style={{backgroundColor:'#000'}}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text style={{color:'#fff',fontSize:30}}>Agregar nuevo</Text>
        </TouchableHighlight>
      </View>
    );
  
}