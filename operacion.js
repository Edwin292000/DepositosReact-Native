import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Alert, ScrollView, ImageComponent} from 'react-native';
import * as DATA from './Data.js';
const personas=DATA.personas

class operacion extends Component{
    constructor(props) {
        super(props);
        this.state = {
          monto:0
        };
    }
    render(){
        const { params } = this.props.route;
        const titulo="OPERACION DE "+params.operacion.toUpperCase()
        this.props.navigation.setOptions({title:titulo})
        const aceptar=()=>{

          if(params.operacion=="retiro"){
            if (this.state.monto>params.saldo){
              Alert.alert("El monto ha retirar no puede ser mayor al saldo")
            }
            else{
              personas.map((p)=>{
                if(p.id===params.id){
                  p.saldo= p.saldo-this.state.monto;
                }
              }
              )
              Alert.alert(params.operacion+" correcto")
              this.props.navigation.navigate('Home')
            }
          }
          else{
              personas.map((p)=>{
                if(p.id===params.id){
                  p.saldo= parseInt(p.saldo)+this.state.monto
                }
              }
              )
              Alert.alert(params.operacion+" correcto")
              this.props.navigation.navigate('Home')
          }
      }
        return(
            <View>
                <Text style={styles.texto}>Transaccion de {params.operacion} para {params.nombre}</Text>
                <Text style={styles.texto}>Saldo: {params.saldo}</Text>
                <Text style={styles.texto}>Monto: {this.state.monto}</Text>
                
                <Text style={{fontSize:20}}>Saldo despues de la transacción: {params.operacion=="retiro" ? params.saldo-this.state.monto: (parseInt(params.saldo)+parseInt(this.state.monto))}</Text>
                <TextInput keyboardType="numeric" style={styles.input} onChangeText={(monto)=>this.setState({monto: monto ? parseInt(monto):0})}></TextInput>
                <Button title="Aceptar transacción" onPress={()=> aceptar()}></Button>
            </View>  
        )
    }
}

export default operacion;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content:{
      backgroundColor:'white',
      height:'50%',
      width:'100%',
      alignItems:'center',
      justifyContent:'center'
    },
    input:{
      borderWidth:1,
      borderColor:'black',
      alignItems:'center',
      width:'75%',
      margin:5,
      padding:5,
      paddingLeft:20,
      borderRadius:25
    },
    texto:{
        fontSize:25
    }
  });

