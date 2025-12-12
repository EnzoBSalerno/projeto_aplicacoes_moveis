# GiftNow

O **GiftNow** é um aplicativo mobile focado na experiência de envio de presentes. Com uma interface moderna e intuitiva, inspirada em apps de delivery, o GiftNow conecta você a diversas lojas de diferentes departamentos — como floriculturas, chocolaterias, lojas de brinquedos e eletrônicos — permitindo escolher o presente ideal e enviá-lo diretamente para a pessoa querida com entrega rápida.

Este projeto foi desenvolvido para resolver a dificuldade de comprar e enviar presentes de última hora ou para quem busca praticidade, reunindo opções variadas em um só lugar e oferecendo uma experiência de compra fluida e agradável.

---

## Funcionalidades principais

- **Cadastro e Login:** Criação de conta simples e acesso seguro.
- **Navegação por Categorias:** Explore lojas organizadas por departamentos (Flores, Chocolates, Bebidas, Kids, etc.).
- **Lista de Lojas:** Visualize lojas recomendadas com avaliação, tempo de entrega e taxas.
- **Detalhes da Loja e Produtos:** Navegue pelos produtos de uma loja e adicione itens ao carrinho.
- **Formas de Pagamento:** Gerenciamento de cartões de crédito e opção de pagamento via Pix.
- **Checkout Simples:** Fluxo de finalização de pedido claro e rápido.
- **Endereços:** Cadastro de múltiplos endereços de entrega (casa, trabalho, casa do namorado(a), etc.).
- **Club GiftNow:** Área exclusiva com benefícios como cupons de desconto e entrega grátis em pedidos selecionados.
- **Perfil do Usuário:** Gerenciamento de dados pessoais, pedidos anteriores e configurações.

---

## Tecnologias utilizadas

Este projeto foi construído utilizando as seguintes tecnologias e bibliotecas:

- **[React Native](https://reactnative.dev/):** Framework principal para desenvolvimento mobile híbrido.
- **[Expo](https://expo.dev/):** Plataforma para facilitar o desenvolvimento, build e deploy de apps React Native.
- **[React Navigation](https://reactnavigation.org/):** Gerenciamento de rotas e navegação (Stack e Bottom Tabs).
- **[@expo/vector-icons](https://icons.expo.fyi/):** Biblioteca de ícones vetoriais.
- **Context API / Hooks:** Gerenciamento de estado da aplicação.

---

## Pré-requisitos

Antes de começar, certifique-se de que você possui as seguintes ferramentas instaladas em sua máquina:

- **Node.js** (Recomendamos a versão LTS, v18 ou superior).
- **Gerenciador de pacotes:** `npm` (que vem com o Node) ou `yarn`.
- **Git:** Para clonar o repositório.
- **Ambiente de desenvolvimento mobile:**
  - Se utilizar **Expo Go** (recomendado para iniciantes): Um celular com o app Expo Go instalado (Android ou iOS).
  - Se utilizar **Emuladores**:
    - **Android Studio** configurado com um dispositivo virtual (AVD).
    - **Xcode** (apenas para macOS) para simulador iOS.

---

## Instalação do projeto

Siga os passos abaixo para configurar o projeto localmente:

1.  **Clonar o repositório:**
    Abra seu terminal e execute o comando abaixo para baixar o código fonte:
    ```bash
    git clone https://github.com/seu-usuario/GiftNow.git
    ```

2.  **Acessar a pasta do projeto:**
    Entre no diretório que acabou de ser criado:
    ```bash
    cd GiftNow
    ```

3.  **Instalar as dependências:**
    Execute o comando para baixar todas as bibliotecas necessárias listadas no `package.json`:
    ```bash
    npm install
    # ou, se preferir usar yarn:
    yarn
    ```

---

## Como rodar o projeto

### Rodando com Expo

Esta é a forma mais simples de testar o aplicativo.

1.  Inicie o servidor de desenvolvimento:
    ```bash
    npx expo start
    ```

2.  Uma lista de opções aparecerá no terminal, junto com um QR Code.
    - **Para rodar no seu celular:** Abra o app **Expo Go**, escaneie o QR Code (no Android) ou use a câmera (no iOS).
    - **Para rodar no emulador Android:** Pressione a tecla `a` no terminal.
    - **Para rodar no simulador iOS:** Pressione a tecla `i` no terminal (requer macOS).

### Rodando com React Native CLI (Ejetado ou Bare Workflow)

Caso o projeto tenha sido configurado sem o Expo Go ou você tenha ejetado:

1.  Para Android:
    ```bash
    npx react-native run-android
    ```

2.  Para iOS (macOS apenas):
    ```bash
    npx react-native run-ios
    ```

---

## Estrutura de pastas (resumo)

Abaixo, uma visão geral da organização dos arquivos no projeto:

```
src/
├── components/   # Componentes reutilizáveis (Botões, Inputs, Cards de Loja, etc.)
├── screens/      # Telas da aplicação (Login, Home, Perfil, Carrinho, etc.)
├── navigation/   # Configuração das rotas (Stack Navigator, Tab Navigator)
├── services/     # Arquivos de comunicação com APIs ou lógica de negócio complexa
├── data/         # Dados mockados (simulação de banco de dados) para testes locais
├── constants/    # Constantes globais (Cores, Fontes, URLs, Configurações)
└── utils/        # Funções utilitárias e helpers
```

---

## Configuração de ambiente

Se o projeto utilizar variáveis de ambiente (para chaves de API, URLs de backend, etc.), siga estes passos:

1.  Crie um arquivo chamado `.env` na raiz do projeto.
2.  Defina as variáveis conforme o modelo (geralmente existe um `.env.example`). Exemplo:
    ```env
    API_BASE_URL=https://api.giftnow.com.br
    GOOGLE_MAPS_KEY=sua_chave_aqui
    ```
    *(Nota: Como este projeto utiliza dados mockados atualmente, esta etapa pode ser opcional.)*

---

## Como usar o aplicativo (fluxo do usuário)

Aqui está um guia rápido para testar as principais funcionalidades:

1.  **Abrir o app GiftNow:** Ao iniciar, você verá a tela de Login.
2.  **Criar conta ou Login:** Digite suas credenciais ou clique em "Criar conta" para se registrar.
3.  **Explorar a Home:** Na tela principal, navegue pelas categorias (Flores, Chocolates...) ou escolha uma loja recomendada.
4.  **Selecionar Presente:** Toque em uma loja para ver seus produtos (simulado).
5.  **Carrinho:** Adicione itens e prossiga para o checkout.
6.  **Forma de Pagamento:** Na tela de checkout, selecione um cartão salvo, adicione um novo ou escolha pagar com Pix.
7.  **Confirmar Pedido:** Revise o resumo (valores, frete) e confirme o envio.
8.  **Acompanhamento:** (Futuro) Você poderá ver o status do envio na aba "Pedidos".

Acesse também a aba **Perfil** para gerenciar seus endereços e visualizar benefícios do **Club GiftNow**.

---

## Scripts disponíveis

No arquivo `package.json`, você encontrará os principais scripts para desenvolvimento:

-   `npm start`: Inicia o servidor do Metro Bundler (Expo).
-   `npm run android`: Atalho para abrir o app no emulador Android.
-   `npm run ios`: Atalho para abrir o app no simulador iOS.
-   `npm test`: Roda a suíte de testes (se configurada).
-   `npm run lint`: Verifica erros de estilo e padronização no código.

---

## Problemas comuns e soluções

### 1. "Port already in use" ou erro de conexão
Se o Metro Bundler não iniciar pois a porta 8081 está ocupada:
-   **Solução:** Encerre processos Node em execução ou rode o comando:
    ```bash
    kill -9 $(lsof -t -i:8081)
    ```
    Ou tente iniciar em outra porta: `npx expo start --port 8082`.

### 2. Cache antigo causando erros estranhos
Às vezes, alterações não refletem ou ocorrem erros de módulo não encontrado.
-   **Solução:** Limpe o cache ao iniciar:
    ```bash
    npx expo start --clear
    ```

### 3. Erro no Android Emulator
O emulador não abre ou o app fecha sozinho.
-   **Solução:** Abra o Android Studio, vá em "Device Manager", faça um "Wipe Data" no emulador e tente novamente. Certifique-se também de que as variáveis de ambiente do Android SDK (ANDROID_HOME) estão configuradas corretamente.

---

## Contribuição

Contribuições são sempre bem-vindas! Se você deseja melhorar o GiftNow:

1.  Faça um **Fork** do projeto.
2.  Crie uma nova Branch para sua feature (`git checkout -b feature/MinhaFeature`).
3.  Faça o Commit das suas alterações (`git commit -m 'Adiciona nova feature incrível'`).
4.  Faça o Push para a Branch (`git push origin feature/MinhaFeature`).
5.  Abra um **Pull Request**.

---

## Licença

Este projeto está licenciado sob a licença **MIT**. Consulte o arquivo `LICENSE` para mais detalhes.

---

## Contato

Caso tenha dúvidas ou sugestões, entre em contato:

-   **Desenvolvedor:** Jules
-   **LinkedIn:** [linkedin.com/in/jules-dev](https://linkedin.com)
-   **E-mail:** contato@giftnow.com
