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

  render(){
        return( 
            <View>
                
            </View>
        )
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