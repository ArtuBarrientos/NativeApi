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
    const [animate] =useState(new Animated.Value(30))
    const [animateXY] = useState(new Animated.ValueXY({x: 0, y: 0}))
    const [ radius ] = useState(new Animated.Value(0))
    const {width, height} = Dimensions.get('window');
    const [off, setOnn] = useState(false);
    const [num, setNum] = useState(1)

    useEffect(() => {
        if (off) {
            Animated.sequence([
                Animated.timing(animateXY, {
                    toValue: { x: height /num, y: 0 },
                    duration: 3000
                }),
                Animated.timing(animate, {
                    toValue: 60,
                    duration: 3000
                }),
                Animated.timing(radius, {
                    toValue: 40,
                    duration: 2000
                })
            ]).start()
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
                        position: 'absolute',
                        right: animateXY.y,
                        left: animateXY.x,
                        borderRadius: radius
                        }
                    }>
               </Animated.View>
                    
                    <TouchableOpacity 
                    style={{backgroundColor:'gray'}}
                    onPress={()=>setOnn(1)}
                    >
                    <Text style={{fontSize:20}}>Oprime esto crack</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                
                    onPress={()=>setNum(-1)}
                    >
                    <Text style={{fontSize:20}}>2</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity 
                
                    onPress={()=>setNum(0)}
                    >
                    <Text style={{fontSize:20}}>3</Text>
                  </TouchableOpacity>
                
                
            
            
      </View>
    );
}

        const styles = StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F5FCFF',
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