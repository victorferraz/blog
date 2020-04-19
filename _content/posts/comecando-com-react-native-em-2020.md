---
title: Começando com React Native em 2020
date: 2019-04-19 07:02
slug: comecando-com-react-native-em-2020 
img: react-native.jpg
readTime: 5
introduction: "A forma simples e fácil de começar a trabalhar com react native"
---


## História
Em 2015 facebook lança a primeira versão do React Native. Durante uma palestra técnica, Christopher Chedeau explicou que o Facebook já estava usando o React Native em produção.

## O que é
React Native é um framework que permite você desenvolver aplicativos nativos usando apenas Javascript. Se você já possui experiência com React, para começar a desenvolver utilizando react native é um pulo, e se você nunca trabalhou com o React não tem problema vou tentar ser o mais didático possível, na minha opinião eu considero a curva de aprendizado bem curta :)

A teoria para se trabalhar em React Native e React é bem parecido, a diferença que React Native trabalha com o seus próprios components por exemlo:  `<View>` é como se fosse uma `<div>` que trabalha como se fosse um container, já com componente `<Text>` é usado quando se escreve textos, para se usar esse componente precisa de utilizar um container `<View>`, não é possível ter `<Text>` diretamente sem uma `<View>`.


## Como comecei
Minha primeira experiência com React Native foi em 2016, eu trabalhei numa aplciaivo de umaa startup Uruguaia. Essa startup trabalhava com desenvolvendo de aplcativos sobre cultivos de plantas medicinais em casa. 
Em 2017, eu escrevi um artigo no <a hre="https://medium.com/@victorferraz/come%C3%A7ando-com-react-native-9e0717ca4587">medium</a>, de como começar com React Native.

Desde de 2016 muita coisa mudou e felizmente foi para melhor, o `expo` cresceu bastante e hoje em dia é a forma mais simples e fácil para começar a trabalhar com react native, além de ter uma grande gama de bibliotecas que é muito simples para começar a usar.

## Porque Expo?
Expo é uma plataforma e um framework para React Native. Expo é uma série de ferramentas e serviços construindo em volta da plataforma React Native que te ajuda a dar `build` e `deplou` e uma fácil interação com Ios, Android e Web Apps, com o mesmo código de fonte.

Alguns motivos para quem está começando a programar com React Native poderia começar com o expo:

 - É a forma mais fácil de se começar a trabalhar com React Native.
 - É possível ter meu aplicativo em web app, utilizando expo.
 - As pessoas precisam de motivação para trabalhar, em poucos minutos você ver seu aplicativo no emulador. O fator motivacional é algo muito importante. A maioria das pessoas desistem de aprender algo ainda quando se está  na parte de configuração e muito raramente você vai precisar de utilizar de algo que não tenha na biblioteca do `expo`.
 - Existe uma grande quantidade de bibliotecas
 - Você pode facilmente `ejetar` sua aplicação da mesma forma do `create-react-app`
 - Tem o `snack` é possível você fazer alguns testes num editor online e ver o que você fez rodando num simulador ou na web (dependendo do suporte do que você está usando não irá funcionar via web).

 ## Quando não utilizar expo?
 - Se você já tem anddroid e xcode instalado e configurado.
 - Se você já tem mais experiência com React Native.
 - Se você precisar de algo que a API do expo não dê suporte não aconselho a utilizar o mesmo, caso tenha dúvidas da uma olhada <a href="https://docs.expo.io/versions/v37.0.0/sdk/overview/">aqui</a>. 

## Como saber se o SDK do expo da suporte na plataforma que eu estou trabalhando?
Ao entrar dentro do SDK que você está trabalhando, por exemplo o <a href="https://docs.expo.io/versions/v37.0.0/sdk/map-view/">maps</a> ele tem suporte para Android e IOS mas não da suporte para Web.


## Mão na massa;
A primeira coisa que você precisa fazer é instalar o node, se ainda não instalou escrevi alguns passos <a href="/comecando-com-node"> aqui</a>

Em seguinda instale o expo globalmente:
```sh
$ npm install -g expo-cli
```

Aos usuários de `mac`, instale o watchman, essa é uma ferramenta desenvolvida pelo facebook para escutar as alterações feitas, é extremamente recomendado instala-lo para que o React Native possa ter uma melhor performance.

```sh
$  brew install watchman
```

Vamos criar o projeto

```sh
$  expo init my-fist-project --npm
```

Escolha a opção blank
Entre na pasta e excute o app:

```sh
$ npm start
```

Deverá abrir um browser, com oções que você poderá escolher entre simulador e device, no meu caso eu escolhi abrir
um simulador do IOS.


Agora vamos instalar o maps


```sh
$ expo install react-native-maps
```

Vamos criar o nosso mapa

```sh
import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
```

Agora aparecerá um mapa no seu app. 

Vamos fazer outro exemplo mas dessa vez vamos fazer uma requisição da api, usando a api que eu achei do corona virus
esse api possui os dados bem atualizados.

```
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

export default function App() {
  const [cases, setCases] = useState(null);


  useEffect( () => {
    request();
  },[cases]);

  const request = async () => {
    const response = await fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil');
    const parsed = await response.json();
    setCases(parsed.data.recovered);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.paragraph}>Casos Curados</Text>
        <Text style={styles.paragraph}>{cases}</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
```

