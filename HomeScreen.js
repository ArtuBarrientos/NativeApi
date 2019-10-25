import React,{ useState, useEffect } from 'react';
import { StyleSheet, FlatList, TouchableOpacity,View,Text as TextReact } from 'react-native';
import { Container, Content, Card, CardItem, Text, Left, Right, Icon, Thumbnail,Body } from 'native-base';
import axios from 'axios';
import ModalCreateItem from './ModalCreateItem';

const HomeScreen= props => {
  const [ processor, setProcessor ] = useState([])

  useEffect(() => {
       getList();
	} ,
     []);
     

 function getList(){
        axios.get("http://192.168.1.80:8080/api/processor")
        .then(res => res.data)
        .then( data =>{
          setProcessor(data)
        })
  }



  return (
    <Container>
        <ModalCreateItem/>
        <Content style={styles.container}>
                <FlatList
                  data={processor}
                  renderItem={
                  ({item}) => 
                  <View>
                      <TouchableOpacity onPress={()=> props.navigation.navigate('DetailsScreen',{
                        nombre: item.nombre,
                        nucleos: item.nucleos,
                        hilos: item.hilos,
                        tdp: item.tdp,
                        image: item.image,
                      })}>
                        <Card>
                              <CardItem>
                                  <Left>
                                    <Thumbnail square large source={{ uri: item.image} }/>
                                  </Left>
                                  <Right>
                                    <Body style={{marginTop:'10%'}}>
                                        <Text style={{fontSize:20.5}}>{item.nombre}</Text>
                                    </Body>
                                  </Right>
                            </CardItem>
                          </Card>
                      </TouchableOpacity>
                    </View>
                  }
                keyExtractor={(item, index) => index.toString()}
                />
        </Content>
    </Container>
  );
};




const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 5,
   marginLeft: 10,
   marginRight: 10,
  },
  body: {
    backgroundColor: 'rgba(0,0,0, 1.0)',
  },
});

export default HomeScreen;
