import React, {useState, useEffect} from 'react';
import {Modal, Text, TouchableOpacity, View, TextInput, StyleSheet } from 'react-native';
import { Icon } from 'native-base';



const ModalCreateItem= props => {
  const [modalVisible, setModal] = useState(false)
  const [nombre, setNombre] = useState("");
  const [nucleos, setNucleos] = useState("");
  const [hilos, setHilos] = useState("");
  const [tdp, setTdp] = useState("");  
  const [states, setState] = useState(nombre,nucleos,hilos,tdp)



  const setModalVisible=(visible)=> {
    setModal(visible);
  }


  const createItem = () =>{
    setState(states)
     props.datosAdd(states)   
  } 
  

  const styles = StyleSheet.create({
      buttonModal: {
        width: 60,  
        height: 60,   
        borderRadius: 30,            
        backgroundColor: '#7fff00',                                    
        alignItems:'center',
        justifyContent:'center',
        position: 'absolute',
        right:10,
        bottom:10,                                          
      },
      textInput:{
        fontSize:20,
        marginTop:20,
        color: props.theme ? 'black' : 'white',
      },
      modalContent: {
        backgroundColor: props.theme ? 'white' : 'black',
        justifyContent:'space-between',
        
      },
  })

    return (     

      <View>
         <TouchableOpacity
                style={styles.buttonModal}  
                onPress={() => {
                  setModalVisible(true);
                }}>
                <Icon name="add"/>
            </TouchableOpacity>
            <Modal     
              animationType="slide"
              transparent={false}
              visible={modalVisible}
              onRequestClose={() => {
                setModal(false)
              }}>
            
                    <View style={styles.modalContent}>
                        <TouchableOpacity style={{flexDirection:'row-reverse',marginTop:20}} onPress={() => {setModalVisible(!modalVisible);}}>
                                        <View style={{marginRight:20,backgroundColor:'white',width:25,height:25,justifyContent:'center',alignItems:'center',borderRadius:50}}>
                                          <Icon name='close-circle'/>
                                        </View>
                        </TouchableOpacity>
                            <View style={{paddingRight:20, paddingLeft:20}}> 
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Nombre"
                                    placeholderTextColor={props.theme ? 'black' : 'white'}
                                    underlineColorAndroid={props.theme ? 'black' : 'white'}
                                    value={nombre}  
                                    onChangeText={text=>setNombre(text)}                 
                                />
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Nucleos"
                                    placeholderTextColor={props.theme ? 'black' : 'white'}
                                    underlineColorAndroid={props.theme ? 'black' : 'white'}
                                    value={nucleos}    
                                    onChangeText={text=>setNucleos(text)}                 
                                />
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Hilos"
                                    placeholderTextColor={props.theme ? 'black' : 'white'}
                                    underlineColorAndroid={props.theme ? 'black' : 'white'}
                                    value={hilos}  
                                    onChangeText={text=>setHilos(text)}
                                />
                                <TextInput
                                  style={styles.textInput}
                                    placeholder="Tdp"
                                    placeholderTextColor={props.theme ? 'black' : 'white'}
                                    underlineColorAndroid={props.theme ? 'black' : 'white'}
                                    value={tdp}  
                                    onChangeText={text=>setTdp(text)}
                               />  
                            </View> 
                              <TouchableOpacity
                                  onPress={createItem}>
                                      <View style={{backgroundColor:'#7fff00', width:'100%',alignItems:'center',marginTop:100}}>
                                        <Text style={{color:'#000',fontSize:50}}>Agregar</Text>
                                      </View>
                             </TouchableOpacity>
                      </View>
            </Modal>             
      </View>


    );
  
}

export default ModalCreateItem;

  