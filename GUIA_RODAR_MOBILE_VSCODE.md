# Guia para Rodar o App Mobile no VS Code

Este guia explica como configurar e executar o aplicativo móvel (React Native com Expo) utilizando o Visual Studio Code.

## Pré-requisitos

*   **Node.js** instalado (versão 14 ou superior).
*   **VS Code** instalado.
*   **Expo Go** instalado no seu celular (se for testar em dispositivo físico).
*   **Android Studio** (para emulador Android) ou **Xcode** (para simulador iOS - apenas Mac), caso queira rodar em emuladores.

## Passo a Passo

### 1. Abrir o Projeto

Abra o VS Code e vá em **File > Open Folder...** (Arquivo > Abrir Pasta...). Selecione a pasta raiz do repositório ou a pasta específica do app mobile: `Projeto-APP-MOVIEIS-giftnow-login-screen-14198169824004445000`.

### 2. Backend (Importante!)

Para que o aplicativo funcione corretamente (login, lista de lojas, etc.), o backend deve estar rodando.

1.  Abra um terminal no VS Code (`Ctrl + '`).
2.  Entre na pasta do backend: `cd backend`
3.  Inicie o servidor: `npm start`
4.  Deixe este terminal aberto rodando o servidor.

### 3. Instalar Dependências do App

Abra um **novo** terminal no VS Code (clique no `+` na aba do terminal).

1.  Navegue até a pasta do app (se ainda não estiver nela):
    ```bash
    cd Projeto-APP-MOVIEIS-giftnow-login-screen-14198169824004445000
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```

### 4. Rodar o Aplicativo

No mesmo terminal (dentro da pasta do app), execute:

```bash
npm start
```
ou
```bash
npx expo start
```

Isso iniciará o servidor de desenvolvimento do Metro Bundler e exibirá um QR Code no terminal.

### 5. Visualizar o App

Você tem algumas opções:

*   **No Celular (Físico):**
    *   Abra o app **Expo Go** (disponível na App Store ou Google Play).
    *   Escaneie o QR Code exibido no terminal.
    *   *Nota:* Seu celular e o computador devem estar na mesma rede Wi-Fi.

*   **No Emulador Android:**
    *   Com o emulador aberto, pressione a tecla `a` no terminal do VS Code.

*   **No Simulador iOS (apenas Mac):**
    *   Pressione a tecla `i` no terminal do VS Code.

## Dicas de Solução de Problemas

*   **Erro de conexão com o backend:**
    *   Se estiver usando **Android Emulator**, o endereço do backend configurado é `http://10.0.2.2:3000`.
    *   Se estiver usando **Celular Físico**, você precisará alterar o arquivo `src/services/api.js` e colocar o IP local do seu computador (ex: `http://192.168.0.10:3000`) em vez de `localhost`.
*   **Porta em uso:** Se receber erro de porta, certifique-se de que não há outros processos node rodando.
