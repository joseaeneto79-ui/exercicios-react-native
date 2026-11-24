import React from 'react'
import { View, StyleSheet } from 'react-native' 

import Contador from './components/Contador'
// import Botao from './components/Botao'
// import Titulo from './components/Titulo';
// import Aleatorio from './components/Aleatorio'
// import MinMax from './components/MinMax'
// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro'

export default () => (   
    <View style={styles.App}> 
        <Contador inicial={100} passo={13} />
        <Contador />
    </View>
    /*    <Botao />
    <Titulo principal="Cadastro Produto" 
    secundario="Tela de Cadastro do Produto" /> */
)

const styles = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
})