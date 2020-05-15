# react-native-hooks-expo  
React Native - Estudando React Hooks em um projeto com Expo  
Projeto usado para aprendizado e consultas  
Estudo de alguns componentes do React Hooks: useState, useEffect, useMemo, useRef  

**Informações**  
Instalar o Expo Cli: npm install -g expo-cli  
Criando um projeto com Expo: expo init nome_do_projeto  
Entra na pasta do projeto criado: cd novo_projeto  
Executando o projeto: npm start ou yarn start  
  
**Testando em um dispositivo**  
O projeto pode ser testado em qualquer dispositivo Android ou iOs.  
Instale o aplicativo do Expo no dispositivo, abra o Expo ou a câmera e aponte para o QR Code que é gerado após 
executar o comando npm start no terminal.
  
**Dependências que serão instaladas ao longo do projeto**  
AsyncStorage  
Juntamente com o useEffect será usado o AsyncStorage, que servirá para guardar informações do estado de alguma variável.  
Se estiver usando o Expo, basta utilizar este import: import { AsyncStorage } from 'react-native';  
Link de referência: https://docs.expo.io/versions/latest/react-native/asyncstorage/  
Para quem não está usando o Expo será ncessário instalar a dependência do AsyncStorage  
Comando para instalação: yarn add @react-native-community/async-storage  
Link de referência: https://github.com/react-native-community/async-storage  
  
Icons  
Utilização da biblioteca de links para botões, telas, etc.  
Se estiver usando o Expo, basta utilizar este import:import { Ionicons } from '@expo/vector-icons';  
Link de referência: https://docs.expo.io/versions/latest/guides/icons/  
Se não estiver usando o Expo será necessário instalar a dependência.  
Comando: npm install --save react-native-vector-icons  
Para que se possa usar recursos nativos é necessário criar um link: react-native link  
Se o projeto já tiver sido criado será necessário reinstalar o aplicativo.  
Link de referência: https://github.com/oblador/react-native-vector-icons  
Usar o import: import Icon from 'react-native-vector-icons/FontAwesome';  


  
