---
title: Começando com Node.js
date: 2019-03-23 07:02
slug: comecando-com-nodejs 
img: nodejs.jpg
readTime: 5
introduction: ""
---

Em abril de 2020 era para eu e o <a href="https://keppelen.dev/">Giovann</a> eramos para ter criado um curso pago de Node.JS e presencial aqui em BH, mas com a quarentena tivemos que cancelar, então eu comecei a pensar em como passar o meu conhecimeno para as pessoas de qualquer forma, vou fazer um artigo e vídeo de como programar em Node.js com o meu conhecimento. A única coisa que eu vou querer em troca é o feedback, se o conteúdo está ruim, bom, avançado ou muito básico, pode falar diretamente comigo que eu vou me comprometer a entregar o conteúdo da melhor forma mesmo sendo de uma forma gratuita.

# Introdução
A primeira coisa para quem nunca mexeu  com Node precisa saber é que Node não é uma linguagem ou biblioteca, Node.js é uma plataforma que permite você escrever javascript fora do browser, criar ferramentas de linha de comando, <a href="https://nwjs.io/">aplicativos desktop</a>, programação back-end, <a href="http://johnny-five.io/">criar aplicação para a internet das coisas</a>, etc.

Node.js foi construída em cima da V8  com intuito de facilitar o desenvolvimento de aplicações web de uma forma escaável.
No seu ano de criação em 2009. Na época foi uma revolução muito grande no mundo, fazendo com que simplificasse bastante o trabalho de criaçõa de tarefas assíncronas no servidor.

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
Se você for pensar em termos de ferramenta, quase todos os sites modernos hoje em dia utiliza node.js para dar `build` no front-end. 
Algumas empresas que utiliza node.js no back-end:

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
Abra sua ferramenta de linha de comando e digite `node`, nesse momento é possível usar o node para você brincar um pouco.
E agora digite `1+1`.
Em seguida vamos brincar mais um pouco:

```sh
$ const fs = require('fs');
$ fs.writeFileSync('teste.txt', 'ola', 'utf8');
$ fs.readFileSync('teste.txt', 'utf8');
```

O que acabamos de fazer aqui importei o pacote de file system (ele já é nativo do node) e estou utilizando os métodos writeFileSync e readFileSync, para criar um arquivo txt e ler um arquivo txt.

<!-- # Minhas primeira api com Node.js
Atualmente a forma atual de se desenvolver aplicações web usando node é criando API, que é a interface de programação de aplicação, ou seja você separa totalmente o front-end e o back-end
Express é um "minimalist web framework",  que foi feito para criar aplicações web sendo uma ótima solução para criação de api. -->
