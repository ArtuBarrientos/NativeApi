import React,{useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated,
    Dimensions,
    TouchableOpacity
  } from 'react-native';


const Animations = ()=>{
    const [animate] =useState(new Animated.Value(40))
    const [animateXY] = useState(new Animated.ValueXY({x: 0, y: 0}))
    const [off, setOnn] = useState(false);
    const [num, setNum] = useState(50)

    useEffect(() => {
        if (off) {
            
            Animated.sequence([
                Animated.timing(animateXY, {
                    toValue: { x: 10, y: num },
                    duration: 500
                }),   
            ]).start()

        }else{
            Animated.sequence([
                Animated.timing(animateXY, {
                    toValue: { x: num, y: 300 },
                    duration: 2000
                }),   
            ]).stop()
        } 
    })

    return(
        <View style={styles.container}>
                <Animated.View 
                    style={
                        {
                        width: animate, 
                        height: animate, 
                        backgroundColor: 'red',
                        left:animateXY.y,
                        borderRadius: 50
                        }
                    }>
               </Animated.View>
              <View>
                  <TouchableOpacity 
                    style={{backgroundColor:'gray',marginBottom:20}}
                    onPress={()=>setOnn(true)}
                    >
                    <Text style={{fontSize:20}}>On</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={{backgroundColor:'yellow',marginBottom:20}}
                    onPress={()=>setOnn(false)}
                    >
                    <Text style={{fontSize:20}}>Off</Text>
                    </TouchableOpacity>
                  <TouchableOpacity 
                    style={{backgroundColor:'red',marginBottom:20}}
                    onPress={()=>setNum(10)}
                    >
                    <Text style={{fontSize:20}}>2</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity 
                    style={{backgroundColor:'green'}}
                    onPress={()=>setNum(50)}
                    >
                    <Text style={{fontSize:20}}>3</Text>
                  </TouchableOpacity>
              </View>
                    
                
                
            
            
      </View>
    );
}

        const styles = StyleSheet.create({
            container: {
                flex: 1,
                alignItems: 'center',
                backgroundColor: '#F5FCFF',
                marginTop:25
            },
            welcome: {
                fontSize: 20,
                textAlign: 'center',
                margin: 10,
            },
            instructions: {
                textAlign: 'center',
                color: '#333333',
                marginBottom: 5,
            },
        });


    


export default Animations;