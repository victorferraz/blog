---
title: Começando com Node.js
date: 2019-03-23 07:02
slug: comecando-com-nodejs 
img: nodejs.jpg
readTime: 5
introduction: "Segundo Stackoverflow Node.JS é uma  das tecnologias mais utilizadas, nesse artigo vou contar um pouco como começar a trabalhar com o node e qual o motivo da sua popularidade."
---

Em abril de 2020 era para eu e o <a href="https://keppelen.dev/">Giovanni</a> termos criado um curso pago de Node.JS aqui em BH, mas com a quarentena tivemos que cancelar, então eu comecei a pensar em como passar o meu conhecimeno para as pessoas de qualquer forma. Dedici então em fazer um artigo com um vídeo de apoio de como como começar a programar em Node.js. Se possível gostaria de receber feedback, sobre o conteúdo. 😀

# Introdução
A primeira coisa para quem nunca mexeu  com Node precisa saber é que Node não é uma linguagem ou biblioteca, Node.js é uma plataforma. Permite você escrever javascript fora do browser, criar ferramentas de linha de comando, <a href="https://nwjs.io/">aplicativos desktop</a>, programação back-end, <a href="http://johnny-five.io/">criar aplicação para a internet das coisas</a>, etc.

Node.js foi construída em cima da V8  com intuito de facilitar o desenvolvimento de aplicações web de uma forma escaável.
No seu ano de criação em 2009, foi uma revolução muito grande no mundo, fazendo com que simplificasse bastante o trabalho de criaçõa de tarefas assíncronas no servidor.

# Vantagens
- É simples escalar a aplicação e não precisa de tanto recurso comparado com as linguagens tradicionais.
- Mesma linguagem no front-end e back-end
- É uma das tecnologias mais utilizadas segundo o <a href="https://insights.stackoverflow.com/survey/2019#technology-_-other-frameworks-libraries-and-tools">stackoverflow</a>
- A curva de aprendizado é menor se o desenvolvedor já trabalha com javascript no servidor.

# Alguns casos de uso comum
- Ferramentas de linha de comando
É muito difícil hoje em dia não utilizar node.js para dar "build" nas aplicações front-end.

- Chat realtime
A grande popularização do Node,js foi através da sua simplicidade de como criar chat utilizanado a fomosa biblioteca utilizando
<a href="https://socket.io/">socket.io</a>

- Api web
Criação de api utilizando Node.js é muito simpels e bastante utilizada.



# Quem usa?
Algumas empresas que utilizam node.js no back-end:

- Netflix
- Ebay
- AliExpress
- PayPal
- Groupon
- Linkedin
- Yahoo

# Npm
Node package manager é o gerenciador de dependencias do Node.js, é possível controlar e gerenciar suas depencia de uma forma
muito simpels.

# Instalação 
Existe diversas formas de instalar o node, no caso do mac eu gosto de utilizar <a href="https://brew.sh/">homebrew</a>.

```sh
$ brew install node
```

no windows você pode baixar o <a href="https://nodejs.org/en/download/current/">instalador</a> 
ou você pode instalar usando o <a href="https://chocolatey.org/">chocolatey</a>

```sh
$ cinst nodejs.install
```

# Hello World
Abra sua ferramenta de linha de comando e digite `node`, nesse momento é possível usar o node para  brincar um pouco.
E agora digite `1+1`.
Em seguida vamos brincar mais um pouco:

```sh
$ const fs = require('fs');
$ fs.writeFileSync('teste.txt', 'ola', 'utf8');
$ fs.readFileSync('teste.txt', 'utf8');
```
![alt text](/print-curso-node.png)

O que acabamos de fazer aqui importei o pacote de file system (ele já é nativo do node) e estou utilizando os métodos writeFileSync e readFileSync, para criar um arquivo txt e ler um arquivo txt.


Agora vamos criar um projeto, a primeira coisa a se fazer é criar um arquivo package.json, esse arquivo é responsável por gerenciar todas as nossas dependências do projeto, para isso iremos utilizar o <a href="https://www.npmjs.com/">npm</a>.

```sh
$ mkdir nodejs-curso
$ cd nodejs-curso
$ npm init -y
```

Em seguida vamos instalar express.

```sh
$ npm install express
```

Agora vamos criar nossa primeira rota:

```sh
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => { 
  res.send('olá node!')
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
```

No método `get` o parâmetro `req` é um objeto relativo a requisição, e res é um objeto relativo a resposta, nesse exemplo estamos enviando `olá mundo` como resposta.

Agora abre seu browser http://localhost:3000 e veja que você verá  `olá node` no seu browser :)
Se você tem alguma dúvida, feedback ou se não funcionou, deixa uma mensagem ou me procure nas redes sociais :)

Obrigado




<iframe src="https://player.vimeo.com/video/409465050" width="100%" height="600" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

Me conta se deu certo ai :)

<!-- # Minhas primeira api com Node.js
Atualmente a forma atual de se desenvolver aplicações web usando node é criando API, que é a interface de programação de aplicação, ou seja você separa totalmente o front-end e o back-end
Express é um "minimalist web framework",  que foi feito para criar aplicações web sendo uma ótima solução para criação de api. -->
