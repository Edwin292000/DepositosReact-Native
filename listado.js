import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList, ScrollView} from 'react-native';
import * as DATA from './Data.js';
const personas=DATA.personas
//console.log(personas)

class lista extends Component{
  constructor(props){
    super(props);
    this.state={
      navigation:this.props.navigation
    }
  }

  operacion=(item,operacion)=>{
    this.state.navigation.navigate('Operacion',
        {id:item.id,
        nombre:item.nombre,
        dpi:item.dpi,
        saldo:item.saldo,
        operacion:operacion
        }
    )
  }
    render(){
        
        const mycard=({item})=>{
            return(
                <View style={styles.mycard}>
                    <Text >DPIs: {item.dpi}</Text>
                    <Text >Nombre: {item.nombre}</Text>
                    <Text >Saldo: {String(item.saldo)}</Text>
                    <View style={{flexDirection:'row', flex:1}}>
                        <View style={{flex:1, margin:5}}>
                        <Button title="Deposito" onPress={()=>this.operacion(item,'deposito')}></Button>
                        </View>
                        <View style={{flex:1,margin:5}}>
                        <Button title="Retiro" onPress={()=>this.operacion(item,'retiro')}></Button>
                        </View>
                    </View>
                </View>
            );
        }

        return( 
            <FlatList style={styles.container}
                data={personas}
                renderItem={mycard}
                keyExtractor={item => item.id}
            />  
        );
    }
}

export default lista

//estilos
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    mycard:{
      margin:5,
      borderColor:'black',
      borderWidth:3,
      borderRadius:10,
      padding:8,
      backgroundColor:'#E5E7E9'
    }
  });