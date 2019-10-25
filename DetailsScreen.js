import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

const DetailsScreen = props =>{
  /*const UrlImages = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
    const url = (props.navigation.getParam('url'))*/

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
                            <Image source={{uri: props.navigation.getParam('image')}} style={{height: 300, width: null, flex: 1}}/>
                        </CardItem>
                            <Left>
                                <Body>
                                    <Text style={{fontSize:25}}>Nucleos: {props.navigation.getParam('nucleos')}</Text>
                                    <Text style={{fontSize:25}}>Hilos: {props.navigation.getParam('hilos')}</Text>
                                    <Text style={{fontSize:25}}>TDP: {props.navigation.getParam('tdp')}</Text>
                                </Body>
                            </Left>
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
    




export default DetailsScreen;