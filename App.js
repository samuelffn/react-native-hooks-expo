import React, {useState, useEffect} from 'react';
//import AsyncStorage from '@react-native-community/async-storage'; //Para quem não estiver usando o Expo
import { AsyncStorage } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {

  const [nome, setNome] = useState('Samuel');
  const [input, setInput] = useState('');

  function alteraNome(){
    setNome(input);
    setInput('');
  }

  //Component DidUpdate
  //Toda vez que a State nome for alterada esta função será executada
  //Esta função irá salvar a State nome no AsyncStorage
  useEffect(() => {
    async function saveStorage(){
      await AsyncStorage.setItem('nomeSalvoAS', nome);
    }
    saveStorage();

    //DidUmounted
    //return() => { };

  }, [nome]);

  //Component DidMount
  //Todas as vezes que o componente for montado na tela esta função será executada
  //Esta função recupera o valos do State nome salvo no asysncStorage
  useEffect(() => {
    async function getStorage(){
      const nomeStorage = await AsyncStorage.getItem('nomeSalvoAS');
      if (nomeStorage !== null) {
        setNome(nomeStorage);
      }
    }
    getStorage();
  }, []);

  return (
    <View style={styles.container}>

      <TextInput
        placeholder='Digite o seu nome...'
        value={input}
        onChangeText={(texto) => setInput(texto)}
      />

      <TouchableOpacity style={styles.btn} onPress={() => {
          input != '' ? alteraNome() : alert('Digite um nome!');
        }}>
        <Text style={styles.btnText}>Alterar nome</Text>
      </TouchableOpacity>

      <Text style={styles.texto}>{nome}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 80
  },
  texto: {
    fontSize: 35,
    alignItems: 'center'
  },
  btn: {
    backgroundColor: '#222',
    alignItems: 'center'
  },
  btnText: {
    color: '#fff'
  }
});
