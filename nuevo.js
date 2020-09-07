import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Alert, ScrollView, ImageComponent} from 'react-native';
import * as DATA from './Data.js';
const personas=DATA.personas

class nuevo extends Component{
    constructor(props){
        super(props);
        this.state={
            DPI:"",
            Nombre:"",
            Saldo:0
        }
    }
    insertar=()=>{
        try {
            personas.push({
                id:DATA.id+1,
                dpi: this.state.DPI,
                nombre:this.state.Nombre,
                saldo:this.state.Saldo
            });
            DATA.id=DATA.id+1
            Alert.alert("Agregado correctamente");
            this.setState({
                DPI:"",
                Nombre:"",
                Saldo:0
            })
        } catch (error) {
            Alert.alert("Error al insertar");
        }
    }
    render(){
        return(
            <View>
                <Text>Nuevo</Text>
                <Text>DPI: {this.state.DPI}</Text>
                <TextInput style={styles.input} placeholder="DPI" onChangeText={(dpi)=>this.setState({DPI:dpi})} keyboardType="number-pad" value={this.state.DPI}></TextInput>
                <Text>Nombre: {this.state.Nombre}</Text>
                <TextInput style={styles.input} placeholder="Nombres" onChangeText={(nombre)=>this.setState({Nombre:nombre})} value={this.state.Nombre}></TextInput>
                <Text>Saldo: {this.state.Saldo}</Text>
                <TextInput style={styles.input} placeholder="Saldo" keyboardType="numeric" onChangeText={(saldo)=>this.setState({Saldo:saldo})} value={String(this.state.Saldo)}></TextInput>
                <Button title="Agregar" onPress={()=>this.insertar()}></Button>
            </View>
        );
    }
}

export default nuevo;


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
  });

