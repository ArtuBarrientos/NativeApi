import React,{useState} from 'react';
import { Image, StyleSheet,View } from 'react-native';
import { Container, Content, Card, CardItem, Text, Button} from 'native-base';

const DetailsScreen = props =>{
  /*const UrlImages = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
    const url = (props.navigation.getParam('url'))*/
    const [params] = useState(props.navigation.getParam('item'))

    return(
        <Container style={styles.body}>
            <Content style={styles.container}>
                    <Card style={styles.card}>    
                        <CardItem>
                                <Text style={{fontSize:30}}>{params.nombre}</Text>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{uri: params.image}} style={{height: 300, width: null, flex: 1}}/>
                        </CardItem>
                                <Text style={styles.text}>
                                    Nucleos : <Text style={styles.numText}>{params.nucleos}</Text>
                                </Text>
                                <Text style={styles.text}>
                                    Hilos : <Text style={styles.numText}>{params.hilos}</Text>
                                </Text>
                                <Text style={styles.text}>
                                    TDP : <Text style={styles.numText}>{params.tdp}</Text>
                                </Text>
                        <CardItem>
                            <View>
                                <Button transparent>
                                  <Text>Editar</Text>
                                </Button>
                                <Button transparent>
                                  <Text>Eliminar</Text>
                                </Button>
                            </View>
                        </CardItem>
                    </Card>
            </Content>
        </Container>
    );
}

       
const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 10,
     marginLeft: 10,
     marginRight: 10,
    },
    body: {
    },
    text: {
        fontSize: 30
    },
    numText:{
       fontSize :25
    },
    card:{
    }
  });
    




export default DetailsScreen;