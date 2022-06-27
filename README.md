<h1 align="center"> ⚡ Projeto Heat ⚡</h1>

![capa do projeto](/.github/CapaProjeto.png)

## Descrição do projeto

### Projeto para simular uma pré estreia de um evento

## Projeto feito

- React native TS (Mobile)
- React TS (Web)
-  Node TS (Back-end)

## 📝 Requisitos para inciar o projeto

- <a href="https://git-scm.com">Git</a>
- <a href="https://code.visualstudio.com">Vscode</a>
- <a href="https://expo.dev">Expo</a>
- <a href="https://pt-br.reactjs.org/docs/getting-started.html">React </a>
- <a href="https://yarnpkg.com/cli/install">Yarn</a>

## 🎲 Iniciando o projeto

### Clonando o projeto

```bash
# Clonando o projeto
$ git clone https://github.com/HeatDoWhile
```

### Para iniciar o projeto voce precisa entra em alguma pasta 'mobile', 'server', 'web'

```bash
# Entrando o projeto
$ cd "projeto"

# Instalando as dependências do projeto
$ yarn
```

## Projeto no server

```bash
# Iniciando o projeto no server
$ yarn dev

# Criando o banco sqlite
$ yarn prisma migration:run

# O server ira rodar na porta http://localhost:3333
```


### Rotas do server

-  POST | http://localhost:3333/authenticate
-  POST | http://localhost:3333/messages
-  GET | http://localhost:3333/messages/last3
-  GET | http://localhost:3333/profle

## Projeto no mobile

```bash
# Iniciando o projeto no mobile
$ expo start
```

![gif do projeto](/.github/ExempleMobile.gif)

## Projeto no web

```bash
# Iniciando o projeto
$ yarn dev

# O web ira rodar na porta http://localhost:3000
```


![gif do projeto no front-end web](/.github/ExempleWeb.gif)

## Dependências usadas no mobile

- [x] expo
- [x] axios
- [x] iphone x helper
- [x] react native svg
- [x] socket.io

## Dependências usadas na web

- [x] axios
- [x] react-icons
- [x] sass
- [x] socket.io
- [x] typescript
- [x] vite

## Dependências usadas no back end

- [x] @prisma/client
- [x] axios
- [x] dotenv
- [x] express
- [x] jsonwebtoken
- [x] socket.io
