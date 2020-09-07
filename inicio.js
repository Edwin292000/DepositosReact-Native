import React, { Component } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';


class inicio extends Component{
    render(){
        const { navigation } = this.props;
        return(
            <View>
                <Text>Opciones:</Text>
                <View style={styles.botones}>
                    <Button title="Nueva persona" onPress={()=>navigation.navigate('Nuevo')}></Button>                
                </View>
                <View style={styles.botones}>
                    <Button title="Listado de personas" onPress={()=>navigation.navigate('Listado')}></Button>
                </View>
                
            </View>
        );
    }
}

export default inicio;

const styles = StyleSheet.create({
    botones:{
        margin:5
    }
  });