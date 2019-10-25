import React,{ useState, useEffect } from 'react';
import { StyleSheet, FlatList, TouchableOpacity,View,Text as TextReact } from 'react-native';
import { Container, Content, Card, CardItem, Text, Left, Right, Icon, Thumbnail,Body } from 'native-base';
import axios from 'axios';

const Home= props => {
  const [ pokemon, setPokemon ] = useState([])
  const [ processor, setProcessor ] = useState([])
  const UrlImages = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

  useEffect(() => {
       getList();
	} ,
     []);
     

 function getList(){
       axios.get("https://pokeapi.co/api/v2/pokemon")
			.then(res => res.data)
			.then( data =>{
        setPokemon(data.results)
      })
  }

  useEffect(() => {
    getl();
} ,
  [processor]);
  
 function getl(){
  axios.get("http://192.168.1.80:8080/api/processor")
 .then(res => res.data)
 .then( data =>{
   setProcessor(data)
 })
}

  return (
    <Container>
        <Content style={styles.container}>
                <FlatList
                  data={pokemon}
                  renderItem={
                  ({item}) => 
                  <View>
                      <TouchableOpacity onPress={()=> props.navigation.navigate('DetailsScreen',{
                        nombre: item.name,
                        url: item.url
                      })}>
                        <Card>
                              <CardItem style={styles.body}>
                                  <Left>
                                    <Thumbnail large source={{ uri: `${UrlImages}${item.url.split('/')[item.url.split('/').length - 2]}.png?raw=true`}} />
                                  </Left>
                                  <Body style={{marginTop:'10%'}}>
                                      <Text style={{color:'#ffff',fontSize:20.5}}>{item.name}</Text>
                                  </Body>
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

const DetailsScreen = props =>{
  const UrlImages = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
  const url = (props.navigation.getParam('url'))

  return(
      <Container style={styles.container}>
          <Content>
                  <Card>
                      <CardItem>
                          <Left>
                              <Body>
                              <Text style={{fontSize:30}}>{JSON.stringify(props.navigation.getParam('nombre'))}</Text>
                              </Body>
                          </Left>
                      </CardItem>
                      <CardItem cardBody>
                          <Image source={{uri: `${UrlImages}${url.split('/')[url.split('/').length - 2]}.png?raw=true`}} style={{height: 300, width: null, flex: 1}}/>
                      </CardItem>
                      <CardItem>
                          <Left>
                              <Button transparent>
                              <Text>Editar</Text>
                              </Button>
                          </Left>
                          <Right>
                              <Button transparent>
                              <Text>Eliminar</Text>
                              </Button>
                          </Right>
                      </CardItem>
                  </Card>
          </Content>
      </Container>
  );
}


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

export default Residuo;
