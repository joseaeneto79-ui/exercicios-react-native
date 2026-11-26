import React from 'react'
import { View, StyleSheet } from 'react-native' 

import Diferenciar from './components/Diferenciar'
// import ContadorV2 from './components/contador/ContadorV2'
// import Pai from './components/indireta/Pai';
// import Pai from './components/direta/Pai';
// import Contador from './components/Contador'
// import Botao from './components/Botao'
// import Titulo from './components/Titulo';
// import Aleatorio from './components/Aleatorio'
// import MinMax from './components/MinMax'
// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro'

export default () => (   
    <View style={styles.App}>  
      <Diferenciar />
    {/*   
    <ContadorV2 />
    <Pai />
    <Pai />
     <Botao />
    <Contador inicial={100} passo={13} />
    <Contador />
    <Titulo principal="Cadastro Produto" 
    secundario="Tela de Cadastro do Produto" /> */}
    </View>
)

const styles = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
})