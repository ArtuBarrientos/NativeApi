import React,{ useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity,Text,View } from 'react-native';
import { Container, Content, Icon, Thumbnail } from 'native-base';
import axios from 'axios';
import ModalCreateItem from './ModalCreateItem';
import config from './config';
import {SwipeableFlatList} from 'react-native-swipeable-flat-list';
//import Animated from 'react-native-reanimated';

const HomeScreen= props => {
    const [ processor, setProcessor ] = useState([]);
    const [theme, setTheme] = useState(true);

    const Handletoggle = () => {
      const nextTheme = theme ? false : true
      setTheme(nextTheme)
    };

    const defaultOptions = {
      loop: true,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio:'xMidYMid slice'
      }
    }
    

    useEffect(() => {
        getList();
    } ,
      []);  
      
  
 function getList(){
        axios.get(config.url+"/api/processor")
        .then(res => res.data)
        .then( data =>{
          setProcessor(data)
        })
  }

   const datosAdd = async(item) =>{
  await axios.post(config.url+"/api/processor", {
      nombre: item.nombre,
      nucleos: item.nucleos,
      hilos: item.hilos,
      tdp: item.tdp,
    })
    .then(res => { 
    setProcessor(processor)
    console.warn(res);
    })
    .catch(err => {
    console.warn(err);
    })
    
  }


  const deleteById = async(id) =>{
    await axios.delete(config.url+"/api/processor/"+id
    )
    .then(res => { 
      setProcessor(processor.filter(item => item.id !== id))
      console.log(res);
      console.log('Eliminado exitosamente')
    })
    .catch(err => {
    console.log(err);
    });
 }
   
   
  const styles = StyleSheet.create({
    container:{
    alignItems:'center'  
    },
    content: {
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
    },
    rowFront: {
      flex: -1,
      flexDirection: 'row',
      justifyContent:'space-between',
      paddingLeft:15,
      paddingRight:15,
      alignItems:'center',
      height:100,
      width:'100%',
      backgroundColor: theme ? 'white' : 'black',
      borderWidth: .5,
      borderColor: theme ? 'black' : 'white',
      borderRadius:5,
    },
    rowBack: {
      flexDirection: 'row',
      width:130,
      height:100,
  },
    buttonsSwipe:{
      justifyContent:'center',
      alignItems:'center',
      width: '50%',
      height: '100%',
    },
    switch: {
      width:80,
      height:40,
      borderRadius:20,
      borderWidth: .8,
      borderColor: theme ? 'black' : 'white',
      flexDirection: 'row-reverse'
    },
  toggle: {
    width:'50%',
    height:'100%',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    left: theme ? '100%' : 0,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: .5,
  },
  backgroundBlack:{
   backgroundColor: theme ? 'white' : 'black',
  },
  backgroundWhite: {
    backgroundColor: theme ? 'black': 'white',
  },
  colorBlack:{
    color: theme ? 'white': 'black'
  },
  colorWhite: {
    color: theme ? 'black': 'white'
  }
  });
 
 

  return (
        <Container style={styles.backgroundBlack}>
                <View style={{flexDirection: 'row', justifyContent:'space-evenly',alignItems:'center',marginTop:15}}>
                  <Text style={[{fontSize:15},styles.colorWhite]}>DARK MODE</Text>
                      <TouchableOpacity onPress={Handletoggle} style={styles.switch}>
                          <View style={styles.toggle}>                 
                                <Icon name={ theme ? 'sunny' : 'moon'}/>
                          </View>
                      </TouchableOpacity>
                </View>
                <Content style={styles.content}>
                        <SwipeableFlatList
                          data={processor}
                          renderItem={
                          ({item}) => (
                                <View style={styles.rowFront}>
                                  <View>                                 
                                    <Thumbnail style={styles.avatar} square large source={{ uri: item.image} }/>
                                  </View>
                                  <View style={{flex:-1,flexDirection:'column',paddingLeft:15}}>
                                    <Text style={{fontSize:25,color: theme ? 'black': 'white'}}>{item.nombre}</Text>                           
                                  </View>
                                </View>    
                          )}
                          renderRight={({item}) => (
                            <View style={styles.rowBack}>
                                <TouchableOpacity style={[{backgroundColor:"rgba(249,6,6,0.82)"}, styles.buttonsSwipe]} onPress={()=>deleteById(item.id)}>
                                    <View>
                                        <Icon name="trash"/>  
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={[{backgroundColor: "rgba(6,249,77,0.92)"}, styles.buttonsSwipe]} onPress={()=> props.navigation.navigate('Animations')}>
                                    <View>
                                        <Icon name="arrow-forward"/> 
                                    </View> 
                                </TouchableOpacity>
                            </View>
                          )}                
                            keyExtractor={(item, index) => index.toString()}
                        />
                </Content>
                <ModalCreateItem datosAdd={datosAdd} theme={theme}/>
        </Container>
  );
};
    
export default HomeScreen;
