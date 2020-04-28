import React, {useState, useEffect, useMemo, useRef} from 'react';
//import AsyncStorage from '@react-native-community/async-storage'; //Para quem não estiver usando o Expo
import { AsyncStorage } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {

  const [nome, setNome] = useState('Samuel');
  const [input, setInput] = useState('');
  const nomeInput = useRef(null); //Será usado como referência em algum lugar. Aqui no caso está sendo usado no TextInput

  function alteraNome(){
    setNome(input);
    setInput('');
  }

  function novoNome(){
    nomeInput.current.focus(); //Colocará o foco no TextInput(que foi referenciado). Recebe o foco e abre ao teclado
  }

  function loginWithFacebook(){
    alert('Vai logar com o Facebook');
  }

  /* Component DidUpdate
  Toda vez que a State nome for alterada esta função será executada
  Esta função irá salvar a State nome no AsyncStorage */
  useEffect(() => {
    async function saveStorage(){
      await AsyncStorage.setItem('nomeSalvoAS', nome);
    }
    saveStorage();

    //DidUmounted. Caso queira usar o DidUmounted basta descomentar abaixo
    //return() => { };

  }, [nome]);

  /* Component DidMount
  Todas as vezes que o componente for montado na tela esta função será executada
  Esta função recupera o valos do State nome salvo no asysncStorage */
  useEffect(() => {
    async function getStorage(){
      const nomeStorage = await AsyncStorage.getItem('nomeSalvoAS');
      if (nomeStorage !== null) {
        setNome(nomeStorage);
      }
    }
    getStorage();
  }, []);

  /* O useMemo vai evitar que a ação de contar os caracteres do State nome seja contado toda vez que o valor de nome for alterado
  Ele só fará a contagem quando houver uma chamada do setNome, que é na ação do botão */
  const quantLetrasNome = useMemo(() => {
    //console.log('Fez a contagem das letras do nome');
    return nome.length;
  }, [nome]);
  /*Descomentar para testar*/
  //const quantLetrasNome = nome.length;
  //console.log('Mudou');

  return (
    <View style={styles.container}>

      <TextInput
        placeholder='Digite o seu nome...'
        value={input}
        onChangeText={(texto) => setInput(texto)}
        style={styles.textoAux}
        ref={nomeInput}
      />

      <TouchableOpacity style={styles.btn} onPress={() => {
          input != '' ? alteraNome() : alert('Por favor, digite um nome');
        }}>
        <Text style={styles.btnText}>Alterar nome</Text>
      </TouchableOpacity>

      <Text style={styles.texto}>{nome}</Text>

      <Text style={styles.textoAux}>Tem {quantLetrasNome} {quantLetrasNome > 1 ? 'letras' : 'letra'}</Text>

      <TouchableOpacity onPress={novoNome}>
        <Text style={styles.btnNovoNomeText}>Novo nome</Text>
      </TouchableOpacity>

      <Ionicons name="md-checkmark-circle" size={32} color="green" />

      <FontAwesome.Button name="facebook" backgroundColor="#3b5998" onPress={loginWithFacebook}>
        Login with Facebook
      </FontAwesome.Button>

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
    alignItems: 'center',
    marginTop: 5
  },
  btn: {
    backgroundColor: '#222',
    alignItems: 'center',
    marginTop: 10
  },
  btnText: {
    color: '#fff',
    fontSize: 22
  },
  textoAux: {
    marginTop: 5,
    fontSize: 20
  },
  btnNovoNomeText: {
    color: '#222',
    fontSize: 16,
    marginTop: 10
  }
});
